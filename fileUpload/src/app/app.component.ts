import { Component } from '@angular/core';
import { CsvToJsonService } from './csv-to-json.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  csvFile:any= "";
  responseObj:any = [];

  constructor(private service: CsvToJsonService){

  }

  csvToJson() {
    if (this.csvFile.files && this.csvFile.files.item(0)  ) {
      this.responseObj =[];
      console.log(this.csvFile.files);
      
      this.service.csvToJson(this.csvFile.files.item(0)).subscribe(res => {
        console.log(res);
        
        this.responseObj = JSON.stringify(res);
      }, err => {
        console.log(err);
        
        this.responseObj=JSON.stringify(err);
      })

    }
    console.log(this.csvFile);
  }
}
