const http = require('http');
const url = require('url');
const { SiteChecker } = require('broken-link-checker');
const consola = require('consola');

class BrokenLinksChecker {
  async init(siteUrl) {
    this.onLinkFound = this.onLinkFound.bind(this);
    this.onEnd = this.onEnd.bind(this);

    this.brokenLinks = {};
    this.siteChecker = new SiteChecker(
      {
        requestMethod: 'get',
      },
      {
        link: this.onLinkFound,
        end: this.onEnd,
      },
    );

    this.siteUrl = await BrokenLinksChecker.getSiteUrl(siteUrl);
    this.startScan();
  }

  static getSiteUrl(siteUrl) {
    return new Promise((resolve) => {
      const { hostname: host, port } = url.parse(siteUrl);
      const options = {
        host,
        port,
        method: 'HEAD',
      };

      const req = http.request(options);
      req.end();

      req.on('error', (error) => {
        consola.error(error);
      });

      req.on('response', (response) => {
        resolve(response.headers?.location || siteUrl);
      });
    });
  }

  startScan() {
    this.siteChecker.enqueue(this.siteUrl);
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
      process.exit(0);
    } else {
      urls.forEach((u) => {
        const links = this.brokenLinks[u];
        const message = `Broken link ${u} found in ${links.length} pages:\n\t${links
          .map((link) => link.base.resolved)
          .join('\n\t')}`;
        consola.error(message);
      });
      process.exit(1);
    }
  }
}

const brokenLinksChecker = new BrokenLinksChecker();
brokenLinksChecker.init(process.env.REVIEW_APP_URL);
