import { CommonModule } from '@angular/common';
import { Component, Input, inject, input } from '@angular/core';
import { SinglefruitComponent } from './singlefruit/singlefruit.component';
import { FruitlistdataService } from '../fruitlistdata.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {

  fruitlistdata = inject(FruitlistdataService)



  fullStar = 1
  halfStar = 0.5




  addComment(comment: string, index: number) {
    console.log(comment);
    this.fruitlistdata.commentTest(comment, index);

  }
}
