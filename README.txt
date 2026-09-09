BinaLab v4.0 — Bilingual + Studio Website CMS

PUBLIC WEBSITE
- First-visit language popup: Bahasa Melayu / English
- index.html = BM
- en.html = English
- Header language switch
- Existing 3-step "Ceritakan Bisnes Anda" lead flow retained

BINALAB STUDIO
New tabs:
1. Projects & Discoveries
2. Website Systems
3. Testimonials

Website Systems template fields:
- System name
- Industry
- BM description
- English description
- Live URL
- Tags
- Cover screenshot
- Sort order
- Publish toggle

Testimonials template fields:
- Client name
- Business name
- Role
- BM testimonial
- English testimonial
- Client photo
- Sort order
- Publish toggle

Anything published in Studio appears on both BM and English websites automatically via Firestore.

IMPORTANT FIREBASE STEP
Firestore → Rules → replace with firestore.rules → Publish.

FIRST USE
Studio → Website Systems → Import Current 4.
After that, the four existing portfolio items become editable Firestore content.

DEPLOY
Upload every file in this folder to the ROOT of the GitHub repository.
Open website with ?v=400 after deploy.
