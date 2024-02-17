import express, { Request, Response } from 'express';
import cors from 'cors';
import { Theme } from './models';
import { Database, seedData } from './seed-data';

const database: Database = seedData;

const server = express();
const port = 3000;

server.use(express.json());
server.use(cors());

server.listen(port, () => {
  console.log('Server is running on port', port);
});

// GET Client Theme
server.get('/:client/theme', (req: Request, res: Response) => {
  const client: string = req.params['client'];

  console.log(`Received request for ${client} theme`);

  const { theme } = database[client];

  console.log(theme);

  return res.send(theme);
});

// PATCH Client Theme
server.patch('/:client/theme', (req: Request, res: Response) => {
  const client: string = req.params['client'];
  const patch: Partial<Theme> = req.body;

  console.log(`Received patch request for ${client} theme:`, patch);

  database[client].theme = {
    ...database[client].theme,
    ...patch,
  };

  return res.send(database[client].theme);
});

// GET Client Products
server.get('/:client/products', (req: Request, res: Response) => {
  const client: string = req.params['client'];

  console.log(`Received request for ${client} products`);

  const { products } = database[client];

  console.log(products);

  return res.send(database[client].products);
});

// GET Client Site Name
server.get('/:client/site-name', (req: Request, res: Response) => {
  const client: string = req.params['client'];

  console.log(`Received request for ${client} site name`);

  const { siteName } = database[client];

  console.log(siteName);

  return res.send(siteName);
});
