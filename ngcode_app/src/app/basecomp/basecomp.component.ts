import { Component } from '@angular/core';
import { ViewChild } from '@angular/core'
import { TopComponent } from '../topgrid/topgrid.component';

@Component({
    selector: 'basecomp',
    templateUrl: './basecomp.component.html',
    styleUrls: ['./basecomp.component.scss']
})
export class BaseComponent {
    @ViewChild(TopComponent, {static: false }) tgrid: TopComponent;
    title = 'app';


onCbAge (params:any): void {
	console.log("onGridReady");
	console.log(params);
        console.log(this.tgrid);
};


onCbAthlete (params:any): void {
	console.log("onGridReady");
	console.log(params);
};

onCbCountry (params:any): void {
	console.log("onGridReady");
	console.log(params);
};

};
