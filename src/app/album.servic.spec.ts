import { TestBed, inject } from '@angular/core/testing';

import { Album } from './album.model';
import { ALBUMS } from './mock-albums';

describe('Album', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Album]
    });
  });

  it('should be created', inject([Album], (service: Album) => {
    expect(service).toBeTruthy();
  }));
});
