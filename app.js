const champs = [
    "Aatrox",
    "Ahri",
    "Akali",
    "Akshan",
    "Alistar",
    "Amumu",
    "Anivia",
    "Annie",
    "Aphelios",
    "Ashe",
    "Aurelion Sol",
    "Azir",
    "Bard",
    "Bel'Veth",
    "Blitzcrank",
    "Brand",
    "Braum",
    "Briar",
    "Caitlyn",
    "Camille",
    "Cassiopeia",
    "Cho'Gath",
    "Corki",
    "Darius",
    "Diana",
    "Dr.Mundo",
    "Draven",
    "Ekko",
    "Elise",
    "Evelynn",
    "Ezreal",
    "Fiddlesticks",
    "Fiora",
    "Fizz",
    "Galio",
    "Gangplank",
    "Garen",
    "Gnar",
    "Gragas",
    "Graves",
    "Gwen",
    "Hecarim",
    "Heimerdinger",
    "Illaoi",
    "Irelia",
    "Ivern",
    "Janna",
    "Jarvan IV",
    "Jax",
    "Jayce",
    "Jhin",
    "Jinx",
    "Kai'Sa",
    "Kalista",
    "Karma",
    "Karthus",
    "Kassadin",
    "Katarina",
    "Kayle",
    "Kayn",
    "Kennen",
    "Kha'Zix",
    "Kindred",
    "Kled",
    "Kog'Maw",
    "K'Sante",
    "LeBlanc",
    "Lee Sin",
    "Leona",
    "Lillia",
    "Lissandra",
    "Lucian",
    "Lulu",
    "Lux",
    "Malphite",
    "Malzahar",
    "Maokai",
    "Master Yi",
    "Milio",
    "Miss Fortune",
    "Mordekaiser",
    "Morgana",
    "Nafiri le dog",
    "Nami",
    "Nasus",
    "Nautilus",
    "Neeko",
    "Nidalee",
    "Nilah",
    "Nocturne",
    "Nunu & Willump",
    "Olaf",
    "Orianna",
    "Ornn",
    "Pantheon",
    "Poppy",
    "Pyke",
    "Qiyana",
    "Quinn",
    "Rakan",
    "Rammus",
    "Rek'Sai",
    "Rell",
    "Renata Glasc",
    "Renekton",
    "Rengar",
    "Riven",
    "Rumble",
    "Ryze",
    "Samira",
    "Sejuani",
    "Senna",
    "Seraphine",
    "Sett",
    "Shaco",
    "Shen",
    "Shyvana",
    "Singed",
    "Sion",
    "Sivir",
    "Skarner",
    "Sona",
    "Soraka",
    "Swain",
    "Sylas",
    "Syndra",
    "Tahm Kench",
    "Taliyah",
    "Talon",
    "Taric",
    "Teemo",
    "Thresh",
    "Tristana",
    "Trundle",
    "Tryndamere",
    "Twisted Fate",
    "Twitch",
    "Udyr",
    "Urgot",
    "Varus",
    "Vayne",
    "Veigar",
    "Vel'Koz",
    "Vex",
    "Vi",
    "Viego",
    "Viktor",
    "Vladimir",
    "Volibear",
    "Warwick",
    "Wukong",
    "Xayah",
    "Xerath",
    "Xin Zhao",
    "Yasuo",
    "Yone",
    "Yorick",
    "Yuumi",
    "Zac",
    "Zed",
    "Zeri",
    "Ziggs",
    "Zilean",
    "Zoe",
    "Zyra"
];

const adcChamps = [
    "Aphelios",
    "Ashe",
    "Caitlyn",
    "Draven",
    "Ezreal",
    "Jhin",
    "Jinx",
    "Kai'Sa",
    "Kalista",
    "Karthus",
    "Kog'Maw",
    "Lucian",
    "Miss Fortune",
    "Nilah",
    "Samira",
    "Senna",
    "Seraphine",
    "Sivir",
    "Swain",
    "Tristana",
    "Twitch",
    "Varus",
    "Vayne",
    "Xayah",
    "Yasuo",
    "Zeri",
    "Ziggs"
];

