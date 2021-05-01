---
title: Javascript 101
date: '2020-04-24'
draft: false
cover: '/Javascript-Basic.jpg'
summary: Javascript merupakan salah satu bahasa pemrograman terpopuler hal itu membuat pemula cukup mudah untuk menemukan dokumentasi dan tutorial diluar sana
---

## Variable

Javascript memiliki 3 jenis variable var, let dan const namun var sudah tidak lagi digunakan pada aplikasi modern javascript. Ketika dipanggil variable biasa merujuk pada sebuah value pada variable tersebut

- let digunakan untuk variable yg bisa dimutasi/berubah
- const digunakan untuk variable tidak dapat dimutasi/tetap

```javascript
var old = 'Hello world 1'
let mutable = 'Hello world 2'
const immutable = 'Hello world 3'

console.log(old) // memanggil varible old hasilnya merupakan value dari variable tersebut `Hello world 1`
```
