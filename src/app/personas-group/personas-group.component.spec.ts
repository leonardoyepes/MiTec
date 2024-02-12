import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasGroupComponent } from './personas-group.component';

describe('PersonasGroupComponent', () => {
  let component: PersonasGroupComponent;
  let fixture: ComponentFixture<PersonasGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonasGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonasGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