const supportChamps = [
    "Alistar",
    "Amumu",
    "Annie",
    "Ashe",
    "Bard",
    "Blitzcrank",
    "Brand",
    "Braum",
    "Fiddlesticks",
    "Galio",
    "Janna",
    "Karma",
    "Leona",
    "Lulu",
    "Lux",
    "Malphite",
    "Maokai",
    "Milio",
    "Morgana",
    "Nami",
    "Nautilus",
    "Pantheon",
    "Poppy",
    "Pyke",
    "Rakan",
    "Rell",
    "Renata Gasc",
    "Senna",
    "Seraphine",
    "Sett",
    "Shaco",
    "Sona",
    "Soraka",
    "Swain",
    "Tahm Kench",
    "Taric",
    "Thresh",
    "Vel'Koz",
    "Xerath",
    "Yuumi",
    "Zilean",
    "Zyra"
];

const midChamps = [
    "Ahri",
    "Akali",
    "Akshan",
    "Anivia",
    "Annie",
    "Aurelion Sol",
    "Azir",
    "Cassiopeia",
    "Cho'Gath",
    "Corki",
    "Diana",
    "Ekko",
    "Fizz",
    "Galio",
    "Heimerdinger",
    "Irelia",
    "Jayce",
    "Kassadin",
    "Katarina",
    "LeBlanc",
    "Lillia",
    "Lissandra",
    "Lucian",
    "Lux",
    "Malphite",
    "Malzahar",
    "Nafiri",
    "Neeko",
    "Nocturne",
    "Nunu & Willump",
    "Orianna",
    "Pantheon",
    "Pyke",
    "Qiyana",
    "Renekton",
    "Rumble",
    "Ryze",
    "Swain",
    "Sylas",
    "Syndra",
    "Taliyah",
    "Talon",
    "Twisted Fate",
    "Veigar",
    "Vel'Koz",
    "Vex",
    "Viktor",
    "Vladimir",
    "Xerath",
    "Yasuo",
    "Yone",
    "Zed",
    "Ziggs",
    "Zilean",
    "Zoe",
];

const jungleChamps = [
    "Amumu",
    "Bel'Veth",
    "Briar",
    "Diana",
    "Dr.Mundo",
    "Ekko",
    "Elise",
    "Evelynn",
    "Fiddlesticks",
    "Gragas",
    "Graves",
    "Hecarim",
    "Ivern",
    "Jarvan IV",
    "Karthus",
    "Kayn",
    "Kha'Zix",
    "Kindred",
    "Lee Sin",
    "Lillia",
    "Master Yi",
    "Nidalee",
    "Nocturne",
    "Nunu",
    "Olaf",
    "Poppy",
    "Rammus",
    "Rek'Sai",
    "Rengar",
    "Sejuani",
    "Shaco",
    "Shyvana",
    "Skarner",
    "Sylas",
    "Taliyah",
    "Trundle",
    "Udyr",
    "Vi",
    "Viego",
    "Volibear",
    "Warwick",
    "Wukong",
    "Xin Zhao",
    "Zac",
];

