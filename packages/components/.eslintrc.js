module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }],
    'react/button-has-type': [1, {
      button: true,
      submit: true,
      reset: true
    }],
    'react/jsx-props-no-spreading': [1, {
      html: 'ignore',
      custom: 'ignore',
      explicitSpread: 'ignore'
    }],
    'import/extensions': [1, 'always']
  },
  ignorePatterns: ['.eslintrc.js']
};