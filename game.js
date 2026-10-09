/* ==========================================
   SETTINGS
   ========================================== */

const STOPS_CLUE = 3;    // wrong guesses before the next stops are named
const COLOUR_CLUE = 8;   // wrong guesses before the line colours show
const MAX_GUESSES = 10;
const CLOSE_STOPS = 5;   // guesses this many stops away or fewer show yellow

// Map geometry, in SVG viewBox units (see index.html)
const MAP = {
    width: 400,
    centreX: 200,
    centreY: 135,
    arm: 160,         // distance from the centre to each end of a line
    armVertical: 85   // furthest a line may reach up or down
};

const LINE_COLOURS = {
    "Bakerloo": "#B26300",
    "Central": "#DC241F",
    "Circle": "#FFD329",
    "District": "#007D32",
    "Elizabeth": "#6950A1",
    "Hammersmith & City": "#F4A9BE",
    "Jubilee": "#A1A5A7",
    "Metropolitan": "#9B0058",
    "Northern": "#000000",
    "Piccadilly": "#0019A8",
    "Victoria": "#0098D8",
    "Waterloo & City": "#93CEBA"
};

const HIDDEN_COLOUR = "#111111";


/* ==========================================
   GAME STATE
   ========================================== */

let guesses = [];       // wrong guesses, in order
let result = null;      // null while playing, then "won" or "lost"
let matches = [];       // stations currently shown in the dropdown
let activeMatch = 0;


/* ==========================================
   TODAY'S PUZZLE
   ========================================== */

// Today's date in London, so every player's puzzle changes at
// midnight UK time (GMT or BST) wherever they are
function getToday() {

    const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/London",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).formatToParts(new Date());

    const part = type => parts.find(p => p.type === type).value;

    return `${part("year")}-${part("month")}-${part("day")}`;
}

// Whole days since 1 Jan 1970, so dates can be counted and compared
function dayNumberOf(date) {

    const [year, month, day] = date.split("-").map(Number);

    return Math.round(Date.UTC(year, month - 1, day) / 86400000);
}

// Day number back to "YYYY-MM-DD"
function dateOfDay(dayNumber) {
    return new Date(dayNumber * 86400000).toISOString().slice(0, 10);
}

/*
 * Each day gets a station picked at random, but the same one for
 * every player: the stations are shuffled into a fixed order (a seeded
 * shuffle) and each day takes the next one. Once all of them have been
 * used, a new round starts with a different order.
 */
const PUZZLE_STATIONS = Object.keys(puzzles).sort();
const FIRST_DAY = dayNumberOf("2026-10-09");   // launch day: day 1 of the first round

// A repeatable random number generator (mulberry32): same seed, same numbers
function seededRandom(seed) {

    return () => {
        seed = seed + 0x6D2B79F5 | 0;
        let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}

function stationOrder(round) {

    const order = [...PUZZLE_STATIONS];
    const random = seededRandom(1916 + round);   // 1916: Johnston's typeface

    // Fisher–Yates shuffle
    for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
    }

    return order;
}

function stationForDate(date) {

    const day = dayNumberOf(date) - FIRST_DAY;
    const count = PUZZLE_STATIONS.length;
    const round = Math.floor(day / count);

    return stationOrder(round)[day - round * count];
}

/*
 * Testing tools only work when the game is opened from your own
 * computer, not on the live website, so players can't skip ahead:
 *   ?date=YYYY-MM-DD plays that day, ?station=Name plays that station
 */
const TESTING =
    window.location.protocol === "file:" ||
    ["localhost", "127.0.0.1"].includes(window.location.hostname);

const params = new URLSearchParams(TESTING ? window.location.search : "");
const requestedDate = params.get("date");
const requestedStation = params.get("station");

const puzzleDate = /^\d{4}-\d{2}-\d{2}$/.test(requestedDate || "")
    ? requestedDate
    : getToday();

const answer = puzzles[requestedStation]
    ? requestedStation
    : stationForDate(puzzleDate);

const puzzle = { answer, lines: puzzles[answer] };

if (!STATIONS.includes(puzzle.answer)) {
    STATIONS.push(puzzle.answer);
}


/* ==========================================
   DISTANCE TO THE ANSWER
   ========================================== */

