BinaLab OS — Interactive Business Stories Edition (v5)

Semua fail berada di root repository.

Kemas kini utama:
- Real Business Stories kini mempunyai View Full Case Study
- Setiap projek mempunyai 4 tab:
  1. The Story
  2. System Preview
  3. What We Built
  4. Expected Impact
- Interactive modal penuh untuk MOS Karting, Abedin Auto, KeduaOS dan Awanzco
- Preview visual sistem tersedia tanpa memerlukan link luar
- Struktur liveUrl disediakan dalam code untuk memasukkan deployment sebenar kemudian
- Business Discovery multi-step masih dikekalkan
- Mobile responsive
- Service worker cache v5

Penting:
Preview sekarang menggunakan visual demo dalaman kerana URL deployment sebenar untuk empat sistem belum dimasukkan.
Apabila URL tersedia, isi nilai liveUrl bagi setiap projek di dalam object caseStudies dalam index.html.
Sistem akan automatik memaparkan live prototype menggunakan iframe.

Cara deploy:
Upload semua fail dalam folder ini ke root repository GitHub dan replace versi lama.
Jika versi lama masih keluar, hard refresh atau clear site/PWA cache.
