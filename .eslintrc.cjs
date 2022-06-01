module.exports = {
    env: {
        browser: true, es2021: true
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest', sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    'rules': {
        'indent': ['error', 2],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always']
    },
    'ignorePatterns': ['dist/', 'node_modules/'],
}
