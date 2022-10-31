# medet-lang

> Easy language package

[![NPM](https://img.shields.io/npm/v/medet-lang.svg)](https://www.npmjs.com/package/medet-lang) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save medet-lang
```

## Usage

Firstly, create your .json translate dictionary

```json
{
    "test": {
        "en": "Test",
        "ru": "Тест",
        "tm": "Barlag"
    },
    "home": {
        "en": "Home",
        "ru": "Главная",
        "tm": "Baş sahypa"
    }
}
```

Then

```jsx
import React, { Component } from 'react'

import EasyLang from 'medet-lang'
import 'medet-lang/dist/index.css'

// Import Lang dictionary
import jsonFile from './lang.json';

class Example extends Component {
  const _ = (text) => EasyLang({lang: "tm", jsonFile: jsonFile, text: text});
  render() {
    return _("test");
  }
}
```

## License

MIT © [bekich97](https://github.com/bekich97)
