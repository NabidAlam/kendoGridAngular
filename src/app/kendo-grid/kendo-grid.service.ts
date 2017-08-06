import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { toODataString } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map';

export abstract class TechnologyService extends BehaviorSubject<GridDataResult> {
    private BASE_URL: string = 'http://github-ci-staging.azurewebsites.net/api/Technologies/TechnologiesList';

    constructor(private http: Http, private tableName: string) {
        super(null);
    }

    public query(state: any): void {
        this.fetch(this.tableName, state)
            .subscribe(x => super.next(x));
    }

    private fetch(tableName: string, state: any): Observable<GridDataResult> {
        return this.http
            .get(`${this.BASE_URL}`)
            .map(response => response.json())
            .map(response => (<GridDataResult>{
                data: response,
                total: parseInt(response.length, 10) 
            }));
    }
}

@Injectable()
export class CategoriesService extends TechnologyService {
    constructor(http: Http) { super(http, "TechnologiesList"); }
}
