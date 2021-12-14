# AnalLang
An esoteric joke language based on the 🍑🍆 emojis.

Esolang page is at https://esolangs.org/wiki/AnalLang.

# Setup
Installation:

`npm install -g anallang `

Running a file:

`anallang <file>.anal`

Translate JavaScript to Anallang:

`analtranslate -o <out>.anal <file>.js `

# Programmatic API
To use the programmatical API, `require()` the anallang module.
```js
var anallang = require('anallang')
```

There are many functions, and some can be different than others.
Here are a list of them and examples:

`anallang::translateStringToAnalLang`: Translates UTF-8 string to AnalLang code.

### Example:
```js
anallang.translateStringToAnalLang(<anallang string>).then((res) => {
console.log(res);
})
```

`anallang::translateFileToAnalLang`: Translates file to AnalLang code.

### Example:
```js
anallang.translateFileToAnalLang(<file>.anal).then((res) => {
console.log(res);
})
```

`anallang::evalFile`: Evaluates AnalLang file.

### Example:
```js
anallang.evalFile(<file>.anal)
```

`anallang::evalString`: Evaluates AnalLang code.

### Example:
```js
anallang.evalString(<AnalLang code>)
```
