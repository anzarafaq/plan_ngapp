import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TopComponent } from './topgrid/topgrid.component';
import { BtmComponent } from './btmgrid/btmgrid.component';
import { BaseComponent } from './basecomp/basecomp.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [BaseComponent, TopComponent, BtmComponent],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [BaseComponent, TopComponent, BtmComponent]
})
export class AppModule {}

