import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSubscriberComponent } from './delete-subscriber.component';

describe('DeleteSubscriberComponent', () => {
  let component: DeleteSubscriberComponent;
  let fixture: ComponentFixture<DeleteSubscriberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteSubscriberComponent]
    });
    fixture = TestBed.createComponent(DeleteSubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
