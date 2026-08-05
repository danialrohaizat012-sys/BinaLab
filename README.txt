BinaLab — Client Acquisition Edition v1.1

Perubahan utama:
- Business Diagnosis dibuang sepenuhnya
- Business Discovery menjadi satu-satunya lead flow
- USP baharu: interface direka mengikut colour branding dan identiti jenama client
- Brand Identity showcase
- Industries We Have Explored
- FAQ
- Business Discovery disambungkan kepada Firebase Firestore + Firebase Storage
- Logo dan reference files dihantar ke Firebase Storage
- Submission disimpan dalam collection: businessDiscoveries
- Mobile-first dan PWA ready
- Service worker cache v11

WAJIB SEBELUM DEPLOY:
1. Buka Firebase Console.
2. Create / pilih project BinaLab.
3. Tambah Web App.
4. Copy firebaseConfig.
5. Buka firebase-config.js.
6. Replace semua nilai PASTE_... dengan config sebenar.
7. Enable Firestore Database.
8. Enable Firebase Storage.
9. Gunakan security rules yang sesuai sebelum share kepada client.

Firestore collection:
businessDiscoveries

Storage folder:
business-discoveries/{submissionId}/

Penting:
Fail ini menggunakan Firebase Web SDK melalui CDN.
Jangan padam firebase-config.js daripada root repository.
