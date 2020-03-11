import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexToolbarComponent } from './pokedex-toolbar.component';

describe('PokedexToolbarComponent', () => {
  let component: PokedexToolbarComponent;
  let fixture: ComponentFixture<PokedexToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
