import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLookupComponent } from './manage-lookup.component';

describe('ManageLookupComponent', () => {
  let component: ManageLookupComponent;
  let fixture: ComponentFixture<ManageLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
