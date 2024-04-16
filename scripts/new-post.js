/* scripts/new-post.js */
/* 【概要】 新しいブログ記事のMarkdownファイルを作成します。既に存在する場合、エラーメッセージを表示し、スクリプトを終了します。 */
/*  */
/* (ターミナルからの記事新規登録専用実行用コード_サンプルファイル名)pnpm new-post my-new-post */
/*
package.json
"scripts": {
・・・
"new-post": "node scripts/new-post.js",
・・・
},
↓
/scripts/new-post.js
・・・
*/

/* This is a script to create a new post markdown file with front-matter */

import fs from "fs"
import path from "path"

// getDate関数は、現在の日付をYYYY-MM-DD形式の文字列として返します。
function getDate() {
  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, "0")
  const day = String(today.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`
}

// process.argv.slice(2)で、コマンドライン引数を取得します。このスクリプトは、ファイル名を引数として受け取ります。
const args = process.argv.slice(2)

// 引数が提供されていない場合、エラーメッセージを表示し、スクリプトを終了します。
if (args.length === 0) {
  console.error(`Error: No filename argument provided
Usage: npm run new-post -- <filename>`)
  process.exit(1) // Terminate the script and return error code 1
}

// 前段の処理でファイル名が引数指定されていることが確認できたので、分かりやすい変数名にしてファイル名を取得します。
let fileName = args[0]

// ファイル名が.mdまたは.mdxで終わっていない場合、.mdを追加します。
const fileExtensionRegex = /\.(md|mdx)$/i
if (!fileExtensionRegex.test(fileName)) {
  fileName += ".md"
}

const targetDir = "./src/content/posts/"
const fullPath = path.join(targetDir, fileName)

// fs.existsSyncを使用して、同名のファイルが既に存在するかどうかを確認します。
// 既に存在する場合、エラーメッセージを表示し、スクリプトを終了します。
if (fs.existsSync(fullPath)) {
  console.error(`Error：File ${fullPath} already exists `)
  process.exit(1)
}

const content = `---
title: ${args[0]}
published: ${getDate()}
description: ''
image: ''
tags: []
category: ''
draft: false 
---
`

// fs.writeFileSyncを使用して、新しいMarkdownファイルを作成します。
fs.writeFileSync(path.join(targetDir, fileName), content)

// 最後に、ファイルが作成されたことを示すメッセージを表示します。
console.log(`Post ${fullPath} created`)
