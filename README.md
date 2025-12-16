# ShopCartYT - E-commerce Application

A modern e-commerce application built with Next.js 15, Sanity CMS, Clerk Authentication, and Stripe Payments.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **CMS:** [Sanity](https://www.sanity.io/)
- **Authentication:** [Clerk](https://clerk.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Payments:** [Stripe](https://stripe.com/)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)

## ✨ Features

- 🛍️ **Product Catalog:** Managed via Sanity CMS
- 🔐 **Authentication:** Secure user sign-up and sign-in with Clerk
- 🛒 **Shopping Cart:** Client-side cart management using Zustand
- 💳 **Checkout:** Secure payments integration with Stripe
- 🎨 **Responsive Design:** Beautiful UI with Tailwind CSS and Framer Motion animations
- 🌗 **Modern UI:** Accessible components powered by Radix UI

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd e-shop
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Variables:**

   Create a `.env` file in the root directory and add the necessary environment variables for Sanity, Clerk, and Stripe.

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   CLERK_SECRET_KEY=your_clerk_secret

   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=your_sanity_dataset

   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typegen` - Generate Sanity schema types

## 📂 Project Structure

- `/app` - Next.js App Router pages and layouts
- `/components` - Reusable UI components
- `/sanity` - Sanity CMS configuration and schemas
- `/lib` - Utility functions
- `/store.ts` - Zustand state store
- `/actions` - Server actions

## 📄 License

This project is licensed under the MIT License.
