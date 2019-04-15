const { CIRCLE_BRANCH } = process.env;

module.exports = {
  exitcode: true,
  browser: {
    width: 1280,
    height: 1024,
  },
  batchName: `web-toolkit/${CIRCLE_BRANCH}`,
};
