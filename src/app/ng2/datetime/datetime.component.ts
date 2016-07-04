import { Component } from '@angular/core';
import { CustomDatePipe } from './custom.date.pipe.ts';
import { CapitalizePipe } from './capitalize.pipe.ts';
import moment = require("moment");

@Component({
    selector: 'datetime',
    template: require('./datetime.html'),
    directives: [],
    pipes: [ CapitalizePipe, CustomDatePipe ],
    styles: [],
    providers: []
})
export class DateTimeComponent {

    selectedDttm: Date;
    customPipeEnabled: boolean = true;

    constructor() {
        this.selectedDttm = new Date();
    }
    
    add(datum: moment.UnitOfTime): void {
        this.selectedDttm = moment(this.selectedDttm).add(1, datum).toDate();
    }

    subtract(datum: moment.UnitOfTime): void {
        this.selectedDttm = moment(this.selectedDttm).subtract(1, datum).toDate();
    }
    
    toggleCustomPipe() {
        this.customPipeEnabled = !this.customPipeEnabled;
    }
}