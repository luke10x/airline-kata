const formatOptions = {
  snippetSyntax: 'node_modules/cucumber-typescript-snippets/index.js',
};

let common = [
  'features/**/*.feature',
  '--require src/cucumber/**/*.ts',
  '--require-module ts-node/register',
  '--publish-quiet',
  `--format-options '${JSON.stringify(formatOptions)}'`,
  '--format @cucumber/pretty-formatter',
].join(' ');

module.exports = {
  default: common,
};
