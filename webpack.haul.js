import path from 'path';

const appPath = path.resolve(__dirname, 'app');

module.exports = ({ platform }, defaults) => ({
  entry: `./index.js`,
  resolve: {
    ...defaults.resolve,
    alias: {
      assets: path.join(appPath, 'assets'),
      components: path.join(appPath, 'components'),
      containers: path.join(appPath, 'containers'),
      constants: path.join(appPath, 'constants'),
      services: path.join(appPath, 'services'),
      utils: path.join(appPath, 'utils'),
      scenes: path.join(appPath, 'scenes'),
      sagas: path.join(appPath, 'sagas'),
      actions: path.join(appPath, 'actions'),
      reducers: path.join(appPath, 'reducers'),
    }
  }
});