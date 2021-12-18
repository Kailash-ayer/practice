import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  emailFormArray: Array<any> = [];

  categories = [
    {name :"email1", id: 1},
    {name :"email2", id: 2},
    {name :"email3", id: 3},
    {name :"email4", id: 4}
  ];

  constructor() { }
names=["Kailash","Amol","Mayur","Vinayk"]
nm='Kailash'
  items = ["Rose", "Jasmine", "Lotus", "Lily"]
selectedFlower = 'Jasmine'
selectedName = 'Kailash'
  ngOnInit(): void {
  }


  tempArr: any =[];
test(cat:any,event:any) {

  if(event.target.checked==true) {
        this.tempArr.push(cat);
      } else {
        let index = this.tempArr.indexOf(cat);
        this.tempArr.splice(index,1);
      }
}




}
