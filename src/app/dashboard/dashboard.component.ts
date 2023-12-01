import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private http: HttpClient) { }
  latestResult:any


  ngOnInit() {
    this.http.get('https://dashboard.free.beeceptor.com/all-data')
      .subscribe(
        (data) => {
          console.log('Data:', data);
          this.latestResult= data
          this.latestResult = this.latestResult.dashboardData.latestResults
          console.log( this.latestResult);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }

}
