import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-input-add',
  standalone: true,
  imports: [InputTextModule, FormsModule, ButtonModule],
  templateUrl: './input-add.component.html',
  styleUrl: './input-add.component.css',
})
export class InputAddComponent {
  value: String = '';
  @Output() valueChanged = new EventEmitter<string>();
  // OnInit() {
  //   this.value = this.value.toLocaleLowerCase();
  // }

  AddValueChanged(valueMth: string) {
    this.valueChanged.emit(valueMth);
  }
}
