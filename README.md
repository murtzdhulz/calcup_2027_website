# CalCup 2027 website

The website for **CalCup 2027**, a T10 cricket tournament in the Bay Area on March 20–21, 2027, presented by Phizenix.

Built with [Astro](https://astro.build) and Tailwind CSS. It's a fully static site with no server or database. Every push to `main` deploys to GitHub Pages:
**https://murtzdhulz.github.io/calcup_2027_website/**

Branding (logo, colours, crests, kits) comes from the `calcup` design repo, `2027/Final/` and `2027/Drafts/09 Team Logos & Jerseys/`.

## Quick start

You need [Node.js](https://nodejs.org/) 22.23 or newer (`node -v`).

```bash
npm install      # once
npm run dev      # live preview at http://localhost:4321/calcup_2027_website/
```

The page refreshes when you save a file. To see it on your phone, run `npm run dev -- --host` and open the **Network** URL on the same Wi-Fi.

`npm run build` makes the production site in `dist/`. `npm run preview` serves that build.

## Edit the content

Most content lives in data files. You don't need to touch the page design.

| File | What it controls |
|---|---|
| `src/data/site.ts` | Dates, location, venue, tagline, registration fees, deadline and Zelle, the countdown start time, and the "Preview" strip (`preview: true`) |
| `src/content/teams/<slug>.json` | One file per team: name, 3-letter code, group, colours, crest, kit and players. The file name is the page URL, e.g. `giants.json` → `/teams/giants/` |
| `src/content/matches.json` | The schedule. `teamA`/`teamB` are team file names (`"giants"`) or labels like `"A1"` or `"Winner SF1"` |
| `src/data/rules.ts` | Format steps, points and playing conditions (draft) |
| `src/data/faqs.ts` | FAQ questions and answers (draft) |

If a file has a mistake (a missing field, a misspelt role), `npm run build` stops and says which file and field.

### Adding or changing a team

1. Copy an existing file in `src/content/teams/` and rename it, e.g. `la-sharks.json`.
2. Update `name`, `code`, `group` and `colours`. Set `"placeholder": false` once the details are real.
3. **Crest:** put the image in `src/assets/teams/` and set `"crest": "../../assets/teams/la-sharks-crest.svg"` (SVG or PNG). Without a crest, the site draws a shield with the team's initial in its colours.
4. **Kit:** optional, same idea with `"kit"`.
5. Player `role` is one of `Batter`, `Wicket-keeper`, `All-rounder`, `Bowler`. Mark one `"captain": true` and one `"viceCaptain": true`.
6. Update any matches in `src/content/matches.json` that used the old file name.

### Removing a page

Pages are files in `src/pages/`. To drop one (for example Register), delete the file and remove its link from `nav` in `src/data/site.ts`. The Register button lives in `src/components/Header.astro`, the footer and the home page.

## Project layout

```
src/
  pages/          one file per page; teams/[slug].astro builds every team page
  components/     Header, Footer, Crest, MatchCard, PageHeader
  layouts/        Base.astro: <head>, fonts, preview strip
  content/        teams and matches (checked by src/content.config.ts)
  data/           site settings, rules, FAQs
  assets/         logos, crests and kits (optimized at build)
  styles/         global.css: brand colours, fonts, shared styles
public/           favicon and og.png (the link-preview image)
```

## Deploying

`.github/workflows/deploy.yml` builds and publishes on every push to `main`. In the GitHub repo, **Settings → Pages → Source** must be set to **GitHub Actions** (one time).

For a custom domain later, set `site` in `astro.config.mjs` to the domain and remove `base`.
