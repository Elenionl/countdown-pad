Component({
  properties: {
    /**
     * Time in ms to display.
     */
    time: {
      type: Number,
      value: 0,
      observer: '_didReceiveTime',
    },

    /**
     * Mark of date will count down automaticly.
     */
    autoCount: {
      type: Boolean,
      value: false,
    },
  },

  data: {
    _time: 0,
    hour1: 0,
    hour2: 0,
    minute1: 0,
    minute2: 0,
    second1: 0,
    second2: 0,
    timer: undefined,
  },

  lifetimes: {
    attached() {
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * Calculate display of time
     * @param {Number} time time in millisecond
     */
    _didReceiveTime(time) {
      this.setData({
        _time: time,
      })
      let hour1 = 0
      let hour2 = 0
      let minute1 = 0
      let minute2 = 0
      let second1 = 0
      let second2 = 0
      if (this.data._time > 0) {
        const inSecond = Math.floor(this.data._time / 1000)
        const second = inSecond % 60
        const inMinute = Math.floor(this.data._time / 1000 / 60)
        const minute = inMinute % 60
        let hour = Math.floor(this.data._time / 1000 / 60 / 60)
        if (hour > 99) {
          hour = 99
        }
        hour1 = Math.floor(hour / 10)
        hour2 = hour % 10
        minute1 = Math.floor(minute / 10)
        minute2 = minute % 10
        second1 = Math.floor(second / 10)
        second2 = second % 10
      }
      if (!this.data.timer && this.data.autoCount) {
        this._startTimer()
      }
      this.setData({
        hour1,
        hour2,
        minute1,
        minute2,
        second1,
        second2,
      })
    },
    _startTimer() {
      const that = this
      const timer = setInterval(() => {
        if (that.data.autoCount) {
          that._countDown()
        }
      }, 1000)
      this.setData({
        timer,
      })
    },
    _countDown() {
      this._didReceiveTime(this.data._time - 1000)
    }
  }
})
