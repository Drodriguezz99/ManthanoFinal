import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidadeComponent } from './comunidade.component';
import { FormsModule } from '@angular/forms'; // Importe os módulos necessários
import { HttpClientModule } from '@angular/common/http';

describe('ComunidadeComponent', () => {
  let component: ComunidadeComponent;
  let fixture: ComponentFixture<ComunidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunidadeComponent ], // Declare o componente a ser testado
      imports: [ FormsModule, HttpClientModule ] // Importe os módulos necessários para o componente
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComunidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
