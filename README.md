# Daily 1KB Dump

Her gün sadece 1024 byte’lık bir şey bırak.  
Kod, yazı, ASCII sanat, mini JSON, şifreli mesaj…  
Sadece 1KB’lık özgürlük.

---

## Konsept

**"Sınırlı veri, sınırsız yaratıcılık."**

Daily 1KB Dump, her gün yalnızca 1024 byte’lık içerik gönderebileceğiniz bir mikro içerik platformudur.  
Bir satır kod, mini hikâye, deneysel şiir ya da byte’a sıkışmış bir fikir — ne istersen.

---

## Arayüz

- Renkli ve eğlenceli piksel temalı tasarım  
- Gerçek zamanlı byte sayacı  
- 1024 byte’ı geçersen gönderemezsin  
- Dump’lar günlük olarak saklanır  

---

## Teknolojiler

| Katman   | Teknoloji        |
|----------|------------------|
| Frontend | Vue 3 (Vite)     |
| Backend  | Node.js + Express|
| Veri     | Dosya tabanlı    |

---

## Proje Yapısı

```
daily-onekb-dump/
├── backend/
│   ├── data/dumps/
│   ├── routes/dump.js
│   ├── server.js
├── frontend/
│   ├── src/
│   │   ├── components/Dump.vue
│   │   ├── App.vue
│   │   ├── main.js
└── README.md
```

---

## Kurulum

### 1. Backend

```bash
cd backend
npm install
node server.js
```
Sunucu http://localhost:3001 adresinde çalışır.

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```
Vue uygulaması http://localhost:5173 adresinde açılır.

## Neden?

Kısıtlar yaratıcılığı zorlar.  
1024 byte’la bir şey anlatmak, ifade etmek veya üretmek bir meydan okuma.  
Ama aynı zamanda keyifli.

---

## Lisans

MIT License

---
