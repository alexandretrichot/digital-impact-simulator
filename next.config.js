const withImages = require("next-images");
const path = require("path");

module.exports = {
  ...withImages(),
  target: "serverless",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
