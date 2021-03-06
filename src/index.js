import "./styles.css";

/**
 * const,let等の変数宣言
 *  */

/**
// var val1 = "var変数";
 console.log(val1);

 // var変数は上書き可能
 val1 = "var変数を上書き";
 console.log(val1);

 // var変数は再宣言可能
 var val1 = "var変数を再宣言";
 console.log(val1);
*/

/** 
let val2 = "let変数";
console.log(val2);

//letは上書きが可能
val2 = "let変数を上書き";
console.log(val2);

//letは再宣言不可能
let val2 = "let変数を再宣言";
*/

/**
const val3 = "const変数";
console.log(val3);

//const変数は上書き不可
val3 = "const変数を上書き";

//constは再宣言不可
const val3 = "const変数を再宣言";
 */

//constで定義したオブジェクトはプロパティの変更が可能
/** 
const val4 = {
  name: "じゃけぇ",
  age: 28
};

val4.name = "jake";
val4.address = "Hiroshima";
console.log(val4);
*/

//constで定義した配列もプロパティの変更が可能
/** 
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);
*/

/**
 * 　テンプレート文字列
 * */

// const name = "じゃけぇ";
// const age = 25;

//「私の名前はじゃけぇです。年齢は25歳です。」

//従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

//テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数について
 * */

//従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

//アロー関数（function書かなくていい！）
// const func2 = (str) => {
//   return str;
// };

//{}とreturnを省略してもOK！
// const func2 = (str) => str；

// console.log(func2("func2です"));

//2つの引数を渡す
// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

//{}とreturnを省略してもOK！
// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(2, 3));

/**
 * 分割代入(オブジェクト)
 * */

// const myProfile = {
//   name: "じゃけぇ",
//   age: 25
// };

//従来(オブジェクト)
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

//分割代入(オブジェクト)
// const { name, age } = myProfile;
// const message1 = `名前は${name}です。年齢は${age}です。`;
// console.log(message1);

/**
 * 分割代入(配列)
 * */

// const myProfile = ["じゃけぇ", 25];

//従来(配列)
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

//分割代入(配列) 132行目では配列の順番順に引数を指定
// const [name, age] = myProfile;
// const message3 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message3);

/**
 * 　デフォルト値、引数などについて
 */

//引数を(name = "ゲスト")と書くことで初期値（デフォルト値）を設定できる！
// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん！`);
// sayHello();

/**
 * スプレッド構文 ...
 */

// //配列の展開
// const array = [1, 2];
// // console.log(array);

// //配列の中身を順番に処理してくれる　...
// // console.log(...array);

// const sumFunc = (num1, num2) => console.log(num1 + num2);

// // sumFunc(array[0], array[1]);
// //上の記述と同じ配列の中身を順番に処理してくれる　...
// sumFunc(...array);

//まとめる
// const array2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...num3] = array2;

// console.log(num1);
// console.log(num2);
// console.log(num3);

//配列のコピー、結合

// const array4 = [10, 20];
// const array5 = [30, 40];

// //配列をスプレット構文で代入(参照を引き継がずにarray6[0]の値だけ変更できる)
// const array6 = [...array4];
// console.log(array6);
// array6[0] = 100;
// console.log(array4);

// //２つの配列を結合する！スプレット構文で
// const array7 = [...array4, ...array5];
// console.log(array7);

//普通にイコールで代入してしまうと、同じ参照となるため、array4の値も変更されてしまう。
// const array8 = array4;
// array8[0] = 100;
// console.log(array8);
// console.log(array4);

/**
 * mapやfilterを使用した配列処理について
 */

const nameArr = ["田中", "山田", "じゃけぇ"];

// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index}番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

//mapを使用してループ処理（206行目と同じ処理）
//  nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

const numArr = [1, 2, 3, 4, 5];

//filterは条件分岐で該当のもののみをとってきて新しい配列作れる
// const newNumArr = numArr.filter((num) => {
//   //２で割った余りが１になる奇数のみ返す
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけぇ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子について
 */

// 【構文】　　条件　?　条件がtrueの時 : 条件がfalseの時
//  const val1 = 1 > 0 ? 'trueです' : 'falseです';
//  console.log(val1);

// const num = 1300;
// //toLocaleString()はカンマ区切りにできるメソッド
// // console.log(num.toLocaleString());

// //typeof その変数の型を判定してくれるもの
// //三項演算子　numが数値ならカンマ区切りで表示。　数値以外なら'数値を入力してください'と表示
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

//num1　＋ num2が100を超えるかを三項演算子で判定して、返す値を変える関数
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています！！' : '許容範囲内です。';
// }

// console.log(checkSum(50,60));
// console.log(checkSum(50,40));

/**
 * 論理演算子の本当の意味を知ろう　 (&&アンパサンド ||パイプライン)
 */

// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2){
//   console.log("1か2はtrueになります");
// }

// if(flag1 && flag2){
//   console.log("1も2もtrueになります");
// }

// || は283行目の左側がfalseなら右側を返す。左側がtrueなら左側を返す。
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました。"
// console.log(fee2);

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
