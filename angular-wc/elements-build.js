const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/angular-wc/runtime.js',
    './dist/angular-wc/polyfills.js',
    './dist/angular-wc/scripts.js',
    './dist/angular-wc/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/angular-wc.js');
  await fs.copyFile(
    './dist/angular-wc/styles.css',
    'elements/styles.css'
  );
})();