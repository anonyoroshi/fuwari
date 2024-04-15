// src/config.ts
// 【概要】サイトのタイトル、サブタイトル、言語、テーマ色、ナビゲーションバーのリンク、プロフィール、ライセンスなどの設定を行います。
// 【注意点】config.tsファイルは、astro.config.mjs または astro.config.js とは異なる目的の設定ファイルです。
// astro.config.mjs または astro.config.jsは、Astroプロジェクトの必須構成要素であり、プロジェクト全体の構成を管理します。また、手動又は自動で作成し、編集する必要があります。
// config.tsファイルは、特定のアプリケーションやウェブサイトの設定を管理するためのファイルであり、必須構成要素ではなく、任意設定のファイルです。


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
// 例：themeHue(サイトのテーマカラーの色相（Hue）)を表し、色相は色の基本的な品質を表し、通常は0から360の範囲で表されます。
// この値は、色相環（色の円環）上の位置を示します。具体的には、themeHueの250は、色相環上で青色に近い色を示します。
// これは、サイトのテーマカラーが青色系であることを意味し、0から360の範囲で色相を指定することで、サイトのテーマカラーを簡単に変更できます。
// 【概要】siteConfig：サイト全体の設定を管理します。例えば、サイトのタイトル、サブタイトル、言語、テーマ色（色相）などを設定します。
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
// 【概要】navBarConfig：ナビゲーションバーのリンクの設定を管理します。リンクはLinkPresetの値またはカスタムのオブジェクトで定義できます。
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

// 【概要】profileConfig：プロフィールの設定を管理します。アバター、名前、自己紹介、リンクなどを設定します。
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

// 以下のLicenseConfigは、ウェブページ上の特定のコンテンツ（たとえばブログ記事や写真など）の使用を規定するものである。
// このオブジェクトは、Fuwariでは、ブログ記事のライセンス情報を表すために使用されており、CC BY-NC-SA 4.0は、非営利と適切なクレジットを提供し、ライセンスへのリンクを提供することが求められている。
// プロジェクト全体のライセンスは、ルートディレクトリ上のLICENSEファイル内にMITライセンスが記載されている。
// 【概要】licenseConfig：ライセンスの設定を管理します。特定のコンテンツ（例えばブログ記事や写真など）の使用を規定します。
export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
