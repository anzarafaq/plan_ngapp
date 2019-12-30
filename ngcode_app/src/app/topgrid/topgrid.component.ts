import { Component } from '@angular/core';

@Component({
    selector: 'topgrid',
    templateUrl: './topgrid.component.html',
    styleUrls: ['./topgrid.component.scss']
})
export class TopComponent {
    title = 'app';

    columnDefs = [
        {headerName: 'Make', field: 'make' },
        {headerName: 'Model', field: 'model' },
        {headerName: 'Price', field: 'price'}
    ];

    rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];

onGridReady(params): void {
    params.api.sizeColumnsToFit();
    console.log('grid is ready');
  }
}
