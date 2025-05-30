import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContactComponent } from './user-contact.component';

describe('UserContactComponent', () => {
  let component: UserContactComponent;
  let fixture: ComponentFixture<UserContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
