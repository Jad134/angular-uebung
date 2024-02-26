import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-singlefruit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './singlefruit.component.html',
  styleUrl: './singlefruit.component.scss'
})
export class SinglefruitComponent {
@Input()fruit = {
  name: "Appel",
  img:"",
  description: "",
  genus: "",
  stars: 0,
  reviews:[{name: "", text: ""},{name: "", text: ""}],
};



inputData = "";

@Output()fruitname = new EventEmitter<string>()

sendInputData(){
 this.fruitname.emit(this.inputData);
 this.inputData = "";
}

}
