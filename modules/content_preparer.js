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

      const componentInfos = [];

      const files = fs.readdirSync(
        path.resolve(__dirname, '../contents/components/')
      );

      files.forEach(item => {
        const fileData = fs.readFileSync(
          path.resolve(__dirname, `../contents/components/${item}`),
          'utf8'
        );
        if (fileData) {
          const content = fm(fileData);
          fs.writeFile(
            `${outputDir}/${item.replace(/.md/g, '.json')}`,
            JSON.stringify(content),
            writeErr => {
              if (writeErr) throw writeErr;
            }
          );

          componentInfos.push({
            id: item.replace('.md', ''),
            name: content.attributes.name,
            hasVueComponent:
              content.attributes.vueComponents &&
              content.attributes.vueComponents.length > 0,
            hasInfo: content.body.length > 0
          });
        }
      });

      fs.writeFile(
        path.resolve(__dirname, '../static/contents/contentTree.json'),
        JSON.stringify({
          components: componentInfos
        }),
        writeErr => {
          if (writeErr) throw writeErr;
        }
      );
    }
  });
}
