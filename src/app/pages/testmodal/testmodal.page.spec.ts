import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestmodalPage } from './testmodal.page';

describe('TestmodalPage', () => {
  let component: TestmodalPage;
  let fixture: ComponentFixture<TestmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
