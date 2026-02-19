# replit.md

## Overview

This is a **Link-in-Bio** static website — a simple personal landing page (similar to Linktree) where a user can display their profile picture, bio, and a collection of social media/contact links. The project is a lightweight, static frontend-only application served using the `serve` npm package.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Pure HTML/CSS/JS**: No frameworks or build tools. The app consists of three files:
  - `index.html` — Main page structure with profile header, link cards, and footer
  - `style.css` — Styling with CSS (uses Google Fonts "Inter", gradient background, card-based link layout)
  - `script.js` — Currently empty, placeholder for future interactivity
- **Design Pattern**: Single-page static site. All content is hardcoded in HTML. There is no templating, routing, or dynamic content generation.
- **Typography**: Uses Google Fonts (Inter) loaded via CDN
- **Layout**: Centered container with max-width of 480px, mobile-friendly with viewport meta tag

### Backend Architecture
- **No backend**: This is a purely static site. The `serve` npm package is used as a simple static file server on port 5000.
- **No database, no API, no server-side logic**

### Key Files
| File | Purpose |
|------|---------|
| `index.html` | Main page with profile info and link cards |
| `style.css` | All styling (partially incomplete — `.links` class appears truncated) |
| `script.js` | Empty — reserved for future JavaScript functionality |
| `package.json` | Project config; uses `serve` to host static files on port 5000 |

### Known Issues
- The `style.css` file appears to be **truncated** — the `.links` class definition is incomplete and likely missing styles for link cards, footer, hover effects, etc.
- The `script.js` file is empty — no JavaScript functionality is implemented yet
- All link `href` attributes are set to `#` (placeholder)
- Profile image is hosted on an external image hosting service (ibb.co)

### Development Server
- Run with `npm start` which executes `serve . -l 5000`
- Serves static files from the project root on port 5000

## External Dependencies

### NPM Packages
| Package | Purpose |
|---------|---------|
| `serve` (v14.2.5) | Dev dependency — lightweight static file server |

### External Services / CDNs
| Service | Purpose |
|---------|---------|
| Google Fonts (fonts.googleapis.com) | Loads the "Inter" font family |
| ibb.co (i.ibb.co) | Hosts the profile picture image |

### No Database
This project has no database. All content is static HTML. If the project evolves to support dynamic content (user-editable links, analytics, etc.), a database and backend would need to be added.