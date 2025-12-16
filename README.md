<div align="center">

# 🛍️ ShopCartYT

**A Modern, Full-Stack E-commerce Experience**

Built with **Next.js 15**, **Sanity CMS**, **Clerk Auth**, and **Stripe Payments**.

[![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Sanity](https://img.shields.io/badge/Sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)](https://www.sanity.io/)
[![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com/)

</div>

---

## 📖 Overview

**ShopCartYT** is a robust e-commerce application designed for performance and scalability. It leverages the power of the App Router in Next.js 15 for seamless navigation, Sanity Headless CMS for flexible content management, and ensures secure transactions with Stripe.

## ✨ Key Features

| Feature                | Description                                              |
| :--------------------- | :------------------------------------------------------- |
| **🛍️ Product Catalog** | Dynamic product listing managed via **Sanity CMS**.      |
| **🔐 Authentication**  | Secure user sign-up and sign-in powered by **Clerk**.    |
| **🛒 Smart Cart**      | Persistent client-side cart management with **Zustand**. |
| **💳 Secure Checkout** | Full payment integration with **Stripe**.                |
| **🎨 Modern UI**       | Responsive design with **Tailwind CSS** & **Shadcn/ui**. |
| **⚡ Performance**     | Optimized with Next.js App Router and server components. |

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [Shadcn/ui](https://ui.shadcn.com/)
- **CMS:** [Sanity](https://www.sanity.io/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Icons:** [Lucide React](https://lucide.dev/)

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Sam-S877/e-shop.git
cd e-shop
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add your keys:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Stripe Payments
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### 4. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to view the application.

## 📜 Scripts

| Script            | Description                                     |
| :---------------- | :---------------------------------------------- |
| `npm run dev`     | Starts the development server.                  |
| `npm run build`   | Builds the application for production.          |
| `npm run start`   | Runs the built application.                     |
| `npm run lint`    | Runs ESLint to check for code quality.          |
| `npm run typegen` | Generates TypeScript types from Sanity schemas. |

## 📂 Project Structure

```bash
├── app/            # Next.js App Router pages & layouts
├── components/     # Reusable UI components
├── sanity/         # CMS configuration & schemas
├── lib/            # Utilities & helper functions
├── store.ts        # Global state (Zustand)
└── actions/        # Server actions
```

---

<div align="center">
  <p>Made with ❤️ by ShopCartYT Team</p>
</div>
