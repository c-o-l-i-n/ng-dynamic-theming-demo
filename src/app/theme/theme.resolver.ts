import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Theme } from '../../models';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { ThemeService } from './theme.service';
import { getClientFromUrlPath } from '../utils';

export const themeResolver: ResolveFn<Theme> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const http = inject(HttpClient);
  const themeService = inject(ThemeService);

  const client = getClientFromUrlPath(state.url);

  return http
    .get<Theme>(`http://localhost:3000/${client}/theme`)
    .pipe(tap((theme) => themeService.applyTheme(theme)));
};
