import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstuiosPage } from './estuios.page';

describe('EstuiosPage', () => {
  let component: EstuiosPage;
  let fixture: ComponentFixture<EstuiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstuiosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstuiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
