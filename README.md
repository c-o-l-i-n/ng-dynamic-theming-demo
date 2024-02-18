# 🎨 Angular Dynamic Theming Demo

[Demo](https://github.com/c-o-l-i-n/ng-dynamic-theming-demo/assets/40863449/cbc529d5-1798-4228-ba71-de731070fb26)

## 🤔 Why does this matter?

In B2B software development, adapting app styles to match clients' branding is crucial. But managing separate CSS files for each client quickly becomes impractical.

With database-driven themes, updating branding is as simple as a database edit, saving hours of development time and enabling clients to manage their own themes (through the UI) for a seamless user experience.

## 🏃 Getting started

1. Run `npm install` to install dependencies.

2. Run `npm run server` to start the backend server (`server.ts`) on port 3000. The server keeps an in-memory database of the client themes and products.

3. In another terminal, run `npm start` to start the Angular dev server on port 4200.

4. Navigate to `http://localhost:4200/`

## 🔑 Key takeaways

- **Instant Branding Updates:** By storing themes in the database, developers can effortlessly update branding with a simple row edit, eliminating the need for extensive development cycles.

- **Seamless User Experience:** Since themes are just data, we can create an API and UI for users to update their own branding without the need for developer intervention.

- **Dynamic CSS Variables:** Leveraging `document.documentElement.style.setProperty()`, we can dynamically set CSS variables at runtime.

- **Dynamic Font Loading:** Utilizing dynamically-generated `<link>` elements, we can import Google Fonts (or any other fonts) at runtime.

- **Route Resolver:** Avoid a "flash of unstyled content" by loading the theme in a [route resolver](https://angular.io/api/router/Resolve), before components are rendered.

## 🔭 Files to explore

- [`theme.service.ts`](src/app/theme/theme.service.ts)
- [`theme.resolver.ts`](src/app/theme/theme.resolver.ts)
- [`app.routes.ts`](src/app/app.routes.ts)
