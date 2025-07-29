document.addEventListener('DOMContentLoaded', () => {
    const objects =
        [
            {
                "name": "The Eiffel Tower",
                "location": "Paris",
                "founder": "Gustave Eiffel",
                "year_build": 1889,
                "criticizers": ["France leading artists, intellectuals"],
                "height_in_meters": 330,
                "tallest_duration_years": 41,
                "second_tallest_to": "Chrysler Building in New York City"
            },
            {
                "name": "The first Moon landing",
                "date": "20 July 1969",
                "mission": "Apollo 11",
                "mision_launchers": "United States' NASA space agency",
                "astronauts": "Neil Armstrong and Buzz Aldrin",
                "lunar_surface_location": "Apollo Lunar Module 'Eagle.'",
                "Neil_1st_words_on_moon": "That's one small step for [a] man, one giant leap for mankind",
                "broadcast_audience": "500 million people",
                "highlight": "marks a  pivotal moment in the Space Race and human exploration"
            },
            {
                "name": "Mona Lisa painting",
                "painter": "Leonardo da Vinci",
                "title": " High Renaissance master ",
                "year": "between 1503 and 1506",
                "fame_standard": "most famous portrait in the world",
                "location": "Louvre Museum in Paris",
                "theme": "enigmatic expression ",
                "technique": "sfumato technique",
                "effect": "soft and hazy",
                "sitter": "Lisa Gherardini",
                "sitter_spouse_profession": "Florentine merchant",
                "stolen_in": 1911
            },
            {
                "year": 1928,
                "scientist": "Alexander Fleming",
                "discovery": "Penicillium notatum mold contaminated petri dish",
                "effect": "Killed surrounding bacteria",
                "significance": "First modern antibiotic",
                "developed_by": ["Howard Florey", "Ernst Chain"],
                "impact": "Saved hundreds of millions of lives"
            },
            {
                "location": "Arizona, USA",
                "length_miles": 277,
                "width_miles": "Up to 18",
                "depth_miles": 1,
                "age_million_years": "5-6",
                "geological_exposure": "Nearly two billion years",
                "status": "National Park",
                "designation": "One of the Seven Natural Wonders of the World",
                "visitor_reception": "Millions"
            },
            {
                "year": 1440,
                "inventor": "Johannes Gutenberg",
                "technology": "Mechanical movable type",
                "first_major_book": "Gutenberg Bible",
                "impact": ["Renaissance", "Reformation", "Age of Enlightenment"],
                "significance": "Lowered cost of books, increased literacy"
            },
            {
                "date": "November 9, 1989",
                "years_divided": 28,
                "location": "Berlin",
                "symbol": "End of Cold War",
                "dividing_line": "East and West Berlin",
                "cause": "Political changes, mistaken announcement",
                "crowd": "East Germans demanding opening",
                "result": "Reunification of Germany in 1990"
            },
            {
                "name": "RMS Titanic",
                "type": "Passenger liner",
                "country": "Britain",
                "sunk_date": "April 15, 1912",
                "route": "Southampton to New York City",
                "operator": "White Star Line",
                "status": "Sank after hitting an iceberg",
                "duration_to_sink": "Just over two and a half hours",
                "deaths": 1500,
                "notable_feature": "Considered 'unsinkable'",
                "legacy": "Maritime tragedy, memorials, books, films"
            },
            {
                "location": "Himalayas, Mahalangur Himal",
                "height_meters": 8848.86,
                "height_feet": 29031.7,
                "first_ascent_date": "May 29, 1953",
                "first_climbers": ["Sir Edmund Hillary", "Tenzing Norgay"],
                "challenges": ["Extreme altitude", "Volatile weather", "Avalanches"],
                "climbing_goal": "Primary goal for experienced mountaineers"
            },
            {
                "name": "The Colosseum",
                "location": "Rome, Italy",
                "construction_start": "AD 72",
                "completion": "AD 80",
                "capacity": "50,000 to 80,000",
                "uses": ["Gladiatorial contests", "Mock sea battles", "Animal hunts", "Dramas"],
                "damage": "Partially ruined by earthquakes and stone-robbers",
                "symbol": "Imperial Rome"
            },
            {
                "roots": "ARPANET",
                "initial_development": "1960s",
                "protocols": "TCP/IP",
                "web_invention": "Tim Berners-Lee, 1989",
                "impact": ["Global communication", "Commerce", "Information access"],
                "effect": "Revolutionized society"
            },
            {
                "name": "Terracotta Army",
                "discovery_year": 1974,
                "location": "Lintong District, Xi'an, Shaanxi, China",
                "period": "Late third century BC",
                "description": "Life-sized sculptures of Qin Shi Huang's armies",
                "purpose": "Protection in afterlife",
                "number_of_figures": "Thousands",
                "artistry": "Varied facial features, uniforms, hairstyles"
            },
            {
                "discovery_year": 1901,
                "location": "Shipwreck off Greek island of Antikythera",
                "origin": "Greek",
                "date": "Late second century BC",
                "components": "At least 30 bronze gears",
                "function": "Predict astronomical positions and eclipses",
                "significance": "Advanced mechanical sophistication for its era"
            }
        ]

    const contents = document.getElementById("output");

    function displayObjects(objects) {
        objects.forEach((objects, index) => {
            const objectDiv = document.createElement("div");
            objectDiv.style.border = "1px solid #ccc";
            objectDiv.style.padding = "10px";
            objectDiv.style.marginBottom = "10px";

            const heading = document.createElement('h2');
            heading.textContent = obj.name || obj.heading || `Object ${index + 1}`;
            objectDiv.appendChild(heading);

            for (const key in obj) {
                const p = document.createElement('p');
                const label = key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

                if (Array.isArray(obj[key])) {
                    p.innerHTML = `<strong>${label}:</strong> ${obj[key].join(', ')}`;
                } else {
                    p.innerHTML = `<strong>${label}:</strong> ${obj[key]}`;
                }

                objDiv.appendChild(p);
            }

            outputDiv.appendChild(p);
        });
    }
    displayObjects(objects);
})

