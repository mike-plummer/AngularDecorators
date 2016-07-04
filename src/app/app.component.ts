import { Component } from '@angular/core';
import { DateComponent } from "./ng2/date/date.component.ts";

@Component({
    selector: 'angular-decorators',
    template: '<date></date>',
    directives: [DateComponent]
})
export class AppComponent { }