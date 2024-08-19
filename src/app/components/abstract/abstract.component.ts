import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrl: './abstract.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractComponent implements OnDestroy {

    protected destroy$: Subject<void> = new Subject();

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
