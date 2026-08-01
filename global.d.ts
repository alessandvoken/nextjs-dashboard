// Ambient declaration for plain CSS side-effect imports, e.g. `import "@/app/ui/global.css"`.
// Next.js's built-in types declare CSS Modules (`*.module.css`) but not plain global stylesheets,
// so editors running with `noUncheckedSideEffectImports` report:
//   "Cannot find module or type declarations for side-effect import of '*.css'".
// The more-specific `*.module.css` declaration from Next still takes precedence for CSS Modules.
declare module "*.css";
