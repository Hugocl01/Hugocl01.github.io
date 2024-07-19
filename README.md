# Portfolio

## 🚀 Estructura del Proyecto

Dentro del proyecto, encontrarás las siguientes carpetas y archivos:

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
│   │   │   ├── Education.astro
│   │   │   ├── Hero.astro
│   │   │   ├── Languages.astro
│   │   │   ├── Projects.astro
│   │   │   └── Skills.astro
│   │   ├── Image.astro
│   │   ├── Loader.astro
│   │   ├── Section.astro
│   │   └── ThemeChange.astro
│   ├── icons
│   │   ├── AstroIcon.astro
│   │   ├── bootstrap.astro
│   │   ├── css.astro
│   │   ├── git.astro
│   │   ├── Gihub.astro
│   │   ├── html.astro
│   │   ├── javascript.astro
│   │   ├── laravel.astro
│   │   ├── LinkedIn.astro
│   │   ├── Mail.astro
│   │   ├── mysql.astro
│   │   ├── node.astro
│   │   ├── php.astro
│   │   ├── tailwind.astro
│   │   ├── typescript.astro
│   │   └── WorldMap.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── env.d.ts
├── .gitignore 
├── astro.config.mjs
├── cv.json
├── LICENSE.txt
├── package-lock.json 
├── package.json
├── README.md
├── tailwind.config.mjs
└── tsconfig.json
```

## Visión General
Este proyecto es un sitio web de portfolio basado en Astro. Astro es un generador de sitios estáticos moderno que permite construir sitios web más rápidos con un enfoque en el rendimiento y la experiencia del desarrollador.

## Estructura archivos
1. .github/ workflows/ deploy.yml
Flujo de trabajo de GitHub Actions para implementar el proyecto. Probablemente incluya pasos para compilar y desplegar el sitio automáticamente.
2. .vscode/ extensions.json
Archivo de configuración para las preferencias de Visual Studio Code, especificando extensiones recomendadas para el proyecto.
3. .vscode/ launch.json
Archivo de configuración para las preferencias de Visual Studio Code, especificando configuraciones de lanzamiento para depurar el proyecto.
4. public/ favicon.svg
El favicon para el sitio web, típicamente el pequeño icono mostrado en la pestaña del navegador.
5. src/ components/ Sections/
Directorio que contiene componentes Astro para diferentes secciones del portafolio.

+ About.astro: Componente para la sección Acerca de mí.

+ Education.astro: Componente para la sección de Educación.

+ Hero.astro: Componente para la sección de cabecera.

+ Languajes.astro: Componente para la sección de Idiomas

+ Projects.astro: Componente para mostrar detalles de Proyectos.

+ Skills.astro: Componente para mostrar las Habilidades.

6. src/ components/ Section.astro
Componentes generales y secciones que a su vez pueden usar dichos componentes.
7. src/ icons/
Directorio que contiene componentes Astro para diferentes íconos utilizados en el proyecto.
8. src/ layouts/ Layout.astro
Componente de diseño para definir la estructura general del sitio.
9. src/ pages/ index.astro
Punto de entrada principal para el sitio web, probablemente conteniendo la estructura y contenido de la página de inicio.
10.   src/ env.d.ts
Archivo de declaración TypeScript para variables de entorno.
11.   .gitignore
Especifica archivos no rastreados intencionalmente que se deben ignorar en Git.
12.   astro.config.mjs
Archivo de configuración para Astro, donde se definen varias configuraciones y complementos para el proyecto.
13.   cv.json
Archivo JSON que contiene datos para el currículum vitae, posiblemente utilizado para generar contenido dinámico en el sitio web.
14.   package-lock.json
Archivo generado automáticamente utilizado para bloquear las versiones de las dependencias.
15.   package.json
Archivo de configuración para proyectos Node.js, especificando detalles del proyecto y dependencias.
16.    tailwind.config.mjs
Archivo de configuración para Tailwind CSS, un popular marco de trabajo de CSS.
17.    tsconfig.json
Archivo de configuración para TypeScript, especificando opciones del compilador y configuraciones del proyecto.

## Uso
Instalar Dependencias: Ejecutar `npm install` para instalar las dependencias del proyecto.

Actulizar Dependencias: Ejecutar `npm update` para actualizar las dependencias del proyecto.

Iniciar Servidor de Desarrollo: Utilizar `npm run` dev para iniciar el servidor de desarrollo.

Compilar el Proyecto: Para compilar en producción, ejecutar `npm run build`.

Desplegar: El proyecto podría esta configurado para implementarse utilizando GitHub Actions. 