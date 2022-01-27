import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProprietariosFormComponent } from './list-proprietarios-form.component';

describe('ListProprietariosFormComponent', () => {
  let component: ListProprietariosFormComponent;
  let fixture: ComponentFixture<ListProprietariosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProprietariosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProprietariosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