/*
 * Fewest stops from the answer to every station, found by stepping
 * outwards through CONNECTIONS (connections.js) one stop at a time.
 * Changing lines doesn't count as a stop.
 */
function stopsFrom(start) {

    const stops = { [start]: 0 };
    let current = [start];

    while (current.length > 0) {

        const next = [];

        current.forEach(station => {
            (CONNECTIONS[station] || []).forEach(neighbour => {
                if (!(neighbour in stops)) {
                    stops[neighbour] = stops[station] + 1;
                    next.push(neighbour);
                }
            });
        });

        current = next;
    }

    return stops;
}

const stopsToAnswer = stopsFrom(puzzle.answer);

function isClose(station) {
    return stopsToAnswer[station] <= CLOSE_STOPS;
}


/* ==========================================
   BACKGROUND COLOUR
   ========================================== */

// One Underground line colour per day, in this order
const BACKGROUND_LINES = [
    "Central", "Piccadilly", "District", "Bakerloo", "Victoria",
    "Metropolitan", "Circle", "Jubilee", "Northern",
    "Hammersmith & City", "Waterloo & City"
];

function getBackgroundLine(date) {
    return BACKGROUND_LINES[dayNumberOf(date) % BACKGROUND_LINES.length];
}

// Follows the test button's date when there is one, otherwise today
const backgroundLine = getBackgroundLine(puzzleDate);
const backgroundColour = LINE_COLOURS[backgroundLine];

document.documentElement.style.setProperty("--page", backgroundColour);

// White text is hard to read on the light lines (Circle, Jubilee...)
document.documentElement.style.setProperty(
    "--on-page",
    isLightColour(backgroundColour) ? "#111111" : "#ffffff"
);

function isLightColour(hex) {

    const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255);

    // Perceived brightness, 0 (black) to 1 (white)
    return 0.299 * r + 0.587 * g + 0.114 * b > 0.6;
}
document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", backgroundColour);


/* ==========================================
   HTML ELEMENTS
   ========================================== */

const map = document.getElementById("tube-map");
const answerArea = document.getElementById("answer-area");
const input = document.getElementById("answer-input");
const suggestions = document.getElementById("suggestions");
const resultRow = document.getElementById("result");
const guessList = document.getElementById("guesses");
const testButton = document.getElementById("test-button");


/* ==========================================
   RULES
   Keep the numbers in the rules in step with the settings
   ========================================== */

const RULE_NUMBERS = {
    max: MAX_GUESSES,
    close: CLOSE_STOPS,
    stops: STOPS_CLUE,
    colours: COLOUR_CLUE
};

document.querySelectorAll("[data-rule]").forEach(span => {
    span.textContent = RULE_NUMBERS[span.dataset.rule];
});


/* ==========================================
   LANDING SCREEN
   ========================================== */

const landing = document.getElementById("landing");
const playButton = document.getElementById("play-button");

