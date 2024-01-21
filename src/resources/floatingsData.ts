export type FloatingType = {
  key: string;
  style: {
    // top, right, bottom, left
    inset: string;
    zIndex: string;
    rotate: string;
    width: string;
  };
};

const homeHeroFloatings: FloatingType[] = [
  {
    key: "square-stroke",
    style: {
      zIndex: "10",
      inset: "-10% -10%", // top left
      width: "22%",
      rotate: "-80deg",
    },
  },
  {
    key: "circle",
    style: {
      zIndex: "10",
      inset: "55% -5%", // bottom left
      rotate: "-80deg",
      width: "12%",
    },
  },
  {
    key: "triangle",
    style: {
      zIndex: "2",
      rotate: "185deg",
      inset: "80% 90%", // bottom right
      width: "15%",
    },
  },
  {
    key: "square",
    style: {
      zIndex: "2",
      rotate: "25deg",
      inset: "0% 95%", // top right
      width: "10%",
    },
  },
];
const homeSecondFloatings: FloatingType[] = [
  {
    key: "circle-stroke",
    style: {
      zIndex: "2",
      inset: "-5% -5%", // top left
      width: "10%",
      rotate: "160deg",
    },
  },
  {
    key: "square",
    style: {
      zIndex: "2",
      rotate: "-30deg",
      inset: "35% -7.5%", // bottom left
      width: "12%",
    },
  },
  {
    key: "square-stroke",
    style: {
      zIndex: "10",
      rotate: "85deg",
      inset: "90% 60%", // bottom right
      width: "10%",
    },
  },
  {
    key: "triangle",
    style: {
      zIndex: "10",
      rotate: "120deg",
      inset: "80% 90%", // top right
      width: "15%",
    },
  },
];

const homeThirdFloatings: FloatingType[] = [
  {
    key: "triangle",
    style: {
      zIndex: "1",
      inset: "-25% -5%", // top left
      width: "22%",
      rotate: "140deg",
    },
  },
  {
    key: "square-stroke",
    style: {
      zIndex: "1",
      rotate: "-30deg",
      inset: "25% -10%", // bottom left
      width: "12%",
    },
  },
  {
    key: "triangle-stroke",
    style: {
      zIndex: "10",
      rotate: "185deg",
      inset: "90% 65%", // bottom right
      width: "15%",
    },
  },
  {
    key: "square",
    style: {
      zIndex: "10",
      rotate: "15deg",
      inset: "60% 90%", // top right
      width: "20%",
    },
  },
];
const whoWeAreHeroFloatings: FloatingType[] = [
  {
    key: "square-stroke",
    style: {
      zIndex: "10",
      inset: "-10% -5%", // top left
      width: "15%",
      rotate: "120deg",
    },
  },
  {
    key: "circle",
    style: {
      zIndex: "10",
      rotate: "100deg",
      inset: "55% -15%", // bottom left
      width: "17%",
    },
  },
  {
    key: "circle",
    style: {
      zIndex: "1",
      rotate: "15deg",
      inset: "90% 80%", // bottom right
      width: "25%",
    },
  },
  {
    key: "square-stroke",
    style: {
      zIndex: "1",
      rotate: "55deg",
      inset: "60% 95%", // top right
      width: "10%",
    },
  },
];
const whoWeAreSecondFloatings: FloatingType[] = [
  {
    key: "square",
    style: {
      zIndex: "1",
      inset: "-5% -5%", // top left
      width: "19%",
      rotate: "50deg",
    },
  },
  {
    key: "circle-stroke",
    style: {
      zIndex: "1",
      rotate: "80deg",
      inset: "45% -10%", // bottom left
      width: "12%",
    },
  },
  {
    key: "triangle",
    style: {
      zIndex: "10",
      rotate: "85deg",
      inset: "90% 70%", // bottom right
      width: "10%",
    },
  },
  {
    key: "square-stroke",
    style: {
      zIndex: "10",
      rotate: "85deg",
      inset: "80% 85%", // top right
      width: "20%",
    },
  },
];
const whoWeAreThirdFloatings: FloatingType[] = [
  {
    key: "triangle-stroke",
    style: {
      zIndex: "1",
      inset: "-5% -5%", // top left
      width: "20%",
      rotate: "40deg",
    },
  },
  {
    key: "square",
    style: {
      zIndex: "1",
      rotate: "-10deg",
      inset: "45% -10%", // bottom left
      width: "15%",
    },
  },
  {
    key: "square-stroke",
    style: {
      zIndex: "10",
      rotate: "85deg",
      inset: "90% 60%", // bottom right
      width: "10%",
    },
  },
  {
    key: "circle",
    style: {
      zIndex: "10",
      rotate: "-95deg",
      inset: "80% 85%", // top right
      width: "20%",
    },
  },
];
const servicesHeroFloatings: FloatingType[] = [
  {
    key: "triangle-stroke",
    style: {
      zIndex: "10",
      inset: "-10% -10%", // top left
      width: "22%",
      rotate: "-10deg",
    },
  },
  {
    key: "square",
    style: {
      zIndex: "10",
      rotate: "-20deg",
      inset: "45% -5%", // bottom left
      width: "12%",
    },
  },
  {
    key: "square",
    style: {
      zIndex: "1",
      rotate: "35deg",
      inset: "80% 90%", // bottom right
      width: "20%",
    },
  },
  {
    key: "triangle-stroke",
    style: {
      zIndex: "1",
      rotate: "65deg",
      inset: "60% 99%", // top right
      width: "10%",
    },
  },
];

