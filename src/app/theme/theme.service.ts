import { inject, Injectable, signal } from '@angular/core';
import { Theme } from '../../models';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { getClientFromUrlPath } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly http = inject(HttpClient);

  private readonly _theme = signal<Theme>({
    primaryColor: 'black',
    fontFamily: 'Roboto',
    borderRadiusPx: 8,
  });

  readonly theme = this._theme.asReadonly();

  applyTheme(theme: Theme): void {
    this._theme.set(theme);

    const rootStyle = document.documentElement.style;

    // apply CSS variables
    rootStyle.setProperty('--primary-color', theme.primaryColor);
    rootStyle.setProperty('--font-family', `${theme.fontFamily}, sans-serif`);
    rootStyle.setProperty('--border-radius', `${theme.borderRadiusPx}px`);

    // import font from Google Fonts
    const head = document.head;
    const link = document.createElement('link');

    link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(theme.fontFamily)}:wght@400;700&display=swap`;
    link.rel = 'stylesheet';

    head.appendChild(link);
  }

  updateTheme(themeDiff: Partial<Theme>): Observable<Theme> {
    const client = getClientFromUrlPath();

    return this.http
      .patch<Theme>(`http://localhost:3000/${client}/theme`, themeDiff)
      .pipe(tap((newTheme) => this.applyTheme(newTheme)));
  }
}
