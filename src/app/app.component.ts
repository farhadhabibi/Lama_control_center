import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arr = ['Javascript', 'angular', 'jquery'];
 
  pushItem = function (user){
      // var item = prompt('enter an item');
       if (user != ""){
     	this.arr.push(user);
  
     }
  }
  close = function(index){
     this.arr.splice(index, 1);
  }
}
