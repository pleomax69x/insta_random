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

// const txt19re = [...new Set(txt19)];
// console.log(txt19);

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
const uniq = [...new Set(allArrays)]; // все уникальные с дефисом

// console.log(uniq);
// const uniqFormated = uniq.join(" ").replace(/\-/g, "").split(" "); // все уникальные без дефиса

// console.log(uniq);
// for(let i = 0; i < strArr.length - 1; i++)

// const q = {
//   wordf: 1,
//   words: 2,
//   word: 3,
//   happy: 5,
// };
// q.industrytrain = 5;
// const uniqobj = {};
// const obj = [{ ...uniq }];
// console.log(q);
// console.log(uniqFormated);

// let response20 = await fetch("./out19.txt");
// const res20 = await response20.text();
// const txt20 = res20.split("\n");

// console.log(uniq);

// ================================================================
//                                      uniq 20 finish
// let temp = [];

// for (let i = 0; i < uniq.length - 1; i++) {
//   if (!res19.includes(uniq[i])) {
//     continue;
//   }
//   if (!res18.includes(uniq[i])) {
//     continue;
//   }
//   if (!res17.includes(uniq[i])) {
//     continue;
//   }
//   if (!res16.includes(uniq[i])) {
//     continue;
//   }
//   if (!res15.includes(uniq[i])) {
//     continue;
//   }
//   if (!res14.includes(uniq[i])) {
//     continue;
//   }
//   if (!res13.includes(uniq[i])) {
//     continue;
//   }
//   if (!res12.includes(uniq[i])) {
//     continue;
//   }
//   if (!res11.includes(uniq[i])) {
//     continue;
//   }
//   if (!res10.includes(uniq[i])) {
//     continue;
//   }
//   if (!res9.includes(uniq[i])) {
//     continue;
//   }
//   if (!res8.includes(uniq[i])) {
//     continue;
//   }
//   if (!res7.includes(uniq[i])) {
//     continue;
//   }
//   if (!res6.includes(uniq[i])) {
//     continue;
//   }
//   if (!res5.includes(uniq[i])) {
//     continue;
//   }
//   if (!res4.includes(uniq[i])) {
//     continue;
//   }
//   if (!res3.includes(uniq[i])) {
//     continue;
//   }
//   if (!res2.includes(uniq[i])) {
//     continue;
//   }
//   if (!res1.includes(uniq[i])) {
//     continue;
//   }
//   if (!res0.includes(uniq[i])) {
//     continue;
//   }
//   temp.push(uniq[i]);
// }
// console.log(temp);

// for (let i = 0; i < uniq.length - 1; i++) {
//   let count = 0;
//   const x = uniq[i];
//   if (res19.includes(x)) {
//     count += 1;
//   }
//   if (res18.includes(x)) {
//     count += 1;
//   }
//   if (res17.includes(x)) {
//     count += 1;
//   }
//   if (res16.includes(x)) {
//     count += 1;
//   }
//   if (res15.includes(x)) {
//     count += 1;
//   }
//   if (res14.includes(x)) {
//     count += 1;
//   }
//   if (res13.includes(x)) {
//     count += 1;
//   }
//   if (res12.includes(x)) {
//     count += 1;
//   }
//   if (res11.includes(x)) {
//     count += 1;
//   }
//   if (res10.includes(x)) {
//     count += 1;
//   }
//   // if (count >= 10) {
//   //   temp.push(x);
//   //   continue;
//   // }
//   if (res9.includes(x)) {
//     count += 1;
//   }
//   if (res8.includes(x)) {
//     count += 1;
//   }
//   if (res7.includes(x)) {
//     count += 1;
//   }
//   if (res6.includes(x)) {
//     count += 1;
//   }
//   if (res5.includes(x)) {
//     count += 1;
//   }
//   // if (count >= 10) {
//   //   temp.push(x);
//   //   continue;
//   // }
//   if (res4.includes(x)) {
//     count += 1;
//   }
//   if (res3.includes(x)) {
//     count += 1;
//   }
//   if (res2.includes(x)) {
//     count += 1;
//   }
//   if (res1.includes(x)) {
//     count += 1;
//   }
//   if (res0.includes(x)) {
//     count += 1;
//   }

//   if (count > 10) {
//     temp.push(x);
//   }
// }

// for (let i = 0; i < uniq.length - 1; i++) {
//   let count = 0;

