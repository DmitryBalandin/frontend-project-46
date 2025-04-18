import js from '@eslint/js';
import globals from 'globals';
import { defineConfig, } from 'eslint/config';
import stylisticJs from '@stylistic/eslint-plugin-js';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs}',], plugins: { js, }, extends: ['js/recommended',], },
  { files: ['**/*.{js,mjs,cjs}',], languageOptions: { globals: { ...globals.browser, ...globals.node, }, }, },
  //   {
  // 	"files": ["tests/**/*"],
  // 	"env": {
  // 	  "jest": true
  // 	}},
	  
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      '@stylistic/js/no-multi-spaces': 'error',
      '@stylistic/js/no-extra-semi': 'error',
      '@stylistic/js/indent': ['error', 2,],
      '@stylistic/js/semi': ['error',],
      '@stylistic/js/quotes': ['error', 'single',],
      '@stylistic/js/comma-dangle': ['error', 'always',],
    },
  },
  
],);