---
title: DevOps Praktis dengan Github
date: '2020-04-24'
draft: false
cover: '/Javascript-Basic.jpg'
summary: DevOps merupakan serangkaian praktik untuk mempersingkat siklus hidup pengembangan aplikasi dan menyediakan pengiriman berkelanjutan dengan kualitas perangkat lunak yang tinggi
---

Ada 3 core praktik yang akan kita bahas

- Continous Integration  
  Developer mengembangkan aplikasi dengan menerapkan integrasi berkelanjutan melalui `version control` untuk setiap perubahan pada code sekecil dan secepat mungkin sehingga test otomatis dapat langsung divalidasi. Dengan cara seperti ini kita dapat menghindari masalah integrasi yang terjadi pada hari mendekati aplikasi di release
- Continous Delivery  
  Continous delivery merupakan proses lanjutan dari continous integration dimana akan diterapkannya semua perubahan pada aplikasi ke lingkungan testing atau production setelah proses build selesai. Proses ini dilakukan secara otomatis namun masih terdapat campur tangan manusia seperti approval pada aplikasi sebelum code di release ke production
- Continuous Deployment  
  Continous deployment bisa dibilang selangkah lebih canggih dibandingkan continous delivery karna semua perubahan akan langsung diimplementasikan pada lingkungan production dan tidak ada campur tangan manusia secara langsung. Hanya testing yang gagal saja yang dapat akan menghentikan perubahan baru pada lingkungan production.

## Github Action

Github action merupakan salah satu tool yang bisa kita gunakan untuk menerapkan CI/CD lewat github. Sebelum melangkah lebih jauh ada baiknya untuk kita mengetahui Agent yang digunakan untuk menjalankan CI/CD pipeline kita

- GitHub-hosted runners. Agent yang telah disediakan oleh github kita bisa memanfaatkan 2,000 menit gratis tiap bulannya
- Self-hosted runners. Agent yang dapat kita install dan atur sesuai kebutuhan melalui virtual machine pada cloud

Github Action menggunakan yaml dalam format penulisan codingannya

- name: Nama dari workflow github action yang kita buat.
- on: Github event yang akan mentrigger jalannya workflow github action.
- jobs: Workflow yang akan dijalankan

```yaml
name: GitHub Actions Demo
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [10.x, 12.x, 14.x]
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - run: npm ci
      - run: npm run build --if-present
      - run: npm test
```
