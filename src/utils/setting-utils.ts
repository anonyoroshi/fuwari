// src/utils/setting-utils.ts
// 【概要】Webページの色相（hue）を取得、設定、およびデフォルト値を取得するためのユーティリティ関数を提供します。

// デフォルトの色相を取得します。まず、fallbackという変数にデフォルト値250を設定します。
// 次に、config-carrierというIDを持つ要素を取得します。
// この要素が存在し、data-hue属性が設定されていればその値を、そうでなければfallbackの値を返します。
export function getDefaultHue(): number {
  const fallback = '250'
  const configCarrier = document.getElementById('config-carrier')
  return parseInt(configCarrier?.dataset.hue || fallback)
}

// 現在の色相を取得します。まず、ローカルストレージからhueというキーの値を取得します。
// この値が存在すればその値を、そうでなければgetDefaultHue関数を呼び出してデフォルトの色相を返します。
export function getHue(): number {
  const stored = localStorage.getItem('hue')
  return stored ? parseInt(stored) : getDefaultHue()
}

// 新しい色相を設定します。まず、引数で受け取った色相をローカルストレージのhueというキーの値として保存します。
// 次に、:rootセレクタを使用してルート要素を取得し、その--hueというCSSカスタムプロパティに新しい色相を設定します。
// ルート要素が存在しない場合は何もしません。
export function setHue(hue: number): void {
  localStorage.setItem('hue', String(hue))
  const r = document.querySelector(':root') as HTMLElement
  if (!r) {
    return
  }
  r.style.setProperty('--hue', `${hue}`)
}
