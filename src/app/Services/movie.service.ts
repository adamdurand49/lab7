import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }

  GetMovieData():Observable<any>{
    return this.httpClient.get('https://www.omdbapi.com/?apikey=87826e0a&s=%27war%27')
  }
}
