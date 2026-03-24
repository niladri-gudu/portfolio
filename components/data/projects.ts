/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Typescript,
  Next,
  Turborepo,
  Wagmi,
  Viem,
  Solidity,
  Nest,
  Prisma,
  Postgres,
} from "@/components/icons/techLogos";

export type ProjectLinks = {
  website?: string;
  github?: string;
};

export type ProjectTechnology = {
  name: string;
  icon: any;
};

export type ProjectItem = {
  slug: string;
  title: string;
  description: string;
  image: string;

  links?: ProjectLinks;
  status?: "Building" | "Completed" | "Shipped";

  technologies: ProjectTechnology[];

  timeline?: string;
  role?: string;
  team?: string;

  overview?: string;

  whatUsersCanDo?: string[];
  whyIBuiltThis?: string[];
  afterLaunchImpact?: string[];
  futurePlans?: string[];
};

export const projectItems: ProjectItem[] = [
  {
    slug: "questfi",
    title: "QuestFi",
    description:
      "A Web3 questing platform that simplifies onchain interactions through XP, leaderboards, and NFT badge rewards.",
    image: "/nature.jpg",

    status: "Completed",

    links: {
      // website: "https://questfi.niladri.app",
      github: "https://github.com/niladri-gudu/questfi",
    },

    timeline: "10 days",
    role: "Full Stack Developer",
    team: "Solo",

    overview:
      "QuestFi is a decentralized application designed to make Web3 onboarding intuitive. It bridges the gap between blockchain trust and Web2 usability by using a robust NestJS backend to track off-chain logic like XP and leaderboards, while utilizing smart contracts for verifiable achievements and badge minting.",

    whatUsersCanDo: [
      "Connect wallets seamlessly via RainbowKit.",
      "Browse and complete various onchain quests.",
      "Earn XP and level up their profile through an automated tracking system.",
      "Compete with other users on a real-time global leaderboard.",
      "Mint NFT or Soulbound Token (SBT) badges as proof of quest completion.",
      "View progress and rewards through a clean, native-feeling dashboard.",
    ],

    whyIBuiltThis: [
      "To prove that production-grade Web3 apps require sophisticated backends for logic and UX.",
      "To master event-driven architecture using BullMQ and Redis for blockchain syncing.",
      "To practice deploying full-stack monorepos using Turborepo.",
      "To gain hands-on experience managing infrastructure on AWS EC2 (Nginx, PM2).",
      "To kick off the '6 Projects in 60 Days' challenge with a high-utility dApp.",
    ],

    afterLaunchImpact: [
      "Successfully implemented an event-driven sync between smart contracts and MongoDB/PostgreSQL.",
      "Optimized backend performance using Redis for queueing and caching.",
      "Automated the minting pipeline so users receive badges immediately upon quest validation.",
      "Gained deep expertise in SSH, environment management, and reverse proxies on EC2.",
      "Established a reusable Turborepo boilerplate for future full-stack Web3 projects.",
    ],

    futurePlans: [
      "Implement multi-chain support to track quests across different networks.",
      "Develop a 'Quest Builder' UI for protocols to permissionlessly list their own quests.",
      "Add guild and team-based questing for community collaboration.",
      "Introduce file versioning for quest assets and detailed activity logs.",
    ],

    technologies: [
      { name: "Solidity", icon: Solidity },
      { name: "Next.js", icon: Next },
      { name: "Nest.js", icon: Nest },
      { name: "TypeScript", icon: Typescript },
      { name: "PostgreSQL", icon: Postgres },
      { name: "Prisma", icon: Prisma },
      { name: "Viem", icon: Viem },
      { name: "Wagmi", icon: Wagmi },
      { name: "Turborepo", icon: Turborepo },
    ],
  },
  {
    slug: "lendx",
    title: "LendX",
    description:
      "A decentralized Aave-style lending protocol featuring ETH collateralized borrowing, real-time health factor tracking, and an automated liquidation engine.",
    image: "/nature.jpg",

    status: "Completed",

    links: {
      // website: "https://lendx.niladri.app",
      github: "https://github.com/niladri-gudu/lendx",
    },

    timeline: "10 days",
    role: "Full Stack Developer",
    team: "Solo",

    overview:
      "LendX is a full-stack DeFi protocol built from the ground up to demonstrate the mechanics of over-collateralized lending. By combining Solidity smart contracts with a NestJS event-indexing backend, the platform provides a seamless Web2-like experience for complex Web3 financial operations, ensuring users have real-time visibility into their liquidation risks and protocol health.",

    whatUsersCanDo: [
      "Deposit ETH as collateral to enable borrowing power.",
      "Borrow USDC against deposited collateral within LTV (Loan-to-Value) limits.",
      "Monitor a real-time Health Factor to assess liquidation risk.",
      "Repay USDC debt to reclaim collateral and improve account health.",
      "Participate as a liquidator to seize under-collateralized positions for a bonus.",
      "View a complete, indexed audit trail of all on-chain transactions.",
      "Access a Liquidation Intelligence API for pre-computed eligibility and bonuses.",
    ],

    whyIBuiltThis: [
      "To master the mathematical foundations of DeFi: LTV ratios, health factors, and liquidation thresholds.",
      "To build a robust, idempotent event indexer that mirrors on-chain state into a relational database.",
      "To solve the UX friction of ERC20 approvals and real-time state invalidation after transactions.",
      "To practice 'protocol thinking'—understanding how every state transition impacts systemic risk.",
      "To advance my '6 Projects in 60 Days' challenge by tackling complex financial logic.",
    ],

    afterLaunchImpact: [
      "Developed a high-performance indexing engine using NestJS and Viem to eliminate stale data.",
      "Implemented an automated risk calculation system that scales with live price feeds.",
      "Streamlined the Web3 UX using React Query for instant cache invalidation post-confirmation.",
      "Successfully deployed a modular monorepo architecture separating contracts, API, and UI.",
      "Gained deep insights into handling blockchain reorgs and duplicate event processing.",
    ],

    futurePlans: [
      "Implement an automated liquidation bot to maintain protocol solvency in real-time.",
      "Introduce dynamic interest rate curves based on pool utilization percentages.",
      "Add support for multi-asset collateral and cross-margining features.",
      "Integrate The Graph/Subgraphs for decentralized data indexing.",
      "Build a comprehensive risk dashboard for protocol-wide TVL and utilization analytics.",
    ],

    technologies: [
      { name: "Solidity", icon: Solidity },
      { name: "Next.js", icon: Next },
      { name: "Nest.js", icon: Nest },
      { name: "TypeScript", icon: Typescript },
      { name: "PostgreSQL", icon: Postgres },
      { name: "Prisma", icon: Prisma },
      { name: "Viem", icon: Viem },
      { name: "Wagmi", icon: Wagmi },
      { name: "Turborepo", icon: Turborepo },
    ],
  },
  {
    slug: "zkpass",
    title: "ZKPass",
    description:
      "A gasless, on-chain access control system using Merkle Trees to verify allowlist eligibility and mint access passes without user gas fees.",
    image: "/nature.jpg",

    status: "Completed",

    links: {
      // website: "https://zkpass.niladri.app",
      github: "https://github.com/niladri-gudu/zkpass",
    },

    timeline: "10 days",
    role: "Full Stack Developer",
    team: "Solo",

    overview:
      "ZKPass is a hybrid on-chain/off-chain access management platform. It allows admins to create campaign allowlists via Merkle Roots while enabling users to claim passes gaslessly through a backend relayer. By moving proof generation off-chain and verification on-chain, ZKPass achieves a high-performance, cost-effective solution for private community gating and allowlist-only mints.",

    whatUsersCanDo: [
      "Create and deploy allowlist-gated campaigns by uploading wallet lists.",
      "Generate secure Merkle proofs off-chain to verify eligibility.",
      "Claim access passes with zero gas fees via a backend-sponsored relayer.",
      "Check real-time eligibility status for active campaigns.",
      "Track claim history and on-chain pass ownership through a unified dashboard.",
      "Experience seamless onboarding without needing initial ETH for gas.",
    ],

    whyIBuiltThis: [
      "To implement Merkle Trees as a core infrastructure primitive for scalable on-chain verification.",
      "To build a secure backend relayer capable of sponsoring and submitting transactions on behalf of users.",
      "To explore hybrid architecture—balancing blockchain finality with Postgres-backed state tracking.",
      "To solve the 'cold start' problem in Web3 where users need ETH just to interact with a dApp.",
      "To reach the halfway mark of the '6 Projects in 60 Days' challenge with a complex cryptography project.",
    ],

    afterLaunchImpact: [
      "Successfully deployed a gasless UX that abstracts away the complexity of transaction fees for the end user.",
      "Designed an idempotent claim tracking system to prevent double-claiming across DB and Chain state.",
      "Optimized proof generation performance by handling Merkle Tree computations in the NestJS backend.",
      "Implemented a secure relayer wallet management system with automated noncing and submission logic.",
      "Mastered the deployment of dynamic, per-campaign smart contracts via a central factory-style pattern.",
    ],

    futurePlans: [
      "Migrate the relayer to a full ERC-4337 Paymaster variant for native gas sponsorship.",
      "Integrate IPFS for decentralized storage of Merkle Trees and campaign metadata.",
      "Add support for time-limited and supply-capped access pass campaigns.",
      "Build a comprehensive analytics dashboard for admins to track claim rates and user demographics.",
      "Implement Subgraph integration to index on-chain minting events for decentralized reporting.",
    ],

    technologies: [
      { name: "Solidity", icon: Solidity },
      { name: "Next.js", icon: Next },
      { name: "Nest.js", icon: Nest },
      { name: "TypeScript", icon: Typescript },
      { name: "PostgreSQL", icon: Postgres },
      { name: "Prisma", icon: Prisma },
      { name: "Viem", icon: Viem },
      { name: "Wagmi", icon: Wagmi },
      { name: "Turborepo", icon: Turborepo },
    ],
  },
];
