import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapostosComponent } from './listapostos.component';

describe('ListapostosComponent', () => {
  let component: ListapostosComponent;
  let fixture: ComponentFixture<ListapostosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListapostosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListapostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
