import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchmovieService } from './searchmovie.component';


describe('SearchmovieComponent', () => {
  let component: SearchmovieService;
  let fixture: ComponentFixture<SearchmovieService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchmovieService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchmovieService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
