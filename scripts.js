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
let characterList = [];
async function populate() {
  const requestURL =
    "https://raw.githubusercontent.com/ShadowLeaderJordanzo/ShonenShowdown/refs/heads/main/characters.json?token=GHSAT0AAAAAACUEPPBAC6VI7CDXHDRWPW742CHNYLA";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const s = await response.json();
    console.log(s)
    characterList=s
}

populate();


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