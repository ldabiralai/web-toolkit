const { CIRCLE_BRANCH } = process.env;

module.exports = {
  browser: {
    width: 1280,
    height: 1024,
  },
  batchName: `web-toolkit/${CIRCLE_BRANCH}`,
};
