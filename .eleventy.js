module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./assets/sass");
    eleventyConfig.addPassthroughCopy("./assets/css");


    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
};
