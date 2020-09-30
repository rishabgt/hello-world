import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingdataComponent } from './addingdata.component';

describe('AddingdataComponent', () => {
  let component: AddingdataComponent;
  let fixture: ComponentFixture<AddingdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
