import { Component } from '@angular/core';

@Component({
    selector: 'btmgrid',
    templateUrl: './btmgrid.component.html',
    styleUrls: ['./btmgrid.component.scss']
})
export class BtmComponent {
    title = 'app';

    columnDefs = [
        {headerName: 'Make', field: 'make' },
        {headerName: 'Model', field: 'model' },
        {headerName: 'Price', field: 'price'}
    ];

    rowData = [
        { make: 'Toyota1', model: 'Celica1', price: 350001 },
        { make: 'Ford1', model: 'Mondeo1', price: 320001 },
        { make: 'Porsche1', model: 'Boxter1', price: 720001 }
    ];
}
