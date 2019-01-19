// pages/addschedule/addschedule.js
var util = require('../../utils/util.js');

/**/
var teacher_id = 102;
var name = '方越坚';
var site = '大兴';
var classes = '上课';
var content = '';
var timeStart = 0;
var timeDateStart = 0;
var timeTimeStart = 0;
var timeEnd = 0;
var timeDateEnd = 0;
var timeTimeEnd = 0;
var zao_zhong_wan = '';
const categories = ['上课', '工作', '学习', '娱乐', '运动', '纪念日', '其他'];
const sitelist = ['大兴', '本部', '其它'];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    levels: ['紧急且重要', '重要不紧急', '紧急不重要', '不紧急不重要'],
    categories: ['上课', '工作', '学习', '娱乐', '运动', '纪念日','其他'],
    repeat: ['不重复','每天重复','每周重复','每月重复','每年重复'],
    site: ['大兴','本部','其它（请在内容中补充完整）'],
    site_index: 0,
    levels_index: 0,
    categories_index:0,
    repeat_index:0,
    isRuleTrue:true,
  },

  //修改地点
  handsiteChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    site = sitelist[e.detail.value];
    this.setData({
      site_index: e.detail.value
    })
  },
  //修改级别
  handleLevelChange: function (e) {
    this.setData({
      levels_index: e.detail.value
    })
  },

  handleRepeatChange: function (e) {
    this.setData({
      repeat_index: e.detail.value
    })
  },

  //修改类别
  handleCategoriesChange: function (e) {
    classes = categories[e.detail.value];
    this.setData({
      categories_index: e.detail.value
    })
  },

  gotoReminder:function(){
    wx.navigateTo({
      url: '/pages/remider/remider',
    })
  },
  //修改日程内容
  handleDescChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    content = e.detail.value;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    
    //注意使用下面无法给timeStart传入值，我也不知道为啥
    // var currDate = util.formatTime2(new Date());

    // 调用函数时，传入new Date()参数，返回值是日期和时间
    timeDateStart = util.formatTime2(new Date());
    timeTimeStart = util.formatTime3(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      currDate: timeDateStart,
      currTime: timeTimeStart,
      isRuleTrue :true
    });
    timeStart = timeDateStart + ' ' + timeTimeStart;
    
    if (new Date(timeDateStart + ' ' + '00:00:00') <= timeStart && timeStart < new Date(timeDateStart + ' ' + '12:00:00')){
      console.log('上午');
      zao_zhong_wan = '上午';  
    } else if (new Date(timeDateStart + ' ' + '12:00:00') <= timeStart && timeStart < new Date(timeDateStart + ' ' + '18:00:00')){
      console.log('中午');
      zao_zhong_wan = '中午';
    }else{
      console.log('晚上');
      zao_zhong_wan = '晚上';
    }

    that.getLocation();
  },

  //开始时间
  handleBeginDateChange(e) {
    timeDateStart = e.detail.value;
    this.setData({
      beginDate: e.detail.value
    })
  },

  handleBeginTimeChange(e) {
    timeTimeStart = e.detail.value;
    this.setData({
      beginTime: e.detail.value
    })
  },

  //结束时间
  handleEndDateChange(e) {
    timeDateEnd = e.detail.value;
    this.setData({
      endDate: e.detail.value
    })

  },

  handleEndTimeChange(e) {
    timeTimeEnd = e.detail.value;
    this.setData({
      endTime: e.detail.value
    })
  },

  //提交
  handleSaveToast: function() {
    timeStart = timeDateStart + ' ' + timeTimeStart;  /*中间必须有一个空格*/ 
    timeEnd = timeDateEnd + ' ' + timeTimeEnd;
    //加入早中晚的判断
    if (new Date(timeDateStart + ' ' + '00:00:00') <= timeStart && timeStart < new Date(timeDateStart + ' ' + '12:00:00')) {
      console.log('上午');
      zao_zhong_wan = '上午';
    } else if (new Date(timeDateStart + ' ' + '12:00:00') <= timeStart && timeStart < new Date(timeDateStart + ' ' + '18:00:00')) {
      console.log('中午');
      zao_zhong_wan = '中午';
    } else {
      console.log('晚上');
      zao_zhong_wan = '晚上';
    }
    util.insertSchedule(site, classes, content, timeStart, timeEnd, zao_zhong_wan);
    wx.showToast({
      title: '已完成',
      icon: 'success',
      duration: 1000
    });
  },
  


  /**
   * 点击开关按钮
   */
  switchChange: function (e) {
    // console.log(e.detail.value)
    if (e.detail.value==false){
      this.setData({
        isRuleTrue: false
      })
    }else{
      this.setData({
        isRuleTrue: true
      })
    }
  },

  
})

