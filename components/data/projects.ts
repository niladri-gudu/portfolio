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
  Redis,
  BullMQ,
  SocketIO,
  FFmpeg,
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
    slug: "transcodex",

    title: "TranscodeX",

    description:
      "A distributed video processing and streaming platform featuring multipart uploads, FFmpeg-powered HLS transcoding, AI-generated captions, transcript-based chat, realtime processing updates, and adaptive bitrate streaming.",

    image: "/transcodex.png",

    status: "Completed",

    links: {
      github: "https://github.com/niladri-gudu/transcodex",
    },

    timeline: "3 weeks",

    role: "Backend Engineer",

    team: "Solo",

    overview:
      "Transcodex is a full-stack video processing platform inspired by modern streaming systems such as YouTube. The project implements the complete media pipeline from upload to playback — including multipart uploads, distributed video processing, thumbnail generation, HLS transcoding, adaptive streaming, AI-generated captions, transcript extraction, realtime progress tracking, and transcript-aware conversational AI. The primary goal was to explore media infrastructure, asynchronous processing, realtime communication, and AI integration in a single production-style system.",

    whatUsersCanDo: [
      "Upload large video files using multipart uploads directly to AWS S3.",
      "Track video processing progress in realtime without polling.",
      "Watch videos using adaptive bitrate HLS streaming.",
      "Manually switch between 480p, 720p, and 1080p playback quality.",
      "Control playback speed and view generated subtitles.",
      "Access automatically generated captions and transcripts.",
      "Chat with an AI assistant that answers questions using the video's transcript as context.",
      "View thumbnails generated automatically during processing.",
    ],

    whyIBuiltThis: [
      "To understand how modern video platforms process and deliver media at scale.",
      "To gain hands-on experience with FFmpeg, HLS, and adaptive streaming.",
      "To learn distributed job processing using BullMQ and Redis.",
      "To implement realtime communication using Socket.IO and Redis Pub/Sub.",
      "To explore practical AI integrations beyond simple chatbot applications.",
      "To build a portfolio project demonstrating backend engineering, cloud infrastructure, media processing, and AI in a single system.",
    ],

    afterLaunchImpact: [
      "Implemented multipart uploads to AWS S3 for reliable large-file handling.",
      "Built a distributed processing pipeline using BullMQ workers and Redis queues.",
      "Created an FFmpeg-based transcoding system that generates multi-resolution HLS streams.",
      "Implemented adaptive streaming with manual quality selection and playback controls.",
      "Built realtime processing updates using Socket.IO and Redis Pub/Sub.",
      "Integrated Whisper-based caption generation and transcript extraction.",
      "Implemented transcript-aware AI chat using Gemini.",
      "Designed a media pipeline that separates API responsibilities from processing workloads.",
    ],

    futurePlans: [
      "Implement semantic transcript search using vector embeddings.",
      "Add timeline-aware AI responses that link answers to video timestamps.",
      "Generate AI-powered video summaries and chapter markers.",
      "Introduce GPU-accelerated transcoding for faster processing.",
      "Add CDN integration for global video delivery.",
      "Deploy horizontally scalable worker pools for parallel media processing.",
    ],

    technologies: [
      { name: "Next.js", icon: Next },
      { name: "TypeScript", icon: Typescript },
      { name: "PostgreSQL", icon: Postgres },
      { name: "Prisma", icon: Prisma },
      { name: "Redis", icon: Redis },
      { name: "BullMQ", icon: BullMQ },
      { name: "Socket.IO", icon: SocketIO },
      { name: "FFmpeg", icon: FFmpeg },
      { name: "Turborepo", icon: Turborepo },
    ],
  },
  {
    slug: "strata",

    title: "Strata",

    description:
      "A production-grade distributed social platform featuring realtime notifications, activity feeds, Redis caching, BullMQ workers, Dead Letter Queues, monitoring dashboards, and horizontally scalable Socket.IO infrastructure.",

    image: "/strata.png",

    status: "Building",

    links: {
      github: "https://github.com/niladri-gudu/strata",
    },

    timeline: "3 weeks",

    role: "Backend Engineer",

    team: "Solo",

    overview:
      "Strata is a backend-first social platform built to explore distributed systems architecture. The project implements a complete social graph, feed generation, realtime notifications, background job processing, Redis caching, failure recovery mechanisms, presence tracking, and operational monitoring. Rather than focusing on UI, the project emphasizes reliability, scalability, and infrastructure design similar to systems used by Twitter, LinkedIn, and Discord.",

    whatUsersCanDo: [
      "Create accounts and authenticate using JWT-based sessions.",
      "Create posts, like posts, and comment on content.",
      "Follow and unfollow other users to build a personalized social graph.",
      "View a paginated feed generated from followed users.",
      "Receive realtime notifications for follows, likes, and comments.",
      "See unread notification counts update instantly without page refreshes.",
      "View user presence and online status in realtime.",
    ],

    whyIBuiltThis: [
      "To understand how large-scale social platforms architect feeds, notifications, and realtime systems.",
      "To gain hands-on experience with Redis caching strategies and cache invalidation.",
      "To implement BullMQ workers and background job processing patterns.",
      "To learn reliability engineering concepts such as retries, dead letter queues, replay systems, and recovery metrics.",
      "To build a portfolio project that demonstrates backend engineering beyond standard CRUD applications.",
    ],

    afterLaunchImpact: [
      "Implemented an event-driven notification pipeline using BullMQ workers and Redis Pub/Sub.",
      "Built realtime notification delivery using Socket.IO with Redis-backed room synchronization.",
      "Designed a Dead Letter Queue (DLQ) system with replay capabilities for failed jobs.",
      "Implemented notification count caching in Redis, reducing repeated database queries.",
      "Added operational monitoring including queue metrics, worker metrics, health checks, replay history, and recovery rate tracking.",
      "Integrated Bull Board to provide production-style queue inspection and debugging.",
      "Implemented online presence tracking and last-seen functionality using Redis.",
    ],

    futurePlans: [
      "Implement fan-out-on-write feed generation using background workers.",
      "Introduce feed caching and timeline precomputation.",
      "Add media uploads and content moderation pipelines.",
      "Deploy multiple API instances behind a load balancer to demonstrate horizontal scaling.",
      "Build a complete frontend dashboard for notifications, feeds, and system observability.",
    ],

    technologies: [
      { name: "Next.js", icon: Next },
      { name: "TypeScript", icon: Typescript },
      { name: "PostgreSQL", icon: Postgres },
      { name: "Prisma", icon: Prisma },
      { name: "Redis", icon: Redis },
      { name: "BullMQ", icon: BullMQ },
      { name: "Socket.IO", icon: SocketIO },
      { name: "Turborepo", icon: Turborepo },
    ],
  },
  {
    slug: "walletx",
    title: "WalletX",
    description:
      "A full-stack ERC-4337 Account Abstraction smart wallet with gasless transactions, session keys, and real-time transaction lifecycle visualization.",
    image: "/walletx.png",

    status: "Completed",

    links: {
      // website: "https://walletx.niladri.app",
      github: "https://github.com/niladri-gudu/walletx",
    },

    timeline: "12 days",
    role: "Full Stack Developer",
    team: "Solo",

    overview:
      "WalletX is a production-grade ERC-4337 smart wallet implementation that demonstrates the full Account Abstraction stack — from UserOperation construction to on-chain execution. Instead of regular Ethereum transactions, users sign UserOperations that flow through a bundler, get validated by a custom VerifyingPaymaster, and execute via a programmable smart wallet contract. The project showcases gasless UX, delegated session key access, and a real-time transaction lifecycle visualizer.",

    whatUsersCanDo: [
      "Connect their EOA wallet via RainbowKit and interact with a deployed smart wallet.",
      "Send gasless transactions where the VerifyingPaymaster covers all gas fees.",
      "Create session keys with fine-grained permissions — restricted target address, ETH cap, and expiry time.",
      "Execute transactions using session keys without owner signature involvement.",
      "Track the full UserOperation lifecycle in real-time — from signing to bundler submission to on-chain confirmation.",
      "Revoke session keys instantly to remove delegated access.",
      "View confirmed transactions with direct Etherscan links.",
    ],

    whyIBuiltThis: [
      "To deeply understand ERC-4337 Account Abstraction — the most important UX primitive in Web3.",
      "To implement a custom VerifyingPaymaster from scratch and understand the signature verification flow.",
      "To master the UserOperation lifecycle — how bundlers, EntryPoints, and smart wallets interact.",
      "To build session keys as a senior-level feature that demonstrates programmable wallet logic.",
      "To complete Phase 6 of the '6 Projects in 60 Days' challenge with the most infrastructure-heavy project yet.",
    ],

    afterLaunchImpact: [
      "Successfully implemented a custom VerifyingPaymaster that reconstructs userOpHash internally to match EntryPoint's computation — solving a non-trivial signature verification challenge.",
      "Built a complete two-hash signing flow where the paymaster signs with empty paymasterData and the wallet signs after paymasterData is finalized.",
      "Implemented session key enforcement at the contract level using assembly-based calldata decoding to validate target address and ETH amount per transaction.",
      "Integrated Pimlico bundler with sponsorship policy management to ensure the custom paymaster is respected.",
      "Delivered a real-time transaction lifecycle UI that animates through each stage of the UserOperation flow.",
    ],

    futurePlans: [
      "Add multi-owner support and on-chain multisig validation.",
      "Implement ERC-20 token gas payments via a token paymaster.",
      "Add social recovery — allow trusted guardians to restore wallet access.",
      "Build a session key marketplace where dApps can request scoped access from users.",
      "Integrate The Graph to index UserOperation history for a full transaction dashboard.",
    ],

    technologies: [
      { name: "Solidity", icon: Solidity },
      { name: "Next.js", icon: Next },
      { name: "Nest.js", icon: Nest },
      { name: "TypeScript", icon: Typescript },
      { name: "Viem", icon: Viem },
      { name: "Wagmi", icon: Wagmi },
      { name: "Turborepo", icon: Turborepo },
    ],
  },
  {
    slug: "questfi",
    title: "QuestFi",
    description:
      "A Web3 questing platform that simplifies onchain interactions through XP, leaderboards, and NFT badge rewards.",
    image: "/questfi.png",

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
    image: "/lendx.png",

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
    image: "/zkpass.png",

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
