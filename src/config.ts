// 'types/config'ファイルから、SiteConfig、NavBarConfig、ProfileConfig、LicenseConfigの型をimportします。
// これらの型は、後でオブジェクトを定義する際に使用します。
import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
// 'types/config'ファイルからLinkPresetをimportします。
//  LinkPresetには、Home = 0,  Archive = 1,  About = 2,といった値が定義されています。
import { LinkPreset } from './types/config'

// 上記でimportしたSiteConfig型を使用して、siteConfigオブジェクトを定義し、エクスポートします。
// このオブジェクトは、サイトの設定を表すために使用されます。
export const siteConfig: SiteConfig = {
  title: 'Fuwari',
  subtitle: 'Demo Site',
  lang: 'en',
  themeHue: 250,
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png',
  },
}

// ナビゲーションバーのリンクの設定を定義します。
// NavBarConfig型で定義されており、linksというプロパティを持っています。
export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/saicaca/fuwari',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/demo-avatar.png',
  name: 'Lorem Ipsum',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',
      url: 'https://twitter.com',
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://store.steampowered.com',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/saicaca/fuwari',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
