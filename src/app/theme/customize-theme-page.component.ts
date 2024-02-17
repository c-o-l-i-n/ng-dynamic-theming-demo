import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Theme } from '../../models';
import { ThemeService } from './theme.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customize-theme-page',
  standalone: true,
  imports: [FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <h1>Customize Theme</h1>

    <form #form="ngForm" (ngSubmit)="updateTheme(form.value)">
      <!-- Primary Color -->
      <div>
        <label for="primary-color">Primary Color</label>
        <input
          type="color"
          id="primary-color"
          name="primaryColor"
          [ngModel]="theme().primaryColor"
          required
        />
      </div>

      <!-- Font Family -->
      <div>
        <label for="font-family">Font Family</label>
        <input
          type="text"
          id="font-family"
          name="fontFamily"
          [ngModel]="theme().fontFamily"
          required
        />
      </div>

      <!-- Border Radius -->
      <div>
        <label for="border-radius">Border Radius (in pixels)</label>
        <input
          type="number"
          id="border-radius"
          name="borderRadiusPx"
          [ngModel]="theme().borderRadiusPx"
          min="0"
          max="32"
          required
        />
      </div>

      <button type="submit" [disabled]="form.invalid || !form.dirty">
        Save Changes
      </button>
    </form>`,
})
export class CustomizeThemePageComponent {
  private readonly themeService = inject(ThemeService);

  readonly theme = this.themeService.theme;

  updateTheme(themDiff: Partial<Theme>): void {
    this.themeService.updateTheme(themDiff).subscribe({
      error: () => alert('Unable to update theme'),
    });
  }
}
