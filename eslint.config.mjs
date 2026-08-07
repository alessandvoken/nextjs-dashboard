import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    // eslint-plugin-react@7.37.5 crasha con ESLint 10 quando prova a
    // rilevare la versione di React (usa context.getFilename(), rimosso).
    // Dichiararla esplicitamente salta del tutto quel codice.
    settings: { react: { version: '19.0' } },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
