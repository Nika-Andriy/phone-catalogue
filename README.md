# Apple Store — Product Catalog

A multi-page e-commerce catalog app inspired by the Apple Store, built with React, TypeScript, and SCSS Modules. Browse phones, tablets, and accessories by category, view product details, and manage a cart and favorites list.

## Live Preview

🔗 [Live Demo](https://nika-andriy.github.io/phone-catalogue/)

## Technologies Used

- **React** — UI framework
- **TypeScript** — type safety
- **React Router** — client-side routing and navigation
- **SCSS Modules** — component-scoped styling
- **Bulma** — base CSS framework
- **Context API** — global state for Cart and Favorites
- **Vite** — build tool and dev server
- **Cypress** — end-to-end testing
- **ESLint / Stylelint / Prettier** — code quality and formatting
- **GitHub Pages** — hosting and deployment

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

    ```
    git clone https://github.com/Nika-Andriy/phone-catalogue.git
    cd phone-catalogue
    ```

2. Install dependencies:

    ```
    npm install
    ```

3. Run the project locally:

    ```
    npm start
    ```

4. Open the local address shown in the terminal in your browser.

## Features

- **Category Browsing**: View products grouped by category (phones, tablets, accessories) via a dedicated Category page.
- **Product Details**: Full details page per product, including suggested/related products.
- **Cart**: Add products to a shopping cart with quantity and total price handling.
- **Favorites**: Save products to a favorites list for quick access.
- **Search & Sorting**: Filter and sort products within a category.
- **Pagination**: Navigate large product lists page by page.
- **Custom Select & Sliders**: Custom dropdown and product sliders for browsing recommendations.
- **Responsive Header & Burger Menu**: Collapsible navigation for smaller screens.
- **Loading States**: Loader component shown while product data is being fetched.
- **404 Page**: Custom Not Found page for invalid routes.
