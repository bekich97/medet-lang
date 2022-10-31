// import React from 'react'
import jsonFile from './lang.json';

import { EasyLang } from 'medet-lang';
import 'medet-lang/dist/index.css';

const App = () => {
  const _ = (text) => EasyLang({lang: "tm", jsonFile: jsonFile, text: text});
  return _("test")
}

export default App;
