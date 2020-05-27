import {Component, Injectable, OnInit} from '@angular/core';
import {Advertisement} from '../advertisement';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class DashboardComponent implements OnInit {
  advertisements: Advertisement[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getLastAdvertisements();
  }

  public getLastAdvertisements() {
    this.apiService.getLastAdvertisements().subscribe(
      res => {
        this.advertisements = res.slice(0, 100);
      },
      err => {
        console.log('An error has occurred;');
      }
    );
  }

  sortByValue(advertisements: Advertisement[]): void {
    this.advertisements = advertisements.sort((a, b) => a.priceUAH - b.priceUAH);
  }

  sortByDate(advertisements: Advertisement[]): void {
    this.advertisements = advertisements
      .sort((a, b) => -1 * (new Date(a.olxDate.substr(0, 10)).getTime() - new Date(b.olxDate.substr(0, 10)).getTime()));
  }
}
