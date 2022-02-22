const moment = require("moment");
module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("assets/sass");
    eleventyConfig.addPassthroughCopy('src/js/');

    eleventyConfig.addNunjucksFilter("date", function (date, format, locale) {
        locale = locale ? locale : "en";
        moment.locale(locale);
        return moment(date).format(format);
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
