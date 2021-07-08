---
title: Javascript Fundamental
date: '2020-04-24'
draft: true
cover: '/Javascript-Basic.jpg'
summary: Javascript merupakan bahasa pemrograman yang paling banyak digunakan oleh karna itu kita akan membahas fundamental pada javascript sehingga kita dapat lebih cepat mengatasi masalah dan mendebug javascript
---

## Asynchronous vs Synchronous

Syncronous sendiri merupakan dimana proses berjalan secara berurutan tanpa saling overlap satu sama lain

```javascript
const inputOne = 2
const inputTwo = 3

function multiply() {
  return inputOne + inputTwo
}

multiply()
```

Asyncronous merupakan salah satu cara untuk menjalankan proses dari belakang secara bersamaan sehingga tidak menganggu jalannya proses utama yang terjadi sebagai contoh kita menggunakan asyncronous function untuk mengambil data dari api backend sehingga tidak menggangu proses utama yang berjalan seperti merender User Interface

![Alt Text](../public/content/event-loop.gif)
