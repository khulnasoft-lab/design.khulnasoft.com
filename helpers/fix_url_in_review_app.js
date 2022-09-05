const fixUrlInReviewApp = process.env.REVIEW_APP_ROOT
  ? (url) => {
      const newUrl = new URL(process.env.REVIEW_APP_ROOT);
      newUrl.pathname += url.startsWith('/') ? url : `/${url}`;
      // eslint-disable-next-line no-console
      console.log(`RA URL fix: ${url} => ${newUrl}`);
      return newUrl.toString();
    }
  : (url) => url;

module.exports = fixUrlInReviewApp;