// "2026-10-09" -> "Friday 9 October 2026"
function formatDate(date) {

    const [year, month, day] = date.split("-").map(Number);

    return new Date(year, month - 1, day).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

document.getElementById("landing-date").textContent = formatDate(puzzleDate);

playButton.addEventListener("click", () => {

    document.body.classList.remove("on-landing");
    landing.classList.add("leaving");

    // Remove it once the fade has finished
    setTimeout(() => {
        landing.hidden = true;
    }, 300);

    // The page can scroll now, which may change its width
    fitTitle();
    placeLabels();
});


/* ==========================================
   TEST BUTTON
   ========================================== */

// Only shown when testing on your own computer
testButton.hidden = !TESTING;

testButton.textContent = `${puzzleDate} · ${backgroundLine} · Next day ▸`;

testButton.addEventListener("click", () => {

    const next = dateOfDay(dayNumberOf(puzzleDate) + 1);

    window.location.search = `?date=${next}`;
});


/* ==========================================
   DRAW MAP
   ========================================== */

const SVG_NS = "http://www.w3.org/2000/svg";

function addSvg(tag, attributes, parent) {

    const element = document.createElementNS(SVG_NS, tag);

    Object.entries(attributes).forEach(([name, value]) => {
        element.setAttribute(name, value);
    });

    parent.appendChild(element);

    return element;
}

function drawMap() {

    const showStops = result !== null || guesses.length >= STOPS_CLUE;
    const showColours = result !== null || guesses.length >= COLOUR_CLUE;

    // Keep existing elements so colour changes animate
    if (!map.hasChildNodes()) {
        buildMap();
    }

    puzzle.lines.forEach((line, index) => {

        const colour = showColours
            ? LINE_COLOURS[line.name] || HIDDEN_COLOUR
            : HIDDEN_COLOUR;

        map.querySelector(`#line-${index}`).style.stroke = colour;
        const stop = map.querySelector(`#stop-${index}`);
        stop.style.fill = colour;
        stop.classList.toggle("hidden", !showStops);   // dots appear with the stop names

    });

    // Hidden with opacity, not display, so the text can be measured
    map.querySelectorAll(".station-label").forEach(label => {
        label.classList.toggle("hidden", !showStops);
    });
}

// Gap between the centres of lines drawn side by side
const LINE_SPACING = 12;

function buildMap() {

    const lineLayer = addSvg("g", {}, map);
    const stopLayer = addSvg("g", {}, map);
    const labelLayer = addSvg("g", {}, map);

    const { centreX, centreY, arm } = MAP;

    // Lines heading the same way (or exactly opposite) share a track
    // direction, so they're drawn side by side like on the tube map
    const groups = {};
    puzzle.lines.forEach(line => {
        const key = line.angle % 180;
        (groups[key] = groups[key] || []).push(line);
    });

    const labelled = new Set();
    let widestOffset = 0;

    puzzle.lines.forEach((line, index) => {

        const group = groups[line.angle % 180];
        const offset = (group.indexOf(line) - (group.length - 1) / 2) * LINE_SPACING;
        widestOffset = Math.max(widestOffset, Math.abs(offset));

        // Steep lines are shortened so their stops stay on the map
        const radians = line.angle * Math.PI / 180;
        const length = Math.min(
            arm,
            MAP.armVertical / Math.abs(Math.sin(radians))
        );

        // SVG's y axis points down, so flip the sine
        const dx = Math.round(Math.cos(radians) * length);
        const dy = Math.round(-Math.sin(radians) * length);

        // Sideways shift for side-by-side lines, at right angles to the track
        const track = (line.angle % 180) * Math.PI / 180;
        const shiftX = Math.sin(track) * offset;
        const shiftY = Math.cos(track) * offset;

        const stopX = centreX + dx;
        const stopY = centreY + dy;

        // A line that ends here only runs out towards its next stop
        addSvg("line", {
            id: `line-${index}`,
            class: "tube-line",
            x1: (line.end ? centreX : centreX - dx) + shiftX,
            y1: (line.end ? centreY : centreY - dy) + shiftY,
            x2: stopX + shiftX,
            y2: stopY + shiftY
        }, lineLayer);

        addSvg("circle", {
            id: `stop-${index}`,
            class: "stop",
            cx: stopX + shiftX,
            cy: stopY + shiftY,
            r: 5   // same width as the line (stroke-width 10 in style.css)
        }, stopLayer);

        // Side-by-side lines going to the same stop share one label
        if (labelled.has(line.stop)) {
            return;
        }
        labelled.add(line.stop);

        // Labels go above stops that point upwards, below the rest
        const label = addSvg("text", {
            class: "station-label",
            "text-anchor": "middle",
            "data-x": stopX,
            "data-y": dy < -1 ? stopY - 20 : stopY + 32,
            "data-direction": dy < -1 ? -1 : 1
        }, labelLayer);

        label.textContent = line.stop;

    });

    // Grow the station circle so it covers several side-by-side lines
    addSvg("circle", {
        class: "central-station",
        cx: centreX,
        cy: centreY,
        r: Math.max(20, widestOffset + 10)
    }, map);

    placeLabels();
}

/*
 * Centre each label on its stop, keep it inside the map, and move it
 * further out if it would overlap a label already placed. Measuring
 * needs the real font, so this runs again once fonts load and when the
 * screen size changes (labels are bigger on phones).
 */
function placeLabels() {

    const placed = [];
    const margin = 8;
    const mapHeight = 260;   // viewBox height in index.html

    map.querySelectorAll(".station-label").forEach(label => {

        const half = label.getComputedTextLength() / 2;
        const clampX = x => Math.min(Math.max(x, margin + half), MAP.width - margin - half);

        const x = clampX(Number(label.dataset.x));
        const y = Number(label.dataset.y);
        const direction = Number(label.dataset.direction);

        const moveTo = (newX, newY) => {
            label.setAttribute("x", newX);
            label.setAttribute("y", newY);
            return label.getBBox();
        };

        // The measured box includes spare space above and below the
        // letters, so allow it to poke a few units past the map edge
        const fits = box =>
            box.y >= -4 &&
            box.y + box.height <= mapHeight + 4 &&
            !placed.some(other => overlaps(box, other));

        // Try the usual spot, then a line further out, then a line in,
        // and at each height also try sliding sideways out of the way
        const step = moveTo(x, y).height + 2;
        const heights = [y, y + direction * step, y - direction * step, y + 2 * direction * step];

        for (const tryY of heights) {

            let box = moveTo(x, tryY);
            if (fits(box)) {
                placed.push(box);
                return;
            }

            const other = placed.find(o => overlaps(box, o));
            if (other) {
                const goLeft = box.x + box.width / 2 < other.x + other.width / 2;
                const slideX = goLeft
                    ? x - (box.x + box.width - other.x + 6)
                    : x + (other.x + other.width - box.x + 6);

                box = moveTo(clampX(slideX), tryY);
                if (fits(box)) {
                    placed.push(box);
                    return;
                }
            }
        }

        // Nothing fitted cleanly: fall back to the usual spot
        placed.push(moveTo(x, y));
    });
}

function overlaps(a, b) {
    return a.x < b.x + b.width + 4 &&
        b.x < a.x + a.width + 4 &&
        a.y < b.y + b.height &&
        b.y < a.y + a.height;
}


/* ==========================================
   DROPDOWN
   ========================================== */

// "kings cross" should match "King's Cross St. Pancras"
function simplify(text) {
    return text.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function updateSuggestions() {

    const query = simplify(input.value);

    if (query === "") {
        hideSuggestions();
        return;
    }

    matches = STATIONS
        .filter(station => !guesses.includes(station))
        .filter(station => simplify(station).includes(query))
        .sort((a, b) =>
            simplify(b).startsWith(query) - simplify(a).startsWith(query)
        )
        .slice(0, 8);

    activeMatch = 0;
    renderSuggestions();
}

function renderSuggestions() {

    suggestions.innerHTML = "";

    if (matches.length === 0) {
        const item = document.createElement("li");
        item.className = "empty";
        item.textContent = "No matching stations";
        suggestions.appendChild(item);
    }

    matches.forEach((station, index) => {

        const item = document.createElement("li");

        item.textContent = station;
        item.setAttribute("role", "option");

        if (index === activeMatch) {
            item.className = "active";
            item.setAttribute("aria-selected", "true");
        }

        // mousedown fires before the input loses focus
        item.addEventListener("mousedown", event => {
            event.preventDefault();
            makeGuess(station);
        });

        suggestions.appendChild(item);
    });

    suggestions.hidden = false;
    input.setAttribute("aria-expanded", "true");
}

function hideSuggestions() {
    matches = [];
    suggestions.hidden = true;
    input.setAttribute("aria-expanded", "false");
}


/* ==========================================
   GUESS
   ========================================== */

function makeGuess(station) {

    if (result !== null) {
        return;
    }

    input.value = "";
    hideSuggestions();

    if (station === puzzle.answer) {
        result = "won";
    } else {
        guesses.push(station);

        if (guesses.length >= MAX_GUESSES) {
            result = "lost";
        }
    }

    render();

    // Short pause so the final map reveal is seen before the pop-up
    if (result !== null) {
        setTimeout(showEndPopup, 800);
    }
}


/* ==========================================
   END-OF-GAME POP-UP
   ========================================== */

const popup = document.getElementById("end-popup");

function showEndPopup() {

    const totalGuesses = guesses.length + 1;   // wrong guesses plus the right one

    popup.classList.toggle("won", result === "won");

    document.getElementById("popup-station").textContent = puzzle.answer;

    if (result === "won") {
        document.getElementById("popup-heading").textContent = "Congratulations!";
        document.getElementById("popup-message").textContent =
            `You got it in ${totalGuesses} ${totalGuesses === 1 ? "guess" : "guesses"}.`;
    } else {
        document.getElementById("popup-heading").textContent = "The answer was";
        document.getElementById("popup-message").textContent =
            "Better luck tomorrow!";
    }

    popup.showModal();
}

document.getElementById("popup-close")
    .addEventListener("click", () => popup.close());

// Clicking the dark area outside the pop-up closes it
popup.addEventListener("click", event => {
    if (event.target === popup) {
        popup.close();
    }
});


/* ==========================================
   RENDER
   ========================================== */

function render() {

    drawMap();

    // Once the game ends the answer replaces the input box
    answerArea.hidden = result !== null;
    resultRow.hidden = result === null;

    if (result === "won") {
        resultRow.className = "row correct";
        resultRow.textContent = puzzle.answer;
    } else if (result === "lost") {
        resultRow.className = "row revealed";
        resultRow.textContent = `It was ${puzzle.answer}`;
    }

    guessList.innerHTML = "";

    // Most recent guess at the top
    [...guesses].reverse().forEach(station => {
        const row = document.createElement("div");
        row.className = isClose(station) ? "row close" : "row far";
        row.textContent = station;
        guessList.appendChild(row);
    });
}


/* ==========================================
   INPUT EVENTS
   ========================================== */

input.addEventListener("input", updateSuggestions);

input.addEventListener("focus", updateSuggestions);

input.addEventListener("blur", hideSuggestions);

input.addEventListener("keydown", event => {

    if (matches.length === 0) {
        return;
    }

    if (event.key === "ArrowDown") {
        event.preventDefault();
        activeMatch = (activeMatch + 1) % matches.length;
        renderSuggestions();
    }

    else if (event.key === "ArrowUp") {
        event.preventDefault();
        activeMatch = (activeMatch - 1 + matches.length) % matches.length;
        renderSuggestions();
    }

    else if (event.key === "Enter") {
        event.preventDefault();
        makeGuess(matches[activeMatch]);
    }

    else if (event.key === "Escape") {
        hideSuggestions();
    }
});



/* ==========================================
   TITLE
   ========================================== */

const titleStack = document.getElementById("title-stack");
const titleText = document.getElementById("title-text");
const titleRepeats = document.getElementById("title-repeats");

let repeatStep = 0;       // scroll distance that reveals one more line
let revealQueued = false;

/*
 * Scale the title so it spans the screen, edge gap to edge gap, then
 * make enough hidden copies underneath to fill the rest of the screen.
 */
function fitTitle() {

    const gap = 12;
    const screenWidth = document.documentElement.clientWidth;

    titleStack.style.fontSize = "100px";

    const title = titleText.parentElement;

    // Include the left padding that balances the letter-spacing
    const width = titleText.getBoundingClientRect().width +
        parseFloat(getComputedStyle(title).paddingLeft);
    const size = 100 * (screenWidth - gap * 2) / width;

    titleStack.style.fontSize = `${size}px`;

    const lineHeight = title.offsetHeight + size * 0.08;   // matches CSS margin

    document.documentElement.style.setProperty(
        "--title-height",
        `${title.offsetHeight}px`
    );

    const spaceBelow =
        window.innerHeight - titleStack.getBoundingClientRect().top - title.offsetHeight;
    const copies = Math.max(0, Math.floor(spaceBelow / lineHeight));

    titleRepeats.innerHTML = "";

    for (let i = 0; i < copies; i++) {
        const line = document.createElement("div");
        line.className = "title-repeat";
        line.textContent = titleText.textContent;   // same words as the title
        titleRepeats.appendChild(line);
    }

    // Reveal a line for every half line-height scrolled
    repeatStep = lineHeight / 2;

    revealLines();
}

// Show one more copy for each step scrolled down; hide them going up
function revealLines() {

    revealQueued = false;

    const count = Math.floor(window.scrollY / repeatStep);

    [...titleRepeats.children].forEach((line, index) => {
        line.classList.toggle("shown", index < count);
    });
}

// Run at most once per frame however fast scroll events arrive
function queueReveal() {
    if (!revealQueued) {
        revealQueued = true;
        requestAnimationFrame(revealLines);
    }
}


render();
fitTitle();

document.fonts.ready.then(() => {
    fitTitle();
    placeLabels();
});

window.addEventListener("scroll", queueReveal, { passive: true });

window.addEventListener("resize", () => {
    fitTitle();
    placeLabels();
});
