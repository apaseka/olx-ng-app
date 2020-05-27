import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Advertisement} from '../advertisement';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = window['cfgApiBaseUrl'];
  private LAST_ADV_URL = `${this.BASE_URL}/get_last_added`;
  private ADV_URL = `${this.BASE_URL}/getAdv/`;
  private UPDATE_URL = `${this.BASE_URL}/update_adv`;

  constructor(private http: HttpClient) {
  }

  getLastAdvertisements(): Observable<Advertisement[]> {
    const observable = this.http.get<Advertisement[]>(this.LAST_ADV_URL);
    return observable;
  }

  getAdvertisement(id: number): Observable<Advertisement> {
    const url = `${this.ADV_URL}/${id}`;
    return this.http.get<Advertisement>(url);
  }

  update(hero: Advertisement): Observable<Advertisement> {
    return this.http.post<Advertisement>(this.UPDATE_URL, hero);
  }
}
