/* src/i18n/translation.ts */
/*
 【概要】国際化（i18n）のためのユーティリティを提供します。
  それぞれの言語の翻訳をインポートし、それらをマッピングするオブジェクトを作成します。
  そして、指定された言語とキーに基づいて翻訳を取得する関数を提供します。
*/
import { siteConfig } from '../config'
import type I18nKey from './i18nKey'

// 各言語の翻訳をインポートします。
import { en } from './languages/en'
import { ja } from './languages/ja'
import { zh_CN } from './languages/zh_CN'
import { zh_TW } from './languages/zh_TW'

// Translation型を定義します。これはI18nKeyの各キーに対する文字列をマッピングするオブジェクトの型です。
export type Translation = {
  [K in I18nKey]: string
}

// デフォルトの翻訳を設定します。
const defaultTranslation = en

// 各言語コードを対応する翻訳にマッピングするオブジェクトを定義します。
const map: { [key: string]: Translation } = {
  en: en,
  en_us: en,
  en_gb: en,
  en_au: en,
  zh_cn: zh_CN,
  zh_tw: zh_TW,
  ja: ja,
  ja_jp: ja,
}

// 指定された言語の翻訳を取得する関数をエクスポートします。該当する翻訳がない場合はデフォルトの翻訳を返します。
export function getTranslation(lang: string): Translation {
  return map[lang.toLowerCase()] || defaultTranslation
}


// 指定されたキーの翻訳を取得する関数をエクスポートします。現在の言語設定に基づいて翻訳を取得します。
export function i18n(key: I18nKey): string {
  const lang = siteConfig.lang || 'en'
  return getTranslation(lang)[key]
}
