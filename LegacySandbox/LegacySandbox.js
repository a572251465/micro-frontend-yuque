class LegacySandbox {
  constructor() {
    this.modifyPropsMap = new Map();
    this.addedPropsMap = new Map();
    this.currentPropsMap = new Map();

    const fakeWindow = Object.create(null);
    const proxy = new Proxy(fakeWindow, {
      get: (target, p, receiver) => {
        return window[p];
      },
      set: (target, p, newValue, receiver) => {
        if (!window.hasOwnProperty(p)) {
          this.addedPropsMap.set(p, newValue);
        } else {
          this.modifyPropsMap.set(p, window[p]);
        }
        this.currentPropsMap.set(p, newValue);
        window[p] = newValue;
      },
    });
    this.proxy = proxy;
  }

  setWindowProp(key, value) {
    if (value === undefined) {
      delete window[key];
    } else {
      window[key] = value;
    }
  }

  active() {
    this.currentPropsMap.forEach((value, key) => {
      this.setWindowProp(key, value);
    });
  }

  inactive() {
    // 将修改的属性 还原
    this.modifyPropsMap.forEach((value, key) => {
      this.setWindowProp(key, value);
    });
    // 将添加的属性 进行删除
    this.addedPropsMap.forEach((value, key) => {
      this.setWindowProp(key, undefined);
    });
  }
}
