/* 関数の作り方
アロー関数
const 定数名 = () => {
  一連の処理
}

関数宣言
function 関数名() {
  一連の処理
}
*/

/* 関数名のつけ方
基本は「動詞 + 目的語」の形が多い
例：
商品を追加する                   addProduct
商品を削除する                   removeProduct
商品が存在するか確認する         hasProduct
購入されたかどうか確認する       isPurchased
ボタンが押されたときに処理を行う onPushedButton
*/

// 朝の挨拶を出力する関数を定義する
const sayGoodMorning = () => {
  console.log('おはようございます!');
  console.log('昨日はよく眠れましたか?');
  console.log('今日も一日頑張りましょう!');
}

// 夜のあいさつを出力する関数を定義する
const sayGoodEvening = () => {
  console.log('こんばんは!');
  console.log('今日も一日お疲れさまでした。');
}

// 朝のあいさつを出力する関数を呼び出す
sayGoodMorning();

// 夜のあいさつを出力する関数を呼び出す
sayGoodEvening();