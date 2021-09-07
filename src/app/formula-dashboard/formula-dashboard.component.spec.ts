import { async, ComponentFixture, TestBed } from '@angular/core/testing';
 import { FormulaDashboardComponent } from './formula-dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FormulaDashboardComponent', () => {
  let component: FormulaDashboardComponent;
  let fixture: ComponentFixture<FormulaDashboardComponent>;
  beforeEach(async(() => { 
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        FormulaDashboardComponent
      ],
      providers: []
    }).compileComponents();
  }));

   
  it('should create the app', () => { // 4
    const fixture = TestBed.createComponent(FormulaDashboardComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();
  });

});
