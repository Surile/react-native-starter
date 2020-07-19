module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: './src',
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@pages': './src/pages',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@store': './src/store',
        },
      },
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
        // decoratorsBeforeExport: true,
      },
    ],
  ],
};
