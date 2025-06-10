

document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll("table.theTable tbody tr");

    const characters = [];

    rows.forEach(row => {
        const tds = row.querySelectorAll('td');

        if (tds.length >= 2) {
        const link = tds[1].querySelector('a');
        if (link) {
            characters.push({
            name: link.textContent.trim(),
            url: "https://onepiece.fandom.com" + link.getAttribute('href')
            });
        }
        }
    });

    console.log(characters);
    const s =  JSON.stringify(characters, null);
    console.log(`Scraped ${characters.length} characters!`);
    console.log(s)
});