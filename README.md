# 🚀 React/Vite: JavaScript to TypeScript Migration Guide

This repository is a personal training ground and technical documentation for migrating React applications from JavaScript to TypeScript. It follows modern industry standards for Vite.js environments.

---

## 🛠 Context
The goal is to transition an existing React/Vite project to TypeScript using a **progressive, non-breaking approach** (Bottom-Up strategy).

## 📋 Step-by-Step Migration Process

### 1. Install Dependencies (Locally)
Always install TypeScript and types as development dependencies to avoid global version conflicts.

```bash
npm install -D typescript @types/react @types/react-dom
(yarn add -D typescript @types/react @types/react-dom)

----------------------------------------------------

2. Configure TypeScript (tsconfig.json)
Create a tsconfig.json file at the root. The "allowJs": true option is critical for a gradual migration.

{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "module": "ESNext",
    "skipLibCheck": true,
    "allowJs": true, 

    /* Bundler mode (Optimized for Vite) */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Strict Rules */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

----------------------------------------------------

3. Configure Node Environment (tsconfig.node.json)
Used to handle Vite configuration files properly.

{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.js", "vite.config.ts"]
}

----------------------------------------------------

4. Add Verification Script (package.json)
Add a script to run the TypeScript compiler in "watchdog" mode (checking for errors without generating files).
```
"scripts": {
  "typecheck": "tsc --noEmit"
}
```
Usage: Run npm run typecheck to list all remaining type errors.

----------------------------------------------------

5. Migration Strategy: The "Bottom-Up" Approach
To ensure stability, we migrate from the smallest components (leaves) up to the root (App).

Select a leaf component (e.g., Button.jsx).

Rename the extension to .tsx.

Define Types/Interfaces for the component props.

Verify the app still runs.

Repeat for the parent components.
