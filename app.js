const showChamp = document.getElementById('champPickElement');
const typeOfChamp = document.getElementById('underlined');

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

function randomChampion(){
    const role = document.getElementById('championRole').value

    switch(role){
        case "top":
            typeOfChamp.innerText = "Your Top Champ:"
            showChamp.innerText = getRandom(topChamps,3);
            break;
        case "jungle":
            typeOfChamp.innerText = "Your Jungle Champ:"
            showChamp.innerText = getRandom(jungleChamps,3);
            break;
        case "mid":
            typeOfChamp.innerText = "Your Mid Champ:"
            showChamp.innerText = getRandom(midChamps,3);
            break;
        case "adc":
            typeOfChamp.innerText = "Your ADC Champ:"
            showChamp.innerText = getRandom(adcChamps,3);
            break;
        case "support":
            typeOfChamp.innerText = "Your Support Champ:"
            showChamp.innerText = getRandom(supportChamps,3);
            break;
        case "general":
            typeOfChamp.innerText = "Your Random Champ:"
            showChamp.innerText = getRandom(champs,3);
            break;
        default:
            console.log("Should not happen");
            break;
    }

}
