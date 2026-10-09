/*
 * One puzzle per station: the lines that stop there.
 *
 * name:  the tube line
 * angle: direction (degrees) the line heads towards its next stop,
 *        rounded to 45° like the tube map: 0 = right, 90 = up,
 *        180 = left, 270 = down
 * stop:  that next stop (revealed as a clue)
 * end:   true when the line ends at this station
 *
 * Generated from TfL's open data (api.tfl.gov.uk, Line Route Sequence)
 * on 2026-10-09. Powered by TfL Open Data.
 * game.js picks one of these at random each day.
 */

const puzzles = {
    "Acton Town": [
        { name: "District", angle: 135, stop: "Ealing Common" },
        { name: "Piccadilly", angle: 315, stop: "Turnham Green" }
    ],
    "Aldgate": [
        { name: "Circle", angle: 135, stop: "Liverpool Street" },
        { name: "Metropolitan", angle: 135, stop: "Liverpool Street", end: true }
    ],
    "Aldgate East": [
        { name: "District", angle: 225, stop: "Tower Hill" },
        { name: "Hammersmith & City", angle: 180, stop: "Liverpool Street" }
    ],
    "Alperton": [
        { name: "Piccadilly", angle: 315, stop: "Park Royal" }
    ],
    "Amersham": [
        { name: "Metropolitan", angle: 0, stop: "Chalfont & Latimer", end: true }
    ],
    "Angel": [
        { name: "Northern", angle: 180, stop: "King's Cross St. Pancras" }
    ],
    "Archway": [
        { name: "Northern", angle: 135, stop: "Highgate" }
    ],
    "Arnos Grove": [
        { name: "Piccadilly", angle: 315, stop: "Bounds Green" }
    ],
    "Arsenal": [
        { name: "Piccadilly", angle: 90, stop: "Finsbury Park" }
    ],
    "Baker Street": [
        { name: "Bakerloo", angle: 180, stop: "Marylebone" },
        { name: "Circle", angle: 225, stop: "Edgware Road" },
        { name: "Hammersmith & City", angle: 225, stop: "Edgware Road" },
        { name: "Jubilee", angle: 315, stop: "Bond Street" },
        { name: "Metropolitan", angle: 135, stop: "Finchley Road" }
    ],
    "Balham": [
        { name: "Northern", angle: 90, stop: "Clapham South" }
    ],
    "Bank": [
        { name: "Central", angle: 45, stop: "Liverpool Street" },
        { name: "Northern", angle: 270, stop: "London Bridge" },
        { name: "Waterloo & City", angle: 225, stop: "Waterloo", end: true }
    ],
    "Barbican": [
        { name: "Circle", angle: 0, stop: "Moorgate" },
        { name: "Hammersmith & City", angle: 0, stop: "Moorgate" },
        { name: "Metropolitan", angle: 0, stop: "Moorgate" }
    ],
    "Barking": [
        { name: "District", angle: 180, stop: "East Ham" },
        { name: "Hammersmith & City", angle: 180, stop: "East Ham", end: true }
    ],
    "Barkingside": [
        { name: "Central", angle: 90, stop: "Fairlop" }
    ],
    "Barons Court": [
        { name: "District", angle: 180, stop: "Hammersmith" },
        { name: "Piccadilly", angle: 0, stop: "Earl's Court" }
    ],
    "Battersea Power Station": [
        { name: "Northern", angle: 0, stop: "Nine Elms", end: true }
    ],
    "Bayswater": [
        { name: "Circle", angle: 225, stop: "Notting Hill Gate" },
        { name: "District", angle: 225, stop: "Notting Hill Gate" }
    ],
    "Becontree": [
        { name: "District", angle: 0, stop: "Dagenham Heathway" }
    ],
    "Belsize Park": [
        { name: "Northern", angle: 315, stop: "Chalk Farm" }
    ],
    "Bermondsey": [
        { name: "Jubilee", angle: 135, stop: "London Bridge" }
    ],
    "Bethnal Green": [
        { name: "Central", angle: 225, stop: "Liverpool Street" }
    ],
    "Blackfriars": [
        { name: "Circle", angle: 0, stop: "Mansion House" },
        { name: "District", angle: 0, stop: "Mansion House" }
    ],
    "Blackhorse Road": [
        { name: "Victoria", angle: 180, stop: "Tottenham Hale" }
    ],
    "Bond Street": [
        { name: "Central", angle: 0, stop: "Oxford Circus" },
        { name: "Jubilee", angle: 135, stop: "Baker Street" }
    ],
    "Borough": [
        { name: "Northern", angle: 45, stop: "London Bridge" }
    ],
    "Boston Manor": [
        { name: "Piccadilly", angle: 45, stop: "Northfields" }
    ],
    "Bounds Green": [
        { name: "Piccadilly", angle: 135, stop: "Arnos Grove" }
    ],
    "Bow Road": [
        { name: "District", angle: 180, stop: "Mile End" },
        { name: "Hammersmith & City", angle: 180, stop: "Mile End" }
    ],
    "Brent Cross": [
        { name: "Northern", angle: 0, stop: "Golders Green" }
    ],
    "Brixton": [
        { name: "Victoria", angle: 135, stop: "Stockwell", end: true }
    ],
    "Bromley-by-Bow": [
        { name: "District", angle: 0, stop: "West Ham" },
        { name: "Hammersmith & City", angle: 0, stop: "West Ham" }
    ],
    "Buckhurst Hill": [
        { name: "Central", angle: 270, stop: "Woodford" }
    ],
    "Burnt Oak": [
        { name: "Northern", angle: 315, stop: "Colindale" }
    ],
    "Caledonian Road": [
        { name: "Piccadilly", angle: 270, stop: "King's Cross St. Pancras" }
    ],
    "Camden Town": [
        { name: "Northern", angle: 315, stop: "Euston" }
    ],
    "Canada Water": [
        { name: "Jubilee", angle: 180, stop: "Bermondsey" }
    ],
    "Canary Wharf": [
        { name: "Jubilee", angle: 180, stop: "Canada Water" }
    ],
    "Canning Town": [
        { name: "Jubilee", angle: 90, stop: "West Ham" }
    ],
    "Cannon Street": [
        { name: "Circle", angle: 180, stop: "Mansion House" },
        { name: "District", angle: 180, stop: "Mansion House" }
    ],
    "Canons Park": [
        { name: "Jubilee", angle: 270, stop: "Queensbury" }
    ],
    "Chalfont & Latimer": [
        { name: "Metropolitan", angle: 315, stop: "Chorleywood" }
    ],
    "Chalk Farm": [
        { name: "Northern", angle: 315, stop: "Camden Town" }
    ],
    "Chancery Lane": [
        { name: "Central", angle: 180, stop: "Holborn" }
    ],
    "Charing Cross": [
        { name: "Bakerloo", angle: 0, stop: "Embankment" },
        { name: "Northern", angle: 0, stop: "Embankment" }
    ],
    "Chesham": [
        { name: "Metropolitan", angle: 315, stop: "Chalfont & Latimer", end: true }
    ],
    "Chigwell": [
        { name: "Central", angle: 315, stop: "Grange Hill" }
    ],
    "Chiswick Park": [
        { name: "District", angle: 0, stop: "Turnham Green" }
    ],
    "Chorleywood": [
        { name: "Metropolitan", angle: 135, stop: "Chalfont & Latimer" }
    ],
    "Clapham Common": [
        { name: "Northern", angle: 45, stop: "Clapham North" }
    ],
    "Clapham North": [
        { name: "Northern", angle: 45, stop: "Stockwell" }
    ],
    "Clapham South": [
        { name: "Northern", angle: 270, stop: "Balham" }
    ],
    "Cockfosters": [
        { name: "Piccadilly", angle: 0, stop: "Oakwood", end: true }
    ],
    "Colindale": [
        { name: "Northern", angle: 135, stop: "Burnt Oak" }
    ],
    "Colliers Wood": [
        { name: "Northern", angle: 180, stop: "South Wimbledon" }
    ],
    "Covent Garden": [
        { name: "Piccadilly", angle: 45, stop: "Holborn" }
    ],
    "Croxley": [
        { name: "Metropolitan", angle: 270, stop: "Moor Park" }
    ],
    "Dagenham East": [
        { name: "District", angle: 180, stop: "Dagenham Heathway" }
    ],
    "Dagenham Heathway": [
        { name: "District", angle: 180, stop: "Becontree" }
    ],
    "Debden": [
        { name: "Central", angle: 180, stop: "Loughton" }
    ],
    "Dollis Hill": [
        { name: "Jubilee", angle: 0, stop: "Willesden Green" }
    ],
    "Ealing Broadway": [
        { name: "Central", angle: 0, stop: "West Acton", end: true },
        { name: "District", angle: 315, stop: "Ealing Common", end: true }
    ],
    "Ealing Common": [
        { name: "District", angle: 315, stop: "Acton Town" },
        { name: "Piccadilly", angle: 315, stop: "Acton Town" }
    ],
    "Earl's Court": [
        { name: "District", angle: 0, stop: "Gloucester Road" },
        { name: "Piccadilly", angle: 180, stop: "Barons Court" }
    ],
    "East Acton": [
        { name: "Central", angle: 135, stop: "North Acton" }
    ],
    "East Finchley": [
        { name: "Northern", angle: 135, stop: "Finchley Central" }
    ],
    "East Ham": [
        { name: "District", angle: 0, stop: "Barking" },
        { name: "Hammersmith & City", angle: 0, stop: "Barking" }
    ],
    "East Putney": [
        { name: "District", angle: 90, stop: "Putney Bridge" }
    ],
    "Eastcote": [
        { name: "Metropolitan", angle: 0, stop: "Rayners Lane" },
        { name: "Piccadilly", angle: 0, stop: "Rayners Lane" }
    ],
    "Edgware": [
        { name: "Northern", angle: 315, stop: "Burnt Oak", end: true }
    ],
    "Edgware Road": [
        { name: "Bakerloo", angle: 225, stop: "Paddington" },
        { name: "Circle", angle: 45, stop: "Baker Street" },
        { name: "District", angle: 225, stop: "Paddington", end: true },
        { name: "Hammersmith & City", angle: 45, stop: "Baker Street" }
    ],
    "Elephant & Castle": [
        { name: "Bakerloo", angle: 135, stop: "Lambeth North", end: true },
        { name: "Northern", angle: 225, stop: "Kennington" }
    ],
    "Elm Park": [
        { name: "District", angle: 180, stop: "Dagenham East" }
    ],
    "Embankment": [
        { name: "Bakerloo", angle: 315, stop: "Waterloo" },
        { name: "Circle", angle: 270, stop: "Westminster" },
        { name: "District", angle: 270, stop: "Westminster" },
        { name: "Northern", angle: 315, stop: "Waterloo" }
    ],
    "Epping": [
        { name: "Central", angle: 270, stop: "Theydon Bois", end: true }
    ],
    "Euston": [
        { name: "Northern", angle: 0, stop: "King's Cross St. Pancras" },
        { name: "Victoria", angle: 0, stop: "King's Cross St. Pancras" }
    ],
    "Euston Square": [
        { name: "Circle", angle: 45, stop: "King's Cross St. Pancras" },
        { name: "Hammersmith & City", angle: 45, stop: "King's Cross St. Pancras" },
        { name: "Metropolitan", angle: 45, stop: "King's Cross St. Pancras" }
    ],
    "Fairlop": [
        { name: "Central", angle: 270, stop: "Barkingside" }
    ],
    "Farringdon": [
        { name: "Circle", angle: 135, stop: "King's Cross St. Pancras" },
        { name: "Hammersmith & City", angle: 135, stop: "King's Cross St. Pancras" },
        { name: "Metropolitan", angle: 135, stop: "King's Cross St. Pancras" }
    ],
    "Finchley Central": [
        { name: "Northern", angle: 315, stop: "East Finchley" }
    ],
    "Finchley Road": [
        { name: "Jubilee", angle: 315, stop: "Swiss Cottage" },
        { name: "Metropolitan", angle: 315, stop: "Baker Street" }
    ],
    "Finsbury Park": [
        { name: "Piccadilly", angle: 270, stop: "Arsenal" },
        { name: "Victoria", angle: 270, stop: "Highbury & Islington" }
    ],
    "Fulham Broadway": [
        { name: "District", angle: 225, stop: "Parsons Green" }
    ],
    "Gants Hill": [
        { name: "Central", angle: 0, stop: "Newbury Park" }
    ],
    "Gloucester Road": [
        { name: "Circle", angle: 135, stop: "High Street Kensington" },
        { name: "District", angle: 180, stop: "Earl's Court" },
        { name: "Piccadilly", angle: 180, stop: "Earl's Court" }
    ],
    "Golders Green": [
        { name: "Northern", angle: 180, stop: "Brent Cross" }
    ],
    "Goldhawk Road": [
        { name: "Circle", angle: 270, stop: "Hammersmith" },
        { name: "Hammersmith & City", angle: 270, stop: "Hammersmith" }
    ],
    "Goodge Street": [
        { name: "Northern", angle: 315, stop: "Tottenham Court Road" }
    ],
    "Grange Hill": [
        { name: "Central", angle: 135, stop: "Chigwell" }
    ],
    "Great Portland Street": [
        { name: "Circle", angle: 180, stop: "Baker Street" },
        { name: "Hammersmith & City", angle: 180, stop: "Baker Street" },
        { name: "Metropolitan", angle: 180, stop: "Baker Street" }
    ],
    "Green Park": [
        { name: "Jubilee", angle: 135, stop: "Bond Street" },
        { name: "Piccadilly", angle: 45, stop: "Piccadilly Circus" },
        { name: "Victoria", angle: 90, stop: "Oxford Circus" }
    ],
    "Greenford": [
        { name: "Central", angle: 180, stop: "Northolt" }
    ],
    "Gunnersbury": [
        { name: "District", angle: 0, stop: "Turnham Green" }
    ],
    "Hainault": [
        { name: "Central", angle: 270, stop: "Fairlop" }
    ],
    "Hammersmith": [
        { name: "Circle", angle: 90, stop: "Goldhawk Road", end: true },
        { name: "District", angle: 0, stop: "Barons Court" },
        { name: "Hammersmith & City", angle: 90, stop: "Goldhawk Road", end: true },
        { name: "Piccadilly", angle: 180, stop: "Turnham Green" }
    ],
    "Hampstead": [
        { name: "Northern", angle: 315, stop: "Belsize Park" }
    ],
    "Hanger Lane": [
        { name: "Central", angle: 0, stop: "North Acton" }
    ],
    "Harlesden": [
        { name: "Bakerloo", angle: 135, stop: "Stonebridge Park" }
    ],
    "Harrow & Wealdstone": [
        { name: "Bakerloo", angle: 315, stop: "Kenton", end: true }
    ],
    "Harrow-on-the-Hill": [
        { name: "Metropolitan", angle: 180, stop: "North Harrow" }
    ],
    "Hatton Cross": [
        { name: "Piccadilly", angle: 180, stop: "Heathrow Terminals 2 & 3" }
    ],
    "Heathrow Terminal 4": [
        { name: "Piccadilly", angle: 45, stop: "Hatton Cross" }
    ],
    "Heathrow Terminal 5": [
        { name: "Piccadilly", angle: 0, stop: "Heathrow Terminals 2 & 3", end: true }
    ],
    "Heathrow Terminals 2 & 3": [
        { name: "Piccadilly", angle: 0, stop: "Hatton Cross" }
    ],
    "Hendon Central": [
        { name: "Northern", angle: 315, stop: "Brent Cross" }
    ],
    "High Barnet": [
        { name: "Northern", angle: 315, stop: "Totteridge & Whetstone", end: true }
    ],
    "High Street Kensington": [
        { name: "Circle", angle: 90, stop: "Notting Hill Gate" },
        { name: "District", angle: 270, stop: "Earl's Court" }
    ],
    "Highbury & Islington": [
        { name: "Victoria", angle: 225, stop: "King's Cross St. Pancras" }
    ],
    "Highgate": [
        { name: "Northern", angle: 315, stop: "Archway" }
    ],
    "Hillingdon": [
        { name: "Metropolitan", angle: 45, stop: "Ickenham" },
        { name: "Piccadilly", angle: 45, stop: "Ickenham" }
    ],
    "Holborn": [
        { name: "Central", angle: 180, stop: "Tottenham Court Road" },
        { name: "Piccadilly", angle: 225, stop: "Covent Garden" }
    ],
    "Holland Park": [
        { name: "Central", angle: 0, stop: "Notting Hill Gate" }
    ],
    "Holloway Road": [
        { name: "Piccadilly", angle: 45, stop: "Arsenal" }
    ],
    "Hornchurch": [
        { name: "District", angle: 180, stop: "Elm Park" }
    ],
    "Hounslow Central": [
        { name: "Piccadilly", angle: 0, stop: "Hounslow East" }
    ],
    "Hounslow East": [
        { name: "Piccadilly", angle: 180, stop: "Hounslow Central" }
    ],
    "Hounslow West": [
        { name: "Piccadilly", angle: 180, stop: "Hatton Cross" }
    ],
    "Hyde Park Corner": [
        { name: "Piccadilly", angle: 45, stop: "Green Park" }
    ],
    "Ickenham": [
        { name: "Metropolitan", angle: 225, stop: "Hillingdon" },
        { name: "Piccadilly", angle: 225, stop: "Hillingdon" }
    ],
    "Kennington": [
        { name: "Northern", angle: 90, stop: "Waterloo" }
    ],
    "Kensal Green": [
        { name: "Bakerloo", angle: 0, stop: "Queen's Park" }
    ],
    "Kensington (Olympia)": [
        { name: "District", angle: 315, stop: "Earl's Court", end: true }
    ],
    "Kentish Town": [
        { name: "Northern", angle: 270, stop: "Camden Town" }
    ],
    "Kenton": [
        { name: "Bakerloo", angle: 315, stop: "South Kenton" }
    ],
    "Kew Gardens": [
        { name: "District", angle: 45, stop: "Gunnersbury" }
    ],
    "Kilburn": [
        { name: "Jubilee", angle: 180, stop: "Willesden Green" }
    ],
    "Kilburn Park": [
        { name: "Bakerloo", angle: 315, stop: "Maida Vale" }
    ],
    "King's Cross St. Pancras": [
        { name: "Circle", angle: 225, stop: "Euston Square" },
        { name: "Hammersmith & City", angle: 225, stop: "Euston Square" },
        { name: "Metropolitan", angle: 225, stop: "Euston Square" },
        { name: "Northern", angle: 180, stop: "Euston" },
        { name: "Piccadilly", angle: 90, stop: "Caledonian Road" },
        { name: "Victoria", angle: 180, stop: "Euston" }
    ],
    "Kingsbury": [
        { name: "Jubilee", angle: 270, stop: "Wembley Park" }
    ],
    "Knightsbridge": [
        { name: "Piccadilly", angle: 225, stop: "South Kensington" }
    ],
    "Ladbroke Grove": [
        { name: "Circle", angle: 225, stop: "Latimer Road" },
        { name: "Hammersmith & City", angle: 225, stop: "Latimer Road" }
    ],
    "Lambeth North": [
        { name: "Bakerloo", angle: 90, stop: "Waterloo" }
    ],
    "Lancaster Gate": [
        { name: "Central", angle: 0, stop: "Marble Arch" }
    ],
    "Latimer Road": [
        { name: "Circle", angle: 45, stop: "Ladbroke Grove" },
        { name: "Hammersmith & City", angle: 45, stop: "Ladbroke Grove" }
    ],
    "Leicester Square": [
        { name: "Northern", angle: 90, stop: "Tottenham Court Road" },
        { name: "Piccadilly", angle: 180, stop: "Piccadilly Circus" }
    ],
    "Leyton": [
        { name: "Central", angle: 45, stop: "Leytonstone" }
    ],
    "Leytonstone": [
        { name: "Central", angle: 225, stop: "Leyton" }
    ],
    "Liverpool Street": [
        { name: "Central", angle: 225, stop: "Bank" },
        { name: "Circle", angle: 180, stop: "Moorgate" },
        { name: "Hammersmith & City", angle: 180, stop: "Moorgate" },
        { name: "Metropolitan", angle: 180, stop: "Moorgate" }
    ],
    "London Bridge": [
        { name: "Jubilee", angle: 315, stop: "Bermondsey" },
        { name: "Northern", angle: 90, stop: "Bank" }
    ],
    "Loughton": [
        { name: "Central", angle: 270, stop: "Buckhurst Hill" }
    ],
    "Maida Vale": [
        { name: "Bakerloo", angle: 135, stop: "Kilburn Park" }
    ],
    "Manor House": [
        { name: "Piccadilly", angle: 225, stop: "Finsbury Park" }
    ],
    "Mansion House": [
        { name: "Circle", angle: 180, stop: "Blackfriars" },
        { name: "District", angle: 180, stop: "Blackfriars" }
    ],
    "Marble Arch": [
        { name: "Central", angle: 0, stop: "Bond Street" }
    ],
    "Marylebone": [
        { name: "Bakerloo", angle: 0, stop: "Baker Street" }
    ],
    "Mile End": [
        { name: "Central", angle: 45, stop: "Stratford" },
        { name: "District", angle: 0, stop: "Bow Road" },
        { name: "Hammersmith & City", angle: 0, stop: "Bow Road" }
    ],
    "Mill Hill East": [
        { name: "Northern", angle: 315, stop: "Finchley Central", end: true }
    ],
    "Monument": [
        { name: "Circle", angle: 0, stop: "Tower Hill" },
        { name: "District", angle: 0, stop: "Tower Hill" }
    ],
    "Moor Park": [
        { name: "Metropolitan", angle: 90, stop: "Croxley" }
    ],
    "Moorgate": [
        { name: "Circle", angle: 0, stop: "Liverpool Street" },
        { name: "Hammersmith & City", angle: 0, stop: "Liverpool Street" },
        { name: "Metropolitan", angle: 0, stop: "Liverpool Street" },
        { name: "Northern", angle: 270, stop: "Bank" }
    ],
    "Morden": [
        { name: "Northern", angle: 90, stop: "South Wimbledon", end: true }
    ],
    "Mornington Crescent": [
        { name: "Northern", angle: 135, stop: "Camden Town" }
    ],
    "Neasden": [
        { name: "Jubilee", angle: 135, stop: "Wembley Park" }
    ],
    "Newbury Park": [
        { name: "Central", angle: 90, stop: "Barkingside" }
    ],
    "Nine Elms": [
        { name: "Northern", angle: 45, stop: "Kennington" }
    ],
    "North Acton": [
        { name: "Central", angle: 315, stop: "East Acton" }
    ],
    "North Ealing": [
        { name: "Piccadilly", angle: 270, stop: "Ealing Common" }
    ],
    "North Greenwich": [
        { name: "Jubilee", angle: 180, stop: "Canary Wharf" }
    ],
    "North Harrow": [
        { name: "Metropolitan", angle: 0, stop: "Harrow-on-the-Hill" }
    ],
    "North Wembley": [
        { name: "Bakerloo", angle: 90, stop: "South Kenton" }
    ],
    "Northfields": [
        { name: "Piccadilly", angle: 225, stop: "Boston Manor" }
    ],
    "Northolt": [
        { name: "Central", angle: 0, stop: "Greenford" }
    ],
    "Northwick Park": [
        { name: "Metropolitan", angle: 180, stop: "Harrow-on-the-Hill" }
    ],
    "Northwood": [
        { name: "Metropolitan", angle: 90, stop: "Moor Park" }
    ],
    "Northwood Hills": [
        { name: "Metropolitan", angle: 135, stop: "Northwood" }
    ],
    "Notting Hill Gate": [
        { name: "Central", angle: 180, stop: "Holland Park" },
        { name: "Circle", angle: 270, stop: "High Street Kensington" },
        { name: "District", angle: 270, stop: "High Street Kensington" }
    ],
    "Oakwood": [
        { name: "Piccadilly", angle: 270, stop: "Southgate" }
    ],
    "Old Street": [
        { name: "Northern", angle: 270, stop: "Moorgate" }
    ],
    "Osterley": [
        { name: "Piccadilly", angle: 45, stop: "Boston Manor" }
    ],
    "Oval": [
        { name: "Northern", angle: 45, stop: "Kennington" }
    ],
    "Oxford Circus": [
        { name: "Bakerloo", angle: 315, stop: "Piccadilly Circus" },
        { name: "Central", angle: 180, stop: "Bond Street" },
        { name: "Victoria", angle: 270, stop: "Green Park" }
    ],
    "Paddington": [
        { name: "Bakerloo", angle: 45, stop: "Edgware Road" },
        { name: "Circle", angle: 45, stop: "Edgware Road" },
        { name: "District", angle: 45, stop: "Edgware Road" },
        { name: "Hammersmith & City", angle: 45, stop: "Edgware Road" }
    ],
    "Park Royal": [
        { name: "Piccadilly", angle: 135, stop: "Alperton" }
    ],
    "Parsons Green": [
        { name: "District", angle: 45, stop: "Fulham Broadway" }
    ],
    "Perivale": [
        { name: "Central", angle: 180, stop: "Greenford" }
    ],
    "Piccadilly Circus": [
        { name: "Bakerloo", angle: 135, stop: "Oxford Circus" },
        { name: "Piccadilly", angle: 225, stop: "Green Park" }
    ],
    "Pimlico": [
        { name: "Victoria", angle: 135, stop: "Victoria" }
    ],
    "Pinner": [
        { name: "Metropolitan", angle: 315, stop: "North Harrow" }
    ],
    "Plaistow": [
        { name: "District", angle: 225, stop: "West Ham" },
        { name: "Hammersmith & City", angle: 225, stop: "West Ham" }
    ],
    "Preston Road": [
        { name: "Metropolitan", angle: 315, stop: "Wembley Park" }
    ],
    "Putney Bridge": [
        { name: "District", angle: 270, stop: "East Putney" }
    ],
    "Queen's Park": [
        { name: "Bakerloo", angle: 180, stop: "Kensal Green" }
    ],
    "Queensbury": [
        { name: "Jubilee", angle: 90, stop: "Canons Park" }
    ],
    "Queensway": [
        { name: "Central", angle: 180, stop: "Notting Hill Gate" }
    ],
    "Ravenscourt Park": [
        { name: "District", angle: 0, stop: "Hammersmith" }
    ],
    "Rayners Lane": [
        { name: "Metropolitan", angle: 180, stop: "Eastcote" },
        { name: "Piccadilly", angle: 180, stop: "Eastcote" }
    ],
    "Redbridge": [
        { name: "Central", angle: 0, stop: "Gants Hill" }
    ],
    "Regent's Park": [
        { name: "Bakerloo", angle: 180, stop: "Baker Street" }
    ],
    "Richmond": [
        { name: "District", angle: 45, stop: "Kew Gardens", end: true }
    ],
    "Rickmansworth": [
        { name: "Metropolitan", angle: 0, stop: "Moor Park" }
    ],
    "Roding Valley": [
        { name: "Central", angle: 225, stop: "Woodford" }
    ],
    "Royal Oak": [
        { name: "Circle", angle: 0, stop: "Paddington" },
        { name: "Hammersmith & City", angle: 0, stop: "Paddington" }
    ],
    "Ruislip": [
        { name: "Metropolitan", angle: 225, stop: "Ickenham" },
        { name: "Piccadilly", angle: 225, stop: "Ickenham" }
    ],
    "Ruislip Gardens": [
        { name: "Central", angle: 315, stop: "South Ruislip" }
    ],
    "Ruislip Manor": [
        { name: "Metropolitan", angle: 0, stop: "Eastcote" },
        { name: "Piccadilly", angle: 0, stop: "Eastcote" }
    ],
    "Russell Square": [
        { name: "Piccadilly", angle: 90, stop: "King's Cross St. Pancras" }
    ],
    "Seven Sisters": [
        { name: "Victoria", angle: 225, stop: "Finsbury Park" }
    ],
    "Shepherd's Bush": [
        { name: "Central", angle: 0, stop: "Holland Park" }
    ],
    "Shepherd's Bush Market": [
        { name: "Circle", angle: 270, stop: "Goldhawk Road" },
        { name: "Hammersmith & City", angle: 270, stop: "Goldhawk Road" }
    ],
    "Sloane Square": [
        { name: "Circle", angle: 45, stop: "Victoria" },
        { name: "District", angle: 45, stop: "Victoria" }
    ],
    "Snaresbrook": [
        { name: "Central", angle: 225, stop: "Leytonstone" }
    ],
    "South Ealing": [
        { name: "Piccadilly", angle: 0, stop: "Acton Town" }
    ],
    "South Harrow": [
        { name: "Piccadilly", angle: 135, stop: "Rayners Lane" }
    ],
    "South Kensington": [
        { name: "Circle", angle: 180, stop: "Gloucester Road" },
        { name: "District", angle: 180, stop: "Gloucester Road" },
        { name: "Piccadilly", angle: 180, stop: "Gloucester Road" }
    ],
    "South Kenton": [
        { name: "Bakerloo", angle: 135, stop: "Kenton" }
    ],
    "South Ruislip": [
        { name: "Central", angle: 315, stop: "Northolt" }
    ],
    "South Wimbledon": [
        { name: "Northern", angle: 0, stop: "Colliers Wood" }
    ],
    "South Woodford": [
        { name: "Central", angle: 90, stop: "Woodford" }
    ],
    "Southfields": [
        { name: "District", angle: 90, stop: "East Putney" }
    ],
    "Southgate": [
        { name: "Piccadilly", angle: 270, stop: "Arnos Grove" }
    ],
    "Southwark": [
        { name: "Jubilee", angle: 180, stop: "Waterloo" }
    ],
    "St. James's Park": [
        { name: "Circle", angle: 225, stop: "Victoria" },
        { name: "District", angle: 225, stop: "Victoria" }
    ],
    "St. John's Wood": [
        { name: "Jubilee", angle: 315, stop: "Baker Street" }
    ],
    "St. Paul's": [
        { name: "Central", angle: 0, stop: "Bank" }
    ],
    "Stamford Brook": [
        { name: "District", angle: 180, stop: "Turnham Green" }
    ],
    "Stanmore": [
        { name: "Jubilee", angle: 315, stop: "Canons Park", end: true }
    ],
    "Stepney Green": [
        { name: "District", angle: 0, stop: "Mile End" },
        { name: "Hammersmith & City", angle: 0, stop: "Mile End" }
    ],
    "Stockwell": [
        { name: "Northern", angle: 225, stop: "Clapham North" },
        { name: "Victoria", angle: 90, stop: "Vauxhall" }
    ],
    "Stonebridge Park": [
        { name: "Bakerloo", angle: 315, stop: "Harlesden" }
    ],
    "Stratford": [
        { name: "Central", angle: 225, stop: "Mile End" },
        { name: "Jubilee", angle: 270, stop: "West Ham", end: true }
    ],
    "Sudbury Hill": [
        { name: "Piccadilly", angle: 135, stop: "South Harrow" }
    ],
    "Sudbury Town": [
        { name: "Piccadilly", angle: 315, stop: "Alperton" }
    ],
    "Swiss Cottage": [
        { name: "Jubilee", angle: 135, stop: "Finchley Road" }
    ],
    "Temple": [
        { name: "Circle", angle: 225, stop: "Embankment" },
        { name: "District", angle: 225, stop: "Embankment" }
    ],
    "Theydon Bois": [
        { name: "Central", angle: 225, stop: "Debden" }
    ],
    "Tooting Bec": [
        { name: "Northern", angle: 45, stop: "Balham" }
    ],
    "Tooting Broadway": [
        { name: "Northern", angle: 225, stop: "Colliers Wood" }
    ],
    "Tottenham Court Road": [
        { name: "Central", angle: 180, stop: "Oxford Circus" },
        { name: "Northern", angle: 270, stop: "Leicester Square" }
    ],
    "Tottenham Hale": [
        { name: "Victoria", angle: 0, stop: "Blackhorse Road" }
    ],
    "Totteridge & Whetstone": [
        { name: "Northern", angle: 270, stop: "Woodside Park" }
    ],
    "Tower Hill": [
        { name: "Circle", angle: 90, stop: "Aldgate" },
        { name: "District", angle: 45, stop: "Aldgate East" }
    ],
    "Tufnell Park": [
        { name: "Northern", angle: 90, stop: "Archway" }
    ],
    "Turnham Green": [
        { name: "District", angle: 180, stop: "Chiswick Park" },
        { name: "Piccadilly", angle: 135, stop: "Acton Town" }
    ],
    "Turnpike Lane": [
        { name: "Piccadilly", angle: 270, stop: "Manor House" }
    ],
    "Upminster": [
        { name: "District", angle: 180, stop: "Upminster Bridge", end: true }
    ],
    "Upminster Bridge": [
        { name: "District", angle: 225, stop: "Hornchurch" }
    ],
    "Upney": [
        { name: "District", angle: 180, stop: "Barking" }
    ],
    "Upton Park": [
        { name: "District", angle: 0, stop: "East Ham" },
        { name: "Hammersmith & City", angle: 0, stop: "East Ham" }
    ],
    "Uxbridge": [
        { name: "Metropolitan", angle: 0, stop: "Hillingdon", end: true },
        { name: "Piccadilly", angle: 0, stop: "Hillingdon", end: true }
    ],
    "Vauxhall": [
        { name: "Victoria", angle: 270, stop: "Stockwell" }
    ],
    "Victoria": [
        { name: "Circle", angle: 225, stop: "Sloane Square" },
        { name: "District", angle: 225, stop: "Sloane Square" },
        { name: "Victoria", angle: 90, stop: "Green Park" }
    ],
    "Walthamstow Central": [
        { name: "Victoria", angle: 180, stop: "Blackhorse Road", end: true }
    ],
    "Wanstead": [
        { name: "Central", angle: 225, stop: "Leytonstone" }
    ],
    "Warren Street": [
        { name: "Northern", angle: 45, stop: "Euston" },
        { name: "Victoria", angle: 270, stop: "Oxford Circus" }
    ],
    "Warwick Avenue": [
        { name: "Bakerloo", angle: 315, stop: "Paddington" }
    ],
    "Waterloo": [
        { name: "Bakerloo", angle: 135, stop: "Embankment" },
        { name: "Jubilee", angle: 180, stop: "Westminster" },
        { name: "Northern", angle: 135, stop: "Embankment" },
        { name: "Waterloo & City", angle: 45, stop: "Bank", end: true }
    ],
    "Watford": [
        { name: "Metropolitan", angle: 225, stop: "Croxley", end: true }
    ],
    "Wembley Central": [
        { name: "Bakerloo", angle: 135, stop: "North Wembley" }
    ],
    "Wembley Park": [
        { name: "Jubilee", angle: 90, stop: "Kingsbury" },
        { name: "Metropolitan", angle: 0, stop: "Finchley Road" }
    ],
    "West Acton": [
        { name: "Central", angle: 45, stop: "North Acton" }
    ],
    "West Brompton": [
        { name: "District", angle: 90, stop: "Earl's Court" }
    ],
    "West Finchley": [
        { name: "Northern", angle: 270, stop: "Finchley Central" }
    ],
    "West Ham": [
        { name: "District", angle: 180, stop: "Bromley-by-Bow" },
        { name: "Hammersmith & City", angle: 180, stop: "Bromley-by-Bow" },
        { name: "Jubilee", angle: 90, stop: "Stratford" }
    ],
    "West Hampstead": [
        { name: "Jubilee", angle: 0, stop: "Finchley Road" }
    ],
    "West Harrow": [
        { name: "Metropolitan", angle: 0, stop: "Harrow-on-the-Hill" }
    ],
    "West Kensington": [
        { name: "District", angle: 0, stop: "Earl's Court" }
    ],
    "West Ruislip": [
        { name: "Central", angle: 315, stop: "Ruislip Gardens", end: true }
    ],
    "Westbourne Park": [
        { name: "Circle", angle: 225, stop: "Ladbroke Grove" },
        { name: "Hammersmith & City", angle: 225, stop: "Ladbroke Grove" }
    ],
    "Westminster": [
        { name: "Circle", angle: 90, stop: "Embankment" },
        { name: "District", angle: 90, stop: "Embankment" },
        { name: "Jubilee", angle: 135, stop: "Green Park" }
    ],
    "White City": [
        { name: "Central", angle: 180, stop: "East Acton" }
    ],
    "Whitechapel": [
        { name: "District", angle: 225, stop: "Aldgate East" },
        { name: "Hammersmith & City", angle: 225, stop: "Aldgate East" }
    ],
    "Willesden Green": [
        { name: "Jubilee", angle: 180, stop: "Dollis Hill" },
        { name: "Metropolitan", angle: 0, stop: "Finchley Road" }
    ],
    "Willesden Junction": [
        { name: "Bakerloo", angle: 135, stop: "Harlesden" }
    ],
    "Wimbledon": [
        { name: "District", angle: 90, stop: "Wimbledon Park", end: true }
    ],
    "Wimbledon Park": [
        { name: "District", angle: 90, stop: "Southfields" }
    ],
    "Wood Green": [
        { name: "Piccadilly", angle: 135, stop: "Bounds Green" }
    ],
    "Wood Lane": [
        { name: "Circle", angle: 45, stop: "Latimer Road" },
        { name: "Hammersmith & City", angle: 45, stop: "Latimer Road" }
    ],
    "Woodford": [
        { name: "Central", angle: 90, stop: "Buckhurst Hill" }
    ],
    "Woodside Park": [
        { name: "Northern", angle: 90, stop: "Totteridge & Whetstone" }
    ]
};
