module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img")
    eleventyConfig.addPassthroughCopy("css")
    eleventyConfig.addPassthroughCopy("js")
    eleventyConfig.addPassthroughCopy("vendor")
    return {
        markdownTemplateEngine: "liquid",
        dir: {
            includes: "_includes",
            layouts: "_layouts"
        }
    }

};