/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const { override, addWebpackAlias, addWebpackResolve } = require('customize-cra');
const dotenv = require('dotenv');

dotenv.config();

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, './src')
  }),
  addWebpackResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] })
);
