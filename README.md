# 🎨 Angular Dynamic Theming Demo

[Demo](https://github.com/c-o-l-i-n/ng-dynamic-theming-demo/assets/40863449/cbc529d5-1798-4228-ba71-de731070fb26)

## 🏃 Getting started

Run `npm install` to install dependencies.

Run `npm run server` to start the backend server (`server.ts`) on port 3000. The server keeps an in-memory database of the client themes and products.

Run `npm start` to start the Angular dev server on port 4200.

Navigate to `http://localhost:4200/`

## 🔑 Key takeaways

When compared to maintaining a separate CSS stylesheet for each client, database-driven theming makes managing custom client themes a seamless user experience and a fantastic developer experience!

Bringing themes into the database means we can allow users to instantly update their branding.

We can use the `document.documentElement.style.setProperty()` method to set CSS variables at runtime. Then, we simply consume those CSS variables in the app.

Similarly, we can create a `<link>` element with a dynamically-generated Google Fonts URL to import any Google Font at runtime.

See these key files for implementation details:

- [`theme.service.ts`](src/app/theme/theme.service.ts)
- [`theme.resolver.ts`](src/app/theme/theme.resolver.ts)
- [`app.routes.ts`](src/app/app.routes.ts)
