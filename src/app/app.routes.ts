import { Routes } from '@angular/router';
import { ProductsPageComponent } from './products/products-page.component';
import { siteNameResolver } from './root-site/site-name.resolver';
import { productsResolver } from './products/products.resolver';
import { themeResolver } from './theme/theme.resolver';
import { CustomizeThemePageComponent } from './theme/customize-theme-page.component';
import { RootPageComponent } from './root-site/root-page.component';

export const routes: Routes = [
  /**
   * In order to use route resolvers on the "root" site, we need to have
   * an additional root component under AppComponent (RootPageComponent)
   */
  {
    path: ':client',
    component: RootPageComponent,
    resolve: {
      siteName: siteNameResolver,
      theme: themeResolver,
    },
    children: [
      {
        path: 'products',
        component: ProductsPageComponent,
        resolve: {
          products: productsResolver,
        },
      },
      {
        path: 'customize-theme',
        component: CustomizeThemePageComponent,
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'products',
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'bettys-bakery',
  },
];
