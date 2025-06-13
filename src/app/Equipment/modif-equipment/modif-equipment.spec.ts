import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifEquipment } from './modif-equipment';

describe('ModifEquipment', () => {
  let component: ModifEquipment;
  let fixture: ComponentFixture<ModifEquipment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifEquipment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifEquipment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
