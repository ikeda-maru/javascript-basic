// クラスを定義する
class Product {
  // インスタンス化すると同時に処理を実行（初期化）する
  constructor(name, price, category) {
    // インスンタンス（オブジェクト）にプロパティを持たせる
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // メソッドを定義する
  describe() {
    console.log('この商品名は' + this.name + 'です。');
  }
}

// インスタンス化する
const shampoo = new Product('シャンプー', 500, '生活雑貨');
const coffee = new Product('コーヒー', 1500, '飲料');

// インスタンス（オブジェクト）の値を出力する
console.log(shampoo);
console.log(coffee);

// メソッドを呼び出す（実行する）
shampoo.describe();

// 通常のオブジェクトにメソッドを定義する
const user = {
  name: '侍太郎',
  age: 36,
  gender: '男性',
  greet: () => {
    console.log('よろしくお願いします!');
  }
}

// メソッドを呼び出す（実行する）
user.greet();