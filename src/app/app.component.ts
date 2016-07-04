import { Component } from '@angular/core';
import { DateTimeComponent } from "./ng2/datetime/datetime.component.ts";

@Component({
    selector: 'angular-decorators',
    template: '<datetime></datetime>',
    directives: [DateTimeComponent]
})
export class AppComponent { }