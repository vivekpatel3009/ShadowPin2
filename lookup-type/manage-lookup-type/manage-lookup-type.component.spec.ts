import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLookupTypeComponent } from './manage-lookup-type.component';

describe('ManageLookupTypeComponent', () => {
  let component: ManageLookupTypeComponent;
  let fixture: ComponentFixture<ManageLookupTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLookupTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLookupTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
