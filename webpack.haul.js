import path from 'path';

const appPath = path.resolve(__dirname, 'app');

module.exports = ({ platform }, defaults) => ({
  entry: `./index.js`,
  resolve: {
    ...defaults.resolve,
    alias: {
      components: path.join(appPath, 'components'),
      containers: path.join(appPath, 'containers'),
      services: path.join(appPath, 'services'),
      utils: path.join(appPath, 'utils'),
      views: path.join(appPath, 'views'),
    }
  }
});