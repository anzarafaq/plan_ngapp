import { Component } from '@angular/core';

@Component({
    selector: 'btmgrid',
    templateUrl: './btmgrid.component.html',
    styleUrls: ['./btmgrid.component.scss']
})
export class BtmComponent {

    title = 'app';

    columnDefs = [
        {headerName: 'Open', field: 'open', cellRenderer: this.getRenderer()},
        {headerName: 'Make', field: 'make' },
        {headerName: 'Model', field: 'model' },
        {headerName: 'Price', field: 'price'}
    ];

    rowData = [
        { make: 'Toyota1', model: 'Celica1', price: 350001 },
        { make: 'Ford1', model: 'Mondeo1', price: 320001 },
        { make: 'Porsche1', model: 'Boxter1', price: 720001 }
    ];

ageClicked(e) {
    console.log('AGe clicked');
}


ageCellRendererFunc() {
        return '<button (click)="ageClicked(event$)">Age</button>';
}


getRenderer() {
  function CellRenderer() {}
  CellRenderer.prototype.createGui = function() {
    var template =
      '<span><button id="theButton">#</button><span id="theValue" style="padding-left: 4px;"></span></span>';
    var tempDiv = document.createElement("div");
    tempDiv.innerHTML = template;
    this.eGui = tempDiv.firstElementChild;
  };
  CellRenderer.prototype.init = function(params) {
    this.createGui();
    this.params = params;
    var eValue = this.eGui.querySelector("#theValue");
    eValue.innerHTML = params.value;
    this.eButton = this.eGui.querySelector("#theButton");
    this.buttonClickListener = this.onButtonClicked.bind(this);
    this.eButton.addEventListener("click", this.buttonClickListener);
  };
  CellRenderer.prototype.onButtonClicked = function() {
    console.log("BUTTON CLICKED");
    console.log("ROW DATA: "+this.params.data);
    var startEditingParams = {
      rowIndex: this.params.rowIndex,
      colKey: this.params.column.getId()
    };
    this.params.api.startEditingCell(startEditingParams);
  };
  CellRenderer.prototype.getGui = function() {
    return this.eGui;
  };
  CellRenderer.prototype.destroy = function() {
    this.eButton.removeEventListener("click", this.buttonClickListener);
  };
  return CellRenderer;
}

}
