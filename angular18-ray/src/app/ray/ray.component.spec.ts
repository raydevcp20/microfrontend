import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RayComponent } from './ray.component';

describe('RayComponent', () => {
  let component: RayComponent;
  let fixture: ComponentFixture<RayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
