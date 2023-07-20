module.exports = function(eleventyConfig) {
    // Return your Object options:

    eleventyConfig.addPassthroughCopy("src/js");

    return {
      dir: {
        input: "src",
        output: "dist",
        data: "_data"
      }
    }
  };