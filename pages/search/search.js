// pages/search/search.js

var util = require('../../utils/util.js');
const MONTHS = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'June.', 'July.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    year: new Date().getFullYear(),      // 年份
    month: new Date().getMonth() + 1,    // 月份
    day: new Date().getDate(),
    str: MONTHS[new Date().getMonth()],  // 月份字符串
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //得到2019-1-1 这样的年月日
    var time1 = util.formatTime2(new Date());
    this.getSchedule(time1);
    // 月份
    var month = new Date().getMonth() + 1;
    //计算星期
    let time = new Date();
    let date = util.getDates(7, time);
    //打开页面加载
    this.setData({
      month: month,
      week_richeng: [{
        index: 1,
        week_day: [{
          week: date[0].week,
          day: date[0].day,
          k: 'top-text2'
        }, {
          week: date[1].week,
          day: date[1].day
        }, {
          week: date[2].week,
          day: date[2].day
        }, {
          week: date[3].week,
          day: date[3].day
        }, {
          week: date[4].week,
          day: date[4].day
        }, {
          week: date[5].week,
          day: date[5].day
        }, {
          week: date[6].week,
          day: date[6].day
        }]
      }]
    });
  },

  //获取当前滑块的index
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;

    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
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