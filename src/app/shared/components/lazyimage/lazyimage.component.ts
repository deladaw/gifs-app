import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazyimage',
  templateUrl: './lazyimage.component.html',
})
export class LazyimageComponent implements OnInit {
  ngOnInit(): void {
    if (!this.url) throw new Error('Url not found');
    if (!this.alt) throw new Error('Alternative text not found');
  }
  @Input()
  public url!: string;
  @Input()
  public alt!: string;

  public hasLoaded: boolean = false;

  onLoad() {
    console.log('Image Loaded');
    this.hasLoaded = true;
  }
}
