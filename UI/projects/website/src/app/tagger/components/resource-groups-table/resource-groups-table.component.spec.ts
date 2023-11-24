import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceGroupsTableComponent } from './resource-groups-table.component';

describe('ResourceGroupsTableComponent', () => {
  let component: ResourceGroupsTableComponent;
  let fixture: ComponentFixture<ResourceGroupsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceGroupsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceGroupsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
