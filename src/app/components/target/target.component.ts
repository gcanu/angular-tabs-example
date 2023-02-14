import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss']
})
export class TargetComponent implements OnInit, OnDestroy {
  @Input() clear: Subject<void> = new Subject<void>();

  private destroy$: Subject<void> = new Subject<void>();
  cleared: boolean = false;

  ngOnInit(): void {
    this.clear
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.cleared = true;
        setTimeout(() => {
          this.cleared = false;
        }, 2000);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
