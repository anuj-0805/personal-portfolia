# About Me — My Personal Portfolio

A modern, responsive, and aesthetically crafted personal portfolio website built with clean HTML5, CSS3, and JavaScript.

This website was designed to introduce my perspective, curiosity, and journey with Artificial Intelligence, inspired by an exploratory conversation with ChatGPT and built using **Google Antigravity**.

---

## 🚀 Features

- **Dark Navy Theme & Gradients:** Deep navy background palette accented with purple, blue, and cyan gradients with subtle ambient lighting.
- **Glassmorphism UI:** Modern frosted-glass cards with subtle hover lift and 3D perspective tilt.
- **100% Responsive Design:** Optimized layouts for smartphones, tablets, laptops, and desktop monitors.
- **Smooth Animations & Scrollspy:** Clean scroll reveal transitions via `IntersectionObserver` and real-time active navigation indicators.
- **Mobile Hamburger Navigation:** Smooth, accessible slide-down drawer menu for smaller screens.
- **Interactive Avatar Frame:** Stylized glowing tech avatar with floating status pills.
- **Contact Form with Validation:** Client-side validation with real-time feedback and demo submission mode.
- **Easy-to-Personalize Placeholders:** All placeholder text (name, social links, contact info, photo) is clearly marked and easy to customize without breaking styles.
- **Zero External Dependencies:** Built with pure vanilla HTML5, CSS3, and modern JavaScript (ES6+). No heavy frameworks or build steps required.

---

## 📂 Project Structure

```text
personal-portfolio/
├── index.html       # Semantic HTML5 layout with all 7 required sections
├── style.css        # Modern CSS3 styles, variables, gradients, and media queries
├── script.js        # Mobile menu toggle, scrollspy, reveal effects, form validation
└── README.md        # Documentation and running instructions
```

---

## 🌐 Sections Included

1. **Home (Hero):** Welcome heading *"Hey, I'm glad you're here!"*, short introduction, call-to-action buttons, and modern tech avatar placeholder.
2. **About Me:** Highlights curiosity about AI, technology, and how ChatGPT understands people.
3. **My Communication Style:** Explains enjoyment of casual conversations and asking curiosity-driven questions, accompanied by a chat preview mockup.
4. **My Interests:** 4 interactive cards covering Artificial Intelligence, Web Technology, Continuous Learning, and How Digital Tools Work.
5. **My AI Journey:** Step-by-step timeline explaining how exploring what ChatGPT knows led to insights on privacy, personalization, and creating tangible projects.
6. **My Project:** Showcase of this personal portfolio created with Google Antigravity and tested with Live Server.
7. **Contact:** Clear placeholder fields for email, location, and social media, plus a functional interactive contact form.
8. **Footer:** Features the signature *"Made with curiosity and creativity."* and a smooth back-to-top button.

---

## 🛠️ How to Run Locally with Live Server in Visual Studio Code

### Step 1: Open the Project in VS Code
1. Open **Visual Studio Code**.
2. Click **File** > **Open Folder...** (or press `Cmd + O` on macOS).
3. Select this directory:
   ```bash
   /Users/anujbalwant/.gemini/antigravity/scratch/personal-portfolio
   ```

### Step 2: Install Live Server (if not already installed)
1. In VS Code, open the Extensions sidebar (`Cmd + Shift + X`).
2. Search for **Live Server** (by *Ritwick Dey*).
3. Click **Install**.

### Step 3: Launch Live Server
1. In the file explorer, right-click `index.html`.
2. Select **"Open with Live Server"** (or click the **"Go Live"** button on the bottom status bar).
3. Your default browser will immediately open `http://127.0.0.1:5500/index.html`!
4. Any edits made to `index.html`, `style.css`, or `script.js` will automatically reload the page in real-time.

---

## ✏️ How to Personalize the Website

All files contain clear comments marking where you can update information:

- **Add your photo:** In `index.html` under Section 1 (`#home`), replace the `<svg class="avatar-svg">` with an `<img src="your-photo.jpg" alt="Profile" class="avatar-img" />`.
- **Update your name:** Search for `[Your Name / Avatar]` in `index.html` and replace it with your name.
- **Update contact info:** In `index.html` under Section 7 (`#contact`), update `[your.email@example.com]`, `[Your City, State / Country]`, and the GitHub / LinkedIn links.
- **Change colors:** In `style.css`, adjust the CSS variables in the `:root` section at the top of the file.

