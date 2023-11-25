import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { Resource } from 'api-client';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-resources-table',
  templateUrl: './resources-table.component.html',
  styleUrls: ['./resources-table.component.scss']
})
export class ResourcesTableComponent {
  resourceDialog: boolean = false;

  @ViewChild('dt') dt!: Table;

  @Input() resources!: Resource[];
  @Input() total: number = 0;

  @Output() loadResources: EventEmitter<LazyLoadEvent>;
  @Output() selectResource: EventEmitter<Resource>;

  constructor() {
    this.loadResources = new EventEmitter<LazyLoadEvent>();
    this.selectResource = new EventEmitter<Resource>();
  }

  ngOnInit() {}

  onLoadResources(event: LazyLoadEvent) {
    this.loadResources.emit(event);
  }

  onSearch(event: Event) {
    this.dt.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  onSelect(resource: Resource) {
    this.selectResource.emit(resource);
  }
}
