import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input() appHighLight = 'blue';

  constructor(private el: ElementRef) {
   }

   ngOnInit():void {
    console.log('ngOnInit HighLightDirective', this.appHighLight);
    
    this.el.nativeElement.style.color = this.appHighLight;
   }

}
