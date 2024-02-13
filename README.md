# Portfolio

## 🚀 Project Structure

Inside of the project, you'll see the following folders and files:

```text
/
├── .github/
│   └── workflowsj/
│       └── deploy.yml
├── .vscode/
│       ├── extensions.json
│       └── launch.json
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Sections
│   │   │   ├── About.astro
│   │   │   ├── Card.astro
│   │   │   ├── Education.astro
│   │   │   ├── Hero.astro
│   │   │   ├── Projects.astro
│   │   │   └── Skills.astro
│   │   └── Section.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── env.d.ts
├── .gitignore 
├── astro.config.mjs
├── cv.json
├── package-lock.json 
├── package.json
├── README.md
├── tailwind.config.mjs
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
