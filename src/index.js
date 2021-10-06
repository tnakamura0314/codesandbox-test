import "./styles.css";

/** const,let等の変数宣言 */

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

/**　テンプレート文字列　*/

const name = "じゃけぇ";
const age = 25;

//「私の名前はじゃけぇです。年齢は25歳です。」

//従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

//テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
