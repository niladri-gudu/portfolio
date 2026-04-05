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

  about: {
    image: {
      src: string;
      alt: string;
    };
    paragraphs: string[];
  };
};

export const personalData: PersonalData = {
  availability: {
    isAvailable: true,
    availableLabel: "Available for work",
    busyLabel: "Busy Building / Unavailable",
  },

  location: {
    city: "Visakhapatnam",
    country: "India",
  },

  profile: {
    name: "niladri.",
    role: "Fullstack Web3 Developer",
    image: {
      src: "/new_profile_updated_2.0.jpeg",
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

  about: {
    image: {
      src: "/new_profile_updated_2.0.jpeg",
      alt: "Niladri",
    },
paragraphs: [
      "I’m Niladri, a Web3 developer in Visakhapatnam, originally from the small town of Damanjodi, Odisha.",
      "I build decentralized systems focused on usability, prioritizing interfaces that feel fast, intentional, and polished.",
      "Outside of code, I’m at the gym, watching a series, or lost in a playlist. Balance makes for better building.",
    ],
  },
};
