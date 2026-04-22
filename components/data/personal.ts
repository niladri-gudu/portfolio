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
    role: "Backend & Systems Engineer",
    image: {
      src: "/new_profile_updated_2.0.jpeg",
      alt: "Niladri",
    },
  },

  intro: {
    text: "Architecting scalable distributed systems and high-performance backends. Currently obsessed with",
    highlight: {
      first: "System Design",
      second: "Distributed Computing",
    },
  },

  about: {
    image: {
      src: "/new_profile_updated_2.0.jpeg",
      alt: "Niladri",
    },
    paragraphs: [
      "I’m Niladri, a Backend Engineer based in Visakhapatnam, originally from the small town of Damanjodi, Odisha.",
      "I focus on building resilient server-side architectures, tackling challenges in distributed processing, job queues, and real-time data synchronization.",
      "Outside of code, I’m at the gym, watching a series, or lost in a playlist. I find that the discipline of strength training translates directly to building robust, high-performance systems.",
    ],
  },
};
