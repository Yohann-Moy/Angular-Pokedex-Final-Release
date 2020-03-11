import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonEditionComponent } from './pokemon-edition.component';

describe('PokemonEditionComponent', () => {
  let component: PokemonEditionComponent;
  let fixture: ComponentFixture<PokemonEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
