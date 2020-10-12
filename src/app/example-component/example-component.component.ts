import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SwipeUpModal } from '../swipe-up-modal/sheet';

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.scss']
})
export class ExampleComponentComponent implements AfterViewInit {

  private dynamicData = 'Dynamic data works. You can also inject another component or routing here'
  private swipeUpModal: SwipeUpModal;
  private modalInitHeight: number[] = [200];// inital popup height of modal

// for listening orientation change in mobile devices
  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event) {
    if(this.swipeUpModal.modalstate){
      this.swipeUpModal.close();
      this.swipeUpModal.open();
    }
  }


  @ViewChild('sheet',{static:false}) sheet: ElementRef<HTMLElement>;
  ngAfterViewInit(): void {
    this.swipeUpModal = new SwipeUpModal(this.sheet.nativeElement,this.modalInitHeight);
  }



  opensheet() {
    this.swipeUpModal.open();
  }


}
