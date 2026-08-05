BinaLab — Client Acquisition Edition v1.2 (Firestore Logo Compression)

Perubahan utama:
- Business Diagnosis dibuang
- Business Discovery menjadi lead flow utama
- Customer boleh upload logo atau screenshot logo dari phone
- Logo auto-resize maksimum 500×500 px
- Logo auto-convert ke WebP
- Logo auto-compress dengan sasaran bawah 180 KB
- Logo disimpan sebagai Base64 terus dalam Firestore
- Firebase Storage tidak diperlukan
- Firestore collection: businessDiscoveries
- FAQ, Brand Identity, Industries Explored, live portfolio dan case studies dikekalkan
- Service worker cache v12

WAJIB SEBELUM DEPLOY:
1. Create Firebase project.
2. Register Web App.
3. Copy firebaseConfig ke firebase-config.js.
4. Enable Firestore Database.
5. Publish Firestore security rules.
6. Upload semua fail dalam folder ini ke root GitHub repository.

Cadangan Firestore Rules:

rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /businessDiscoveries/{discoveryId} {
      allow create: if
        request.resource.data.businessName is string
        && request.resource.data.businessName.size() >= 2
        && request.resource.data.businessName.size() <= 120
        && request.resource.data.industry is string
        && request.resource.data.dailyOperation is string
        && request.resource.data.biggestProblem is string
        && request.resource.data.dreamOutcome is string
        && (
          !('logoSize' in request.resource.data)
          || request.resource.data.logoSize <= 184320
        );

      allow read, update, delete: if false;
    }
  }
}

Penting:
- Satu dokumen Firestore mempunyai had saiz.
- Versi ini hanya sesuai untuk satu logo kecil yang sudah di-compress.
- Jangan gunakan Base64 Firestore untuk banyak gambar atau dokumen besar.


FIX v1.3:
- Fixed JavaScript syntax error that caused splash screen to stay forever.
- Firebase configuration has been inserted.
- Service worker cache upgraded to v13.


FIX v1.4:
- Removed the duplicated JavaScript closure that stopped the whole page.
- Added CSS-only splash fail-safe after 5 seconds.
- Added defensive JavaScript splash removal.
- Firebase module cache-busted.
- Service worker cache upgraded to v14.
- Inline JavaScript syntax verified: PASS.


FIX v1.5:
- Fixed runtime error from the removed Business Diagnosis section.
- Business Discovery buttons now use resilient event delegation.
- Added null guards for modal controls.
- Service worker upgraded to v15.
- JavaScript syntax verified: PASS.
