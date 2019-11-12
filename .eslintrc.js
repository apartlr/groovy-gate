module.exports = {
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'extends': 'airbnb-base',
    'env': {
        'node': true,
    },
    'rules': {
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'quotes': ['error', 'single'],
        'consistent-return': 'off',
        'func-names': 'off',
        'key-spacing': ['error', {'align': 'colon'}],
        'max-len': ['error', {'code': 140}],
        'no-shadow': ['error', { 'allow': ['done', 'next', 'error', 'err', 'cb'] }],
        'no-multi-spaces': 'off',
        'no-restricted-syntax': ['error', {
            'selector': 'LabeledStatement',
            'message': 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
        }, {
            'selector': 'WithStatement',
            'message': '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
        }],
        'no-plusplus': ['error', {'allowForLoopAfterthoughts': true}],
        'one-var': ['error', 'never'],
        'class-methods-use-this': 'off',
        'no-continue': 'off',
        'object-curly-newline': ['error', {
            'ObjectExpression': {
                'minProperties': 10,
                'multiline': true,
                'consistent': true
            },
            'ObjectPattern': {
                'minProperties': 10,
                'multiline': true,
                'consistent': true
            }
        }],
        'arrow-body-style': ['error', 'as-needed'],
        'function-paren-newline': ['error', 'consistent'],
        'no-param-reassign': ['error', {'props': false}],
        'no-console': 'error',
        'no-debugger': 'error',
        'import/no-dynamic-require': 'off',
        'arrow-parens': ['error', 'as-needed'],
        'semi': ['error', 'always'],
        'no-unsafe-finally': 'off',
        'no-underscore-dangle': ['error', { 'allowAfterThis': true }],
        'prefer-destructuring': ['error', { 'VariableDeclarator': { 'array': false, 'object': true } }]
    }
};
