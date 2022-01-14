'use strict'

const names = '^[_-]?[a-z][a-z0-9-]+?[a-z0-9]$'

module.exports = {
  plugins: [
    'stylelint-order',
    'stylelint-declaration-strict-value',
    'stylelint-declaration-block-no-ignored-properties',
    // 'stylelint-color-format',
    'stylelint-high-performance-animation',
    // 'stylelint-no-indistinguishable-colors',
    'stylelint-no-unsupported-browser-features',
    // 'stylelint-selector-tag-no-without-class',
    'stylelint-use-nesting',
    'stylelint-csstree-validator',
  ],

  extends: [
    // 'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-prettier'
  ],

  rules: {
    'max-nesting-depth': 4,
    'font-weight-notation': 'numeric',
    'at-rule-empty-line-before': ['always', {
        except: [
          "after-same-name",
          // "inside-block",
          // "blockless-after-same-name-blockless",
          // "blockless-after-blockless",
          "first-nested"
        ]
      }],
    'rule-empty-line-before': ["always", {
      // ignore: ["after-comment", "first-nested"],
      except: ["after-single-line-comment", "first-nested"]
    }],

    'shorthand-property-no-redundant-values': true,

    'selector-pseudo-element-no-unknown': [true, {
      ignorePseudoElements: ["v-deep"]
    }],

    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",

    'order/order': [
      [
        {
          'type': 'at-rule',
          'name': 'import',
          'hasBlock': false,
        },
        'dollar-variables',
        'custom-properties',
        {
          'type': 'at-rule',
          'name': 'include',
          'hasBlock': false,
        },
        {
          'type': 'at-rule',
          'name': 'extend',
        },
        'declarations',
        'rules',
        {
          "type": "rule",
          "selector": "/^&/"
        },
        {
          "type": "rule",
          "selector": "/^&:\\w/"
        },
        {
          // mixins
          'type': 'at-rule',
          'name': 'include',
          'hasBlock': true,
          "emptyLineBefore": true
        },
        'at-rules',
      ],
    ],
    'function-url-no-scheme-relative': true,
    'function-url-quotes': 'always',
    'media-feature-name-no-unknown': true,

    'scss/media-feature-value-dollar-variable': 'always',

    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,

    'scss/double-slash-comment-whitespace-inside': 'always',
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
    'scss/at-mixin-pattern': names,
    // 'scss/at-function-named-arguments': 'always',
    'scss/at-function-pattern': names,

    'selector-max-universal': 1,
    'selector-max-specificity': '1,3,3', // id,class,type
    'selector-max-compound-selectors': 3,
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],

    'color-named': 'never',
    // 'color-format/format': { 'format': 'rgb' },

    'plugin/no-low-performance-animation-properties': [true, { ignoreProperties: ['color', 'background-color'] }],
    // 'plugin/stylelint-no-indistinguishable-colors': true,
    // 'plugin/selector-tag-no-without-class': ['div', 'span'],
    'plugin/declaration-block-no-ignored-properties': true,
    'plugin/no-unsupported-browser-features': [
      true, { 'severity': 'warning' },
    ],

    'csstools/use-nesting': 'always',

    // "csstree/validator": {
    //   "syntaxExtensions": ["sass"],
    //   "types": {
    //     "length": "| <rem()> | rem | test",
    //     "<length>": "| <rem()> | rem | test",
    //     "rem()": "rem( <length> )",
    //
    //   },
    //   "properties": {
    //     "width": "| rem( <length> )",
    //   }
    // }
  }
}
