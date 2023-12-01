import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  hide = false
  isActive = 0

  ngOnInit() {
    this.getUrl()
  }
  hideBar() {
    this.hide = this.hide ? false : true
  }
  getUrl() {
    const currentUrl = window.location.pathname;
    switch (currentUrl) {
      case "/":
        this.isActive = 1;
        break;
      case "/class":
        this.isActive = 2;
        break;
      case "/resources":
        this.isActive = 3;
        break;
      case "/learning":
        this.isActive = 4;
        break;
      case "/chat":
        this.isActive = 5;
        break;
      case "/settings":
        this.isActive = 6;
    }
    console.log(this.isActive);
  }
  changeUrl(e:any){
    this.isActive = e;
    switch (e) {
      case 1:
        this.router.navigate(['/']);
        break;
      case 2:
        this.router.navigate(['/class']);
        break;
      case 3:
        this.router.navigate(['/resources']);
        break;
      case 4:
        this.router.navigate(['/learning']);
        break;
      case 5:
        this.router.navigate(['/chat']);
        break;
      case 6:
        this.router.navigate(['/settings']);
        break;
    }
  }

}
