/**
 * 挨拶をログ出力する関数
 *
 * @return {void}
 */

function hello() {
  console.log('こんにちは！');
}

/**
 * 文字列で指定された名前の関数を呼び出す関数
 *
 * @return {void}
 */

function callByName() {
  const funcName = 'hello'
  this[funcName]();
}

