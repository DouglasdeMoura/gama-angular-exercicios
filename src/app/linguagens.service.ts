import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LinguagensService {

  url = 'https://alefesouza.dev/gama/languages.php';

  constructor(private httpClient: HttpClient) { }

  getLanguages() {
    return this.httpClient.get(this.url);
  }
}
