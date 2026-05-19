# Taskly — Product Demo

A pixel-perfect implementation of the **Taskly** mobile app design, built as a Vite + React application and deployed to GitHub Pages.

## What is Taskly?

Taskly is a task-manager mobile app. This demo renders the **Create Account** screen — the entry point for new users signing up to the product.

## Screen overview

The Create Account screen is a 375 × 812 px mobile layout comprising:

| Section | Details |
|---|---|
| **Top nav bar** | App wordmark "Taskly" centred in white bar (56 px tall) |
| **Page heading** | "Create your account" — Inter Bold 24 px |
| **Form card** | White card (12 px radius) with three labelled inputs: Full name, Email, Password |
| **Primary button** | "Get started" — full-width, brand-dark background (#1A2B4A) |
| **Sign-in link** | "Already have an account? Sign in" beneath the button |
| **Bottom nav bar** | Home · Search · Activity · Profile (Home active state shown) |

## Design source

Figma file key: `cXocOMh9TE9ILgfaayfihI`

All colours, typography, spacing, and sizing values were extracted directly from the Figma REST API and reproduced exactly in CSS.

## Tech stack

- [Vite](https://vitejs.dev/) — build tool
- [React 18](https://react.dev/) — UI framework
- [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts — typeface used in the Figma design
- GitHub Actions — CI/CD pipeline deploying to GitHub Pages

## Local development

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173/ux-workflow-outputs/`.

## Deployment

Every push to `main` triggers the `.github/workflows/deploy.yml` workflow, which builds the project and publishes the `dist/` output to GitHub Pages at:

```
https://<username>.github.io/ux-workflow-outputs/
```
