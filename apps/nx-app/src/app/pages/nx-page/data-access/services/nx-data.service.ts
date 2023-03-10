import {Injectable} from '@angular/core'
import {BehaviorSubject, Observable, of} from 'rxjs'
import {NxDataEntity} from '../models/nx-data.models'
import {mockDb} from '../../utils/database.mock'

@Injectable({
  providedIn: 'root',
})
export class NxDataService {
  private readonly mockNxDataBehaviorSubject: BehaviorSubject<NxDataEntity[]>
  private readonly mockNxData$: Observable<NxDataEntity[]>

  constructor() {
    this.mockNxDataBehaviorSubject = new BehaviorSubject<NxDataEntity[]>(mockDb.nxData)
    this.mockNxData$ = this.mockNxDataBehaviorSubject.asObservable()
  }

  /**
   * Get the NxData from the mock database
   *
   * Simulate http.get()
   *
   * @return An observable with all the data
   */
  getNxData(): Observable<NxDataEntity[]> {
    return this.mockNxData$
  }

  /**
   * Add a NxData to the mock database
   *
   * Simulate http.post()
   *
   * @param newNxData The new NxData to add
   * @return An observable of the new data
   */
  addNxData(newNxData: NxDataEntity): Observable<NxDataEntity> {
    const currentData = this.mockNxDataBehaviorSubject.value
    if (currentData.find((nxData: NxDataEntity) => newNxData.id === nxData.id)) throw new Error('ERROR')

    this.mockNxDataBehaviorSubject.next([...this.mockNxDataBehaviorSubject.value, newNxData])

    return of(newNxData)
  }
}
