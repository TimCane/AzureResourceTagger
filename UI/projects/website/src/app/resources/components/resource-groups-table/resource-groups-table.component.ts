import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { ResourceGroup } from 'api-client';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-resource-groups-table',
  templateUrl: './resource-groups-table.component.html',
  styleUrls: ['./resource-groups-table.component.scss']
})
export class ResourceGroupsTableComponent {
  resourceGroupDialog: boolean = false;

  @ViewChild('dt') dt!: Table;

  @Input() resourceGroups!: ResourceGroup[];
  @Input() total: number = 0;

  @Output() loadResourceGroups: EventEmitter<LazyLoadEvent>;

  constructor() {
    this.loadResourceGroups = new EventEmitter<LazyLoadEvent>();
  }

  ngOnInit() {}

  onLoadResourceGroups(event: LazyLoadEvent) {
    this.loadResourceGroups.emit(event);
  }

  onSearch(event: Event) {
    this.dt.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
