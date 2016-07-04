import { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';
import moment = require("moment");

@Pipe({
    name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
    transform(value: string): string {
        if (!value) {
            return '';
        }
        return value.charAt(0).toUpperCase() + value.substring(1, value.length);
    }
}