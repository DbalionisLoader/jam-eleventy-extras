module.exports = function(eleventyConfig) {
    // Return your Object options:
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/js");
    config.addLayoutAlias("base", "./_includes/base.njk");
    return {
      dir: {
        input: "src",
        output: "dist",
        data: "_data"
      }
    }
  };