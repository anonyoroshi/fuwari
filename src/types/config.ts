// この/src/types/config.tsファイルで、サイトプロジェクトの基底となる型定義を行い、変数や関数が期待する値の形状を明示的に示し、間違った型の値が使用されるのを防ぎます。
// この型定義を基に/src/config.tsファイルで設定値を定義し、設定値が正しい形状であることを保証しています。
// また、Astroファイルでこれらの設定値を使用することで、サイトの見た目や振る舞いを柔軟に制御できます。
// これは、Astroがコンポーネントベースの開発をサポートしているため、各コンポーネントが独自の設定を持つことができる一般的なパターンの一つです。
export type SiteConfig = {
  title: string
  subtitle: string

  lang: string

  themeHue: number
  banner: {
    enable: boolean
    src: string
  }
}

export enum LinkPreset {
  Home = 0,
  Archive = 1,
  About = 2,
}

export type NavBarLink = {
  name: string
  url: string
  external?: boolean
}

export type NavBarConfig = {
  links: (NavBarLink | LinkPreset)[]
}

export type ProfileConfig = {
  avatar?: string
  name: string
  bio?: string
  links: {
    name: string
    url: string
    icon: string
  }[]
}

export type LicenseConfig = {
  enable: boolean
  name: string
  url: string
}
