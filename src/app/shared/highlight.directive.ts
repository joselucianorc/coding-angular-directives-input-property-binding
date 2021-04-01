import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  //Escutar evento disparado pela tag que está usando a diretiva
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.defaultColor;
  }

  //Permite que gente associe uma variável com uma propriedade html do hospedeiro da diretiva
  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string = 'white';

  @Input('highlight') highlightColor: string = 'yellow';

  constructor() {
    this.backgroundColor = this.defaultColor;
   }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
