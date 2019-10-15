import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  Renderer2
} from '@angular/core';

import * as fromSharedModels from '@shared/models';
import * as fromAnimations from '../../animations';

@Component({
  selector: 'projects-visual',
  templateUrl: './projects-visual.component.html',
  styleUrls: ['./projects-visual.component.scss'],
  animations: [fromAnimations.workAnimation]
})
export class ProjectsVisualComponent implements OnInit {
  @Input() work: fromSharedModels.Work;
  @Input() index: number;
  @Input() workIndex: number;
  @Input() numberOfWork: number;
  @ViewChild('image', { static: false }) image: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  private setAnimatedImagePosition(orientation: string, value: string): void {
    this.renderer.setStyle(this.image.nativeElement, orientation, value + 'px');
  }

  ngOnDestroy(): void {
    let imagePosition: any = this.image.nativeElement.getBoundingClientRect();
    this.renderer.setStyle(this.image.nativeElement, 'position', 'fixed');
    this.setAnimatedImagePosition('top', imagePosition.top);
    this.setAnimatedImagePosition('left', imagePosition.left);
    this.setAnimatedImagePosition('right', imagePosition.right);
    this.setAnimatedImagePosition('bottom', imagePosition.bottom);

    setTimeout(() => {
      this.renderer.setAttribute(
        this.image.nativeElement,
        'data-isAnimated',
        'true'
      );
    }, 100);
  }
}
