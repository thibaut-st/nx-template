import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class NxServiceService {
  subjectNumber: BehaviorSubject<number>
  number$: Observable<number>

  constructor() {
    this.subjectNumber = new BehaviorSubject<number>(5)
    this.number$ = this.subjectNumber.asObservable()
  }
}
