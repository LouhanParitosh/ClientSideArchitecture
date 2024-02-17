const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "hostApp",
    publicPath: "auto",
    scriptType: "text/javascript"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
    extensions: ['.ts', '.js'] // Add this line to resolve TypeScript files
  },
  experiments: {
    outputModule: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Apply ts-loader for .ts files
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.worker\.ts$/, // Apply raw-loader for worker files
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "hostApp",
      remotes: {
        "mfeApp": "mfeApp@http://localhost:4300/remoteEntry.js",
        "mfeApp2": "mfeApp2@http://localhost:4400/remoteEntry.js",

      },
      shared: share({
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

        ...sharedMappings.getDescriptors()
      })

    }),
    sharedMappings.getPlugin()
  ],
};
