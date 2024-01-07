import { Component, OnInit, Input, ElementRef, AfterViewInit, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { DownloadComponent } from '../components/download/download.component';
import { DownloadDirective } from '../download/download.directive';
import { Subscription } from 'rxjs';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(DownloadDirective) downloads: DownloadDirective = <DownloadDirective>{};
  @Input('background') bg: boolean = false;
  @Input('host') hostLink: string = '';
  @Input('git') gitLink: string = '';
  closeSub: Subscription = new Subscription();
  isHungarianSidebar: boolean = false;

  constructor(private elementRef: ElementRef, 
              private compFactoryResolver: ComponentFactoryResolver,
              private LS: LanguageService) { }

  ngOnInit(): void {
    this.LS.isHungarianLanguage$.subscribe((isHungarian) => {
      this.isHungarianSidebar = isHungarian;
    });
  }

  ngOnDestroy(): void {
    this.closeSub.unsubscribe();
  }

  ngAfterViewInit(): void {
    if (this.bg) {
      const fireBtn = this.elementRef.nativeElement.querySelector('#fire-btn');
      const gitBtn = this.elementRef.nativeElement.querySelector('#git-btn');
      const pdf = this.elementRef.nativeElement.querySelector('#pdf-btn');

      if (fireBtn) {
        fireBtn.style.backgroundColor = 'transparent';
        fireBtn.style.border = '2px solid var(--secondary-color)';

        fireBtn.addEventListener('mouseover', () => {
          fireBtn.style.backgroundColor = 'var(--secondary-color)';
        });
        fireBtn.addEventListener('mouseout', () => {
          fireBtn.style.backgroundColor = 'transparent';
        });
      }

      if (gitBtn) {
        gitBtn.style.backgroundColor = 'transparent';
        gitBtn.style.border = '2px solid var(--secondary-color)';

        gitBtn.addEventListener('mouseover', () => {
          gitBtn.style.backgroundColor = 'var(--secondary-color)';
        });
        gitBtn.addEventListener('mouseout', () => {
          gitBtn.style.backgroundColor = 'transparent';
        });
      }

      if (pdf) {
        pdf.style.backgroundColor = 'transparent';
        pdf.style.border = '2px solid var(--secondary-color)';

        pdf.addEventListener('mouseover', () => {
          pdf.style.backgroundColor = 'var(--secondary-color)';
        });
        pdf.addEventListener('mouseout', () => {
          pdf.style.backgroundColor = 'transparent';
        });
      }
    }
  }

  changeLanguage(){
    this.LS.toggleLanguage();
  }

  onDownload() {
    const downloadComp = this.compFactoryResolver.resolveComponentFactory(DownloadComponent)

    const downloadRef = this.downloads.viewContainerRef;
    downloadRef.clear();
    const compref = downloadRef.createComponent(downloadComp);

    this.closeSub = compref.instance.close.subscribe( () => { 
      this.closeSub.unsubscribe();
      downloadRef.clear();
     })
  }
}