const topChamps = [
    "Aatrox",
    "Akali",
    "Camille",
    "Cassiopeia",
    "Cho'Gath",
    "Darius",
    "Dr.Mundo",
    "Fiora",
    "Gangplank",
    "Garen",
    "Gnar",
    "Gwen",
    "Illaoi",
    "Irelia",
    "Jax",
    "Jayce",
    "K'Sante",
    "Karma",
    "Kayle",
    "Kennen",
    "Kled",
    "Lillia",
    "Lucian",
    "Malphite",
    "Maokai",
    "Mordekaiser",
    "Nafiri le dog",
    "Nasus",
    "Olaf",
    "Ornn",
    "Pantheon",
    "Poppy",
    "Quinn",
    "Renekton",
    "Rengar",
    "Riven",
    "Rumble",
    "Ryze",
    "Sett",
    "Shen",
    "Singed",
    "Sion",
    "Sylas",
    "Tahm Kench",
    "Teemo",
    "Tryndamere",
    "Urgot",
    "Vayne",
    "Vladimir",
    "Volibear",
    "Yone",
    "Yorick",
    "Zac"
];

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function randomChampion() {
    var temp;
    const role = document.getElementById('championRole').value
    const number = document.getElementById('champ_num').value
    const showChamp1 = document.getElementById('champPickElement1');
    const showChamp2 = document.getElementById('champPickElement2');
    const showChamp3 = document.getElementById('champPickElement3');

    switch (role) {
        case "top":
            temp = getRandom(topChamps, number);
            break;
        case "jungle":
            temp = getRandom(jungleChamps, number);
            break;
        case "mid":
            temp = getRandom(midChamps, number);
            break;
        case "adc":
            temp = getRandom(adcChamps, number);
            break;
        case "support":
            temp = getRandom(supportChamps, number);
            break;
        case "general":
            temp = getRandom(champs, number);
            break;
        default:
            console.log("Should not happen");
            break;
    }

    switch(number){
        case '1' :
            showChamp1.innerText = temp[0];
            showChamp2.innerText = "";
            showChamp3.innerText = "";
            break;
        case '2' :
            showChamp1.innerText = temp[0];
            showChamp2.innerText = temp[1];
            showChamp3.innerText = "";
            break;
        case '3':
            showChamp1.innerText = temp[0];
            showChamp2.innerText = temp[1];
            showChamp3.innerText = temp[2];
            break;
        default:
            console.log("Should not happen");
            break;
    }

    updateButtons(number)
}
function updateButtons(number){
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const champ1 = document.getElementById('champ1');
    const champ2 = document.getElementById('champ2');
    const champ3 = document.getElementById('champ3');
    console.log(button1)
    switch(number){
        case '1' :
            button1.hidden=false;
            button2.hidden=true;
            button3.hidden=true;
            champ1.hidden=false;
            champ2.hidden=true;
            champ3.hidden=true;
            break;
        case '2' :
            button1.hidden=false;
            button2.hidden=false;
            button3.hidden=true;
            champ1.hidden=false;
            champ2.hidden=false;
            champ3.hidden=true;
            break;
        case '3':
            button1.hidden=false;
            button2.hidden=false;
            button3.hidden=false;
            champ1.hidden=false;
            champ2.hidden=false;
            champ3.hidden=false;
            break;
        default:
            console.log("Should not happen");
            break;
    }
}
function reroll1(){
    const role = document.getElementById('championRole').value
    const showChamp1 = document.getElementById('champPickElement1');
    switch (role) {
        case "top":
            newchamp = getRandom(topChamps, 1);
            break;
        case "jungle":
            newchamp = getRandom(jungleChamps, 1);
            break;
        case "mid":
            newchamp = getRandom(midChamps, 1);
            break;
        case "adc":
            newchamp = getRandom(adcChamps, 1);
            break;
        case "support":
            newchamp = getRandom(supportChamps, 1);
            break;
        case "general":
            newchamp = getRandom(champs, 1);
            break;
        default:
            console.log("Should not happen");
            break;
    }
    showChamp1.innerText=newchamp;
}
function reroll2(){
    const role = document.getElementById('championRole').value
    const showChamp2 = document.getElementById('champPickElement2');
    switch (role) {
        case "top":
            newchamp = getRandom(topChamps, 1);
            break;
        case "jungle":
            newchamp = getRandom(jungleChamps, 1);
            break;
        case "mid":
            newchamp = getRandom(midChamps, 1);
            break;
        case "adc":
            newchamp = getRandom(adcChamps, 1);
            break;
        case "support":
            newchamp = getRandom(supportChamps, 1);
            break;
        case "general":
            newchamp = getRandom(champs, 1);
            break;
        default:
            console.log("Should not happen");
            break;
    }
    showChamp2.innerText=newchamp;
}
function reroll3(){
    const role = document.getElementById('championRole').value
    const showChamp3 = document.getElementById('champPickElement3');
    switch (role) {
        case "top":
            newchamp = getRandom(topChamps, 1);
            break;
        case "jungle":
            newchamp = getRandom(jungleChamps, 1);
            break;
        case "mid":
            newchamp = getRandom(midChamps, 1);
            break;
        case "adc":
            newchamp = getRandom(adcChamps, 1);
            break;
        case "support":
            newchamp = getRandom(supportChamps, 1);
            break;
        case "general":
            newchamp = getRandom(champs, 1);
            break;
        default:
            console.log("Should not happen");
            break;
    }
    showChamp3.innerText=newchamp;
}