//   if (txt19.includes(uniq[i])) {
//     count += 1;
//   }
//   if (txt18.includes(uniq[i])) {
//     count += 1;
//   }
//   if (txt17.includes(uniq[i])) {
//     count += 1;
//   }
//   if (txt16.includes(uniq[i])) {
//     count += 1;
//   }
//   if (txt15.includes(uniq[i])) {
//     count += 1;
//   }
//   if (txt14.includes(uniq[i])) {
//     count += 1;
//   }
//   if (txt13.includes(uniq[i])) {
//     count += 1;
//   }
//   if (txt12.includes(uniq[i])) {
//     count += 1;
//   }
//   if (txt11.includes(uniq[i])) {
//     count += 1;
//   }
//   if (txt10.includes(uniq[i])) {
//     count += 1;
//   }
//   // if (count >= 10) {
//   //   temp.push(uniq[i]);
//   //   continue;
//   // }
//   if (txt9.includes(uniq[i])) {
//     count += 1;
//   }
//   if (txt8.includes(uniq[i])) {
//     count += 1;
//   }
//   if (txt7.includes(uniq[i])) {
//     count += 1;
//   }
//   if (txt6.includes(uniq[i])) {
//     count += 1;
//   }
//   if (txt5.includes(uniq[i])) {
//     count += 1;
//   }
//   // if (count >= 10) {
//   //   temp.push(uniq[i]);
//   //   continue;
//   // }
//   if (txt4.includes(uniq[i])) {
//     count += 1;
//   }
//   if (txt3.includes(uniq[i])) {
//     count += 1;
//   }
//   if (txt2.includes(uniq[i])) {
//     count += 1;
//   }
//   if (txt1.includes(uniq[i])) {
//     count += 1;
//   }
//   if (txt0.includes(uniq[i])) {
//     count += 1;
//   }

//   if (count >= 10) {
//     temp.push(uniq[i]);
//   }
// }

// console.log(temp);
// console.log(alert("finish"));
// alert("finish");

// console.log(res20.includes(uniq[0]));
// console.log(uniqFormated[0]);

// const arr2 = [1, [3, 2], [3, [4]]];
// arr2[2]; // [3, [4]]
// arr2[2][1]; // [4]
// arr2[2][1][0]; // 4

// console.log(typeof res20);
// console.log(res20);
// console.log(res20.includes("clean-keep"));
// sleep-interest; clean-keep

const arrOfArr = [];
arrOfArr.push(txt0);
arrOfArr.push(txt1);
arrOfArr.push(txt2);
arrOfArr.push(txt3);
arrOfArr.push(txt4);
arrOfArr.push(txt5);
arrOfArr.push(txt6);
arrOfArr.push(txt7);
arrOfArr.push(txt8);
arrOfArr.push(txt9);
arrOfArr.push(txt10);
arrOfArr.push(txt11);
arrOfArr.push(txt12);
arrOfArr.push(txt13);
arrOfArr.push(txt14);
arrOfArr.push(txt15);
arrOfArr.push(txt16);
arrOfArr.push(txt17);
arrOfArr.push(txt18);
arrOfArr.push(txt19);

// const allUniq = [...new Set(txt0)];

// const uniqOne0 = [];
// for (let i = 0; i < allUniq.length - 1; i++) {
//   const sample0 = arrOfArr[0].filter((word) => word === allUniq[i]);
//   if (sample0.length === 1) {
//     uniqOne0.push(sample0[0]);
//   }
// }
// console.log(uniqOne0);

// const uniqOne0 = [...allUniq];
// console.log(uniqOne0);
// const uniqOneTEMP = [...txt11];
// console.log(uniqOneTEMP);
// ====================================================  unic in all 20 document

// const finalUniqInOne = [];
// for (let b = 0; b < uniq.length - 1; b++) {
//   const uniqOneTEMP = [];

//   for (let i = 0; i < arrOfArr.length - 1; i++) {
//     const sample = arrOfArr[i].filter((word) => word === uniq[b]);
//     if (sample.length > 1) {
//       continue;
//     }
//     uniqOneTEMP.push(...sample);
//   }
//   // console.log(uniqOneTEMP);
//   if (uniqOneTEMP.length === 1) {
//     // continue;
//     finalUniqInOne.push(...uniqOneTEMP);
//   }
// }
// console.log(finalUniqInOne);

// const random = "journey-cold-winter";
// const samp = uniq.filter((word) => word === random);
// console.log(samp);
// ================================================================================
// switch (uniq[b]) {
//   case arrOfArr[0].filter((word) => word === uniq[b]):
//     break;
//   case value:
//     break;
//   case value:
//     break;
//   case value:
//     break;
//   case value:
//     break;
//   case value:
//     break;
//   case value:
//     break;

