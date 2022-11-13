// 変数numに0~4までのランダムな整数を代入する
let num = Math.floor(Math.random() * 5);

// 変数numの最初の値を出力する（確認用）
console.log('最初の値は' + num + 'です');

// 変数numの値が0以外である間、変数numの値を出力し続ける
while (num !== 0) {
  // 変数numに0~4までのランダムな整数を再代入する
  num = Math.floor(Math.random() * 5);

  // 次の条件式で比較される、整数numの現在の値を出力する
  console.log('現在の値は' + num + 'です');
}

// 1~10までの数値を順番に出力する
for (let i = 1; i <= 10; i++) {
  console.log(i);
}