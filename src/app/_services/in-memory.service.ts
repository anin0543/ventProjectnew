import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/presets';
@Injectable({
  providedIn: 'root'
})

export class InMemoryService {
  room;
  zone;
  constructor(private http: HttpClient) { }
  create(data) {
    return this.http.post(baseUrl, data);
  }
  getbyId(uid) {
    return this.http.get(`http://localhost:8080/api/presets/${uid}`);
  }
}
