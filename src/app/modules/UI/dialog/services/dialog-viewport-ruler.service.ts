import { Platform } from '@angular/cdk/platform';
import { ViewportRuler, ViewportScrollPosition } from '@angular/cdk/scrolling';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, NgZone, Optional } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DialogViewportRulerService extends ViewportRuler {
  constructor(
    ngZone: NgZone,
    platform: Platform,
    @Optional() @Inject(DOCUMENT) document: Document,
  ) {
    super(platform, ngZone, document);
  }

  /**
   * Независимое отображение диалоговые окна от общего скролла, то есть  Viewport размещается  в нулевой позиции
   */
  override getViewportScrollPosition(): ViewportScrollPosition {
    return { left: 0, top: 0 };
  }
}
