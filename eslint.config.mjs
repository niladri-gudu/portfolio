import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Enforce modular boundaries:
      // - lib/ is cross-cutting only (no feature imports from lib)
      // - features must not deep-import each other's internals (use index barrels)
      // - ban legacy paths removed during modularization
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/components/data/*", "@/components/sections/*"],
              message: "Use @/features/*, @/data/* or @/shared/* instead (legacy path).",
            },
            {
              group: ["@/components/search/*", "@/components/guestbook/*", "@/components/blog/*"],
              message: "Use @/features/search/*, @/features/guestbook/*, @/features/blog/* instead.",
            },
            {
              group: ["@/components/spotifyCard/*", "@/components/projectCard/*", "@/components/workCard/*"],
              message: "Use @/features/spotify/*, @/features/projects/*, @/features/work/* instead.",
            },
            {
              group: ["@/hooks/*"],
              message: "Hooks moved: use @/features/search/hooks/* or @/shared/hooks/* instead.",
            },
            {
              group: ["@/lib/blog", "@/lib/search", "@/lib/spotify", "@/lib/redis", "@/lib/motion"],
              message: "Feature libs live in @/features/*/lib or @/shared/motion/*.",
            },
          ],
        },
      ],
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "public/project-image-html/html2canjas.min.js",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
