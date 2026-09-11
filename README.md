# SkincareVueProject

This project is a skincare website built with Vue 3, TypeScript, Vite, and Tailwind CSS.

## Project Setup

This project uses Vue 3 `<script setup>` SFCs with TypeScript.

Learn more about Vue TypeScript support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

## Project Structure

Inside the `src/components` folder:

### `layout`

Contains layout components such as:

* Navbar
* Afterlognav
* AdminLayout

### `router`

Contains the main Vue Router configuration:

* `index.ts`

### `view`

Contains the main pages of the website:

* Home
* About
* Shop
* Collection
* Profile
* Contact
* AddtoCard
* Login
* Register
* PasswordReset
* Wishlist
* Orders
* Setting

### Other Components

The project also contains reusable components such as:

* HeroSection
* CategoryCard
* CollectionCard
* Feature
* SummerDis

## Routes

The project includes routes such as:

* `/`
* `/shop`
* `/collection`
* `/collection/:category`
* `/about`
* `/contact`
* `/profile`
* `/addtocard`
* `/login`
* `/register`
* `/passwordreset`
* `/wishlist`
* `/orders`
* `/setting`

## State Management

The project uses **Pinia** for state management.

The store is located inside the `src/stores` folder.

## Technologies

* Vue 3
* TypeScript
* Tailwind CSS
* Vue Router
* Pinia
* Vite

## Installation

Install the project dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```
install icon in vue :  npm i lucide-vue-next