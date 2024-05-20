import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  public get versionString() {
    return 'local';
  }

  public get hasVersionMismatch() {
    return false;
  }

  public get hasChangelogs() {
    return false;
  }

  public get latestLiveVersion() {
    return 'local';
  }

  public get changelogAllText() {
    return 'None';
  }

  constructor() {}

  public async init() {}
}
