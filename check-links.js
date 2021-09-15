const { SiteChecker } = require('broken-link-checker');
const consola = require('consola');

class BrokenLinksChecker {
  constructor() {
    this.onLinkFound = this.onLinkFound.bind(this);
    this.onEnd = this.onEnd.bind(this);

    this.brokenLinks = {};
    this.siteChecker = new SiteChecker(
      {},
      {
        link: this.onLinkFound,
        end: this.onEnd,
      },
    );
  }

  startScan() {
    this.siteChecker.enqueue(process.env.REVIEW_APP_URL || 'http://172.16.123.1:2018/');
  }

  onLinkFound(link) {
    if (!link.broken) {
      return;
    }
    this.brokenLinks[link.url.resolved] = this.brokenLinks[link.url.resolved] || [];
    this.brokenLinks[link.url.resolved].push(link);
  }

  onEnd() {
    const urls = Object.keys(this.brokenLinks);

    if (!urls.length) {
      consola.success('No broken link found.');
    } else {
      urls.forEach((url) => {
        const links = this.brokenLinks[url];
        const message = `Broken link ${url} found in ${links.size} pages:\n\t${links
          .map((link) => link.base.resolved)
          .join('\n\t')}`;
        consola.warn(message);
      });
    }
  }
}

console.log(process.env.REVIEW_APP_URL);

const brokenLinksChecker = new BrokenLinksChecker();
brokenLinksChecker.startScan();
