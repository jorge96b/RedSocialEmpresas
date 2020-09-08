import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailNewsPage } from './detail-news.page';

describe('DetailNewsPage', () => {
  let component: DetailNewsPage;
  let fixture: ComponentFixture<DetailNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
