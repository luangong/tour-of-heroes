import { TestBed, async  } from '@angular/core/testing';
import { FormsModule     } from '@angular/forms';

import { AppComponent        } from './app.component';
import { HeroesComponent     } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService         } from './hero.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
      ],
      imports: [FormsModule],
      providers: [HeroService],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have the title "Tour of Heroes"', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tour of Heroes');
  }));

  it('should render title in an <h1> tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Tour of Heroes');
  }));
});
