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
    "Seraphine",
    "Sivir",
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
    "Galio",
    "Janna",
    "Karma",
    "Leona",
    "Lulu",
    "Lux",
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
    "Lissandra",
    "Lucian",
    "Lux",
    "Malphite",
    "Malzahar",
    "Neeko",
    "Orianna",
    "Pantheon",
    "Pyke",
    "Qiyana",
    "Renekton",
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
            selectMid = getRandom(midChamps, 3);
            document.getElementById('midChamp1').innerText = selectMid[0]
            document.getElementById('midChamp2').innerText = selectMid[1]
            document.getElementById('midChamp3').innerText = selectMid[2]
            updateButtons('mid')
            break;
        case 'adc':
            selectAdc = getRandom(adcChamps, 3);
            document.getElementById('adcChamp1').innerText = selectAdc[0]
            document.getElementById('adcChamp2').innerText = selectAdc[1]
            document.getElementById('adcChamp3').innerText = selectAdc[2]
            updateButtons('adc')
            break;
        case 'support':
            selectSupport = getRandom(supportChamps, 3);
            document.getElementById('supportChamp1').innerText = selectSupport[0]
            document.getElementById('supportChamp2').innerText = selectSupport[1]
            document.getElementById('supportChamp3').innerText = selectSupport[2]
            updateButtons('support')
            break;
        case 'general':
            temp = getRandom(champs, 3);
            break;
        default:
            console.log("Should not happen");
            break;
    }
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
            var button1 = document.getElementById('midButton1');
            var button2 = document.getElementById('midButton2');
            var button3 = document.getElementById('midButton3');
            var champ1 = document.getElementById('mid1');
            var champ2 = document.getElementById('mid2');
            var champ3 = document.getElementById('mid3');
            break;
        case 'adc' :
            var button1 = document.getElementById('adcButton1');
            var button2 = document.getElementById('adcButton2');
            var button3 = document.getElementById('adcButton3');
            var champ1 = document.getElementById('adc1');
            var champ2 = document.getElementById('adc2');
            var champ3 = document.getElementById('adc3');
            break;
        case 'support' :
            var button1 = document.getElementById('supportButton1');
            var button2 = document.getElementById('supportButton2');
            var button3 = document.getElementById('supportButton3');
            var champ1 = document.getElementById('support1');
            var champ2 = document.getElementById('support2');
            var champ3 = document.getElementById('support3');
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
function reroll(role, elemid, champNum){
    switch (role) {
        case 'top':
            newchamp = getRandom(topChamps, 1);
            selectTop[champNum]=newchamp
            break;
        case 'jungle':
            newchamp = getRandom(jungleChamps, 1);
            selectJungle[champNum]=newchamp
            break;
        case 'mid':
            newchamp = getRandom(midChamps, 1);
            selectMid[champNum]=newchamp
            break;
        case 'adc':
            newchamp = getRandom(adcChamps, 1);
            selectAdc[champNum]=newchamp
            break;
        case 'support':
            newchamp = getRandom(supportChamps, 1);
            selectSupport[champNum]=newchamp
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

function copyCompo(){
    var text = "Top : " +  String(selectTop) +"\n" +
    "Jgl : " +  String(selectJungle) +"\n" +
    "Mid : " +  String(selectMid) +"\n" +
    "Adc : " +  String(selectAdc) +"\n" +
    "Supp : " +  String(selectSupport);

    navigator.clipboard.writeText(text);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied! ";
}
function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }