# 🎯 Interview Practice Tracker

A responsive React dashboard to organize and track weekly interview preparation in one place. Manage **DSA problems, Git questions, technical interview questions, and machine coding progress** with an easy-to-use interface.

Built with React, Vite, and Tailwind CSS, this frontend-only application uses browser `localStorage` to persist your progress without requiring a backend.

## 🚀 Live Demo

- **Live Website:** [Add your deployed link here]
- **Demo Video:** [Add your 1–2 minute demo video link here]
- **GitHub Repository:** [Add your repository link here]

## ✨ Features

### 📊 Dashboard
- View the total number of interview questions.
- Track completed DSA problems.
- Monitor completed Git and technical interview questions.
- Update machine coding progress: Not Started, In Progress, or Completed.
- Visualize overall preparation progress with a dynamic progress bar.

### 📝 Question Management
- Add questions under DSA, Git, or Technical categories.
- Assign difficulty levels: Easy, Medium, or Hard.
- Track status: Pending, In Progress, or Completed.
- Update question status directly from the question list.
- Delete questions when they are no longer needed.
- Validate question titles to prevent empty or too-short entries.

### 🔍 Search & Filters
- Search questions by title.
- Filter by category, difficulty, and status.
- Combine multiple filters to find specific questions.
- Reset all search and filter selections with the Clear button.

### 💾 Data Persistence
- Automatically save questions and machine coding status in `localStorage`.
- Restore saved data after refreshing the page.
- Keep your preparation progress available without a backend.

### 📱 Responsive UI & User Experience
- Responsive layout for desktop and mobile screens.
- Empty state when no questions have been added.
- No-results state when a search or filter returns no matches.
- Reusable React components for a maintainable codebase.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | Building the user interface |
| Vite 5 | Development server and production builds |
| Tailwind CSS v4 | Responsive styling |
| JavaScript (ES6+) | Application logic and interactivity |
| React Hooks | State management and side effects |
| localStorage | Client-side data persistence |
| HTML5 | Application structure |

## 📂 Project Structure

```text
practice-tracker/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Dashboard.jsx
        ├── ProgressBar.jsx
        ├── QuestionForm.jsx
        ├── Filters.jsx
        ├── QuestionList.jsx
        └── QuestionItem.jsx
```

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (version 18 or above)
- npm (included with Node.js)

### Installation

**1. Clone the repository**

```bash
git clone <your-github-repository-url>
```

**2. Navigate to the project directory**

```bash
cd practice-tracker
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173`.

### Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create the production build
npm run preview  # Preview the production build locally
```

## 🧠 How It Works

- **State management:** `App.jsx` manages the question list, machine coding status, and active filters using React state.
- **Data persistence:** React's `useEffect` saves changes to `localStorage`. Previously saved data is loaded when the application initializes.
- **Search and filtering:** The application filters questions by title, category, difficulty, and status. Multiple filters can be applied simultaneously.
- **Dashboard calculations:** Dashboard statistics are derived from the stored questions instead of being maintained separately.
- **Component-based architecture:** Each component has a specific responsibility and receives the necessary data and functions through props.

### 📈 Progress Calculation

The dashboard uses the following logic:

- **DSA Completed:** Number of DSA questions marked Completed.
- **Interview Questions Completed:** Number of Git and Technical questions marked Completed.
- **Overall Progress:** Percentage of all questions marked Completed.

\[
\text{Progress} =
\frac{\text{Completed Questions}}{\text{Total Questions}}
\times 100
\]

When there are no questions, the overall progress is displayed as 0%.

## 📌 Design Assumptions

- Interview questions include both Git and Technical categories.
- Machine coding progress is tracked separately from individual questions.
- Only questions marked Completed contribute to the overall completion percentage.
- Data is stored locally in the browser and is not synchronized across devices.
- Clearing browser storage may remove saved application data.

## 🌐 Deployment

This project can be deployed as a static website using **Vercel, Netlify, or GitHub Pages**.

**Build settings:**

- Build command: `npm run build`
- Output directory: `dist`

For Vercel, connect your GitHub repository and use the recommended Vite build settings.

## 🔮 Future Improvements

- [ ] Edit existing questions.
- [ ] Add weekly goals and due dates.
- [ ] Export and import preparation data as JSON.
- [ ] Add dark mode.
- [ ] Display weekly and monthly progress analytics.
- [ ] Add streak tracking and daily preparation reminders.
- [ ] Integrate a backend and database for cross-device synchronization.

## 🎯 Project Goal

The goal of this project is to make interview preparation more organized and measurable by bringing coding practice, technical revision, and machine coding progress into a single dashboard.

It also demonstrates practical frontend development skills, including reusable React components, state management, form validation, filtering, responsive UI design, and browser-based data persistence.

---

**Built with ❤️ using React and Tailwind CSS.**