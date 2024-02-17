import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models';
import { getClientFromUrlPath } from '../utils';

export const productsResolver: ResolveFn<Product[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const http = inject(HttpClient);
  const client = getClientFromUrlPath(state.url);

  return http.get<Product[]>(`http://localhost:3000/${client}/products`);
};
