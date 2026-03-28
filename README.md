# American Sports Legacy Museum
### NJIT IT310 — Museum Website Project

A digital museum dedicated to the history, culture, and memorabilia of American sport. The exhibition explores the four major professional leagues (NBA, NFL, MLB, NHL), iconic individual athletes, and the primary source artifacts that define American sports history.

**Live Site:** https://amm348-glitch.github.io/sports-legacy-museum

---

## Design Framework

### 1. Design Style — Swiss International
The site uses the Swiss International Typographic Style developed in Switzerland in the 1950s:
- Grid-based layout with strict column structure
- Sans-serif typography — Bebas Neue (display) + IBM Plex Mono (utility) + IBM Plex Sans (body)
- One dominant accent color (gold) against black and off-white
- Visual hierarchy achieved through scale, not decoration

Swiss design was chosen because museums rely on institutional authority — the Swiss style communicates seriousness, curation, and permanence.

### 2. Cialdini Principle — Social Proof
The site uses Social Proof — people trust and follow the judgments of credible others — to establish visitor trust and encourage exploration:
- "As Featured In" banner credentials the museum against the National Archives, Smithsonian, and Library of Congress
- Statistical anchors (100M+ fans, 150+ years of history) signal scale and legitimacy
- Authority quotes from globally recognized figures anchor each section
- Every artifact explicitly cites its real institutional source

### 3. Brand Archetype — The Hero
The Hero archetype speaks to triumph over adversity, mastery through effort, and inspiration from witnessing exceptional courage:
- Color palette — gold and black (power, sacrifice, authority)
- Typographic voice — uppercase, bold, declarative
- Legends selected specifically because their stories are defined by overcoming obstacles
- Copy frames athletic achievement as cultural legacy, not just statistics

---

## How These Work Together

| Element | Role |
|---------|------|
| Swiss Style | Visual grounding — grid and typographic discipline give the site curatorial authority |
| Social Proof | Engagement logic — institutional credentialing earns trust, stats create scale |
| Hero Archetype | Psychological identity — every page reinforces the narrative of achievement and legacy |

---

## Agentic Orchestration Process

This project was built using a spec-driven, iterative AI workflow:
```
Spec → QA → Sprint → QA → Implement → QA
```

**Step 1 — Concept Spec**
Defined the museum scope (4 leagues + 4 legends), identified primary sources (National Archives, Smithsonian, Library of Congress, Card Vault), and drafted the rough concept before writing any code.

**Step 2 — Design Framework Decision**
Selected Swiss / Hero / Social Proof as the three-pillar framework before implementation. Each decision was justified relative to the museum's audience and educational goals.

**Step 3 — AI Review of Reference Repository**
Used Claude to review the reference project and extract the strongest workflow patterns — spec-first development, context management, drift reduction, and how smaller focused sprints improve output quality.

**Step 4 — Smithsonian Curator Review**
Instructed Claude to evaluate the museum as a Smithsonian curator reviewing an exhibition, assessing:
- Narrative flow — does the site tell a story or just list information?
- Artifact presentation — are objects contextualized with historical meaning?
- Educational value — does the visitor learn something at each stop?
- Emotional engagement — does the content create resonance beyond facts?
- Visitor experience — is navigation logical and pacing appropriate?

**Step 5 — Iterative QA**
Each page was built, reviewed, and revised as a discrete unit. The Cialdini principle was checked across all pages. The Hero archetype voice was verified throughout all copy.

---

## Primary Sources

| # | Source | Relevance |
|---|--------|-----------|
| 1 | [National Archives — All-American: The Power of Sports](https://www.archives.gov) | Primary source documents and artifacts |
| 2 | [Smithsonian Sports Memorabilia Collection](https://www.si.edu) | Authentic artifact catalog across all major American sports |
| 3 | [Library of Congress — Jackie Robinson Exhibition](https://www.loc.gov) | Primary source photos and documents on Robinson's 1947 MLB debut |
| 4 | [Card Vault by Tom Brady](https://www.cardvault.com) | Modern sports memorabilia market |

---

## File Structure
```
museum/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── pages/
│   ├── leagues.html
│   ├── legends.html
│   ├── artifacts.html
│   └── about.html
└── README.md
```

---

*American Sports Legacy Museum — NJIT IT310 — 2025*