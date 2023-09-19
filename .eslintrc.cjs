module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	ignorePatterns: ['.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', 'prettier'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'@typescript-eslint/no-explicit-any': 'warn',
		'prefer-const': 'error',
		'no-unused-vars': 'error',
		eqeqeq: 'error',
		'no-useless-constructor': 'error',
		'prettier/prettier': 'error',
	},
};
