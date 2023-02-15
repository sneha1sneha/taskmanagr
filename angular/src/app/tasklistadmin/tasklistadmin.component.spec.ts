import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistadminComponent } from './tasklistadmin.component';

describe('TasklistadminComponent', () => {
  let component: TasklistadminComponent;
  let fixture: ComponentFixture<TasklistadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasklistadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasklistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
