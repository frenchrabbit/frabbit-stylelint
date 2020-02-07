'use strict'

const names = '^[_-]?[a-z][a-z0-9-]+?[a-z0-9]$'

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
  ],

  plugins: [
    'stylelint-order',
    'stylelint-declaration-strict-value',
    'stylelint-declaration-block-no-ignored-properties',
    // 'stylelint-color-format',
    'stylelint-high-performance-animation',
    'stylelint-no-indistinguishable-colors',
    'stylelint-no-unsupported-browser-features',
    'stylelint-selector-tag-no-without-class',
    'stylelint-use-nesting',
    'stylelint-csstree-validator',
  ],

  rules: {
    'max-nesting-depth': 4,
    'max-line-length': 80,
    'string-quotes': 'single',
    'font-weight-notation': 'numeric',
    'order/order': [
      [
        {
          'type': 'at-rule',
          'name': 'import',
          'hasBlock': false,
        },
        'custom-properties',
        'dollar-variables',
        {
          'type': 'at-rule',
          'name': 'extend',
        },
        {
          'type': 'at-rule',
          'name': 'include',
          'hasBlock': false,
        },
        'declarations',
        {
          'type': 'at-rule',
          'name': 'include',
          'hasBlock': true,
        },
        'rules',
        'at-rules',
      ],
    ],
    'function-url-no-scheme-relative': true,
    'function-url-quotes': 'always',
    'media-feature-name-no-unknown': true,
    'media-query-list-comma-newline-before': 'never-multi-line',
    'scss/media-feature-value-dollar-variable': 'always',

    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,

    // 'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/declaration-nested-properties': 'never',
    'scale-unlimited/declaration-strict-value': [
      ['/color/', 'z-index', 'font-size', 'font-family'],
      {
        ignoreKeywords: {
          '': ['inherit'],
          '/color/': ['currentColor', 'transparent', 'inherit', 'auto', 'none']
        },
        // autofix function should be project specific https://github.com/AndyOGo/stylelint-declaration-strict-value
        autoFixFunc: function () {},
        disableFix: false
      },
    ],
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-pattern': names,
    'scss/no-duplicate-dollar-variables': [
      true,
      {
        ignoreInside: ["at-rule", "nested-at-rule"],
        ignoreInsideAtRules: ["if", "mixin", "each", "else"]
      }
    ],
    'scss/percent-placeholder-pattern': names,
    'scss/at-extend-no-missing-placeholder': true,
    // 'scss/at-mixin-named-arguments': 'always',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'scss/at-mixin-pattern': names,
    // 'scss/at-function-named-arguments': 'always',
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-function-pattern': names,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-newline-after': true,
    'scss/operator-no-unspaced': true,
    'selector-attribute-quotes': 'always',
    'selector-max-universal': 1,
    'selector-max-specificity': '1,3,3', // id,class,type
    'selector-max-compound-selectors': 3,
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],
    'at-rule-empty-line-before': [
      'always', {
        'ignoreAtRules': ['else'],
        'except': [
          'blockless-after-same-name-blockless',
          'first-nested',
        ],
        'ignore': ['after-comment'],
      },
    ],
    'block-closing-brace-newline-after': [
      'always', { 'ignoreAtRules': ['if', 'else'] },
    ],

    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',
    'color-named': 'never',
    // 'color-format/format': { 'format': 'rgb' },

    'plugin/no-low-performance-animation-properties': true,
    'plugin/stylelint-no-indistinguishable-colors': true,
    // 'plugin/selector-tag-no-without-class': ['div', 'span'],
    'plugin/declaration-block-no-ignored-properties': true,
    'plugin/no-unsupported-browser-features': [
      true, { 'severity': 'warning' },
    ],

    'csstools/use-nesting': 'always',
    'csstree/validator': true,
  }
}
