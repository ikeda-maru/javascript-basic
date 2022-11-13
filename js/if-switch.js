// 算術演算子を使った場合の戻り値を出力する
console.log(45 + 18); // 63

// 比較演算子を使った場合の戻り値を出力する
console.log(45 > 18); // true

// 等価演算子を使った場合の戻り値を出力する
// 等価演算子は2つの値が等しい場合にtrueを返す
console.log('5' == 5); // true

// 厳密等価演算子を使った場合の戻り値を出力する
// 厳密等価演算子は2つの値とデータ型が等しい場合にtrueを返す
console.log('5' === 5); // false

// 変数numに0~4までのランダムな整数を代入する
let num = Math.floor(Math.random() * 5);

// 変数numの値を出力する（確認用）
console.log(num);

// 変数numの値が4であれば、「大当たりです」という文字列を出力する
if (num === 4) {
  console.log('大当たりです');
}
// 変数numの値が3であれば、「当たりです」という文字列を出力する
else if (num === 3) {
  console.log('当たりです');
}
// それ以外のときは、「はずれです」という文字列を出力する
else {
  console.log('はずれです');
}

// 変数numに0~4までのランダムな整数を代入する
let num2 = Math.floor(Math.random() * 5);

// 変数numの値を出力する（確認用）
console.log(num2);

// 変数numの値によって出力する文字列を切り替える
switch (num2) {
  case 2:
    console.log('小吉です');
    break;
  case 3:
    console.log('中吉です');
    break;
  case 4:
    console.log('大吉です');
    break;
  default:
    console.log('末吉です');
    break;
}