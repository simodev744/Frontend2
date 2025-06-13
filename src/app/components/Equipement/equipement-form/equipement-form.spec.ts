import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementForm } from './equipement-form';

describe('EquipementForm', () => {
  let component: EquipementForm;
  let fixture: ComponentFixture<EquipementForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipementForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipementForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
