from bs4 import BeautifulSoup
import json

# Load the HTML file
with open("huh.html", "r", encoding="utf-8") as file:
    soup = BeautifulSoup(file, "html.parser")

# Find the table
table = soup.find("table", {"class": "theTable"})

# Extract characters
characters = []
for row in table.tbody.find_all("tr"):
    tds = row.find_all("td")
    if len(tds) >= 2:
        link = tds[1].find("a")
        if link:
            name = link.text.strip()
            url = "https://onepiece.fandom.com" + link['href']
            characters.append({
                "name": name,
                "url": url
            })

# Save to a JSON file
with open("characters.json", "w", encoding="utf-8") as json_file:
    json.dump(characters, json_file, indent=2, ensure_ascii=False)

print("Saved to characters.json")
