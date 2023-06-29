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
    "Shen",
    "Sona",
    "Soraka",
    "Swain",
    "Tahm Kench",
    "Taric",
    "Thresh",
    "Vel'Koz",
    "Xerath",
    "Yuumi",
    "Zac",
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
    "Renekton",
    "Rumble",
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
    "Kled",
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
    "Sett",
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
    "Hecarim",
    "Heimerdinger",
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
    "Nasus",
    "Nocturne",
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
    "Swain",
    "Sylas",
    "Tahm Kench",
    "Teemo",
    "Tryndamere",
    "Urgot",
    "Vayne",
    "Vladimir",
    "Volibear",
    "Wukong",
    "Yasuo",
    "Yone",
    "Yorick",
    "Zac"
];

var selectAll = ["","",""];
var selectTop = ["","",""];
var selectJungle = ["","",""];
var selectMid = ["","",""];
var selectAdc = ["","",""];
var selectSupport = ["","",""];

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

function randomChampion(role) {
    var showChamp1
    var showChamp2
    var showChamp3
    console.log(role)

    switch (role) {
        case 'top':
            selectTop = getRandom(topChamps, 3);
            document.getElementById('topChamp1').innerText = selectTop[0]
            document.getElementById('topChamp2').innerText = selectTop[1]
            document.getElementById('topChamp3').innerText = selectTop[2]
            updateButtons('top')
            break;
        case 'jungle':
            selectJungle = getRandom(jungleChamps, 3);
            document.getElementById('jungleChamp1').innerText = selectJungle[0]
            document.getElementById('jungleChamp2').innerText = selectJungle[1]
            document.getElementById('jungleChamp3').innerText = selectJungle[2]
            updateButtons('jungle')
            break;
        case 'mid':
            temp = getRandom(midChamps, 3);
            break;
        case 'adc':
            temp = getRandom(adcChamps, 3);
            break;
        case 'support':
            temp = getRandom(supportChamps, 3);
            break;
        case 'general':
            temp = getRandom(champs, 3);
            break;
        default:
            console.log("Should not happen");
            break;
    }
    /*
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
*/
}
function updateButtons(role){
    var button1;
    var button2;
    var button3;
    var champ1;
    var champ2;
    var champ3;
    switch(role){
        case 'top' :
            var button1 = document.getElementById('topButton1');
            var button2 = document.getElementById('topButton2');
            var button3 = document.getElementById('topButton3');
            var champ1 = document.getElementById('top1');
            var champ2 = document.getElementById('top2');
            var champ3 = document.getElementById('top3');
            break;
        case 'jungle' :
            var button1 = document.getElementById('jungleButton1');
            var button2 = document.getElementById('jungleButton2');
            var button3 = document.getElementById('jungleButton3');
            var champ1 = document.getElementById('jungle1');
            var champ2 = document.getElementById('jungle2');
            var champ3 = document.getElementById('jungle3');
            break;
        case 'mid' :
            var button1 = document.getElementById('topButton1');
            var button2 = document.getElementById('topButton2');
            var button3 = document.getElementById('topButton3');
            var champ1 = document.getElementById('top1');
            var champ2 = document.getElementById('top2');
            var champ3 = document.getElementById('top3');
            break;
        case 'adc' :
            var button1 = document.getElementById('topButton1');
            var button2 = document.getElementById('topButton2');
            var button3 = document.getElementById('topButton3');
            var champ1 = document.getElementById('top1');
            var champ2 = document.getElementById('top2');
            var champ3 = document.getElementById('top3');
            break;
        case 'support' :
            var button1 = document.getElementById('topButton1');
            var button2 = document.getElementById('topButton2');
            var button3 = document.getElementById('topButton3');
            var champ1 = document.getElementById('top1');
            var champ2 = document.getElementById('top2');
            var champ3 = document.getElementById('top3');
            break;
        default:
            console.log("Should not happen");
            break;
    }
    button1.hidden=false;
    button2.hidden=false;
    button3.hidden=false;
    champ1.hidden=false;
    champ2.hidden=false;
    champ3.hidden=false;
}
function reroll(role, elemid){
    switch (role) {
        case 'top':
            newchamp = getRandom(topChamps, 1);
            break;
        case 'jungle':
            newchamp = getRandom(jungleChamps, 1);
            break;
        case 'mid':
            newchamp = getRandom(midChamps, 1);
            break;
        case 'adc':
            newchamp = getRandom(adcChamps, 1);
            break;
        case 'support':
            newchamp = getRandom(supportChamps, 1);
            break;
        case 'general':
            newchamp = getRandom(champs, 1);
            break;
        default:
            console.log("Should not happen");
            break;
    }
    elemid.innerText=newchamp;
}