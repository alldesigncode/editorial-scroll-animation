import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Inject,
} from '@angular/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  // section one
  @ViewChild('centerBox', { static: true }) centerBox: ElementRef<HTMLDivElement>;
  @ViewChild('header', { static: true }) header: ElementRef<HTMLDivElement>;
  @ViewChild('sectionOne', { static: true }) sectionOne: ElementRef<HTMLDivElement>;
  @ViewChild('imageSecond', { static: true }) imageSecond: ElementRef<HTMLElement>;
  @ViewChild('imageSecondCap', { static: true }) imageSecondCap: ElementRef<HTMLElement>;
  @ViewChild('imageFourth', { static: true }) imageFourth: ElementRef<HTMLDivElement>;
  @ViewChild('imageFourthCap', { static: true }) imageFourthCap: ElementRef<HTMLDivElement>;
  @ViewChild('imageThird', { static: true }) imageThird: ElementRef<HTMLDivElement>;
  @ViewChild('imageFifth', { static: true }) imageFifth: ElementRef<HTMLDivElement>;

  // section two
  @ViewChild('letter', { static: true }) letter: ElementRef<HTMLDivElement>;
  @ViewChild('titles', { static: true }) titles: ElementRef<HTMLDivElement>;
  @ViewChild('paragraph', { static: true }) paragraph: ElementRef<HTMLDivElement>;
  @ViewChild('imgOne', { static: true }) imgOne: ElementRef<HTMLDivElement>;
  @ViewChild('imgTwo', { static: true }) imgTwo: ElementRef<HTMLDivElement>;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.disableScroll(true);
    this.sectionOneScrollAnimations();
    this.sectionTwoScrollAnimations();
    this.initAnimations();
  }

  disableScroll(disabled: boolean): void {
    if (disabled) {
      this.document.querySelector('body').style.overflowY = 'hidden';
    } else {
      this.document.querySelector('body').style.overflowY = 'auto';
    }
  }

  initAnimations(): void {
    gsap.from(this.header.nativeElement.childNodes, {
      delay: 0.4,
      duration: 0.8,
      y: 30,
      opacity: 0,
      stagger: 0.15,
    });
    gsap.from(this.centerBox.nativeElement.childNodes, {
      delay: 0.5,
      duration: 0.8,
      y: 90,
      opacity: 0,
      stagger: 0.15,
    });
    gsap.from(this.sectionOne.nativeElement.childNodes, {
      delay: 0.7,
      duration: 0.5,
      y: 70,
      opacity: 0,
      stagger: 0.1,
      onComplete: () => this.disableScroll(false),
    });
  }
  sectionOneScrollAnimations(): void {
    gsap.to(this.centerBox.nativeElement.childNodes, {
      scrollTrigger: {
        trigger: this.centerBox.nativeElement,
        scrub: true,
        start: '-130px top',
      },
      duration: 0.6,
      y: -40,
      opacity: 0.3,
      stagger: 0.15,
    });
    gsap.to(this.imageSecond.nativeElement, {
      scrollTrigger: {
        trigger: this.imageSecond.nativeElement,
        scrub: true,
        start: '40% center',
      },
      duration: 0.6,
      y: -90,
    });
    gsap.to(this.imageSecondCap.nativeElement, {
      scrollTrigger: {
        trigger: this.imageSecondCap.nativeElement,
        scrub: true,
        start: '-200px center',
      },
      duration: 1,
      y: 90,
    });
    gsap.to(this.imageThird.nativeElement, {
      scrollTrigger: {
        trigger: this.imageSecond.nativeElement,
        scrub: true,
        start: '40% center',
      },
      duration: 0.6,
      y: -90,
    });
    gsap.to(this.imageFourth.nativeElement, {
      scrollTrigger: {
        trigger: this.imageFourth.nativeElement,
        scrub: true,
        start: '40% center',
      },
      duration: 0.6,
      y: -90,
    });
    gsap.to(this.imageFourthCap.nativeElement, {
      scrollTrigger: {
        trigger: this.imageFourth.nativeElement,
        scrub: true,
        start: '40% center',
      },
      duration: 0.6,
      y: -90,
    });
    gsap.to(this.imageFifth.nativeElement, {
      scrollTrigger: {
        trigger: this.imageFifth.nativeElement,
        scrub: true,
        start: '20% center',
      },
      duration: 1,
      y: -50,
    });
  }
  sectionTwoScrollAnimations(): void {
    gsap.from(this.letter.nativeElement.childNodes, {
      scrollTrigger: {
        trigger: this.letter.nativeElement,
        scrub: true,
        start: '-200px center',
      },
      duration: 0.5,
      y: -40,
      opacity: 0,
      stagger: 0.15,
    });
    gsap.from(this.titles.nativeElement.childNodes, {
      scrollTrigger: {
        trigger: this.titles.nativeElement,
        scrub: true,
        start: '-200px center',
      },
      duration: 0.5,
      y: -40,
      opacity: 0,
      stagger: 0.15,
    });
    gsap.from(this.paragraph.nativeElement, {
      scrollTrigger: {
        trigger: this.titles.nativeElement,
        scrub: true,
        start: 'center center',
      },
      duration: 0.5,
      y: -40,
      opacity: 0,
    });
    gsap.from(this.imgOne.nativeElement, {
      scrollTrigger: {
        trigger: this.titles.nativeElement,
        scrub: true,
      },
      duration: 0.5,
      opacity: 0,
      x: -40,
    });
    gsap.from(this.imgTwo.nativeElement, {
      scrollTrigger: {
        trigger: this.titles.nativeElement,
        scrub: true,
      },
      duration: 0.5,
      opacity: 0,
      x: 80,
    });
  }
}
