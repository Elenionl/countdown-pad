
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: { // 属性名
      type: String,
      value: '0',
      observer: '_didChangeText',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    value1: '0',
    value2: '0',
    animation1: undefined,
    animation2: undefined,

    screenWidth: wx.getSystemInfoSync().windowWidth,

    flipped: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _didChangeText(newValue, oldValue) {
      const that = this
      if (oldValue + '' === newValue + '') {
        return
      }
      const animation1 = wx.createAnimation({
        duration: 0,
        timingFunction: 'ease-in-out',
      })
      animation1.translateY(-66 * this.data.screenWidth / 750).step()
      const animation2 = wx.createAnimation({
        duration: 0,
        timingFunction: 'ease-in-out',
      })
      animation2.translateY(0).step()
      this.setData({
        value1: newValue,
        value2: oldValue,
        animation1: animation1.export(),
        animation2: animation2.export(),
      })
      setTimeout(() => {
        const animation1 = wx.createAnimation({
          duration: 800,
          timingFunction: 'ease-out',
        })
        animation1.translateY(66 * this.data.screenWidth / 750).step()
        const animation2 = wx.createAnimation({
          duration: 800,
          timingFunction: 'ease-out',
        })
        animation2.translateY(0).step()
        that.setData({
          value1: oldValue,
          value2: newValue,
          animation1: animation1.export(),
          animation2: animation2.export(),
          flipped: !this.data.flipped,
        })
      }, 50)
    }
  }
})
