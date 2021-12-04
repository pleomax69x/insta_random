// Определить сколько **уникальных** словосочетаний есть во всех указанных
//  файлах (встречается лишь один раз только в одном из файлов).

// Определить какое количество словосочетаний встречаются **во
//  всех 20 файлах**.

// Выяснить, сколько словосочетаний встречается,
//  **как минимум в 10 файлах**.

// uniqueValues() — //  ⇒ Уникальных словосочетаний: 1234
// existInAllFiles() — // ⇒ Словосочетаний, которые есть во всех 20 файлах: 2222
// existInAtLeastTen() — // ⇒ Словосочетаний, которые есть, как минимум, в десяти файлах: 3333

// import first from "./out2.js";
// import second from "./out1";
// console.log(first);

// const firstFile = document.getElementById("first");
// const parsedFirst = firstFile.textContent.replace(/\s{2,}/g, " ");
// const eee = parsedFirst.trim().split(" ");
// console.log(eee); //?

// content.replace(/\r?\n/g, "")  replace(/[^a-zA-Z ]/g, "")  replace(/(\r\n|\n|\r)/gm, "")  replace(/[^a-z\d\s]+/gi, "")
// const filtered = hSecond.filter((n) => n);
// replace(/ {1,}/g, " ");
// replace(/\s{2,}/g, ' ')
let response0 = await fetch("./out0.txt");
const res0 = await response0.text();
const txt0 = res0.split("\n");

let response1 = await fetch("./out1.txt");
const res1 = await response1.text();
const txt1 = res1.split("\n");

let response2 = await fetch("./out2.txt");
const res2 = await response2.text();
const txt2 = res2.split("\n");

let response3 = await fetch("./out3.txt");
const res3 = await response3.text();
const txt3 = res3.split("\n");

let response4 = await fetch("./out4.txt");
const res4 = await response4.text();
const txt4 = res4.split("\n");

let response5 = await fetch("./out5.txt");
const res5 = await response5.text();
const txt5 = res5.split("\n");

let response6 = await fetch("./out6.txt");
const res6 = await response6.text();
const txt6 = res6.split("\n");

let response7 = await fetch("./out7.txt");
const res7 = await response7.text();
const txt7 = res7.split("\n");

let response8 = await fetch("./out8.txt");
const res8 = await response8.text();
const txt8 = res8.split("\n");

let response9 = await fetch("./out9.txt");
const res9 = await response9.text();
const txt9 = res9.split("\n");

let response10 = await fetch("./out10.txt");
const res10 = await response10.text();
const txt10 = res10.split("\n");

let response11 = await fetch("./out11.txt");
const res11 = await response11.text();
const txt11 = res11.split("\n");

let response12 = await fetch("./out12.txt");
const res12 = await response12.text();
const txt12 = res12.split("\n");

let response13 = await fetch("./out13.txt");
const res13 = await response13.text();
const txt13 = res13.split("\n");

let response14 = await fetch("./out14.txt");
const res14 = await response14.text();
const txt14 = res14.split("\n");

let response15 = await fetch("./out15.txt");
const res15 = await response15.text();
const txt15 = res15.split("\n");

let response16 = await fetch("./out16.txt");
const res16 = await response16.text();
const txt16 = res16.split("\n");

let response17 = await fetch("./out17.txt");
const res17 = await response17.text();
const txt17 = res17.split("\n");

let response18 = await fetch("./out18.txt");
const res18 = await response18.text();
const txt18 = res18.split("\n");

let response19 = await fetch("./out19.txt");
const res19 = await response19.text();
const txt19 = res19.split("\n");

const txt19re = [...new Set(txt19)];
// console.log(txt19re);

const uniqueValues = () => {};
const allArrays1 = txt0
  .concat(txt1)
  .concat(txt2)
  .concat(txt3)
  .concat(txt4)
  .concat(txt5)
  .concat(txt6)
  .concat(txt7)
  .concat(txt8)
  .concat(txt9);
// const uniq1 = [...new Set(allArrays1)];

const allArrays2 = txt10
  .concat(txt11)
  .concat(txt12)
  .concat(txt13)
  .concat(txt14)
  .concat(txt15)
  .concat(txt16)
  .concat(txt17)
  .concat(txt18)
  .concat(txt19);
// const uniq2 = [...new Set(allArrays2)];

const allArrays = allArrays1.concat(allArrays2);
const uniq = [...new Set(allArrays)];
const uniqFormated = uniq.join(" ").replace(/\-/g, "").split(" ");

// console.log(uniq);

// for(let i = 0; i < strArr.length - 1; i++)

const q = {
  wordf: 1,
  words: 2,
  word: 3,
  happy: 5,
};
q.industrytrain = 5;
const uniqobj = {};
const obj = [{ ...uniq }];
console.log(q);
// console.log(uniqFormated);

for (let i = 0; i < uniqFormated.length - 1; i++) {}
