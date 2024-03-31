// Typescriptの共通関数をまとめたファイル
import i18nKey from '@i18n/i18nKey'
import { i18n } from '@i18n/translation'

// 2つのパス文字列が等しいかどうかを判断します。パスの先頭と末尾のスラッシュを削除し、すべて小文字に変換してから比較します。
export function pathsEqual(path1: string, path2: string) {
  const normalizedPath1 = path1.replace(/^\/|\/$/g, '').toLowerCase()
  const normalizedPath2 = path2.replace(/^\/|\/$/g, '').toLowerCase()
  return normalizedPath1 === normalizedPath2
}

// 複数の文字列を受け取り、それらをスラッシュ(/)で結合してURLを作成します。
// 結果のURLには連続するスラッシュが含まれないようにします。
function joinUrl(...parts: string[]): string {
  const joined = parts.join('/')
  return joined.replace(/([^:]\/)\/+/g, '$1')
}

// スラッグ（URLの一部として使用される識別子）を受け取り、そのスラッグに対応する投稿のURLを返します。
// 例えば、ブログ投稿のURLがhttps://example.com/posts/my-first-postである場合、my-first-postはその投稿のスラッグです。
// このスラッグは、その投稿のタイトル（ここでは"My First Post"）から生成され、URLに含まれるスペースはハイフンに置き換えられます。
export function getPostUrlBySlug(slug: string): string | null {
  if (!slug) return null
  return `/posts/${slug}`
}

// カテゴリ名を受け取り、そのカテゴリに対応するURLを返します。カテゴリが未分類の場合は特定のURLを返します。
export function getCategoryUrl(category: string): string | null {
  if (!category) return null
  if (category === i18n(i18nKey.uncategorized))
    return '/archive/category/uncategorized'
  return `/archive/category/${category}`
}

// パスを受け取り、そのパスのディレクトリ部分を返します。
export function getDir(path: string): string {
  const lastSlashIndex = path.lastIndexOf('/')
  if (lastSlashIndex < 0) {
    return '/'
  }
  return path.substring(0, lastSlashIndex + 1)
}
