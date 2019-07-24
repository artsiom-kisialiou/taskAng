import { Injectable, Inject, OnInit } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { FilePreviewOverlayRef } from './file-preview-overlay-ref';
import { AppTabeComponent } from './app-tabe/app-tabe.component';

interface TabePreviewDialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
}

const DEFAULT_CONFIG: TabePreviewDialogConfig = {
  hasBackdrop: true,
  backdropClass: 'dark',
  panelClass: 'first-class'
};

@Injectable({
  providedIn: 'root'
})
export class TabePreviewService {

  constructor(
    private overlay: Overlay) { }

  open(config: TabePreviewDialogConfig = {}) {
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    const overlayRef = this.createOverlay(dialogConfig);

    const dialogRef = new FilePreviewOverlayRef(overlayRef);

    const filePreviewPortal = new ComponentPortal(AppTabeComponent);

    overlayRef.attach(filePreviewPortal);

    overlayRef.backdropClick().subscribe(_ => dialogRef.close());

    return dialogRef;
  }

  private createOverlay(config: TabePreviewDialogConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(config: TabePreviewDialogConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }
}
