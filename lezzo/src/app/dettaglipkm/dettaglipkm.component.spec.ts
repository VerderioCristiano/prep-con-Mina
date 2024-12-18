import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglipkmComponent } from './dettaglipkm.component';

describe('DettaglipkmComponent', () => {
  let component: DettaglipkmComponent;
  let fixture: ComponentFixture<DettaglipkmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DettaglipkmComponent]
    });
    fixture = TestBed.createComponent(DettaglipkmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
