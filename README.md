# Avenue Lands Ventures

A modern, high-performance **Progressive Web App (PWA)** built for Avenue Lands Ventures to showcase prime real estate listings in Kenya. This application allows users to browse plots, view galleries, read real estate blogs, and book site visits seamlessly, even with poor internet connectivity.

## 🚀 Features

### 📱 User Experience

- **Progressive Web App (PWA):** Installable on Android, iOS, and Desktop. Works offline and behaves like a native app.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop using **Bootstrap 5**.
- **Lazy Loading:** Components and pages load only when needed to ensure lightning-fast performance.
- **Image Lightbox:** Interactive gallery for property and event photos.

### 🛠️ Functionality

- **Property Listings:** Filterable views for available, sold out, and coming soon projects.
- **Booking System:** Modal-based form for scheduling site visits.
- **Media Center:** A dedicated blog section for articles and video tours.
- **SEO Optimized:** Dynamic meta tags and titles for every page using `react-helmet-async`.
- **Push Notification Support:** Scaffolded logic for permission requests and subscription management.

## 🛠️ Tech Stack

- **Frontend:** [React.js](https://reactjs.org/) (v19)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Bootstrap 5](https://getbootstrap.com/) & Custom CSS
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **PWA:** [Vite PWA Plugin](https://vite-pwa-org.netlify.app/)
- **Icons:** [Bootstrap Icons](https://icons.getbootstrap.com/)
- **SEO:** [React Helmet Async](https://github.com/staylor/react-helmet-async)

## 📂 Project Structure

```bash
src/
├── components/       # Reusable UI components (Navbar, Footer, Hero, Cards)
├── data/            # Static JSON data (Properties, Blogs, Gallery)
├── pages/           # Full page layouts (Home, PropertyDetails, About, Contact)
├── App.jsx          # Main application logic and Routing
├── main.jsx         # Entry point
└── index.css        # Global styles and Bootstrap overrides
```
