import {Component, Injectable, OnInit} from '@angular/core';
import {Advertisement} from '../advertisement';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-advertisement-detail',
  templateUrl: './advertisement-detail.component.html',
  styleUrls: ['./advertisement-detail.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class AdvertisementDetailComponent implements OnInit {
  hero: Advertisement;

  constructor(
    private route: ActivatedRoute,
    private dashboardComponent: DashboardComponent,
    private apiService: ApiService
  ) {
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getAdvertisement(id).subscribe(
      res => {
        this.hero = res;
      },
      err => {
        console.log('An error has occurred;');
      }
    );
  }


  update(): void {
    this.apiService.update(this.hero).subscribe(
      res => {
        this.hero = res;
      },
      err => {
        console.log('An error has occurred;');
      }
    );
  }

}
