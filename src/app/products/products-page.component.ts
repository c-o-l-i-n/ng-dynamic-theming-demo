import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../models';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [NgOptimizedImage, CurrencyPipe, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Products</h1>

    <div class="product-list">
      @for (product of products; track product.name; let first = $first) {
        <div class="product-card">
          <div
            class="thumbnail"
            [style.background-image]="'url(' + product.imageUrl + ')'"
          ></div>
          <h2>{{ product.name }}</h2>
          <div class="bottom-row">
            <span>{{ product.priceInCents / 100 | currency }}</span>
            <button>Add to Cart</button>
          </div>
        </div>
      }
    </div>
  `,
})
export class ProductsPageComponent {
  @Input() readonly products!: Product[];
}
