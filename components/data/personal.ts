export type PersonalData = {
  availability: {
    isAvailable: boolean;
    availableLabel: string;
    busyLabel: string;
  };

  location: {
    city: string;
    country: string;
  };

  profile: {
    name: string;
    role: string;
    image: {
      src: string;
      alt: string;
    };
  };

  intro: {
    text: string;
    highlight: {
      first: string;
      second: string;
    };
  };
};

export const personalData: PersonalData = {
  availability: {
    isAvailable: true,
    availableLabel: "Available for work",
    busyLabel: "Busy Building / Unavailable",
  },

  location: {
    city: "New Delhi",
    country: "India",
  },

  profile: {
    name: "niladri.",
    role: "Fullstack Web3 Developer",
    image: {
      src: "/nature.jpg",
      alt: "Niladri",
    },
  },

  intro: {
    text: "Building decentralized systems and high-fidelity interfaces. Currently focused on the intersection of",
    highlight: {
      first: "Solidity architecture",
      second: "user-centric design",
    },
  },
};
