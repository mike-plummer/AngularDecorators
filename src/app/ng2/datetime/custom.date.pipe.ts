import { DatePipe } from '@angular/common';
import { Pipe } from '@angular/core';
import moment = require("moment");

@Pipe({
    name: 'date'
})
export class CustomDatePipe extends DatePipe {
    transform(value: any, pattern?: string, enableCustom?: boolean): string {
        // If consumer has requested custom handling then do so
        if (enableCustom) {
            return moment(value).fromNow();
        }

        // Otherwise, delegate to standard Angular DatePipe
        return super.transform(value, pattern);
    }
}