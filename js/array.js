// 配列の宣言と値の代入を行う
// 配列の宣言にはconst(定数)を使う
const userNames = ['太郎', '一郎', '二郎', '三郎', '四郎'];

// 配列の値を出力する
console.log(userNames);

// 2番目の要素を更新する
userNames[1] = '花子';

// 6番目に要素を追加する
userNames[5] = '五郎';

// 配列の値を出力する
console.log(userNames);

// 3番目の要素を出力する
console.log(userNames[2]);

/*
配列は定数で宣言するが、中身の入れ替えは可能（再代入ではないので）
配列の中身を丸ごと変えようとすると、再代入にあたるので、エラーとなる。
例：
const userNames = ['太郎', '一郎', '二郎'];
userNames = ['花子’, '一女']; // エラー
*/