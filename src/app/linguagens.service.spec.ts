import { TestBed } from '@angular/core/testing';

import { LinguagensService } from './linguagens.service';

describe('LinguagensService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinguagensService = TestBed.get(LinguagensService);
    expect(service).toBeTruthy();
  });
});
