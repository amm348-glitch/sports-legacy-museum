# American Sports Legacy Museum
### NJIT IT310 — Museum Website Project

A digital museum dedicated to the history, culture, and memorabilia of American sport. The exhibition explores the four major professional leagues (NBA, NFL, MLB, NHL), iconic individual athletes, and the primary source artifacts that define American sports history.

---

## Live Exhibition

| Page | Description |
|------|-------------|
| `index.html` | Homepage — hero, exhibition wings, legends preview, featured artifact |
| `pages/leagues.html` | Wing I — The Four Leagues (NBA, NFL, MLB, NHL) |
| `pages/legends.html` | Wing II — Hall of Legends (Ali, Jordan, Williams, Woods) |
| `pages/artifacts.html` | Wing III — The Collection (primary source artifacts) |
| `pages/about.html` | Design Framework, Process, Sources |

---

## Design Framework

### 1. Design Style — Swiss International Typographic Style
The site uses the **Swiss International Typographic Style** (also called the International Style), developed in Switzerland in the 1950s. Key characteristics:
- **Grid-based layout** — strict column structure, mathematical spacing
- **Sans-serif typography** — Bebas Neue (display) + IBM Plex Mono (utility) + IBM Plex Sans (body)
- **Visual hierarchy through scale** — not decoration
- **Red accent system** — one dominant accent color (institutional red) against black/off-white
- **Background grid lines** — subtle 80px Swiss grid overlay on hero and page headers

Swiss design was chosen because museums rely on institutional authority — the Swiss style communicates seriousness, curation, and permanence. It is the visual tradition of posters, exhibit signage, and cultural institutions.

### 2. Cialdini Principle — Social Proof
The site uses **Social Proof** — Cialdini's principle that people trust and follow the judgments of credible others — to establish visitor trust and encourage deeper exploration.

Applied through:
- **"As Featured In" banner** — credentials the museum against the National Archives, Smithsonian, Library of Congress
- **Statistical anchors** — "100M+ fans," "150+ years of history" signals scale and legitimacy
- **Authority quotes** — Mandela, Ali, and other globally recognized figures anchor key sections
- **Artifact sourcing** — every artifact explicitly cites its real institutional source (National Archives, Smithsonian, Library of Congress, Card Vault)

### 3. Brand Archetype — The Hero
The **Hero archetype** drives the psychological identity of the site. The Hero speaks to triumph over adversity, mastery through effort, and the inspiration that comes from witnessing exceptional courage.

Applied through:
- **Color palette** — red (urgency, sacrifice, power) and black (strength, authority) on off-white
- **Typographic voice** — uppercase, bold, declarative
- **Legend selection** — Ali, Jordan, Williams, Woods were chosen specifically because their stories are defined by overcoming obstacles, not just winning
- **Copy framing** — athletic achievement is presented as cultural legacy, not statistics
- **Visual weight** — large display type, minimal decoration; confidence over ornamentation

---

## How These Work Together

| Element | Role |
|---------|------|
| Swiss Style | Visual grounding — the grid and typographic discipline give the site curatorial authority |
| Social Proof | Engagement logic — institutional credentialing earns trust, statistics create scale |
| Hero Archetype | Psychological identity — every page reinforces the narrative of achievement and legacy |

When combined: visitors arrive at a site that feels visually authoritative (Swiss), trust its content (Social Proof), and feel emotionally engaged with stories of triumph (Hero).

---

## Development Process — Agentic Orchestration

This project was built using a **spec-driven, iterative AI workflow** — not a single-prompt approach.

```
Spec → QA → Sprint → QA → Implement → QA
```

### Steps

**1. Concept Spec**
Defined museum scope (4 leagues + 4 legends), identified primary sources, and drafted the rough concept before writing any code.

**2. Design Framework Selection**
Selected Swiss / Hero / Social Proof as the three-pillar framework before implementation. Each decision was justified relative to the museum's audience and educational goals.

**3. AI Review — Reference Repository**
Used Claude to review the reference project (`kaw393939/nextjs_ai_orchestration_spec_sprint_process`) and extract:
- Strongest workflow patterns (spec-first, context management, drift reduction)
- How smaller focused sprints improve output quality over single large prompts
- How iterative QA catches problems before they compound

**4. AI Review — Smithsonian Curator Lens**
Instructed Claude to evaluate the museum as a Smithsonian curator reviewing an exhibition:
- **Narrative flow**: Does the site tell a story, or just list information?
- **Artifact presentation**: Are objects contextualized with historical meaning?
- **Educational value**: Does the visitor learn something at each stop?
- **Emotional engagement**: Does the content create resonance beyond facts?
- **Visitor experience**: Is the navigation logical and the pacing appropriate?

Curator feedback led to: deeper biographical content on the Legends page, explicit sourcing on every artifact card, the "Why Artifacts Matter" section explaining the museum's curatorial philosophy, and the About page documenting the full framework.

**5. Iterative Refinement**
Each page was built, reviewed, and revised as a discrete unit before integration. The Cialdini principle was checked to ensure Social Proof appeared on multiple pages (not just the homepage). The Hero archetype's voice was checked across all copy.

---

## Primary Sources

| # | Source | Relevance |
|---|--------|-----------|
| 1 | [National Archives — All-American: The Power of Sports](https://www.archives.gov) | Primary source documents and artifacts; direct model for the museum concept |
| 2 | [Smithsonian Sports Memorabilia Collection](https://www.si.edu) | Authentic artifact catalog across all major American sports |
| 3 | [Library of Congress — Jackie Robinson Exhibition](https://www.loc.gov) | Primary source photos and documents on Robinson's 1947 MLB debut |
| 4 | [Card Vault by Tom Brady](https://www.cardvault.com) | Modern sports memorabilia market; Brady as NFL primary source |

---

## File Structure

```
museum/
├── index.html              # Homepage
├── css/
│   └── style.css           # Full Swiss design system
├── js/
│   └── main.js             # Scroll animations, nav state
├── pages/
│   ├── leagues.html        # Wing I — The Four Leagues
│   ├── legends.html        # Wing II — Hall of Legends
│   ├── artifacts.html      # Wing III — The Collection
│   └── about.html          # Design Framework & Process
└── README.md               # This file
```

---

*American Sports Legacy Museum — NJIT IT310 — 2025*
