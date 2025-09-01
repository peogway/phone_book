import globals from 'globals'
import js from '@eslint/js'
import react from 'eslint-plugin-react'
import jest from 'eslint-plugin-jest'
import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
	{
		ignores: ['./**/dist/**', 'webpack.config.js', 'node_modules/'],
	},
	js.configs.recommended,
	{
		// Apply configurations to all JavaScript and JSX files
		files: ['**/*.{js,jsx}'],
		languageOptions: {
			ecmaVersion: 2018,
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
				...globals.jest,
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			react,
			jest,
			'@stylistic/js': stylisticJs,
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			// Stylistic Rules from your old config
			indent: ['error', 'tab'],
			'linebreak-style': ['error', 'windows'],
			quotes: ['error', 'single'],
			semi: ['error', 'never'],
			'no-trailing-spaces': 'error',
			'object-curly-spacing': ['error', 'always'],
			'arrow-spacing': ['error', { before: true, after: true }],

			// Other rules from your old config
			eqeqeq: 'error',
			'no-console': 'error',
			'react/prop-types': 'off',

			// Fixes for Stylistic Plugin rules
			'@stylistic/js/indent': 'off',
			'@stylistic/js/linebreak-style': 'off',
			'@stylistic/js/quotes': 'off',
			'@stylistic/js/semi': 'off',
		},
	},
]
