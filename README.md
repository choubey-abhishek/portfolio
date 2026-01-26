Abhishek Choubey — Software Engineer Portfolio

A production-quality personal portfolio website built to showcase my work as a Backend-focused Software Engineer with Full-Stack experience.
The site emphasizes performance, maintainability, and engineering fundamentals over unnecessary abstractions.

Live Site:
https://choubey-abhishek.github.io/Abhishek-choubey-portfolio/

GitHub:
https://github.com/choubey-abhishek

Purpose

This portfolio is not just a visual resume—it is an engineering artifact.

The goal was to build a fast, responsive, and accessible website using core web technologies, while applying real-world software engineering principles such as:

performance optimization

clean separation of concerns

progressive enhancement

defensive client-side logic

scalable UI architecture without frameworks

Everything you see here is intentionally built without frontend frameworks to demonstrate fundamentals rather than dependencies.

Engineering Highlights
Performance & Optimization

Lazy loading using IntersectionObserver

Scroll handling optimized with requestAnimationFrame

Animations disabled post-load to reduce runtime overhead

Zero build step, zero framework overhead

Minimal network requests and optimized font loading

UX & Accessibility

Fully responsive layout (mobile-first)

Dark mode with runtime theme switching

Reduced-motion support for accessibility

Keyboard-friendly navigation

Semantic HTML for screen readers and SEO

Architecture Decisions

Vanilla HTML/CSS/JavaScript for predictability and control

CSS variables for scalable theming

Modular JS logic (scroll, filters, observers, chatbot)

Clear separation between UI behavior and presentation

Features

Hero Section

Animated wave background with GPU-safe transforms

Clear positioning statement and technical focus

Skills & Experience

Structured by domain rather than buzzwords

Emphasis on core CS fundamentals

Projects

Filterable project grid

Engineering-focused descriptions (not marketing copy)

Clear tech stack attribution per project

Competitive Programming

300+ DSA problems solved (Java-focused)

Strong fundamentals across trees, graphs, DP, recursion

AI Portfolio Assistant

Integrated chatbot using Google Gemini API

Context-aware responses about projects and skills

Designed as a lightweight assistant, not a gimmick

Tech Stack
Frontend

HTML5 (semantic, accessible)

CSS3 (custom properties, Grid, Flexbox)

JavaScript (ES6+)

Backend / APIs

Google Gemini API (client-side integration for demo purposes)

Tools & Practices

Git & GitHub

REST principles

Performance profiling

Debugging-first development

Clean, readable code over clever abstractions

Selected Projects
Scalable URL Shortener Service

Base62 encoding for short ID generation

Collision handling and indexing

Optimized for low-latency redirects

Backend-focused system design

Tech: Node.js, Express, MongoDB
Repo: https://github.com/choubey-abhishek/url-shortener

Real-Time Typing Speed Tester & Analytics

Live WPM and accuracy calculation

Optimized input processing (~45% latency reduction)

Clean separation of logic and UI updates

Tech: JavaScript, HTML, CSS, Node.js
Repo: https://github.com/choubey-abhishek/Typing-Speed-Master

Live: https://choubey-abhishek.github.io/Typing-Speed-Master

Full-Stack Educational Platform (MERN)

JWT-based authentication

Course and progress management

Modular backend structure

Tech: MongoDB, Express, React, Node.js

Competitive Programming

300+ problems solved on LeetCode (Java)

Strong command over:

Arrays, Strings

Trees & Graphs

Dynamic Programming

Recursion & Backtracking

Regular practice of Google-tagged problems

HackerRank Python (Basic) Certified

Repository Structure
├── index.html        # Main portfolio page
├── assets/           # Images and static assets
├── resume.pdf        # Downloadable resume
└── README.md         # Documentation

Local Usage

No build tools required.

git clone https://github.com/choubey-abhishek/Abhishek-choubey-portfolio.git
cd Abhishek-choubey-portfolio
open index.html

Chatbot Setup (Optional)

Replace the placeholder Gemini API key in the script:

const GEMINI_API_KEY = 'YOUR_API_KEY';


For production usage, this should be moved to a secure backend.

Roadmap

Move AI assistant to a backend proxy

Add automated Lighthouse audits

CI/CD via GitHub Actions

Blog section for technical deep dives

System design case studies

Contact

Email: abhishekchoubey312@gmail.com

LinkedIn: https://linkedin.com/in/abhishek-choubey

GitHub: https://github.com/choubey-abhishek

LeetCode: https://leetcode.com/u/choubey-abhishek
