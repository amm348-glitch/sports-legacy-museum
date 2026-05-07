# American Sports Legacy Museum
### NJIT IT310 — Final Museum Project

A digital museum dedicated to the history, culture, and memorabilia of American sport. The exhibition explores the four major professional leagues (NBA, NFL, MLB, NHL), iconic individual athletes, primary source artifacts, and a complete interactive timeline of 150 years of American sports history.

**Live Site:** https://amm348-glitch.github.io/sports-legacy-museum

---

## Site Structure

| Page | Description |
|------|-------------|
| `index.html` | Homepage — guided tour entry point, narrative intro, featured wings |
| `pages/leagues.html` | Wing I — The Four Leagues overview with league selector |
| `pages/nba.html` | NBA deep dive — 9 legends, 4 dynasty eras |
| `pages/nfl.html` | NFL deep dive — 9 legends, 6 iconic Super Bowls |
| `pages/mlb.html` | MLB deep dive — 9 legends, historical timeline |
| `pages/nhl.html` | NHL deep dive — 6 legends, Stanley Cup history, Miracle on Ice |
| `pages/legends.html` | Wing II — Hall of Legends (Ali, Jordan, Serena, Tiger) |
| `pages/artifacts.html` | Wing III — The Collection (primary source artifacts) |
| `pages/timeline.html` | Wing V — Interactive timeline with sport filter (1876–2023) |
| `pages/about.html` | Design Framework, Process, Sources |

---

## Design Framework

### 1. Design Style — Swiss International Typographic Style
The site uses the Swiss International Typographic Style developed in Switzerland in the 1950s:
- **Grid-based layout** — strict column structure, mathematical spacing
- **Typography** — Bebas Neue (display) + IBM Plex Mono (utility) + IBM Plex Sans (body)
- **Color** — Gold accent (#c9a84c) on deep black and off-white
- **Visual hierarchy through scale** — not decoration
- **Background grid lines** — subtle Swiss grid overlay on hero and page headers

Swiss design was chosen because museums rely on institutional authority — the Swiss style communicates seriousness, curation, and permanence.

### 2. Cialdini Principle — Social Proof
The site uses **Social Proof** — people trust and follow the judgments of credible others — to establish visitor trust and encourage exploration:
- **"As Featured In" / Sources banner** on every page credentials the museum against the National Archives, Smithsonian, Library of Congress, and National Baseball Hall of Fame
- **Statistical anchors** — "100M+ Super Bowl viewers," "$18B annual revenue," "61 NHL records" signal scale and legitimacy
- **Authority quotes** — Mandela, Ali, Jordan, Gretzky anchor sections in established authority
- **Explicit source citations** on every artifact card

### 3. Brand Archetype — The Hero
The **Hero archetype** drives the psychological identity of the site:
- **Color palette** — gold and black (power, sacrifice, authority, legacy)
- **Typographic voice** — uppercase, bold, declarative
- **Athlete selection** — every legend profiled was chosen because their story involves overcoming adversity, not just winning
- **Copy framing** — athletic achievement is presented as cultural legacy, not statistics
- **Narrative structure** — the homepage frames the entire museum as a hero's journey through American history

---

## How These Work Together

| Element | Role |
|---------|------|
| Swiss Style | Visual grounding — grid discipline gives the site curatorial authority |
| Social Proof | Engagement logic — institutional credentialing earns trust immediately |
| Hero Archetype | Psychological identity — every page reinforces achievement and legacy |

---

## AI Orchestration Process

This project was built using a **spec-driven, iterative AI workflow**:

```
Spec → QA → Sprint → QA → Implement → QA
```

**Step 1 — Concept & Research**
Defined museum scope, identified primary sources (National Archives, Smithsonian, Library of Congress, Card Vault), and planned the full site structure before writing any code.

**Step 2 — Design Framework**
Selected Swiss / Hero / Social Proof as the three-pillar framework. Each decision was justified relative to the museum's audience and educational goals before implementation began.

**Step 3 — Reference Repository Review**
Used Claude to review the reference project (`kaw393939/nextjs_ai_orchestration_spec_sprint_process`) and extract:
- Spec-first development workflow
- Context management strategies
- How smaller focused sprints reduce AI drift and improve quality

**Step 4 — Smithsonian Curator Review**
Instructed Claude to evaluate the museum as a Smithsonian curator:
- Narrative flow — does the site tell a story?
- Artifact presentation — are objects contextualized with historical meaning?
- Educational value — does the visitor learn something at each stop?
- Emotional engagement — does the content create resonance beyond facts?
- Visitor experience — is navigation logical and pacing appropriate?

**Step 5 — Iterative Sprint Building**
Each page was built as a discrete sprint, reviewed against quality criteria, and revised before moving to the next page. The three-part framework (Swiss / Hero / Social Proof) was checked on every page.

**Step 6 — Expansion & Improvement**
Based on midterm feedback, the site was expanded from 5 pages to 10 — adding individual league deep dives and an interactive timeline with filter functionality.

---

## Primary Sources

| # | Source | Relevance |
|---|--------|-----------|
| 1 | [National Archives — All-American: The Power of Sports](https://www.archives.gov) | Primary source documents including Title IX original |
| 2 | [Smithsonian Sports Memorabilia Collection](https://www.si.edu) | Authentic artifact catalog across all major American sports |
| 3 | [Library of Congress — Jackie Robinson Exhibition](https://www.loc.gov) | Primary source photos and documents on Robinson's 1947 debut |
| 4 | [Card Vault by Tom Brady](https://www.cardvault.com) | Modern sports memorabilia market; Brady as NFL primary source |

---

*American Sports Legacy Museum — NJIT IT310 — 2025*
