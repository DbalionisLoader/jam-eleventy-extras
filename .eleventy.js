const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
    // Return your Object options:
    eleventyConfig.addPassthroughCopy("./css/style.css");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("assets/images");
    eleventyConfig.addPassthroughCopy("./js");
    eleventyConfig.addPassthroughCopy("bundle.js");

    //Plugins
    eleventyConfig.addPlugin(syntaxHighlight);
    //Update on css changes
    eleventyConfig.addWatchTarget("./css/");

    // Return the smallest number argument how it works who knows
	 eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});

  // Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if(!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if( n < 0 ) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

  //Last modified filter
  eleventyConfig.addFilter("dateModified", (dateString) => {
    dateObj = new Date(dateString);
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy');
  });


  //Date filter using luxon DateTime to extract day/month/year from the full post date
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });



    return {
      dir: {
        input: ".",
        includes: "_includes",
        output: "dist",
        data: "_data"
      }
    }
  };