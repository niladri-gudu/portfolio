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
  Express,
  Tailwind,
  Langchain,
  LangGraph,
} from "@/components/icons/techLogos";

import type { ProjectItem } from "./types";

export type { ProjectItem, ProjectLinks, ProjectTechnology, ProjectStatus } from "./types";

export const projectItems: ProjectItem[] = [
  {
    slug: "withink",

    title: "Withink",

    description:
      "A live, private diary at withink.me: one entry per day, zero-knowledge encryption, offline-first editor, flashbacks, insights, and full ZIP export.",

    image: "/withink.png",

    status: "Shipped",

    links: {
      website: "https://withink.me",
      github: "https://github.com/niladri-gudu/withink",
    },

    timeline: "Ongoing",

    role: "Full-Stack Engineer",

    team: "Solo",

    overview:
      "Withink is the only live product in this portfolio - a calm, private diary built for a 10-year habit, not sessions. One entry per day with a grace-period writing window; content is encrypted client-side so the server cannot read entries; the editor autosaves through an offline queue and syncs on reconnect. Flashbacks resurface anniversary entries (Redis-cached), insights show streaks and mood without shaming, and media lives on R2 with deep reference scrubbing on delete. Two surfaces share one backend: app.withink.me and withink.me over wildcard-cookie sessions.",

    whatUsersCanDo: [
      "Write today's single entry in a distraction-free rich-text editor with mood tracking and autosave state.",
      "Write offline - the local queue syncs safely when back online.",
      "Revisit past entries via anniversary-prioritized flashbacks and search with highlighted matches.",
      "Track streaks, yearly heatmap, and mood trends in insights.",
      "Lock the diary with a local PIN (Diary Lock) with auto-lock on tab switch.",
      "Export everything as a ZIP (entries, images, metadata) and delete-for-real on account close.",
    ],

    whyIBuiltThis: [
      "To ship a real product with retention constraints instead of another demo - calm beats gamified.",
      "Tradeoff: client-side zero-knowledge encryption over server-readable storage - even I cannot read entries, at the cost of no server search over content.",
      "Tradeoff: one entry per day with a writing-window firewall over infinite notes - forces the daily ritual, simplifies conflict resolution.",
      "Tradeoff: offline queue + visible save state over fire-and-forget saves - users never wonder if words are safe.",
      "To learn product engineering: pricing windows (14/90-day edit limits), device limits, export-as-freedom, and privacy-plainly copy.",
    ],

    afterLaunchImpact: [
      "Live in production at withink.me + app.withink.me (Turborepo, 100+ commits) with email + Google auth and wildcard sessions.",
      "Zero-knowledge by default: encryption keys never leave the browser; server holds no decryption capability outside lock-session and legacy migration.",
      "Offline writes sync with zero reported lost entries across airplane-mode and tunnel tests (20+ forced disconnects).",
      "Flashback reads served from Redis cache with p95 under 90ms; diary open p95 under 350ms on Hetzner-class hardware.",
      "Media upload to R2 with ownership checks and broken-reference cleanup - delete purges DB rows and stored objects.",
      "Honest limit: single-region deploy, no public status page yet; next is backups drill + multi-region reads.",
    ],

    futurePlans: [
      "Publish a public status page and automated backup-restore drills.",
      "Add multi-region read replicas for flashbacks and search.",
      "Ship native-feeling mobile PWA install flow with background sync.",
      "Add yearly-print export (PDF book of a year of entries).",
    ],

    technologies: [
      { name: "Next.js", icon: Next },
      { name: "TypeScript", icon: Typescript },
      { name: "PostgreSQL", icon: Postgres },
      { name: "Prisma", icon: Prisma },
      { name: "Redis", icon: Redis },
      { name: "Tailwind", icon: Tailwind },
      { name: "Turborepo", icon: Turborepo },
    ],
  },
  {
    slug: "project-intelligence-agent",

    title: "Project Intelligence Agent",

    description:
      "An agentic RAG system that syncs GitHub issues, PRs, and commits into Postgres + pgvector and answers grounded questions with citations via a LangGraph agent.",

    image: "/pia.png",

    status: "Completed",

    links: {
      github: "https://github.com/niladri-gudu/Project-Intelligence-Agent",
    },

    timeline: "3 weeks",

    role: "Backend Engineer",

    team: "Solo",

    overview:
      "PIA turns fragmented engineering history into a conversational layer - deliberately not an LLM wrapper. A BullMQ sync engine (github-sync → embedding-index) normalizes GitHub data into provider-independent documents, chunks (1000/200), embeds with Gemini, and stores in pgvector. Questions flow through LangGraph: input guardrail → memory retrieval → decompose into 1–5 plans (semantic/activity/hybrid) → parallel retrieve → evidence evaluation → refinement loop (max 2) → grounded generation with [Source N] citations → output guardrail. 35 Vitest tests; 6/6 eval cases ≥ 0.75 with LangSmith traces per run.",

    whatUsersCanDo: [
      "Sync any GitHub repo (issues, PRs, commits) idempotently - re-syncs never duplicate.",
      "Ask natural-language questions about the codebase history with cited sources.",
      "Resolve temporal queries ('this week', 'last month') over occurredAt/mergedAt ranges.",
      "Build durable project memory (facts/decisions) that is recalled but never cited as evidence.",
      "Inspect every run in LangSmith: decomposition, retrieval, evaluation, refinement, generation.",
      "Run the LLM-as-judge eval suite (6 cases) with scores attached as run feedback.",
    ],

    whyIBuiltThis: [
      "To practice retrieval systems where wrong answers cost trust: evaluation + refinement over naive top-k.",
      "Tradeoff: normalize-before-persist (NormalizedDocument) over raw GitHub schema passthrough - slower ingestion, but retrieval, agent, and UI stay provider-independent (Jira-ready).",
      "Tradeoff: evidence-evaluation + max-2 refinement loop over single-shot RAG - 2-3 extra LLM calls per hard question, but hallucinations become honest 'could not verify'.",
      "Tradeoff: guardrails that degrade to safe refusal over 500s - a refused answer beats a confident fabrication.",
      "To learn pgvector operations: cosine KNN with per-document dedup, 50-chunk context cap, and ANN path for larger corpora.",
    ],

    afterLaunchImpact: [
      "Sync engine chains BullMQ jobs reliably: 1k-issue test repo ingested with zero duplicates across 3 re-syncs (unique on sourceType+sourceId+documentType).",
      "Retrieval capped at 50 unique chunks keeps generation prompts bounded; hybrid plans merge semantic KNN and date-filtered SQL with cross-plan dedup.",
      "Eval suite scores 6/6 ≥ 0.75 (all 1.00 on seeded facebook/react): technical, activity, refusal-without-fabrication, and memory-vs-evidence separation all pass.",
      "Memory dedup at ≥ 0.9 cosine and recall at ≥ 0.7 keeps long-running project context without polluting citations.",
      "35 Vitest tests cover graph, decomposition, refinement, guardrails, and memory; strict typecheck + lint + build are release gates.",
      "Honest limits: no auth (CORS + validation only, not for public hosting), single dev GitHub token, credentials in plaintext - auth + encrypted per-workspace credentials are the documented next step.",
    ],

    futurePlans: [
      "Add per-user auth with encrypted per-connection credentials.",
      "Add Jira provider on the normalized-document abstraction + GitHub App webhooks for incremental sync.",
      "Add HNSW/ivfflat ANN indexes for larger corpora and SSE streaming answers.",
      "Expose an MCP tool interface for external agent clients.",
    ],

    technologies: [
      { name: "Next.js", icon: Next },
      { name: "TypeScript", icon: Typescript },
      { name: "LangGraph", icon: LangGraph },
      { name: "LangChain", icon: Langchain },
      { name: "PostgreSQL", icon: Postgres },
      { name: "Prisma", icon: Prisma },
      { name: "Redis", icon: Redis },
      { name: "BullMQ", icon: BullMQ },
      { name: "Express", icon: Express },
      { name: "Turborepo", icon: Turborepo },
    ],
  },
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
      "Transcodex is a distributed video pipeline (upload → transcode → stream) built under single-region, single-box constraints: a 4 vCPU worker host, S3-compatible storage, and Redis as the only shared state. The API never touches FFmpeg - it takes multipart uploads and enqueues jobs; BullMQ workers own transcoding, thumbnails, captions, and progress fanout via Socket.IO + Redis Pub/Sub. Tested to 4 concurrent 1080p encodes with API p95 under 120ms while workers were pegged.",

    whatUsersCanDo: [
      "Upload multi-GB video files using S3 multipart uploads with resume on failure.",
      "Track transcode progress in realtime over Socket.IO without polling.",
      "Watch adaptive HLS with manual 480p / 720p / 1080p switching, speed control, and subtitles.",
      "Get Whisper-generated captions and searchable transcripts per video.",
      "Chat with a transcript-grounded AI assistant about video content.",
      "Browse auto-generated thumbnails for every processed video.",
    ],

    whyIBuiltThis: [
      "To learn how YouTube-style systems separate upload, processing, and delivery - and where they break under load.",
      "Tradeoff: S3 multipart + server-coordinated parts over direct-to-S3 POSTs, chosen for resume and progress accuracy at the cost of API coordination.",
      "Tradeoff: BullMQ + Redis queues over in-process workers, chosen for retries, DLQ, and horizontal worker scale-out.",
      "Tradeoff: Socket.IO + Redis Pub/Sub over polling/SSE, chosen for room-based progress fanout across API instances.",
      "To push AI past chatbots: captioning, transcript extraction, and grounded Q&A in one pipeline.",
    ],

    afterLaunchImpact: [
      "Multipart uploads in 8 MB parts lifted large-file completion from ~70% (single PUT) to 99%+ across 50+ test uploads up to 5 GB.",
      "BullMQ pipeline sustains 4 concurrent 1080p encodes on a 4 vCPU box - ~3.5 min per 500 MB source to 480p/720p/1080p HLS, queue-lag p95 under 8s at 20 queued jobs.",
      "FFmpeg workers capped at 2 GB RSS with concurrency limits: OOM kills dropped to zero across 100 test encodes; poison jobs retry 3x then land in DLQ with 100% replay success via Bull Board.",
      "Realtime progress fanout every 2s survived API restarts (Redis-backed state) with zero stuck progress bars in disconnect tests.",
      "Whisper captions + Gemini transcript chat answered grounded questions with citations; API held p95 under 120ms at 200 rps while workers were saturated.",
      "Single-region transcode cost ~$0.11/hr on Hetzner 4 vCPU vs ~$0.45/hr managed - documented limit: no GPU, no CDN, cold starts on first segment.",
    ],

    futurePlans: [
      "Add CDN + signed HLS URLs for global delivery.",
      "Introduce GPU-accelerated transcoding and per-title bitrate ladders.",
      "Add vector search over transcripts with timestamp-linked AI answers.",
      "Deploy autoscaled worker pools with queue-lag-based scaling.",
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

    status: "Completed",

    links: {
      github: "https://github.com/niladri-gudu/strata",
    },

    timeline: "3 weeks",

    role: "Backend Engineer",

    team: "Solo",

    overview:
      "Strata is a backend-first social platform built to answer one question: what breaks when notifications, feeds, and presence all go realtime? Constraint was a single Postgres + Redis pair serving 3 API instances. Notifications fan out through BullMQ workers with a Dead Letter Queue and replay dashboard; Socket.IO rooms sync over the Redis adapter with sticky sessions; counts and feed pages sit behind Redis caching with explicit invalidation. Tested to 500 concurrent sockets with notification p95 under 400ms.",

    whatUsersCanDo: [
      "Create accounts with JWT sessions, post, like, comment, and follow/unfollow.",
      "View a paginated feed built from the follow graph.",
      "Receive realtime notifications for follows, likes, and comments with instant unread counts.",
      "See online presence and last-seen status in realtime.",
      "Inspect queues, workers, health, and replay history in Bull Board.",
    ],

    whyIBuiltThis: [
      "To move past CRUD and practice reliability engineering: retries, DLQs, replay, and recovery metrics.",
      "Tradeoff: fan-out-on-write for notifications (fast reads, bursty writes) vs fan-out-on-read for feeds (cheap writes, slower reads) - documented per path.",
      "Tradeoff: Redis-cached notification counts over live COUNT(*) queries - 60% fewer DB reads at the cost of explicit invalidation on every write.",
      "Tradeoff: Socket.IO + Redis adapter with sticky sessions over bare WebSockets - room sync across instances at the cost of LB affinity.",
      "To build ops muscle: queue metrics, worker metrics, and replay tooling, not just features.",
    ],

    afterLaunchImpact: [
      "Event-driven notification pipeline (BullMQ + Redis Pub/Sub) delivers p95 under 400ms at 500 concurrent sockets across 3 API instances.",
      "Dead Letter Queue with replay dashboard recovered 98%+ of poison notification jobs in 1k-job chaos tests (5 attempts, exponential backoff, then DLQ).",
      "Redis caching for notification counts and feed pages hit ~87% and cut repeated DB queries by ~60%.",
      "Presence tracking via Redis TTLs survived rolling restarts with zero ghost-online users after 60s reconciliation.",
      "Redis-blip test (30s outage): zero lost notifications - jobs retried with backoff and drained with queue-lag p95 under 12s on recovery.",
      "Socket disconnect test: clients resync missed notifications on reconnect; honest limit is single-region Redis as SPOF, documented next step is Sentinel/cluster.",
    ],

    futurePlans: [
      "Ship fan-out-on-write feed precomputation with timeline cache warming.",
      "Put 3 API instances behind a load balancer with sticky-session demo and failover notes.",
      "Add media upload + moderation pipeline as a second BullMQ flow.",
      "Build a full ops dashboard for notifications, feeds, and recovery rate.",
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
      "WalletX is a production-grade ERC-4337 smart wallet implementation that demonstrates the full Account Abstraction stack - from UserOperation construction to on-chain execution. Instead of regular Ethereum transactions, users sign UserOperations that flow through a bundler, get validated by a custom VerifyingPaymaster, and execute via a programmable smart wallet contract. The project showcases gasless UX, delegated session key access, and a real-time transaction lifecycle visualizer.",

    whatUsersCanDo: [
      "Connect their EOA wallet via RainbowKit and interact with a deployed smart wallet.",
      "Send gasless transactions where the VerifyingPaymaster covers all gas fees.",
      "Create session keys with fine-grained permissions - restricted target address, ETH cap, and expiry time.",
      "Execute transactions using session keys without owner signature involvement.",
      "Track the full UserOperation lifecycle in real-time - from signing to bundler submission to on-chain confirmation.",
      "Revoke session keys instantly to remove delegated access.",
      "View confirmed transactions with direct Etherscan links.",
    ],

    whyIBuiltThis: [
      "To deeply understand ERC-4337 Account Abstraction - the most important UX primitive in Web3.",
      "To implement a custom VerifyingPaymaster from scratch and understand the signature verification flow.",
      "To master the UserOperation lifecycle - how bundlers, EntryPoints, and smart wallets interact.",
      "To build session keys as a senior-level feature that demonstrates programmable wallet logic.",
      "To complete Phase 6 of the '6 Projects in 60 Days' challenge with the most infrastructure-heavy project yet.",
    ],

    afterLaunchImpact: [
      "Successfully implemented a custom VerifyingPaymaster that reconstructs userOpHash internally to match EntryPoint's computation - solving a non-trivial signature verification challenge.",
      "Built a complete two-hash signing flow where the paymaster signs with empty paymasterData and the wallet signs after paymasterData is finalized.",
      "Implemented session key enforcement at the contract level using assembly-based calldata decoding to validate target address and ETH amount per transaction.",
      "Integrated Pimlico bundler with sponsorship policy management to ensure the custom paymaster is respected.",
      "Delivered a real-time transaction lifecycle UI that animates through each stage of the UserOperation flow.",
    ],

    futurePlans: [
      "Add multi-owner support and on-chain multisig validation.",
      "Implement ERC-20 token gas payments via a token paymaster.",
      "Add social recovery - allow trusted guardians to restore wallet access.",
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
      "To practice 'protocol thinking'-understanding how every state transition impacts systemic risk.",
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
      "To explore hybrid architecture-balancing blockchain finality with Postgres-backed state tracking.",
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
