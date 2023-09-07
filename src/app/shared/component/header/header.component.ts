import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit, OnInit {
  @ViewChild('myHeader') myHeader!: ElementRef;
  showMenu = false as boolean;
  showPara1 = true as boolean;
  showPara2 = false as boolean;
  isSticky = false;
  stickyOffset!: number;
  count = 0 as number;

  ngAfterViewInit() {
    this.stickyOffset = this.myHeader.nativeElement.offsetTop;
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.pageYOffset > this.stickyOffset;
  }
  ngOnInit(): void {
    setInterval(() => {
      this.count++;
    }, 7000);
  }
  changeText() {
    this.count++;
  }
}
