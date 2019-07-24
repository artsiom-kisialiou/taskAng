import { TestBed } from '@angular/core/testing';

import { TabePreviewService } from './tabe-preview.service';

describe('TabePreviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabePreviewService = TestBed.get(TabePreviewService);
    expect(service).toBeTruthy();
  });
});
