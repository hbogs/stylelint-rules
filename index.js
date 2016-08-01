module.exports = {
  "rules": {
    "color-hex-case": ["lower", { "severity": "warning" } ],
    "color-no-invalid-hex": true,

    "function-calc-no-unspaced-operator": true,
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-url-quotes": "always",
    "function-whitespace-after": "always",

    "number-leading-zero": "never",
    "number-no-trailing-zeros": true,

    "string-no-newline": true,
    "string-quotes": "single",

    "value-no-vendor-prefix": true,

    "property-no-vendor-prefix": true,

    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-no-important": [ true, { "severity": "warning" } ],

    "declaration-block-no-duplicate-properties": true,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-space-after": "never-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-block-trailing-semicolon": "always",

    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "block-no-empty": true,
    "block-no-single-line": true,
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-space-before": "always",

    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-no-id": true,
    "selector-pseudo-element-colon-notation": "double",

    "selector-list-comma-newline-after": "always",
    "selector-list-comma-space-before": "never",

    "rule-non-nested-empty-line-before": ["always", { "ignore": "after-comment" }],

    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-no-missing-punctuation": true,
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",

    "media-feature-parentheses-space-inside": "never",

    "media-query-list-comma-newline-after": "always",
    "media-query-list-comma-newline-before": "never-multi-line",
    "media-query-list-comma-space-before": "never",

    "at-rule-empty-line-before": ["always", { "except": ["blockless-group", "all-nested", "first-nested"], "ignore": ["after-comment", "all-nested"] } ],
    "at-rule-no-vendor-prefix": true,

    "comment-whitespace-inside": "always",

    "indentation": [2, { "ignore": "inside-parens"}],
    "max-empty-lines": 5,
    "max-nesting-depth": 4,
    "no-descending-specificity": true,
    "no-duplicate-selectors": true,
    "no-eol-whitespace": true,
    "no-invalid-double-slash-comments": true,
    "no-missing-end-of-source-newline": true,
    "no-unknown-animations": true

  }
}
