import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'tests/e2e/**'],
  },
  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),
  ...pluginVueA11y.configs['flat/recommended'],
  {
    rules: {
      'vue/multi-word-component-names': 'warn',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'class-methods-use-this': 'warn',
      'vuejs-accessibility/click-events-have-key-events': 'warn',
      'vuejs-accessibility/alt-text': 'warn',
      'max-len': ['warn', { code: 100 }],
    },
  },
];
