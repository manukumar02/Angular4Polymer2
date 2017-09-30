import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <iron-list [items]="items" as="item">
      <template [polymer]="this" ngNonBindable>
        <my-item item="[[item]]" color="[[getColor(item)]]"></my-item>
      </template>
    </iron-list>
    <my-custom-checkbox [(checked)]="isChecked" emitChanges></my-custom-checkbox>

    <form #ngForm="ngForm">
      <paper-input label="Name" name="name" emitChanges ironControl></paper-input>

      <!-- No two-way binding, [emitChanges] is not needed -->
      <paper-button>Submit</paper-button>
    </form>
  `
})
export class AppComponent {
  items = [
    'one',
    'two',
    'three'
  ];

  getColor(item: string) {
    return item === 'one' ? 'blue' : 'red';
  }
}
