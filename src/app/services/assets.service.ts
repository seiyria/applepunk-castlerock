import { inject, Injectable } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';

@Injectable({
  providedIn: 'root',
})
export class AssetsService {
  private iconReg = inject(SvgIconRegistryService);

  constructor() {}

  public async init() {
    [
      'core-castlecarnage',
      'external-blog',
      'external-discord',
      'external-email',
      'external-facebook',
      'external-reddit',
      'external-twitter',
      'external-youtube',
    ].forEach((icon) => {
      this.iconReg.loadSvg(`assets/icon/${icon}.svg`, icon)?.subscribe();
    });
  }
}
