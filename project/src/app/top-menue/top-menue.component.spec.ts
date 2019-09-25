import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenueComponent } from './top-menue.component';

describe('TopMenueComponent', () => {
  let component: TopMenueComponent;
  let fixture: ComponentFixture<TopMenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
