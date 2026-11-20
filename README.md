# binalab.my

Static website for BinaLab, an SME digitalisation partner: websites first, business systems too.
Hosted on GitHub Pages (`CNAME` → binalab.my). No build step, no backend.

| File | Purpose |
|---|---|
| `index.html` | Home: services, work, process, packages, FAQ, contact |
| `about.html` | Company page |
| `assets/site.css`, `assets/site.js` | Shared styles and small behaviour (menu, reveal, footer year) |
| `*.webp` | Portfolio screenshots |
| `en.html`, `products.html`, `impact.html`, `google-business.html`, `about-founder*.html`, `portal.html`, `studio.html` | Redirect stubs so old links keep working |
| `sw.js` | Removes the old site's service worker and caches for returning visitors |

Contact: WhatsApp +60 11-1619 6474 · admin.binalab@gmail.com

The previous site (forms, Firebase Studio, products, youth programme) is in git history before this redesign.
Firestore data (leads, invoices) is still in the Firebase project `binalab-a7891`.
`firestore.rules` is kept as the record of the rules published there.
