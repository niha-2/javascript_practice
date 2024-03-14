import { program } from 'commander';
import * as fs from 'node:fs/promises'
import { md2html } from './md2html.js';

// gfmオプションを定義
program.option('--gfm', 'GFMを有効にする');
program.parse(process.argv);
const filePath = program.args[0];

// コマンドライン引数で指定されなかったオプション値を上書き
const cliOptions = {
  gfm: false,
  ...program.opts()
}

fs.readFile(filePath, { encoding: 'utf8' }).then(file => {
  const html = md2html(file, cliOptions);
  console.log(html);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
