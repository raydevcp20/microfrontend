import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebComponentWrapperComponent } from './web-component-wrapper.component';

describe('WebComponentWrapperComponent', () => {
  let component: WebComponentWrapperComponent;
  let fixture: ComponentFixture<WebComponentWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebComponentWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebComponentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
