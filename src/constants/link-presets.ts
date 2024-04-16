/* src/constants/link-presets.ts */
/*
【概要】ナビゲーションバーのリンクを定義しています。
  具体的には、LinkPresetsというオブジェクトをエクスポートしています。 
*/
import { LinkPreset, type NavBarLink } from '@/types/config'
import I18nKey from '@i18n/i18nKey'
import { i18n } from '@i18n/translation'

// i18n関数:指定されたキーの翻訳を取得する関数
export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
  [LinkPreset.Home]: {
    name: i18n(I18nKey.home),
    url: '/',
  },
  [LinkPreset.About]: {
    name: i18n(I18nKey.about),
    url: '/about',
  },
  [LinkPreset.Archive]: {
    name: i18n(I18nKey.archive),
    url: '/archive',
  },
}
