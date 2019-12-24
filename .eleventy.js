module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets")
    return {
        markdownTemplateEngine: "liquid",
        dir: {
            includes: "_includes",
            layouts: "_layouts"
        }
    }

};