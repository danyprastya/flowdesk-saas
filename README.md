# Flowdesk SaaS — AI-Powered Sprint Automation & Backlog Prioritization

Flowdesk is a premium, modern AI-powered project management platform built specifically for high-velocity engineering teams. It integrates where you work (GitHub, Slack, Jira, Linear) to automate the administrative overhead of sprints, detect blockers in real-time, and surface DORA metrics that engineering leadership actually cares about.

---

## 🚀 Key Features

* **AI Backlog Prioritization**: Automatically analyzes backlog tasks against team velocity, dependency graphs, and business impact to rank tickets.
* **Sprint Autopilot**: Suggests optimal sprint scopes based on historical capacity, PTO schedules, and cross-team dependencies.
* **Real-time Blocker Detection**: Monitors Slack threads, PR activity, and Jira/GitHub updates to proactively surface roadblocks before daily standups.
* **Velocity Intelligence**: Predicts delivery timelines and tracks cycle times with high accuracy using historical trends.
* **Deep Integrations**: Syncs bi-directionally with GitHub, Slack, Notion, Jira, and Linear.
* **Executive Dashboards**: Instantly generates clean, investor-ready engineering reports detailing throughput and DORA metrics.

---

## 🛠️ Technology Stack

* **Framework**: Next.js 15+ (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS & Vanilla CSS Variables (Premium Light Theme)
* **Components**: Radix UI (via `shadcn/ui`) & Lucide React Icons
* **Animations**: Framer Motion for smooth scroll effects and micro-interactions

---

## 💻 Getting Started

### Prerequisites

* Node.js v18.0.0 or higher
* npm / yarn / pnpm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/danyprastya/flowdesk-saas.git
cd flowdesk-saas
npm install
```

### Running the Development Server

Start the local server with hot-reloading:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

Create an optimized production bundle:

```bash
npm run build
```

To run the production build locally:

```bash
npm start
```

---

## 📁 Project Structure

```text
├── public/                 # Static assets (logos, icons)
├── src/
│   ├── app/                # Next.js App Router (layout, globals, metadata)
│   ├── components/
│   │   ├── sections/       # Main landing page components (Hero, Features, Pricing, etc.)
│   │   ├── ui/             # Reusable primitive UI elements (shadcn/ui primitives)
│   │   └── ui-custom/      # Specialized custom components (TypingEffect, DashboardMockups)
│   ├── constants/          # Static layout texts and feature descriptions
│   └── hooks/              # Custom React hooks (scroll tracking, layout utilities)
```
