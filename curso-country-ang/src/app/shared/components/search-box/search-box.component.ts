import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debounce : Subject<string> = new Subject<string>();
  private debounceSuscription ?: Subscription;

  @Input()
  public placeholder : string = '';

  @Input()
  public initialValue : string = '';

  @Output()
  onvalue = new EventEmitter<string>();

  @Output()
  onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debounceSuscription = this.debounce
    .pipe(
      debounceTime(800)
    )
    .subscribe( value => {
      this.onDebounce.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.debounceSuscription?.unsubscribe();
  }

  emitValue(value:string):void {
    this.onvalue.emit(value);
  }

  OnKeyPress(searchTerm:string) {
    this.debounce.next(searchTerm);
  }
}
