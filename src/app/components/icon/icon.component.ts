import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

type IconType = 'core' | 'external';

@Component({
  selector: 'cc-icon',
  standalone: true,
  imports: [SvgIconComponent],
  template: `
    <svg-icon
      [name]="path"
      [svgStyle]="{
        'width.px': size(),
        'height.px': size(),
        fill: color() ? color() : 'var(--' + category() + '-' + name() + ')'
      }"
    ></svg-icon>
  `,
  styles: `
    :host,
    svg-icon {
      display: inline-block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  public category = input.required<IconType>();
  public name = input.required<string>();
  public color = input<string>();
  public size = input<number>(24);

  public get path(): string {
    return `${this.category()}-${this.name()}`;
  }
}
