import Prism from 'prismjs';
import '../assets/stylesheets/app.scss';

Prism.highlightAll();

// files.forEach(({name, modules}) => {
//   modules.keys().forEach(fileName => {
//     const htmlContent = modules(fileName);

//     const dummyElement = document.createElement('div');
//     dummyElement.innerHTML = htmlContent;
//     document.body.appendChild(dummyElement);
//     const title = dummyElement.querySelector('h1');

//     const codeBlocks = dummyElement.querySelectorAll('pre > code');
//     codeBlocks.forEach(block => {
//       block.classList.add('language-html');
//       const preElement = block.parentNode;
//       preElement.insertAdjacentHTML('afterend', '<div>');
//       const el = preElement.nextSibling;
//       const vueComponent = new Vue({
//         el,
//         template: `
//           <div class="component-preview">${block.innerText}</div>
//         `,
//       });
//     });
//   });
// });
