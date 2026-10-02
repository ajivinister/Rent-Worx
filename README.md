# Rent Worx Property Management - Web Portal

## Project Overview
Rent Worx is a boutique property management firm in Auckland, NZ. This repository contains the frontend web application, built with a focus on high performance, accessibility, and modern UI/UX design.

## Architecture
* **HTML5/CSS3/Vanilla JS:** No heavy frontend frameworks to ensure lightning-fast load times.
* **Media:** All images optimized using the `.avif` format for superior compression and quality.
* **Theming:** Built-in Light/Dark mode toggling utilizing CSS Variables.

## File Structure
* `/css` - Contains `style.css` (Master stylesheet).
* `/js` - Contains `main.js` (Component logic, filtering, and theme toggling).
* `/media` - Page-specific subdirectories containing `.avif` assets.

## Deployment Notes
* The included `.htaccess` assumes an Apache environment. It forces HTTPS and removes `.html` extensions from the URL structure.
* Ensure all form endpoints (Formspree) are updated with production keys before launch.