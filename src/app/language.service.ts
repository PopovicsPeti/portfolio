import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private isHungarianSubject = new BehaviorSubject<boolean>(false);

  get isHungarianLanguage$(): Observable<boolean> {
    return this.isHungarianSubject.asObservable();
  }

  get isHungarianLanguage(): boolean {
    return this.isHungarianSubject.value;
  }

  toggleLanguage(): void {
    this.isHungarianSubject.next(!this.isHungarianSubject.value);
  }
}
