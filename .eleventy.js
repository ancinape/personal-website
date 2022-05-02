const moment = require("moment");
const svgSprite = require("eleventy-plugin-svg-sprite");

module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("assets/sass");
    eleventyConfig.addPassthroughCopy('assets/img');

    eleventyConfig.addNunjucksFilter("date", function (date, format, locale) {
        locale = locale ? locale : "en";
        moment.locale(locale);
        return moment(date).format(format);
    });

    eleventyConfig.addPlugin(svgSprite, {
        path: "assets/vscode-icons",
        defaultClasses: "default-svg"
    });

                       
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
