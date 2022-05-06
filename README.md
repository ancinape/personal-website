# Personal Website Source Code
## [letsgettoknow.me](letsgettoknow.me)

![website screenshot](/github/personalwebsite.jpg)

A personal website to host my blog, resume, and contact info.

## Reasoning
I have long wanted a personal website for hosting my articles and projects. I am a backend programmer by day and wanted a platform that is flexible for my kind. I stumbled upon SSGs then Eleventy and fell in love with its simplicity and versatility. The project is generated with Eleventy, in my native Russian tongue and English.

The design of the website is minimal and retro. Retro in both sense of the word. It is meant to invoke the feeling of looking at old paper, with an 80's-like computer GUI hovering above. Edges are sharp, with large gaps between elements for comfortable reading. The color scheme is [Belafonte Day](https://github.com/mbadolato/iTerm2-Color-Schemes#belafonte-day), chosen because of its contrasting but calming mix of browns. The background is covered with a grainy noise, to complement the paper-like colors. The fonts are [Elisabethische](https://fontlibrary.org/en/font/eiisabethische) and Liberation Serif, both FOSS-licensed, compatible with the Cyrillic script, and serif.

I want my website to be accessible to as many people as possible. It is the reason there are two languages available. However, I have yet to explicitly follow any web accessibility guidelines. Something to work on in the future. 😄

## Features
### 🗣 Bilingual
Inspired by [Multilingual sites with Eleventy](https://www.webstoemp.com/blog/multilingual-sites-eleventy/) and [Eleventy-multilingual starter](https://github.com/lea37/eleventy-multilingual), the website is available in two languages: English and Russian. This includes automatic quotes translation by markdown-it and appropriate date formatting by moment. Any page can switch between English and Russian by selecting the appropriate language on the top right.

### 🪨 Static Site
Generated with Eleventy (11ty), the website is a simple, static site with few clientside processes (exceptions being the JavaScript toy on the home page, and the language switcher on the landing page). The source utilizes between multiple languages, namely HTML, Nunjucks, Liquid, Markdown, and JavaScript with styling by Sass.

### 📱 Responsive Design
Inspired by [Using SASS Mixins for Responsive Web Design](https://www.ching-wang.io/posts/Using-sass-mixins-for-responsive-web-design/), Sass enables the site to be responsive between mobile and desktop interfaces. The navigation panel and language switcher remains on the sides unless viewed through a mobile device, in which they take the top and bottom of the page respectively.

## Dependencies
* 11ty/eleventy
* sass
* moment
* npm-run-all

### 11ty Plugins
* markdown-it
* markdown-it-anchor
* markdown-it-emoji
* eleventy-plugin-toc
* eleventy-plugin-svg-sprite

## Installation
To run your own instance of the website, follow these steps on your commandline.

```sh
> git clone https://github.com/ancinape/personal-website.git
> cd personal-website
> npm install
> npm start
```

## Bugs
* Text overflows in mobile view
* Missing aria-labels
* Markdown not fully tested with my style

## Structure
The project's structure is explained in [STRUCTURE](/STRUCTURE.md) with notes for each directory. Useful if you want to learn what each part of the project does.

## License
All personal work released into the public domain. See [LICENSE](/LICENSE.md) for details.

## Inspirations
### Bilingual Setup
["Multilingual sites with Eleventy"](https://www.webstoemp.com/blog/multilingual-sites-eleventy/) by [Jérôme Coupé](https://www.webstoemp.com)

[Eleventy-multilingual starter](https://github.com/lea37/eleventy-multilingual) by [Léa Tortay](https://github.com/lea37) and [Frank Taillandier](https://github.com/DirtyF)

### Design
[Elisabethische Font](https://fontlibrary.org/en/font/eiisabethische) by [Салиховъ/Salychow](http://budclub.ru/w/worotnikow_m_g/)

[Belafonte Day Color Scheme](https://github.com/mbadolato/iTerm2-Color-Schemes#belafonte-day) by [Jan T. Sott](https://github.com/idleberg)

[Noise Background from "One Page Résumé Site"](https://css-tricks.com/one-page-resume-site/) by [Chris Coyier](https://css-tricks.com/author/chriscoyier/)

### Sass Helpers
[@for Loop for heading styles](https://stackoverflow.com/a/38467145) by [Fabian Mebus](https://stackoverflow.com/users/3688622/fabian-mebus)

["Using SASS Mixins for Responsive Web Design"](https://www.ching-wang.io/posts/Using-sass-mixins-for-responsive-web-design/) by [Ching Wang](https://www.ching-wang.io/)

[Sass Reset](https://www.boag.online/blog/css-reset) by [Fraser Boag](https://www.boag.online/)