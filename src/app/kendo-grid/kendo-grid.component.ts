import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CategoriesService } from './kendo-grid.service';
import { process } from '@progress/kendo-data-query';
import { ExcelExportData } from '@progress/kendo-angular-excel-export';
import { State } from '@progress/kendo-data-query';
import {
    GridComponent,
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';
@Component({
  selector: 'app-kendo-grid',
  styleUrls: ['./kendo-grid.component.scss'],
  template: `

       <kendo-grid
          [data]="view | async"
          [pageSize]="state.take"
          [skip]="state.skip"
          [sort]="state.sort"
          [sortable]="true"
          [pageable]="true"
          [scrollable]="'none'"
          (dataStateChange)="dataStateChange($event)"
        >
        <ng-template kendoGridToolbarTemplate>
                <button type="button" kendoGridExcelCommand ><span class="k-icon k-i-file-excel"></span>Export to Excel</button>
               <button kendoGridPDFCommand><span class='k-icon k-i-file-pdf'></span>Export to PDF</button>
            </ng-template>
        <kendo-grid-column field="value" title="S.No" width="100"></kendo-grid-column>
        <kendo-grid-column field="text" title="Technology" width="200"></kendo-grid-column>
    <kendo-grid-excel fileName="Technology.xlsx" >

                <kendo-excelexport-column field="value" title="S.No">
                </kendo-excelexport-column>
                <kendo-excelexport-column field="text" title="Technology List">
                </kendo-excelexport-column>

</kendo-grid-excel>
      <kendo-grid-pdf fileName="Technology.pdf" [allPages]="true" paperSize="A4" [repeatHeaders]="true" [landscape]="true">
                <kendo-grid-pdf-margin top="2cm" left="1cm" right="1cm" bottom="2cm"></kendo-grid-pdf-margin>
                <ng-template kendoGridPDFTemplate let-pageNum="pageNum" let-totalPages="totalPages">
                 <div class="page-template">
                    <div class="header">
                      <div style="float: right">Page {{ pageNum }} of {{ totalPages }}</div>
                    </div>
                    <div class="footer">
                      Page {{ pageNum }} of {{ totalPages }}
                    </div>
                  </div>
                </ng-template>
            </kendo-grid-pdf>
      </kendo-grid>
    `
})
export class KendoGridComponent {
    public view: Observable<GridDataResult>;
    public state: State = {
        skip: 0,
        take: 5
    };

    constructor(private service: CategoriesService) {
        this.view = service;
        this.service.query(this.state);
    }

    public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.service.query(state);
    }

   


}