//   default:
//     break;
// }
//  ========================================= 1 in 20 need upgrade uniq file
// let switchFn = [];
// for (let i = 0; i < uniq.length - 1; i++) {
//   // let count = 0;
//   switch (false) {
//     case txt19.includes(uniq[i]):
//       // count += 1;
//       break;
//     case txt18.includes(uniq[i]):
//       break;
//     case txt17.includes(uniq[i]):
//       break;
//     case txt16.includes(uniq[i]):
//       break;
//     case txt15.includes(uniq[i]):
//       break;
//     case txt14.includes(uniq[i]):
//       break;
//     case txt13.includes(uniq[i]):
//       break;
//     case txt12.includes(uniq[i]):
//       break;
//     case txt11.includes(uniq[i]):
//       break;
//     case txt10.includes(uniq[i]):
//       break;
//     case txt9.includes(uniq[i]):
//       break;
//     case txt8.includes(uniq[i]):
//       break;
//     case txt7.includes(uniq[i]):
//       break;
//     case txt6.includes(uniq[i]):
//       break;
//     case txt5.includes(uniq[i]):
//       break;
//     case txt4.includes(uniq[i]):
//       break;
//     case txt3.includes(uniq[i]):
//       break;
//     case txt2.includes(uniq[i]):
//       break;
//     case txt1.includes(uniq[i]):
//       break;
//     case txt0.includes(uniq[i]):
//       break;

//     default:
//       switchFn.push(uniq[i]);
//       break;
//   }
// }
// console.log(switchFn);
// console.log(txt0.filter((word) => word === uniq[1])[1]);
// true or undefined

// console.log(uniq[1]);
// console.log(txt0.filter((word) => word === uniq[1])[1]);

// ======================================================================
// for (let b = 0; b < arrOfArr.length - 1; b++) {
//   const uniqOneTEMP = [];

//   for (let i = 0; i < uniqOne0.length - 1; i++) {
//     const sample0 = arrOfArr[b].filter((word) => word === uniqOne0[i]);
//     if (sample0.length === 1) {
//       uniqOneTEMP.push(sample0[0]);
//     }
//   }

//   uniqOne0.length = 0;
//   uniqOne0.push(...uniqOneTEMP);
//   console.log(uniqOne0);
// }

// console.log(uniqOne0);
// const uniqOne1 = [];
// for (let i = 0; i < uniqOne0.length - 1; i++) {
//   const sample1 = txt1.filter((word) => word === uniqOne0[i]);
//   if (sample1.length === 1) {
//     uniqOne1.push(sample1[0]);
//   }
// }
// console.log(uniqOne1);

// const uniqOne2 = [];
// for (let i = 0; i < uniqOne1.length - 1; i++) {
//   const sample2 = txt1.filter((word) => word === uniqOne1[i]);
//   if (sample2.length === 1) {
//     uniqOne2.push(sample2[0]);
//   }
// }
// console.log(uniqOne2);

// function getUniq(arrOfUniq) {
//   // if(){

//   // }
//   const uniqOne0 = [];
//   const x = 0;
//   for (let i = 0; i < allUniq.length - 1; i++) {
//     const sample0 = txt0.filter((word) => word === allUniq[i]);
//     if (sample0.length === 1) {
//       uniqOne0.push(sample0[0]);
//     }
//   }

//   console.log(uniqOne0);
// }

// for (let i = 0; i < allUniq.length - 1; i++) {
//   let count = 0;
//   const x = allUniq[i];
//   if (res19.includes(x)) {
//     count += 1;
//   }
//   if (res18.includes(x)) {
//     count += 1;
//   }
//   if (res17.includes(x)) {
//     count += 1;
//   }
//   if (res16.includes(x)) {
//     count += 1;
//   }
//   if (res15.includes(x)) {
//     count += 1;
//   }
//   if (res14.includes(x)) {
//     count += 1;
//   }
//   if (res13.includes(x)) {
//     count += 1;
//   }
//   if (res12.includes(x)) {
//     count += 1;
//   }
//   if (res11.includes(x)) {
//     count += 1;
//   }
//   if (res10.includes(x)) {
//     count += 1;
//   }
//   // if (count >= 10) {
//   //   temp.push(x);
//   //   continue;
//   // }
//   if (res9.includes(x)) {
//     count += 1;
//   }
//   if (res8.includes(x)) {
//     count += 1;
//   }
//   if (res7.includes(x)) {
//     count += 1;
//   }
//   if (res6.includes(x)) {
//     count += 1;
//   }
//   if (res5.includes(x)) {
//     count += 1;
//   }
//   // if (count >= 10) {
//   //   temp.push(x);
//   //   continue;
//   // }
//   if (res4.includes(x)) {
//     count += 1;
//   }
//   if (res3.includes(x)) {
//     count += 1;
//   }
//   if (res2.includes(x)) {
//     count += 1;
//   }
//   if (res1.includes(x)) {
//     count += 1;
//   }
//   if (res0.includes(x)) {
//     count += 1;
//   }

//   if (count > 10) {
//     temp.push(x);
//   }
// }
