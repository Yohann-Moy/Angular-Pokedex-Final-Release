import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPokemonComponent } from './add-new-pokemon.component';

describe('AddNewPokemonComponent', () => {
  let component: AddNewPokemonComponent;
  let fixture: ComponentFixture<AddNewPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
