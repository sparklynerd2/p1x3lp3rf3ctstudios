# P1x3l P3rf3ct Studios website

Static site for the studio's apps: a home page plus a privacy policy, terms of
service and (for apps with Firebase cloud accounts) an account deletion page per app.
Plain HTML/CSS/JS with no build step, made for **Cloudflare Pages**.

```
public/
  index.html                      home page (all apps)
  404.html
  _headers                        security headers (Cloudflare Pages)
  assets/                         styles.css, site.js, favicon, app icons
  gem-coloring/                   Diamond Painting: Gem Coloring
    privacy/  terms/  delete-account/
  taskquests/                     TaskQuests Planner & Randomizer
    privacy/  terms/  delete-account/
  safekeeping/                    Safekeeping
    privacy/  terms/  delete-account/
  pattern-maker/                  Diamond Painting Pattern Maker (offline, no deletion page)
    privacy/  terms/
  the-traitor-word/               The Traitor Word (offline, no deletion page)
    privacy/  terms/
```

## Deploying on Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Pick the `p1x3lp3rf3ctstudios` repository and the branch to deploy.
3. Build settings: **Framework preset** None, **Build command** blank,
   **Build output directory** `public`.
4. Save and deploy, then add your domain under **Custom domains**.

Every page is a folder with an `index.html`, so URLs are clean, for example
`/taskquests/privacy/` and `/gem-coloring/delete-account/`. Use these URLs in each
app's Google Play listing (Privacy policy and Data deletion fields).

## Account deletion pages

The form doesn't send anything to this website. It opens the visitor's email app
with a deletion request addressed to that app's support email, so no backend is needed.

## Contact addresses

| App | Email |
| --- | --- |
| Studio, Gem Coloring, Pattern Maker, The Traitor Word | support@p1x3lp3rf3ctstudios.com |
| TaskQuests Planner & Randomizer | support@task-quests.com |
| Safekeeping | support@safekeepingvault.app |

To change one, search and replace across `public/`.

## Keeping policies accurate

The policies describe what each app does today (data collected, Firebase use,
analytics, purchases, permissions). Update the matching page if an app adds a
feature that changes that, such as ads, analytics, a new SDK or a new permission.
These pages aren't legal advice; have them reviewed for the countries you sell in.
