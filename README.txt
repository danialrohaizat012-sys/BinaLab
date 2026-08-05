BinaLab v2.0 Production

FILES
- index.html: public website + Business Discovery
- studio.html: BinaLab Studio owner dashboard
- portal.html: customer project portal
- firebase-config.js: Firebase config, Firestore and Authentication
- firestore.rules: required Firestore rules
- sw.js: PWA service worker
- manifest.webmanifest
- icons and portfolio screenshots

CUSTOMER FLOW
1. Customer submits Business Discovery.
2. System generates a Case ID such as BNL-2026-A1B2.
3. Customer receives a private portal link.
4. Portal shows stage, progress, update message and prototype URL.
5. Portal updates live from Firestore.

OWNER FLOW
1. Open /studio.html.
2. Login using Firebase Authentication Email/Password.
3. Select a discovery.
4. Update stage, progress, customer message, status and prototype URL.
5. Save progress.
6. Use Update & Notify WhatsApp to open a ready-made customer update.

REQUIRED FIREBASE SETUP
1. Authentication → Sign-in method → enable Email/Password.
2. Authentication → Users → Add user.
3. Firestore → Rules → paste the contents of firestore.rules → Publish.
4. Upload every file in this folder to the ROOT of the GitHub repository.

IMPORTANT URLS
- Public site: /BinaLab/
- Studio: /BinaLab/studio.html
- Customer portal: /BinaLab/portal.html?id=PRIVATE_ID

SECURITY NOTE
- Customer portal links use long private document IDs.
- Anonymous visitors cannot list discoveries.
- Only authenticated Studio users can list, update or delete.
- Do not publish customer portal links publicly.

NOTIFICATION NOTE
- WhatsApp notification is owner-initiated.
- Fully automatic email/push notifications require a backend or Cloud Function.


FIX v2.1:
- Corrected Firebase API key exactly from Firebase Console.
- Corrected digit/letter differences in the API key.
- Updated Firebase SDK imports to 12.17.1.
- Cache version upgraded to v210.
