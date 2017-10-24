import { TestBed, async      } from '@angular/core/testing';
import { FormsModule         } from '@angular/forms';

import { HeroesComponent     } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService         } from './hero.service';

describe('HeroesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent,
        HeroDetailComponent,
      ],
      imports: [FormsModule],
      providers: [HeroService],
    }).compileComponents();
  }));

  it('should create the heroes', async(() => {
    const fixture = TestBed.createComponent(HeroesComponent);
    const heroes = fixture.debugElement.componentInstance;
    expect(heroes).toBeTruthy();
  }));
});
