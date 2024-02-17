import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getClientFromUrlPath } from '../utils';

export const siteNameResolver: ResolveFn<string> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const http = inject(HttpClient);
  const client = getClientFromUrlPath(state.url);

  return http.get(`http://localhost:3000/${client}/site-name`, {
    responseType: 'text',
  });
};
