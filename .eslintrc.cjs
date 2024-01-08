module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', '@typescript-eslint', 'unused-imports', 'prettier', 'react', 'react-hooks'],
  extends: ['prettier'],
  rules: {
    'no-console': ['error', { allow: ['error'] }],
    camelcase: 0,
    'no-param-reassign': 0,
    'react/jsx-props-no-spreading': 0,
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'prefer-destructuring': [
      1,
      {
        object: true,
        array: false,
      },
    ],
    'no-unused-vars': [
      1,
      {
        args: 'none',
      },
    ],
    'react/jsx-no-useless-fragment': [
      1,
      {
        allowExpressions: true,
      },
    ],
    'prefer-destructuring': [
      1,
      {
        object: true,
        array: false,
      },
    ],
    'react/jsx-no-duplicate-props': [
      1,
      {
        ignoreCase: false,
      },
    ],
  },
};
