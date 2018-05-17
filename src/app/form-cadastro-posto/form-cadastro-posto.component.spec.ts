import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastroPostoComponent } from './form-cadastro-posto.component';

describe('FormCadastroPostoComponent', () => {
  let component: FormCadastroPostoComponent;
  let fixture: ComponentFixture<FormCadastroPostoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCadastroPostoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCadastroPostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
