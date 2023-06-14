import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  
  constructor() { }
  
  public saveTodayNewAttempt(attempt: []) {
    const todayAttempts: string[][] = this.getTodayAttempts();
    todayAttempts.push(attempt);
    // localStorage.setItem('attemps',);
  }

  public getTodayAttempts(): any {
    console.log(localStorage.getItem('attemps'));
  }
}
