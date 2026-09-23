# Apartment Hotel 11 FIT Website — Ver.2

Package-led public MVP for HIWIN and Apartment Hotel 11. The site presents three Osaka and Kansai journey levels—Essential, Signature, and Prestige—organized around Stay, Dine, Move, Relax, and Enjoy.

## Version isolation

- `../ver1` checks out branch `ver.1` and retains the original Sites project.
- `../ver2` checks out branch `ver.2` and uses a separate Sites project.
- Each worktree has its own `.openai/hosting.json`, build output, branch, and public URL.
- `main` remains unchanged until a later approval decision.

Public sites:

- Ver.1: <https://apartment-hotel-11-journeys.cnai5002.chatgpt.site>
- Ver.2: <https://apartment-hotel-11-kansai.cnai5002.chatgpt.site>

## Product shape

- Three packages with `From ¥X` preview pricing for two guests and 4 days / 3 nights.
- Apartment Hotel 11 properties plus the approved W Osaka and Aman Kyoto MVP examples.
- Experiences grouped as 住・食・行・癒・楽.
- Package-aware planning form with a fully custom option.
- Apartment Hotel 11 and approved HIWIN parent-company context on About.
- Public, non-transactional MVP: the current form sends and stores no information.

## Local development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
npm run lint
npm run build
```

The production build uses `vinext`. ChatGPT Sites configuration is stored in `.openai/hosting.json`; never copy the Ver.1 project ID into this worktree.

## Source of truth

Product decisions, package assumptions, sources, and unresolved commercial items are recorded in `/Users/frankdzzz/Desktop/A11/00_PROJECT`. The package prices, supplier availability, room categories, cancellation terms, and final inclusions require confirmation before real sales or payment are enabled.
