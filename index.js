'use strict'

const names = '^[_-]?[a-z][a-z0-9-]+?[a-z0-9]$'

module.exports = {
  // overrides: [
  //   {
  //     files: ['**/*.(scss|css)'],
  //     customSyntax: 'postcss-scss',
  //   },
  //   {
  //     files: ['**/*.(html|vue)'],
  //     customSyntax: 'postcss-html',
  //   },
  // ],
  plugins: [
    'stylelint-order',
    'stylelint-declaration-strict-value',
    'stylelint-declaration-block-no-ignored-properties',
    // 'stylelint-color-format',
    'stylelint-high-performance-animation',
    // 'stylelint-no-indistinguishable-colors',
    'stylelint-no-unsupported-browser-features',
    // 'stylelint-selector-tag-no-without-class',
    'stylelint-csstree-validator',
    'stylelint-sass-render-errors',
    'stylelint-prettier'
  ],

  extends: [
    // 'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-prettier'
  ],

  rules: {
    "prettier/prettier": true,
    "plugin/sass-render-errors": true,
    'selector-class-pattern': names,
    'max-nesting-depth': 4,
    'font-weight-notation': 'numeric',
    'value-keyword-case': [
      'lower',
      {
        camelCaseSvgKeywords: true,
      },
    ],
    'at-rule-empty-line-before': ['always', {
        except: [
          "after-same-name",
          // "inside-block",
          // "blockless-after-same-name-blockless",
          // "blockless-after-blockless",
          "first-nested"
        ],
      ignore: [
        "after-comment",
        "first-nested",
        // "inside-block",
        "blockless-after-same-name-blockless",
        "blockless-after-blockless"
      ],
      ignoreAtRules: ['else']
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
          'name': 'use',
          'hasBlock': false,
        },
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
          '': ['inherit', '0'],
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

    'scss/operator-no-newline-after': null,
    'scss/operator-no-newline-before': null,

    "function-no-unknown": [
      true,
      {
        "ignoreFunctions": [
          "/^map\\..+/",
          "/^color\\..+/",
          "/^math\\..+/",
          "/^list\\..+/"
        ]
      }
    ],

    "csstree/validator": {
      "syntaxExtensions": ["sass"],
      "ignoreAtrules": ['if', 'else'],
      "types": {
        "length": "| <rem()> | rem ",
        "<length>": "| <rem()> | rem",
        "rem()": "rem( <length> )",

      },
      "properties": {
        "length": "| rem( <length> ) ",
        "<length>": "| rem( <length> ) ",
        "width": "| rem( <length> ) | fit-content",
        "height": "| rem( <length> )",
        "min-width": "| rem( <length> )",
        "max-width": "| rem( <length> )",
        "min-height": "| rem( <length> )",
        "max-height": "| rem( <length> )",
        "font-size": "| rem( <length> )",
        "line-height": "| rem( <length> )",
        "content": "| attr( <attr-name> <type-or-unit>? [, <attr-fallback> ]? )",

        "top": "| rem( <length> )",
        "left": "| rem( <length> )",
        "right": "| rem( <length> )",
        "bottom": "| rem( <length> )",
        "padding-left": "| rem( <length> )",
        "padding-right": "| rem( <length> )",
        "padding-top": "| rem( <length> )",
        "padding-bottom": "| rem( <length> )",
        "padding": "| [<length>|<percentage>|rem( <length> )]{1,4} | rem( <length>{1,4} )",
        "margin-left": "| rem( <length> )",
        "margin-right": "| rem( <length> )",
        "margin-top": "| rem( <length> )",
        "margin-bottom": "| rem( <length> )",
        "margin": "| [<length>|<percentage>|rem( <length> )|auto]{1,4}",
        "border-radius": "| rem( <length> )",
        "letter-spacing": "| rem( <length> )",
        "row-gap": "| rem( <length> )",
        "column-gap": "| rem( <length> )",
        "gap": "| [rem( <length> )]{1,2}",
      }
    }
  }
}
