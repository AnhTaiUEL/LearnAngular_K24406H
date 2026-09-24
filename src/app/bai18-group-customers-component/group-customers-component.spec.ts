import { ComponentFixture, TestBed } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { GroupCustomersComponent } from './group-customers-component';

describe('GroupCustomersComponent', () => {
  let component: GroupCustomersComponent;
  let fixture: ComponentFixture<GroupCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupCustomersComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
