import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

export class Table extends ExcelComponent {
     static className = 'excel__table';
    constructor($root) {
        super($root, {
        listeners: ['click', 'mousedown', 'mouseup', 'mousemove'],
    });
    }
     toHTML() {
       return createTable();
     }
     onClick(){

     }

     onMousedown(){

     }

}
