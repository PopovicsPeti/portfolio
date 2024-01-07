import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDownload]'
})
export class DownloadDirective {

  constructor(public viewContainerRef: ViewContainerRef) {}
}
