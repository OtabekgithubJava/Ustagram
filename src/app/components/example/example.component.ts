import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss',
  animations: [
    trigger('cardAnimation', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(100px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('hidden => visible', [
        animate('0.6s ease-out')
      ])
    ])
  ]
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('cardSection') cardSection!: ElementRef;
  cardStates: string[] = ['hidden', 'hidden', 'hidden'];
  allCardsVisible = false;
  private sectionScrollHandler: (() => void) | null = null;

  ngAfterViewInit(): void {
    const section = this.cardSection.nativeElement;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const handleScroll = () => {
              const rect = section.getBoundingClientRect();
              const windowHeight = window.innerHeight;
              const sectionHeight = rect.height;
              const scrollProgress = Math.max(0, (windowHeight - rect.top) / sectionHeight);

              if (scrollProgress >= 0.10 && this.cardStates[0] === 'hidden') {
                this.cardStates = ['visible', this.cardStates[1], this.cardStates[2]];
              }

              if (scrollProgress >= 0.60 && this.cardStates[1] === 'hidden') {
                this.cardStates = [this.cardStates[0], 'visible', this.cardStates[2]];
              }

              if (scrollProgress >= 0.85 && this.cardStates[2] === 'hidden') {
                this.cardStates = [this.cardStates[0], this.cardStates[1], 'visible'];
              }

              if (scrollProgress >= 0.90 && !this.allCardsVisible) {
                this.allCardsVisible = true;
              }
            };

            window.addEventListener('scroll', handleScroll);
            handleScroll();

            this.sectionScrollHandler = handleScroll;
          } else {
            this.cardStates = ['hidden', 'hidden', 'hidden'];
            this.allCardsVisible = false;
            if (this.sectionScrollHandler) {
              window.removeEventListener('scroll', this.sectionScrollHandler);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
  }
}