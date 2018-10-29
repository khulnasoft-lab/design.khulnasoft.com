import path from 'path';
import fs from 'fs';
import fm from 'front-matter';

export default function() {
  this.extendBuild((config, { isClient }) => {
    // As we only do static we also only need to prepare it for the client
    if (isClient) {
      const baseContentsDir = path.resolve(__dirname, '../static/contents/');
      const outputDir = path.resolve(
        __dirname,
        '../static/contents/components/'
      );

      if (!fs.existsSync(baseContentsDir)) {
        fs.mkdirSync(baseContentsDir);
      }
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
      }

      fs.readdir(
        path.resolve(__dirname, '../contents/components/'),
        (err, items) => {
          if (err) throw err;

          items.forEach(item => {
            fs.readFile(
              path.resolve(__dirname, `../contents/components/${item}`),
              'utf8',
              (readErr, data) => {
                if (readErr) throw readErr;

                const content = fm(data);
                fs.writeFile(
                  `${outputDir}/${item.replace(/.md/g, '.json')}`,
                  JSON.stringify(content),
                  writeErr => {
                    if (writeErr) throw writeErr;
                  }
                );
              }
            );
          });
        }
      );
    }
  });
}
