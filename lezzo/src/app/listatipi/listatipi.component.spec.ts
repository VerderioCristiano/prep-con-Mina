import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListatipiComponent } from './listatipi.component';

describe('ListatipiComponent', () => {
  let component: ListatipiComponent;
  let fixture: ComponentFixture<ListatipiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListatipiComponent]
    });
    fixture = TestBed.createComponent(ListatipiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
