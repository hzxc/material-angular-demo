import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
@Component({
  selector: 'app-retrieving-data-through-http',
  templateUrl: './retrieving-data-through-http.component.html',
  styleUrls: ['./retrieving-data-through-http.component.scss']
})
export class RetrievingDataThroughHttpComponent implements OnInit {
  displayedColumns = ['created_at', 'state', 'number', 'title'];
  exampleDatabase: ExampleHttpDao | null;
  dataSource: ExampleDataSource | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: Http) {

  }
  ngOnInit() {
    this.exampleDatabase = new ExampleHttpDao(this.http);
    this.dataSource = new ExampleDataSource(
      this.exampleDatabase, this.paginator, this.sort);
  }
}

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}

export class ExampleHttpDao {
  constructor(private http: Http) { }

  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl =
      `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;

    return this.http.get(requestUrl)
      .map(response => response.json() as GithubApi);
  }
}

export class ExampleDataSource extends DataSource<GithubIssue> {
  // The number of issues returned by github matching the query.
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(private exampleDatabase: ExampleHttpDao,
    private paginator: MatPaginator,
    private sort: MatSort) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<GithubIssue[]> {
    const displayDataChanges = [
      this.sort.sortChange,
      this.paginator.page
    ];

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    return Observable.merge(...displayDataChanges)
      .startWith(null)
      .do(_ => { this.isLoadingResults = true; })
      .switchMap(() => {
        return this.exampleDatabase.getRepoIssues(
          this.sort.active, this.sort.direction, this.paginator.pageIndex);
      })
      .map(data => {
        // Flip flag to show that loading has finished.
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        this.resultsLength = data.total_count;
        return data.items;
      })
      .catch(() => {
        this.isLoadingResults = false;
        // Catch if the GitHub API has reached its rate limit. Return empty data.
        this.isRateLimitReached = true;
        return Observable.of([]);
      });
  }

  disconnect() { }
}
