module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['google'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'valid-jsdoc': 0,
    'require-jsdoc': 0,
    'object-curly-spacing': 1,
    indent: ['error', 2],
    'no-unused-vars': 1,
    'new-cap': 0,
    'prefer-template': 2,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-first-prop-new-line': 'error',
    'react/jsx-max-props-per-line': ['error', { maximum: 2 }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,
  },
};
