class SnapshotSandbox {
  constructor() {
    this.modifyPropsMap = {};
  }

  active() {
    this.windowSnapShot = {};
    Object.keys(window).forEach((props) => {
      this.windowSnapShot[props] = window[props];
    });

    Object.keys(this.modifyPropsMap).forEach((props) => {
      window[props] = this.modifyPropsMap[props];
    });
  }

  inactive() {
    this.modifyPropsMap = {};
    Object.keys(window).forEach((props) => {
      if (window[props] !== this.windowSnapShot[props]) {
        this.modifyPropsMap[props] = window[props];
        window[props] = this.windowSnapShot[props];
      }
    });
  }
}
