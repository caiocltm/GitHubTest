import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  static optionsShowEmitter = new EventEmitter();

  constructor() { }

  optionsChangeStatus(status: boolean) {
    OptionsService.optionsShowEmitter.emit(status);
  }
}
