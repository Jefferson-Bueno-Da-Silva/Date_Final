export const personalityGroupColors = {
  Analysts: "#96637d",
  Diplomats: "#72c9a6",
  Sentinels: "#5fbfd8",
  Explorers: "#dfc10c",
};

export const colorBasedOnGroup = (group) => {
  switch (group) {
    case "Analysts":
      return personalityGroupColors.Analysts;
    case "Diplomats":
      return personalityGroupColors.Diplomats;
    case "Sentinels":
      return personalityGroupColors.Sentinels;
    case "Explorers":
      return personalityGroupColors.Explorers;
    default:
      return "grey";
  }
};

export const sixteenPersonalitiesTaxonomy = {
  Analysts: [
    { abbreviation: "INTJ", nickname: "Architect" },
    { abbreviation: "INTP", nickname: "Logician" },
    { abbreviation: "ENTJ", nickname: "Commander" },
    { abbreviation: "ENTP", nickname: "Debater" },
  ],
  Diplomats: [
    { abbreviation: "INFJ", nickname: "Advocate" },
    { abbreviation: "INFP", nickname: "Mediator" },
    { abbreviation: "ENFJ", nickname: "Protagonist" },
    { abbreviation: "ENFP", nickname: "Campaigner" },
  ],
  Sentinels: [
    { abbreviation: "ISTJ", nickname: "Logistician" },
    { abbreviation: "ISFJ", nickname: "Defender" },
    { abbreviation: "ESTJ", nickname: "Executive" },
    { abbreviation: "ESFJ", nickname: "Consul" },
  ],
  Explorers: [
    { abbreviation: "ISTP", nickname: "Virtuoso" },
    { abbreviation: "ISFP", nickname: "Adventurer" },
    { abbreviation: "ESTP", nickname: "Entrepreneur" },
    { abbreviation: "ESFP", nickname: "Entertainer" },
  ],
};

export const sixteenPersonalityTypes = () => {
  const personalities = [];
  Object.values(sixteenPersonalitiesTaxonomy).forEach((g) =>
    g.forEach((e) => personalities.push(e))
  );
  return personalities;
};

export const questions = [
  {
    id: 1,
    question: "você costuma...",
    a1: "se enturmar",
    a2: "ser bastante quieto e reservado",
    v1: "e",
    v2: "i",
  },
  {
    id: 2,
    question: "você geralmente se dá melhor com",
    a1: "pessoas imaginativas",
    a2: "pessoas realistas",
    v1: "n",
    v2: "s",
  },
  {
    id: 3,
    question: "você deixa mais frequentemente",
    a1: "seu coração comanda sua cabeça",
    a2: "sua cabeça governa seu coração",
    v1: "f",
    v2: "t",
  },
  {
    id: 4,
    question: "Você se considera ser",
    a1: "mais uma pessoa espontânea",
    a2: "mais de uma pessoa organizada",
    v1: "p",
    v2: "j",
  },
];
