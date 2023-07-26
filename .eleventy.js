module.exports = function(eleventyConfig) {
    // Return your Object options:
    eleventyConfig.addPassthroughCopy("./css/style.css");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("assets/images");
    eleventyConfig.addPassthroughCopy("./js");

    //Update on css changes
    eleventyConfig.addWatchTarget("./css/");


    return {
      dir: {
        input: ".",
        includes: "_includes",
        output: "dist",
        data: "_data"
      }
    }
  };