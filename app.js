// Base champion list (alphabetical) – cleaned names matching Data Dragon identifiers.
// Some names need manual mapping (e.g., Wukong = MonkeyKing, Nunu & Willump = Nunu, etc.).
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
  "Dr. Mundo",
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
  "K'Sante",
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
  "Naafiri",
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
  "Zyra",
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
  "Ziggs",
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
  "Renata Glasc",
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
  "Zyra",
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
  "Naafiri",
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
  "Dr. Mundo",
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
  "Nunu & Willump",
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
  "Dr. Mundo",
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
  "Naafiri",
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
  "Zac",
];

// Data Dragon version (could be updated manually as needed).
const DATA_DRAGON_VERSION = "14.10.1";

// Map display name -> image slug used in Data Dragon splash / loading art (using square/loading tiles here).
const imageSlugMap = new Map([
  // Special cases
  ["Wukong", "MonkeyKing"],
  ["LeBlanc", "Leblanc"],
  ["Cho'Gath", "Chogath"],
  ["Kha'Zix", "Khazix"],
  ["Vel'Koz", "Velkoz"],
  ["Kai'Sa", "Kaisa"],
  ["Kog'Maw", "KogMaw"],
  ["Jarvan IV", "JarvanIV"],
  ["Lee Sin", "LeeSin"],
  ["Master Yi", "MasterYi"],
  ["Miss Fortune", "MissFortune"],
  ["Dr. Mundo", "DrMundo"],
  ["Renata Glasc", "Renata"],
  ["Tahm Kench", "TahmKench"],
  ["Twisted Fate", "TwistedFate"],
  ["Xin Zhao", "XinZhao"],
  ["Aurelion Sol", "AurelionSol"],
  ["Nunu & Willump", "Nunu"],
  ["Bel'Veth", "Belveth"],
  ["K'Sante", "KSante"],
  ["Naafiri", "Naafiri"],
]);

