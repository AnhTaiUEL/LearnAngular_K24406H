import { ComponentFixture, TestBed } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { ProductListCallHttpServiceComponent } from './product-list-call-http-service-component';

describe('ProductListCallHttpServiceComponent', () => {
  let component: ProductListCallHttpServiceComponent;
  let fixture: ComponentFixture<ProductListCallHttpServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListCallHttpServiceComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListCallHttpServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
