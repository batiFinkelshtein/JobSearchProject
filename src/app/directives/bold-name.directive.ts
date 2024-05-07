import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBoldName]'
})
export class BoldNameDirective implements OnInit{
  @Input() textColor:string = 'orange'
  constructor(private element:ElementRef) { }
  ngOnInit(): void {
   
  }
  @HostListener('mouseenter')
  mouseEnter(){
    
    this.element.nativeElement.style.color = this.textColor
  }

  @HostListener('mouseleave')
  mouseLeave(){
    this.element.nativeElement.style.color = 'white'
  }

}
