module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // Пример правил
    'max-len': ['error', { code: 120 }], // Увеличить длину строки до 120 символов
    'indent': ['error', 2], // Использовать 2 пробела для отступов
    'object-curly-spacing': ['error', 'never'], // Запретить пробелы в фигурных скобках
  },
};
