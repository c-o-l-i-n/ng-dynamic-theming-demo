import { Theme, Product } from './models';

export type Database = Record<
  string,
  { siteName: string; theme: Theme; products: Product[] }
>;

export const seedData: Database = {
  'bettys-bakery': {
    siteName: "Betty's Bakery",
    theme: {
      primaryColor: '#e30075',
      fontFamily: 'Fredoka',
      borderRadiusPx: 12,
    },
    products: [
      {
        name: 'Mini Cheesecakes',
        imageUrl: '/assets/product-images/bettys-bakery/mini-cheesecakes.jpeg',
        priceInCents: 950,
      },
      {
        name: 'Cupcakes',
        imageUrl: '/assets/product-images/bettys-bakery/cupcakes.jpeg',
        priceInCents: 775,
      },
      {
        name: 'Macarons',
        imageUrl: '/assets/product-images/bettys-bakery/macarons.jpeg',
        priceInCents: 700,
      },
      {
        name: 'Chocolate Cake',
        imageUrl: '/assets/product-images/bettys-bakery/chocolate-cake.jpeg',
        priceInCents: 500,
      },
      {
        name: 'Raspberry Cheesecake',
        imageUrl:
          '/assets/product-images/bettys-bakery/raspberry-cheesecake.jpeg',
        priceInCents: 900,
      },
      {
        name: 'Rustic Apple Pie',
        imageUrl: '/assets/product-images/bettys-bakery/apple-pie.jpeg',
        priceInCents: 1000,
      },
    ],
  },
  'jeffs-jerky': {
    siteName: "Jeff's Jerky",
    theme: {
      primaryColor: '#007018',
      fontFamily: 'Special Elite',
      borderRadiusPx: 0,
    },
    products: [
      {
        name: 'Rugged Beef Jerky',
        imageUrl: '/assets/product-images/jeffs-jerky/rugged-beef-jerky.jpeg',
        priceInCents: 800,
      },
      {
        name: 'Spicy Teriyaki Jerky',
        imageUrl:
          '/assets/product-images/jeffs-jerky/spicy-teriyaki-jerky.jpeg',
        priceInCents: 875,
      },
      {
        name: 'Jerky Variety Pack',
        imageUrl: '/assets/product-images/jeffs-jerky/jerky-variety-pack.jpeg',
        priceInCents: 1100,
      },
      {
        name: 'Jerky Snack Mix',
        imageUrl: '/assets/product-images/jeffs-jerky/jerky-snack-mix.jpeg',
        priceInCents: 1000,
      },
      {
        name: 'Jerky on the Go',
        imageUrl: '/assets/product-images/jeffs-jerky/jerky-on-the-go.jpeg',
        priceInCents: 700,
      },
      {
        name: 'Smokehouse Beef Jerky',
        imageUrl:
          '/assets/product-images/jeffs-jerky/smokehouse-beef-jerky.jpeg',
        priceInCents: 1200,
      },
    ],
  },
};
