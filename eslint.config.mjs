import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

// Keep ESLint pinned to 9.x. eslint-config-next depends on
// eslint-plugin-react, whose peer range stops at ^9.7, and it parses .js/.mjs
// files with Next's bundled Babel parser, which doesn't implement the
// scopeManager.addGlobals() that ESLint 10 requires (crashes on every
// non-TS file).
const eslintConfig = defineConfig([
  ...nextVitals,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