function championToSlug(name) {
  if (imageSlugMap.has(name)) return imageSlugMap.get(name);
  // Remove spaces, apostrophes, periods and ampersands; capitalize inner parts.
  return name
    .replace(/['.]/g, "")
    .replace(/ & /g, "")
    .replace(/\s+/g, "")
    .replace(/^[^a-zA-Z]*|[^a-zA-Z0-9]/g, "");
}

// Build Data Dragon square icon URL
function imageUrl(name) {
  const slug = championToSlug(name);
  return `https://ddragon.leagueoflegends.com/cdn/${DATA_DRAGON_VERSION}/img/champion/${slug}.png`;
}

// Random unique picks from array
function getRandom(arr, n) {
  const copy = [...arr];
  const res = [];
  n = Math.min(n, copy.length);
  for (let i = 0; i < n; i++) {
    const idx = Math.floor(Math.random() * copy.length);
    res.push(copy.splice(idx, 1)[0]);
  }
  return res;
}

// Utility effects
function flash(el) {
  el.animate(
    [
      { boxShadow: "0 0 0 0 rgba(255,255,255,0)" },
      { boxShadow: "0 0 0 4px rgba(75,139,255,.6)" },
      { boxShadow: "0 0 0 0 rgba(75,139,255,0)" },
    ],
    { duration: 600, easing: "ease-out" }
  );
}
// Provide pick pool by role
function pickPool(role) {
  switch (role) {
    case "top":
      return topChamps;
    case "jungle":
      return jungleChamps;
    case "mid":
      return midChamps;
    case "adc":
      return adcChamps;
    case "support":
      return supportChamps;
    default:
      return champs;
  }
}

// Team generation (5 roles, 3 picks each, no duplicates global)
const TEAM_ROLES = ["top", "jungle", "mid", "adc", "support"];
const PICKS_PER_ROLE = 3;

function randomTeam() {
  const used = new Set();
  const team = {};
  TEAM_ROLES.forEach((role) => {
    const pool = pickPool(role).filter((c) => !used.has(c));
    const picks = getRandom(pool, Math.min(PICKS_PER_ROLE, pool.length));
    picks.forEach((p) => used.add(p));
    team[role] = picks;
  });
  renderTeam(team);
}

function rerollSlot(role, index) {
  const grid = document.getElementById("teamGrid");
  // Collect all currently used champions (excluding this slot so it can be replaced freely)
  const allNames = Array.from(grid.querySelectorAll(".mini-card")).map((c) =>
    c.getAttribute("data-name")
  );
  const card = grid.querySelector(
    `.mini-card[data-role="${role}"][data-index="${index}"]`
  );
  if (!card) return;
  const currentName = card.getAttribute("data-name");
  const usedSet = new Set(allNames.filter((n) => n !== currentName));
  // Available pool for that role excluding used
  const pool = pickPool(role).filter((c) => !usedSet.has(c));
  if (pool.length === 0) return; // Nothing new to assign
  const newPick = getRandom(pool, 1)[0];
  const nameEl = card.querySelector(".mini-info h4");
  const imgEl = card.querySelector("img");
  nameEl.textContent = newPick;
  imgEl.src = imageUrl(newPick);
  imgEl.alt = newPick;
  card.dataset.name = newPick;
  flash(card);
}

function rerollRoleAll(role) {
  const grid = document.getElementById("teamGrid");
  // Remove current role names from used first
  const otherNames = Array.from(grid.querySelectorAll(".mini-card"))
    .filter((c) => c.getAttribute("data-role") !== role)
    .map((c) => c.getAttribute("data-name"));
  const used = new Set(otherNames);
  const pool = pickPool(role).filter((c) => !used.has(c));
  const picks = getRandom(pool, Math.min(PICKS_PER_ROLE, pool.length));
  const roleCards = grid.querySelectorAll(`.mini-card[data-role="${role}"]`);
  roleCards.forEach((card, i) => {
    const name = picks[i];
    if (!name) return; // in case pool smaller
    const nameEl = card.querySelector(".mini-info h4");
    const imgEl = card.querySelector("img");
    nameEl.textContent = name;
    imgEl.src = imageUrl(name);
    imgEl.alt = name;
    card.dataset.name = name;
    flash(card);
  });
}

function renderTeam(team) {
  const grid = document.getElementById("teamGrid");
  grid.innerHTML = "";
  TEAM_ROLES.forEach((role) => {
    const picks = team[role];
    const column = document.createElement("section");
    column.className = "role-column";
    column.dataset.role = role;
    column.innerHTML = `<span class="role-label">${role.toUpperCase()}</span>`;
    const list = document.createElement("div");
    list.className = "mini-picks";
    picks.forEach((name, i) => {
      const mini = document.createElement("div");
      mini.className = "mini-card";
      mini.dataset.role = role;
      mini.dataset.index = i.toString();
      mini.dataset.name = name;
      mini.innerHTML = `
        <img src="${imageUrl(name)}" alt="${name}" loading="lazy" />
        <div class="mini-info">
          <h4>${name}</h4>
        </div>
        <div class="mini-actions">
          <button class="mini-btn" type="button" aria-label="Reroll ${name}" data-action="slot-reroll">↺</button>
        </div>`;
      mini
        .querySelector('[data-action="slot-reroll"]')
        .addEventListener("click", () => rerollSlot(role, i));
      list.appendChild(mini);
    });
    const footer = document.createElement("footer");
    footer.innerHTML = `<button class="mini-btn" type="button" data-action="role-reroll">Reroll 3</button>`;
    footer
      .querySelector('[data-action="role-reroll"]')
      .addEventListener("click", () => rerollRoleAll(role));
    column.appendChild(list);
    column.appendChild(footer);
    grid.appendChild(column);
  });
}

// Empty state handling: add class before first generation so CSS can center button
window.addEventListener("load", () => {
  document.body.classList.add("empty-state");
});

// Wrap original randomTeam to remove empty-state after first generation
const _randomTeam = randomTeam;
window.randomTeam = function () {
  if (document.body.classList.contains("empty-state")) {
    document.body.classList.remove("empty-state");
  }
  _randomTeam();
};
