import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabnavComponent } from './fabnav.component';

describe('FabnavComponent', () => {
  let component: FabnavComponent;
  let fixture: ComponentFixture<FabnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
