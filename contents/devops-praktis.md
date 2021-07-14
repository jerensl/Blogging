---
title: Belajar Fundamental Devops
date: '2020-04-24'
draft: true
summary: DevOps merupakan serangkaian praktik untuk mempersingkat siklus hidup pengembangan aplikasi dan menyediakan pengiriman berkelanjutan dengan kualitas perangkat lunak yang tinggi
---

Ada 3 core yang akan kita bahas

- Continous Integration  
  Developer mengembangkan aplikasi dengan menerapkan integrasi yang berkelanjutan melalui remote `version control` atau `git` untuk setiap perubahan pada code dengan skala kecil dan secepat mungkin sehingga automatic test dapat langsung menvalidasi. Dengan cara seperti ini kita dapat menghindari masalah integrasi yang terjadi pada hari mendekati aplikasi di release
- Continous Delivery  
  Continous delivery merupakan proses lanjutan dari continous integration dimana akan diterapkannya semua perubahan pada aplikasi ke lingkungan testing atau production setelah proses build selesai. Proses ini dilakukan secara otomatis namun masih terdapat campur tangan manusia seperti approval pada aplikasi sebelum code di release ke production
- Continuous Deployment  
  Continous deployment bisa dibilang selangkah lebih canggih dibandingkan continous delivery karna semua perubahan akan langsung diimplementasikan pada lingkungan production dan tidak ada campur tangan manusia secara langsung. Hanya testing yang gagal saja yang dapat akan menghentikan perubahan baru pada lingkungan production.

Berikut ada beberapa tools yang bisa kita gunakan untuk menerapkan Devops

- Github Actions
- Azure Devops
- Cloud Build
