
# 🛒 Product Store

## 🚀 Overview

Product Store is a **full-stack CRUD web application** built as a **personal learning project**. It features a **React** frontend and  **Node** with  **Express** backend, integrating database services and modern security practices. This project helped in understanding full-stack development, API integration, and security considerations in web applications.

----------

## 🛠 Tech Stack

### **Frontend**

-   ⚛ **React.js** – Component-based UI development
-   ⚡ **Vite** – Lightning-fast build tool for React
-   🎨 **TailwindCSS** – Utility-first styling framework
-   🔀 **Zustand (useProductStore.js)** – Efficient state management

### **Backend**

-   🚀 **Node.js & Express.js** – Server and API handling
-   🗄 **PostgreSQL** – Database layer using **Neon**
-   🔒 **API Rate Limiting** – Implemented using **Arcjet**
-   🛡 **Helmet** – Security middleware for HTTP headers
-   📜 **Morgan** – Logging HTTP requests
-   🔓 **Cors** – Enabling cross-origin requests
-   ⚙ **Dotenv** – Environment variable management

----------

## 🔥 Learning Outcomes

1.  **📡 API Design** – Structured REST APIs efficiently with Express.js.
2.  **🎨 UI & State Management** – Used React components effectively and managed state via zustand `useProductStore.js`.
3.  **⚡ Performance Optimization** – Leveraged Vite and TailwindCSS for a fast, smooth experience.
4.  **🔐 Security Best Practices** – Implemented `Helmet`, `CORS`, and **API rate limiting (using Arcjet)** to prevent vulnerabilities.
5.  **🛠 Database Management** – Learned database connection configuration and data seeding with **PostgreSQL via Neon**.
6.  **🔄 Modular Code Structure** – Maintained clean separation between concerns (routes, controllers, config, and frontend components).

----------

## 🏗 Project Structure

```
Product-Store
├── backend
│   ├── config (Database config)
│   ├── controllers (Business logic)
│   ├── routes (API routes)
│   ├── seeds (Database seeding)
│   ├── lib (Utilities)
│   ├── server.js (Main backend entry)
│
├── frontend
│   ├── src
│   │   ├── components (Reusable UI components)
│   │   ├── pages (Home & Product pages)
│   │   ├── store (State management using Zustand)
│   ├── public (Static assets)
│   ├── tailwind.config.js (Styling config)
│   ├── vite.config.js (Build settings)

```

----------

## ⚙ Installation & Usage

### **Prerequisites**

-   Node.js installed
-   PostgreSQL database setup (for local development, optional)

### **Steps to Run**

1.  Clone the repository:
    
    ```sh
    git clone https://github.com/ankux/Product-Store.git
    cd Product-Store
    
    ```
    
2.  Install backend dependencies:
    
    ```sh
    npm install
    ```
    
3.  Install frontend dependencies:
    
    ```sh
    cd frontend
    npm install
    ```
    
4.  Start the backend server:
    
    ```sh
    npm run dev
    ```
    
5.  Start the frontend development server:
    
    ```sh
    cd frontend
    npm run dev
    ```
    

Now, you can access the application in your browser.

