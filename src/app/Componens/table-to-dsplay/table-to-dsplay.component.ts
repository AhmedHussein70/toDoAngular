import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-table-to-dsplay',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule],
  templateUrl: './table-to-dsplay.component.html',
  styleUrl: './table-to-dsplay.component.css',
})
export class TableToDsplayComponent {
  @Input() products: any[] = [];
  @Output() deleteRows: any = new EventEmitter<any>();

  selectId(id: any) {
    this.deleteRows.emit(id);
  }
}
