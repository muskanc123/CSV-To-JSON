import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvToJsonService {

  constructor(private _http: HttpClient) { }

  csvToJson(csvFile: any): Observable<any> {
    let uploadData = new FormData();

    uploadData.append("csvFile", csvFile)

    return this._http.post(`http://localhost:3000/upload`, uploadData);
  }
}
