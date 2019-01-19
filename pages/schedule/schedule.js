// pages/schedule/schedule.js

var util = require('../../utils/util.js');

const MONTHS = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'June.', 'July.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: 0,
    inputShowed: false,
    inputVal: "",
    year: new Date().getFullYear(),      // 年份
    month: new Date().getMonth() + 1,    // 月份
    day: new Date().getDate(),
    str: MONTHS[new Date().getMonth()],  // 月份字符串

    demo1_days_style: [],
    demo2_days_style: [],
    demo4_days_style: [],
    demo5_days_style: [],
    demo6_days_style: [],

    // 课表
    currentIndex: 0,
    cardRightIn: false,
    cardLeftIn: false,
    times: [{
      name: '上午',
      class2: 'left2'
    }, {
      name: '郁莲',
      class2: ''
    }, {
      name: '张齐勋',
      class2: ''
    }, {
      name: '莫同',
      class2: ''
    }, {
      name: '午休',
      class2: 'left2'
    }, {
      name: '方跃坚',
      class2: ''
    }, {
      name: '莫同',
      class2: ''
    }, {
      name: '晚上',
      class2: 'left2'
    }, {
      name: '下班',
      class2: 'left2'
    }],
    len: 2,
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
      }],
      
    }],


    /*实验数据
    teacherdata:[
      {
        teachername:'莫同',
        morning: ['1', '2', '3', '4', '5', '6', '7'],
        afternoon: ['1', '2', '3', '4', '5', '6', '7'],
        evening: ['1', '2', '3', '4', '5', '6', '7']
      },
      {
        teachername: '方越坚',
        morning: ['1', '2', '3', '4', '5', '6', '7'],
        afternoon: ['1', '2', '3', '4', '5', '6', '7'],
        evening: ['1', '2', '3', '4', '5', '6', '7']
      }
    ],
*/

    month:12,

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

  //搜索框
  showInput: function () {

    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
    var that = this;
    var urlStr = app.globalData.BaseURL + '/beedata/getTeachers/';
    /*变量赋值*/
    wx.request({
      url: urlStr, //仅为示例，并非真实的接口地址
      data: util.json2Form({
        keyword:e.detail.value
      }),
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        //加载对应值
        that.setData({
          teachers: res.data
        })
      }
    })
  },
  

  /**/ 
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var time1 = util.formatTime2(new Date());
    this.getSchedule(time1);
  },

  //返回日程公示信息
  getSchedule: function (currunt_time_sta)  {
    var that = this;
    /*变量赋值*/
    wx.request({
      url: 'http://123.207.168.242/beeapi/beedata/getSchedule/', //仅为示例，并非真实的接口地址
      data: {
        //还未找到更简便写法，先写成这样,在后端再分解jason
        datajason: {
          name: ['莫同', '方越坚','郁莲'],
          currunt_time_sta: currunt_time_sta + '0:00:00'
        }
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        //加载对应值
        that.setData({
          teacherdata: res.data
        })
      }
    })

  }

  
})
