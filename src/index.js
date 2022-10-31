import React from 'react'
import styles from './styles.module.css'

export const EasyLang = ({ lang, jsonFile, text }) => {
  var rt = null;
  try{
    rt = jsonFile[text][lang]
  } catch {
    rt = <span className={styles.notFound}>Word Not Found</span>
  }
  return rt;
}
