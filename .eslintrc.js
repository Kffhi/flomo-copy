// const path = require('path')

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ['plugin:vue/vue3-essential', 'plugin:vue/vue3-essential', 'airbnb-base', 'plugin:import/typescript', 'plugin:prettier/recommended', './.eslintrc-auto-import.json'],
    parserOptions: {
        ecmaVersion: 12,
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', 'src/']
            }
            // typescript: {
            //     project: path.join(__dirname, './tsconfig.json'), // 插件读取tsconfig配置的路径
            //     alwaysTryTypes: true // always try to resolve types under
            // }
        }
    },
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'import/extensions': 'off',
        'import/no-unresolved': 'off', // import + ts解析报错
        'no-param-reassign': 'off', // 参数重分配
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error', // 以上，解决TS的enum报错
        'import/prefer-default-export': 'off', //
        'prefer-promise-reject-errors': 'off', // 禁止reject只能用Error对象做返回
        'no-underscore-dangle': 'off',
        'no-continue': 'off',
        'prefer-destructuring': 'off',
        'no-restricted-syntax': 'off'
    }
}
