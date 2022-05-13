const moment = require("moment");
//const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
const svgSprite = require("eleventy-plugin-svg-sprite");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItEmoji = require("markdown-it-emoji");
const pluginTOC = require("eleventy-plugin-toc");
const pluginDropcap = require('eleventy-plugin-dropcap');


const mdOptions = {
    html: true,
    linkify: false,
    typographer: true,
    breaks: true,
    quotes: ['“”‘’','«»„“']
};

module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("assets/sass");
    eleventyConfig.addPassthroughCopy('assets/img');
    eleventyConfig.addPassthroughCopy('assets/files');

    eleventyConfig.addNunjucksFilter("date", function (date, format, locale) {
        locale = locale ? locale : "en";
        moment.locale(locale);
        return moment(date).format(format);
    });

    eleventyConfig.addPlugin(svgSprite, {
        path: "assets/vscode-icons",
        defaultClasses: "default-svg"
    });

/*    eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
        name: "serverless",
        functionsDir: "src/_includes/functions/"
    })
*/
    // Markdown
    eleventyConfig.setLibrary(
        "md",
        markdownIt(mdOptions)
            .use(markdownItAnchor)
            .use(markdownItEmoji)
    );

    eleventyConfig.addPlugin(pluginTOC, {
        tags: ["h2", "h3", "h4", "h5"],
        wrapper: "div"
    });

    eleventyConfig.addPlugin(pluginDropcap, {
        dropCapClass: 'first-letter',
        hiddenTextClass: 'screen-reader-only'
      })


    // Locale collections
    eleventyConfig.addCollection("posts_en", function (collection) {
        return collection.getFilteredByGlob("src/en/posts/*.md");
    });

    eleventyConfig.addCollection("posts_ru", function (collection) {
        return collection.getFilteredByGlob("src/ru/posts/*.md");
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
};
