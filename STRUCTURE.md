```
Structure                           Notes
.                                   Project root
├── assets                          Contains Sass and images
│   ├── img                         Directory for images
│   │   ├── posts                   Images for articles
│   │   └── noise.jpg               Gentle noise used on background for a paper-like appearance
│   ├── sass                        Directory for Sass
│   │   ├── _cssclear.sass          Resets CSS styling
│   │   ├── _langswitcher.sass      Language Switcher style
│   │   ├── _var.sass               Font and color variables used by other styles
│   │   └── style.sass              Universal style
│   └── vscode-icons                Programming language icons from Visual Studio Code
├── github                          Assets for this readme
├── node_modules*                   Directory for project dependencies
├── public*                         The "actual website" that is visible
├── src                             Source code that generates public/
│   ├── _data                       Directory for English and Russian metadata
│   ├── _includes                   Directory for Layouts, Partials, and JavaScript
│   │   ├── js                      My JavaScript toys seen on the Home page
│   │   ├── partials                Partials, reusable Nunjucks code, for use in certain layouts
│   │   ├── base.njk                Main layout that every other page references
│   │   ├── blogpost.njk            Layout for individual articles or blogposts
│   │   └── home.njk                Layout for all other pages
│   ├── en                          Directory for English pages
│   │   ├── pages                   English pages
│   │   ├── posts                   English articles
│   │   └── en.json                 Classifies directory as English, to make language switching work
│   ├── ru                          Directory for Russian pages
│   │   ├── pages                   Russian pages
│   │   ├── posts                   Russian articles
│   │   └── ru.json                 Classifies directory as Russian, to make language switching work
│   └── index.njk                   Landing page, presents language switcher in user's language (EN or RU)
├── .eleventy.js                    Eleventy config file where directory structure and plugins are defined
├── .gitignore                      Git ignore file, to public/ and node_modules/
├── LICENSE                         Project license
├── package-lock.json               Instructs necessary packages to install for NPM
├── package.json                    NPM package metadata and commands for project
└── README.md                       The readme you are reading

*Only appears on deployment, after running npm install or npm start
```