const servicesSecondFloatings: FloatingType[] = [
  {
    key: "triangle",
    style: {
      zIndex: "10",
      inset: "10% 10%", // top left
      width: "6%",
      rotate: "160deg",
    },
  },
  {
    key: "square-stroke",
    style: {
      zIndex: "10",
      rotate: "-15deg",
      inset: "25% -5%", // bottom left
      width: "12%",
    },
  },
  {
    key: "square",
    style: {
      zIndex: "1",
      rotate: "208deg",
      inset: "84% 70%", // bottom right
      width: "10%",
    },
  },
  {
    key: "circle-stroke",
    style: {
      zIndex: "1",
      rotate: "-179deg",
      inset: "80% 95%", // top right
      width: "10%",
    },
  },
];
const eventsHeroFloatings: FloatingType[] = [
  {
    key: "circle-stroke",
    style: {
      zIndex: "10",
      inset: "-7% -5%", // top left
      width: "12%",
      rotate: "20deg",
    },
  },
  {
    key: "square",
    style: {
      zIndex: "10",
      rotate: "-13deg",
      inset: "41% -8%", // bottom left
      width: "8%",
    },
  },
  {
    key: "square-stroke",
    style: {
      zIndex: "1",
      rotate: "15deg",
      inset: "80% 90%", // bottom right
      width: "20%",
    },
  },
  {
    key: "circle",
    style: {
      zIndex: "1",
      rotate: "55deg",
      inset: "60% 95%", // top right
      width: "10%",
    },
  },
];
const eventsSecondFloatings: FloatingType[] = [
  {
    key: "square-stroke",
    style: {
      zIndex: "1",
      inset: "-10% -5%", // top left
      width: "15%",
      rotate: "16deg",
    },
  },
  {
    key: "triangle",
    style: {
      zIndex: "1",
      rotate: "-20deg",
      inset: "35% -5%", // bottom left
      width: "12%",
    },
  },
  {
    key: "circle-stroke",
    style: {
      zIndex: "10",
      rotate: "15deg",
      inset: "80% 60%", // bottom right
      width: "10%",
    },
  },
  {
    key: "square",
    style: {
      zIndex: "10",
      rotate: "15deg",
      inset: "90% 95%", // top right
      width: "10%",
    },
  },
];
const theBuildingHeroFloatings: FloatingType[] = [
  {
    key: "square-stroke",
    style: {
      zIndex: "10",
      inset: "0% 10%", // top left
      width: "12%",
      rotate: "160deg",
    },
  },
  {
    key: "triangle",
    style: {
      zIndex: "10",
      rotate: "-20deg",
      inset: "85% 0", // bottom left
      width: "12%",
    },
  },
  {
    key: "triangle-stroke",
    style: {
      zIndex: "1",
      rotate: "85deg",
      inset: "0% 90%", // bottom right
      width: "20%",
    },
  },
  {
    key: "square",
    style: {
      zIndex: "1",
      rotate: "85deg",
      inset: "90% 75%", // top right
      width: "20%",
    },
  },
];

export {
  homeHeroFloatings,
  homeSecondFloatings,
  homeThirdFloatings,
  whoWeAreHeroFloatings,
  whoWeAreSecondFloatings,
  whoWeAreThirdFloatings,
  servicesHeroFloatings,
  servicesSecondFloatings,
  eventsHeroFloatings,
  eventsSecondFloatings,
  theBuildingHeroFloatings,
};
