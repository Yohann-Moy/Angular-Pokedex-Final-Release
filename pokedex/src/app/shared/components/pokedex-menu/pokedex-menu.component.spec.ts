import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexMenuComponent } from './pokedex-menu.component';

describe('PokedexMenuComponent', () => {
  let component: PokedexMenuComponent;
  let fixture: ComponentFixture<PokedexMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
