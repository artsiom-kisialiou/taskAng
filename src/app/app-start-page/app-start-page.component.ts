import { Component, OnInit, Injectable } from '@angular/core';
import { TabePreviewService } from '../tabe-preview.service';
import { FilePreviewOverlayRef } from './../file-preview-overlay-ref';

@Component({
  selector: 'app-app-start-page',
  templateUrl: './app-start-page.component.html',
  styleUrls: ['./app-start-page.component.scss']
})

@Injectable()
export class AppStartPageComponent implements OnInit {
  constructor(private previewDialog: TabePreviewService) { }

  showPreview() {
    let dialogRef: FilePreviewOverlayRef = this.previewDialog.open();
  }
  ngOnInit() {
  }

}
