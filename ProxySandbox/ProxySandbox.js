class ProxySandbox {
  constructor() {
    this.running = false;
    const fakeWindow = Object.create(null);
    this.proxy = new Proxy(fakeWindow, {
      get: (target, p, receiver) => {
        return !this.running ? window[p] : p in target ? target[p] : window[p];
      },
      set: (target, p, newValue, receiver) => {
        if (this.running) target[p] = newValue;
        return true;
      },
    });
  }

  active() {
    this.running = true;
  }

  inactive() {
    this.running = false;
  }
}
