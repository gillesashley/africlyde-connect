import { defineNitroConfig } from "nitro/config";

// Single-file server bundle: avoids a rolldown circular-chunk bug (__exportAll)
// that crashes SSR with split chunks. Revisit when nitro beta fixes chunking.
export default defineNitroConfig({
  inlineDynamicImports: true,
});
