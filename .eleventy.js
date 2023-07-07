const rimraf = require("rimraf");

module.exports = function (eleventyConfig) {
  // delete contents of public to ensure removed files are removed from the final build
  rimraf.windows.sync("public/")

  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addPassthroughCopy("./src/js");

// // the below three configs allow for excluding files from builds using draft: true
  // // https://www.11ty.dev/docs/quicktips/draft-posts/ 
  // When permalink is false, the file is not written to disk
  eleventyConfig.addGlobalData("eleventyComputed.permalink", function () {
    return (data) => {
      // Always skip during non-watch/serve builds
      if (data.draft && !process.env.BUILD_DRAFTS) {
        return false;
      }

      return data.permalink;
    }
  });

  // When eleventyExcludeFromCollections is true, the file is not included in any collections
  eleventyConfig.addGlobalData("eleventyComputed.eleventyExcludeFromCollections", function () {
    return (data) => {
      // Always exclude from non-watch/serve builds
      if (data.draft && !process.env.BUILD_DRAFTS) {
        return true;
      }

      return data.eleventyExcludeFromCollections;
    }
  });

  eleventyConfig.on("eleventy.before", ({ runMode }) => {
    // Set the environment variable
    if (runMode === "serve" || runMode === "watch") {
      process.env.BUILD_DRAFTS = true;
    }
  });
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },
  };
};