import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwHeaderComponent } from './mw-header.component';

describe('MwHeaderComponent', () => {
  let component: MwHeaderComponent;
  let fixture: ComponentFixture<MwHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
