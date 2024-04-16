/* src/i18n/i18nKey.ts */
/*
【概要】I18nKeyという名前の列挙型（enum）を定義し、エクスポートしています。
  列挙型は、一連の関連する値の集合を定義するための特殊な型です。
  この列挙型を使用すると、翻訳関数（i18n関数など）に渡すキーを型安全に管理できます。
  つまり、存在しないキーを誤って渡すと、TypeScriptの型チェッカーによってエラーが検出されます。
*/
enum I18nKey {
  home = 'home',
  about = 'about',
  archive = 'archive',

  tags = 'tags',
  categories = 'categories',
  recentPosts = 'recentPosts',

  comments = 'comments',

  untitled = 'untitled',
  uncategorized = 'uncategorized',
  noTags = 'noTags',

  wordCount = 'wordCount',
  wordsCount = 'wordsCount',
  minuteCount = 'minuteCount',
  minutesCount = 'minutesCount',
  postCount = 'postCount',
  postsCount = 'postsCount',

  themeColor = 'themeColor',

  more = 'more',

  author = 'author',
  publishedAt = 'publishedAt',
  license = 'license',
}

export default I18nKey
