export const sixteenPersonalitiesTaxonomy = [
  // Analysts
    { abbreviation: "INTJ", nickname: "Architect", image: require('../assets/architect.png')  },
    { abbreviation: "INTP", nickname: "Logician", image: require('../assets/logician.png')  },
    { abbreviation: "ENTJ", nickname: "Commander", image: require('../assets/commander.png')  },
    { abbreviation: "ENTP", nickname: "Debater", image: require('../assets/debater.png')  },
  // Diplomats
    { abbreviation: "INFJ", nickname: "Advocate", image: require('../assets/advocate.png')  },
    { abbreviation: "INFP", nickname: "Mediator", image: require('../assets/mediator.png')  },
    { abbreviation: "ENFJ", nickname: "Protagonist", image: require('../assets/protagonist.png')  },
    { abbreviation: "ENFP", nickname: "Campaigner", image: require('../assets/campaigner.png')  },
  // Sentinels
    { abbreviation: "ISTJ", nickname: "Logistician", image: require('../assets/logistician.png')  },
    { abbreviation: "ISFJ", nickname: "Defender", image: require('../assets/defender.png')  },
    { abbreviation: "ESTJ", nickname: "Executive", image: require('../assets/executive.png')  },
    { abbreviation: "ESFJ", nickname: "Consul", image: require('../assets/consul.png')  },
  // Explorers
    { abbreviation: "ISTP", nickname: "Virtuoso", image: require('../assets/virtuoso.png')  },
    { abbreviation: "ISFP", nickname: "Adventurer", image: require('../assets/adventurer.png')  },
    { abbreviation: "ESTP", nickname: "Entrepreneur", image: require('../assets/entrepreneur.png')  },
    { abbreviation: "ESFP", nickname: "Entertainer", image: require('../assets/entertainer.png')  },
];

export const sixteenPersonalityTypes = (value) => {
  const personalities = sixteenPersonalitiesTaxonomy.filter((e) => {
    return e.abbreviation === value
  });
  return personalities[0];
};

export const questions = [
  {
    id: 1,
    question: "você costuma...",
    a1: "se enturmar",
    a2: "ser bastante quieto e reservado",
    v1: "e",
    v2: "i",
    answer: null,
  },
  {
    id: 2,
    question: "você geralmente se dá melhor com",
    a1: "pessoas imaginativas",
    a2: "pessoas realistas",
    v1: "n",
    v2: "s",
    answer: null,
  },
  {
    id: 3,
    question: "você deixa mais frequentemente",
    a1: "seu coração comanda sua cabeça",
    a2: "sua cabeça governa seu coração",
    v1: "f",
    v2: "t",
    answer: null,
  },
  {
    id: 4,
    question: "Você se considera ser",
    a1: "mais uma pessoa espontânea",
    a2: "mais de uma pessoa organizada",
    v1: "p",
    v2: "j",
    answer: null,
  },
];
