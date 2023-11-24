import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceGroupDetailComponent } from './resource-group-detail.component';

describe('ResourceGroupDetailComponent', () => {
  let component: ResourceGroupDetailComponent;
  let fixture: ComponentFixture<ResourceGroupDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceGroupDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceGroupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
