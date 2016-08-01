# stylelint-rules

Some rules for stylelint that I frequently use. I created this because I have several repositories that use stylelint, and I got tired of doing the same config updates to multiple repositories.


## Installation

```console
$ npm install @hbogs/stylelint-rules
```

## Usage

Set your `stylelint` config to:

```json
{
  "extends": "@hbogs/stylelint-rules"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `indentation` to tabs, and turn off the `number-leading-zero` rule:

```json
{
  "extends": "@hbogs/stylelint-rules",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```
