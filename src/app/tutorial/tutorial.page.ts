import {Component, Injector, ViewChild, ElementRef, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {
  @ViewChild('slides') slides: IonSlides;

  constructor() { }

  ngOnInit() {
  }
  // Method that shows the next slide
 slideNext() {
  console.log('slidenext', this.slides.getActiveIndex())
  this.slides.slideNext();
  }
  
  // Method that shows the previous slide
 slidePrev(){
  console.log('slideprev')
  this.slides.slidePrev();
  }

}
