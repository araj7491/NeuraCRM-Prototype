# NeuraCRM - AI-Powered CRM Platform

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://neura-crm-prototype-six.vercel.app/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

> Transform your business with intelligent workflow automation, real-time tracking, and comprehensive analytics.

## Overview

NeuraCRM is a modern, production-ready CRM (Customer Relationship Management) platform designed specifically for service-oriented businesses. Built with React 18 and TypeScript, it provides an intuitive interface for managing customer relationships, tracking workflows, and analyzing business performance.

**Live Demo:** [https://neura-crm-prototype-six.vercel.app/](https://neura-crm-prototype-six.vercel.app/)

## Key Features

### CRM Core Functionality
- **Lead Management** - Capture, qualify, and convert leads into opportunities
- **Contact Management** - Maintain detailed contact records with interaction history
- **Account Management** - Organize and track customer accounts with hierarchical relationships
- **Deals & Opportunities** - Track sales pipeline and manage deal stages
- **Orders & Quotes** - Generate quotes and manage order fulfillment
- **Tasks & Pipelines** - Visual pipeline management with drag-and-drop functionality

### Communication Tools
- **Email Integration** - Manage email communications within the CRM
- **Chat System** - Real-time messaging for team collaboration
- **VoIP Integration** - Make and receive calls directly from the platform

### Workflow Automation
Intelligent workflow management for service-based businesses:
- **Intake** - Customer request submission and initial processing
- **Assessment** - Technical evaluation and quote generation
- **Repair/Service** - Professional service delivery with quality tracking
- **Returns** - Return merchandise authorization and processing
- **Warehouse** - Inventory and parts management
- **Recycling** - End-of-life product handling

### Analytics & Reporting
- **Real-Time Dashboards** - Comprehensive performance metrics and KPIs
- **Custom Reports** - Generate detailed reports for business insights
- **Data Visualization** - Interactive charts powered by Chart.js and Recharts
- **Performance Tracking** - Monitor team productivity and workflow bottlenecks

### Additional Features
- **Role-Based Access Control** - Secure access management for different user roles
- **Automation Rules** - Automate repetitive tasks and workflows
- **Sales & Marketing Modules** - Track campaigns and sales performance
- **Dark Mode Support** - Toggle between light and dark themes
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop

## Tech Stack

### Core Framework
- **React 18.3** - Modern React with Hooks and Concurrent features
- **TypeScript 5.5** - Type-safe development
- **React Router 6** - Client-side routing in SPA mode
- **Vite 6.2** - Lightning-fast build tool and dev server

### UI & Styling
- **TailwindCSS 3.4** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI primitives
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library
- **Class Variance Authority** - Managing component variants
- **next-themes** - Dark mode support

### Data & State Management
- **TanStack Query (React Query 5)** - Powerful data fetching and caching
- **Context API** - Global state management for leads, accounts, contacts, and orders
- **React Hook Form** - Performant form validation
- **Zod** - TypeScript-first schema validation

### Visualization & Interaction
- **Chart.js 4.5** - Flexible charting library
- **Recharts 2.12** - Composable charting components
- **Three.js** - 3D graphics and visualizations
- **@react-three/fiber & drei** - React renderer for Three.js
- **@dnd-kit** - Modern drag-and-drop toolkit
- **react-beautiful-dnd** - Beautiful drag-and-drop lists

### Development Tools
- **Vitest** - Fast unit testing framework
- **Prettier** - Code formatting
- **PostCSS & Autoprefixer** - CSS processing

## Project Structure

```
NeuraCRM-Prototype/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Core UI component library (Radix-based)
│   │   ├── layout/         # Layout components (CrmLayout, etc.)
│   │   └── auth/           # Authentication components
│   ├── pages/              # Route components
│   │   ├── Landing.tsx     # Landing page
│   │   ├── Login.tsx       # Authentication
│   │   ├── Index.tsx       # Dashboard
│   │   ├── Leads.tsx       # Lead management
│   │   ├── Contacts.tsx    # Contact management
│   │   ├── Accounts.tsx    # Account management
│   │   ├── Deals.tsx       # Deal pipeline
│   │   ├── Orders.tsx      # Order management
│   │   ├── Analytics.tsx   # Analytics dashboard
│   │   └── workflow/       # Workflow pages
│   ├── context/            # React Context providers
│   ├── lib/                # Utility functions
│   ├── App.tsx             # Main application component
│   └── index.css           # Global styles
├── public/                 # Static assets
├── package.json
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── CLAUDE.md              # Project documentation for AI assistance
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/NeuraCRM-Prototype.git
cd NeuraCRM-Prototype
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Create optimized production build
- `npm run typecheck` - Run TypeScript type checking
- `npm test` - Run unit tests with Vitest
- `npm run format.fix` - Format code with Prettier

## Development Workflow

### Adding New Routes

Routes are defined in `src/App.tsx` using React Router:

```typescript
<Route path="/your-route" element={<YourComponent />} />
```

Place new page components in the `src/pages/` directory.

### Styling Components

The project uses TailwindCSS with a custom utility function `cn()` for conditional classes:

```typescript
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  props.className
)} />
```

### Adding UI Components

The project includes a comprehensive UI component library in `src/components/ui/`:
- Buttons, Cards, Dialogs, Dropdowns
- Forms (Input, Select, Checkbox, Radio)
- Data Display (Tables, Badges, Avatars)
- Navigation (Tabs, Breadcrumbs)
- Feedback (Alerts, Toast, Progress)

### Testing

Write unit tests in `.spec.ts` files:

```bash
npm test                    # Run all tests
npm test -- --watch        # Run tests in watch mode
```

## Deployment

The application is deployed on Vercel and can be automatically deployed from your Git repository.

1. Push your code to GitHub
2. Import project in Vercel
3. Configure build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

## Features Roadmap

- [ ] AI-powered lead scoring
- [ ] Advanced automation workflows
- [ ] Mobile app (React Native)
- [ ] API integration marketplace
- [ ] Advanced reporting with custom dashboards
- [ ] Multi-language support
- [ ] Email template builder
- [ ] Document management system

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is a prototype for demonstration purposes.

## Support

For support and questions:
- Create an issue in the GitHub repository
- Check the [documentation](https://neura-crm-prototype-six.vercel.app/)

## Acknowledgments

- Built with [React](https://reactjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Deployed on [Vercel](https://vercel.com/)

---

Made with care for modern businesses. Visit the [live demo](https://neura-crm-prototype-six.vercel.app/) to see NeuraCRM in action.
