import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.intefaces';

@Injectable({ providedIn: 'root' })
export class GifsService {
  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    console.log('Gifs Service Ready');
  }

  public gifsList: Gif[] = [];

  private _tagsHistory: string[] = [];

  private APIKey: string = 'PqBiy2O9kO4Gl9gzuFwGoRSnyPhU86yj';
  public url: string = 'https://api.giphy.com/v1/gifs/search?api_key=';
  private serviceUrl = 'https://api.giphy.com/v1/gifs';

  searchTag(tag: string): void {
    this._tagsHistory.unshift(tag);
    console.log(this._tagsHistory);
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.APIKey)
      .set('limit', '10')
      .set('q', tag);

    this.http
      .get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe((resp) => {
        this.gifsList = resp.data;
        console.log('gifs' + this.gifsList);
      });
  }

  get tagsHistory() {
    return this._tagsHistory;
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);

    this._tagsHistory = this._tagsHistory.splice(0, 15);

    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    if (localStorage.getItem('history') != null) {
      this._tagsHistory = JSON.parse(localStorage.getItem('history')!);

      if (this._tagsHistory.length > 0) {
        this.searchTag(this._tagsHistory[0]);
      }
    } else {
      return;
    }
  }
}
