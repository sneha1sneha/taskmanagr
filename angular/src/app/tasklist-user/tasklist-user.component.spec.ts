import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistUserComponent } from './tasklist-user.component';

describe('TasklistUserComponent', () => {
  let component: TasklistUserComponent;
  let fixture: ComponentFixture<TasklistUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasklistUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasklistUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
