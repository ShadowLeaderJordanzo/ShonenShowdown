let allCharacter = [
    {["title"]: "blah"},
    {["title"]: "blah1"},
    {["title"]: "blah2"},
    {["title"]: "blah3"},
    {["title"]: "blah4"},
    {["title"]: "blah5"},
    {["title"]: "blah6"},
    {["title"]: "blah7"},
    {["title"]: "blah8"}
];
let currentCharacter = null;
let team1 = {
    ["Captain"]:"",
    ["Vice-Captain"]:"",
    ["Tank"]:"",
    ["Healer"]:"",
    ["Support"]:"",
    ["Support"]:"",
};
let team2 = {
    ["Captain"]:"",
    ["Vice-Captain"]:"",
    ["Tank"]:"",
    ["Healer"]:"",
    ["Support"]:"",
    ["Support"]:"",
};

async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const s = await response.json();

  console.log(s)
}

let characterList = JSON.parse("character.json")
async function fetchCharacters() {
    try {
        
        // const response = await fetch("https://onepiece.fandom.com/api.php?action=query&list=categorymembers&cmtitle=Category:Canon_Characters&cmlimit=500&format=json")
        // const data = await response.json()
        // characterList = data.query.categorymembers.filter(p => p.ns === 0);
        fetch("https://onepiece.fandom.com/api.php?action=parse&page=List_of_Canon_Characters&format=json&origin=*")
            .then(response => response.json())
            .then(data => {
                const html = data.parse.text["*"];
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");

                const links = [...doc.querySelectorAll("a")].filter(a =>
                    a.href.includes("/wiki/") &&
                    !a.href.includes("redLink") &&
                    !a.href.includes("List_of_") &&
                    !a.href.includes("Category:")
                );
                const characters = [...new Set(links.map(a => a.textContent.trim()))]; 
                console.log(characters);
            });
        console.log(characterList)
    } catch(error) {
        console.error("Oh no!", error)
    }
}
fetchCharacters()


function rollCharacter() {
    let selectedIndexes = []
    for (let i = 1; i <= document.getElementById('rollCount').value; i++) {
        const index = Math.floor(Math.random() * allCharacter.length);
        if(selectedIndexes.includes(index)) {
            i--
            continue
        }
        selectedIndexes.push(index)
        console.log(selectedIndexes)
        currentCharacter = allCharacter[index];
        let char = document.getElementById(`character${i}`)
        char.children[0].innerText = `${currentCharacter.title}`
        char.children[1].src = ""
        
    }
}

function assignToTeam(teamNumber, position) {
    if(!currentCharacter) return;

    if(teamNumber == 1) {
        team1[position] = currentCharacter;
        updateTeamDisplay(1);

    } else {
        team2[position] = currentCharacter;
        updateTeamDisplay(2);
    }

    rollCharacter()
}

function updateTeamDisplay(teamNumber) {
    const list = document.getElementById(`team${teamNumber}List`);




}