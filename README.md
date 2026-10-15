# Data Analyst Portfolio

Recruiter-friendly personal portfolio web application built with React and Vite to present profile, skills, projects, experience, and contact channels in a clean, responsive format.

![React](https://img.shields.io/badge/React-18-20232A?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)
![Router](https://img.shields.io/badge/React_Router-v6-CA4245?logo=reactrouter)
![CSS](https://img.shields.io/badge/CSS-Responsive-1572B6?logo=css3)
![Status](https://img.shields.io/badge/Status-Production_Ready-1E8E3E)

## Quick Navigation

- [Executive Summary](#executive-summary)
- [Tech Stack](#tech-stack)
- [Core Engineering Concepts](#core-engineering-concepts)
- [Application Flow](#application-flow)
- [Project Structure](#project-structure)
- [Run Locally](#run-locally)
- [Customization Guide](#customization-guide)
- [Recruiter Notes](#recruiter-notes)
- [Deployment Note](#deployment-note)

## Executive Summary

This project demonstrates:

- Frontend engineering fundamentals using modern React
- Structured content modeling through centralized data configuration
- Responsive design implementation across desktop, tablet, and mobile
- Practical information architecture for professional portfolios
- Maintainable component-based UI composition

## Tech Stack

- React 18
- React Router DOM
- Vite 5
- Vanilla CSS (custom responsive system)

## Core Engineering Concepts

<details>
<summary><strong>1) Component-Based Architecture</strong></summary>

Reusable UI is organized into shared components (Navbar, Footer, PageHeader) and route-level pages (Home, About, Skills, Projects, Experience, Contact).

</details>

<details>
<summary><strong>2) Data-Driven Rendering</strong></summary>

All business content is maintained in a single source of truth:

- src/data/portfolio.js

Pages render dynamic content from this file, reducing hardcoded duplication and making updates quick.

</details>

<details>
<summary><strong>3) Client-Side Routing</strong></summary>

BrowserRouter powers clean URLs:

- /
- /about
- /skills
- /projects
- /experience
- /contact

</details>

<details>
<summary><strong>4) Responsive Layout Strategy</strong></summary>

The UI uses breakpoint-based CSS with mobile-specific ordering and compact interactions where needed (for example, CTA sizing and hero order on small screens).

</details>

<details>
<summary><strong>5) Accessibility-Aware Styling</strong></summary>

Includes focus-visible states, semantic layout sections, readable typography, and reduced-motion handling via prefers-reduced-motion media query.

</details>

## Application Flow

<details open>
<summary><strong>High-Level Flow</strong></summary>

1. User lands on Home and sees headline, profile card, and key CTAs.
2. User navigates to skills/projects/experience for deeper evaluation.
3. User validates credentials via project and certificate links.
4. User reaches Contact page and initiates outreach.

</details>

<details>
<summary><strong>Data Flow</strong></summary>

1. Static profile data is loaded from src/data/portfolio.js.
2. Route pages map data objects and arrays into UI cards/lists.
3. Shared styling from src/index.css enforces consistent visual language.

</details>

<details>
<summary><strong>Contact Flow</strong></summary>

1. User fills contact form.
2. Basic validation checks subject/message quality.
3. Mailto payload is generated and handed to the user email client.

</details>

## Project Structure

- src/main.jsx: Application entry, router mounting
- src/App.jsx: Route map and application shell
- src/components: Shared UI components
- src/pages: Route-level screens
- src/data/portfolio.js: Editable profile/project/certification content
- src/index.css: Global theme, layout, responsive behavior
- public: Static assets (favicon, profile image, resume)

## Run Locally

1. Install dependencies

   ```bash
   npm install
   ```

2. Start development server

   ```bash
   npm run dev
   ```

3. Build for production

   ```bash
   npm run build
   ```

4. Preview production build

   ```bash
   npm run preview
   ```

## Customization Guide

Update src/data/portfolio.js to change:

- Personal profile details
- Project summaries and links
- Internship and certificate links
- Skills and quick highlights

## Recruiter Notes

This repository highlights practical frontend implementation quality rather than template-only presentation:

- Modular React structure
- Centralized content management
- Strong responsive behavior
- Production build readiness
- Easy maintainability for iterative updates

## Deployment Note

For production hosting, configure SPA fallback to index.html so direct refresh on nested routes works correctly.
