import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElegirSubPage } from './elegir-sub.page';

describe('ElegirSubPage', () => {
  let component: ElegirSubPage;
  let fixture: ComponentFixture<ElegirSubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElegirSubPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElegirSubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
