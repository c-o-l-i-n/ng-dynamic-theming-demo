import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root-page',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav>
      <div class="nav-content">
        <h1>{{ siteName }}</h1>
        <div class="nav-links">
          <a [routerLink]="['/', client, 'products']">Products</a>
          <a [routerLink]="['/', client, 'customize-theme']">Customize Theme</a>
        </div>
      </div>
    </nav>

    <main>
      <router-outlet />
    </main>

    <footer>
      <a href="/bettys-bakery">Betty's Bakery</a>
      <a href="/jeffs-jerky">Jeff's Jerky</a>
    </footer>
  `,
})
export class RootPageComponent {
  @Input() siteName!: string;
  @Input() client!: string;
}
