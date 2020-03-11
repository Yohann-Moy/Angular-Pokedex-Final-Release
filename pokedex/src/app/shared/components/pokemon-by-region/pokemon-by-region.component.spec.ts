import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonByRegionComponent } from './pokemon-by-region.component';

describe('PokemonByRegionComponent', () => {
  let component: PokemonByRegionComponent;
  let fixture: ComponentFixture<PokemonByRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonByRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonByRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
