BinaLab v4.5 — Demo Safe Architecture

Locked architecture:
PUBLIC
Website → Portfolio Kami → Demo System only

CLIENT
Client Portal → Prototype / Quotation / Production System

INTERNAL
BinaLab Studio → Projects / Commercial / Portfolio Manager

Important safety rule:
Public website MUST NEVER link directly to a client's production/internal system.

Portfolio workflow:
Project Completed
→ Add to Portfolio Kami
→ Draft created
→ Client/portfolio approval confirmed
→ Demo-safe version prepared
→ Add demo URL
→ Publish

Portfolio fields:
- Business / project name
- Industry
- Problem
- What BinaLab built
- BM / English description
- Demo URL
- Screenshot
- Tags
- Approval checkbox
- Demo Ready checkbox
- Publish toggle

Studio improvements:
- Projects Completed label
- Hasil Diterima
- Invoice Belum Dibayar
- Create Quotation directly from Project with auto-filled client details
- Production URL and Demo URL stored separately

Use ?v=450 after deployment.


FIX v4.5.1:
- Fixed BM/EN switch so it always navigates to the other language page.
- Removed redirect logic that could force users back to the previously saved language.
- Language preference is now updated only when the user explicitly chooses/switches language.
- First-visit language popup remains.
- Cache bumped to v451.


UPDATE v4.5.2 — Commercial Live Preview
- Quotation and Invoice now have a live preview while editing.
- Preview updates instantly when changing client details, items, tax, notes, or status.
- Print / Save PDF uses the same document data.
- Preview includes BinaLab branding, client block, project Case ID, items, totals, notes, and footer.


UPDATE v4.5.3 — Premium Commercial Documents
- Redesigned Quotation / Invoice preview
- Added BinaLab logo prominently
- Added premium brand header and accent bar
- Stronger document hierarchy
- Better client/project information cards
- Dark branded item table header
- Improved totals card
- Better Scope / Notes section
- Print / Save PDF now matches the preview design closely
