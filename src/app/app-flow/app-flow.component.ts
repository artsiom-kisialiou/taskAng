import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { of, merge, timer, Subject, interval } from 'rxjs';
import { tap, map, takeUntil, exhaustMap, skipUntil } from 'rxjs/operators';

interface Flow {
  streamNumber: number;
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class FlowReqService {
  createOther(flow: Flow) {
    return of(flow);
  }

  createFlow(streamNumber: number, time: number) {
    const source = interval(time);
    return source.pipe(
      map(value => {
        return { streamNumber: streamNumber, id: value + 1 };
      }),
    );
  }
}

@Component({
  selector: 'app-app-flow',
  templateUrl: './app-flow.component.html',
  styleUrls: ['./app-flow.component.scss']
})
export class AppFlowComponent implements OnInit, OnDestroy {

  private completed = new Subject<boolean>();
  public firstArr = [];
  public secondArr = [];
  public thirdArr = [];
  public sumArr: number;

  constructor(private flowReqServ: FlowReqService) { }

  generateFlow() {
    merge(
      this.flowReqServ
        .createFlow(1, 1000)
        .pipe(tap((flow: Flow) => console.log('flow 1', this.firstArr.push(flow.id)))),
      this.flowReqServ.createFlow(2, 1500).pipe(
        skipUntil(timer(10000)),
        tap((flow: Flow) => console.log('flow 2', this.secondArr.push(flow.id))),
      ),
      this.flowReqServ.createFlow(3, 2000).pipe(
        skipUntil(timer(20000)),
        tap((flow: Flow) => console.log('flow 3', this.thirdArr.push(flow.id))),
      ),
    )
      .pipe(
        takeUntil(timer(30000)),
        exhaustMap((flow: Flow) => this.flowReqServ.createOther(flow)),
        tap((flow: Flow) => (this.sumArr += flow.id)),
        takeUntil(this.completed),
      )
      .subscribe((flow: Flow) => console.log('flow 4', flow));
  }

  ngOnInit() {
    this.sumArr = 0;
  }
  ngOnDestroy() {
    this.completed.next(true);
    this.completed.complete();
  }

}
