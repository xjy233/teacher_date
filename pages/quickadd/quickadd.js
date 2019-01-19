// pages/quickadd/quickadd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //日程选项卡
    richeng_hover: 0,
    richeng: [{
      'rc_nr': '本部'
    }, {
      'rc_nr': '大兴'
    }, {
      'rc_nr': '2214'
    }],

    // 日程表
    currentIndex: 0,
    cardRightIn: false,
    cardLeftIn: false,
    len: 2,
    times: [{
      name: '上午',
      class2: ''
    }, {
      name: '午休',
      class2: ''
    }, {
      name: '下午',
      class2: ''
    }, {
      name: '晚上',
      class2: ''
    }],
    week_richeng: [{
      index: 1,
      week_day: [{
        week: '一',
        day: 16
      }, {
        week: '二',
        day: 17,
        k: 'top-text2'
      }, {
        week: '三',
        day: 18
      }, {
        week: '四',
        day: 19
      }, {
        week: '五',
        day: 20
      }, {
        week: '六',
        day: 21
      }, {
        week: '日',
        day: 22
      }]
    }],
    sw_rc: [{
      'rc_text':"1",
      'state': 0
    }, {
        'rc_text': "1",
        'state': 1
      }, {
        'rc_text': "1",
        'state': 1
      }, {
        'rc_text': "1",
        'state': 0
      }, {
        'rc_text': "1",
        'state': 0
      }, {
        'rc_text': "1",
        'state': 0
      }, {
        'rc_text': "1",
        'state': 0
      }],
    zw_rc: [{
      'rc_text': "1",
      'state': 1
    }, {
      'rc_text': "1",
      'state': 0
    }, {
      'rc_text': "1",
      'state': 1
    }, {
      'rc_text': "1",
      'state': 0
    }, {
      'rc_text': "1",
      'state': 0
    }, {
      'rc_text': "1",
      'state': 0
    }, {
      'rc_text': "1",
      'state': 0
    }],
    xw_rc: [{
      'rc_text': "1",
      'state': 0
    }, {
      'rc_text': "1",
      'state': 0
    }, {
      'rc_text': "1",
      'state': 0
    }, {
      'rc_text': "1",
      'state': 0
    }, {
      'rc_text': "1",
      'state': 0
    }, {
      'rc_text': "1",
      'state': 0
    }, {
      'rc_text': "1",
      'state': 1
    }],
    ws_rc: [{
      'rc_text': "1",
      'state': 0
    }, {
      'rc_text': "1",
      'state': 1
    }, {
      'rc_text': "1",
      'state': 1
    }, {
      'rc_text': "1",
      'state': 0
    }, {
      'rc_text': "1",
      'state': 0
    }, {
      'rc_text': "1",
      'state': 1
    }, {
      'rc_text': "1",
      'state': 0
    }],
    'rc_nr': '本部',
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  xuanze1: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.key;
    if (this.data.sw_rc[index].state == 1) {
      this.data.sw_rc[index].state = 0;
      this.data.sw_rc[index].rc_text = '+';
    } else if (this.data.sw_rc[index].state == 0) {
      this.data.sw_rc[index].state = 1;
      this.data.sw_rc[index].rc_text = this.data.rc_nr;
    }
    console.log(this.data.rc_nr);
    this.setData({
      sw_rc: this.data.sw_rc,
    });
  },
  xuanze2: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.key;
    if (this.data.zw_rc[index].state == 1) {
      this.data.zw_rc[index].state = 0;
      this.data.zw_rc[index].rc_text = '+';
    } else if (this.data.zw_rc[index].state == 0) {
      this.data.zw_rc[index].state = 1;
      this.data.zw_rc[index].rc_text = this.data.rc_nr;
    }
    console.log(this.data.rc_nr);
    this.setData({
      zw_rc: this.data.zw_rc,
    });
  },

  xuanze3: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.key;
    if (this.data.xw_rc[index].state == 1) {
      this.data.xw_rc[index].state = 0;
      this.data.xw_rc[index].rc_text = '+';
    } else if (this.data.xw_rc[index].state == 0) {
      this.data.xw_rc[index].state = 1;
      this.data.xw_rc[index].rc_text = this.data.rc_nr;
    }
    console.log(this.data.rc_nr);
    this.setData({
      xw_rc: this.data.xw_rc,
    });
  },

  xuanze4: function (e) {
    var that = this;
    var index = e.currentTarget.dataset.key;
    if (this.data.ws_rc[index].state == 1) {
      this.data.ws_rc[index].state = 0;
      this.data.ws_rc[index].rc_text = '+';
    } else if (this.data.ws_rc[index].state == 0) {
      this.data.ws_rc[index].state = 1;
      this.data.ws_rc[index].rc_text = this.data.rc_nr;
    }
    console.log(this.data.rc_nr);
    this.setData({
      ws_rc: this.data.ws_rc,
    });
  },
  richeng: function (e) {
    var that = this;
    var index = e.target.dataset.key;
    this.data.rc_nr = this.data.richeng[index].rc_nr;
    that.setData({
      richeng_hover: index,
      rc_nr: this.data.rc_nr
    });
    console.log(index);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})