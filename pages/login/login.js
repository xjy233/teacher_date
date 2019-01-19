// pages/login/login.js
var app = getApp();
var util = require('../../utils/util.js');
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',
    sex: 0,
    radios: [
      {
        label: '学生',
        value: 'student',
      },
      {
        label: '教师',
        value: 'teacher',
      },
    ]
  },
  check(e) {
    console.log(e)
    var that = this;
    var sex = e.currentTarget.dataset.index
    that.setData({
      sex: sex
    })
  },

  // 获取输入账号
  nameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },

  // 获取输入密码
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录
  login: function () {
    var userName = this.data.username;
    var password = this.data.password;
    var sex = this.data.sex;
    var that = this;
    if (userName.length == 0 || password.length == 0) {
      wx.showToast({
        title: '不能为空',
        icon: 'loading',
        duration: 1000
      })
      return;
    }else{
    //加载提示框
    wx.showToast({
      title: '数据加载中',
      icon: 'loading',
      duration: 10000
    })
    var urlStr = app.globalData.BaseURL + '/beedata/login/';
    wx.request({
      method: "POST",
      url: urlStr, //仅为示例，并非真实的接口地址
      
      data: util.json2Form({
        username: userName,
        password: password,
        role:sex
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        wx.hideLoading({
          success: () => {
            console.log(res.data)
          }
        });
       
        var code = res.statusCode;
        console.log(res);
        console.log(code);
        if (code === 200) {
          // 后台传递过来的值
          var adminUserViewId = res.data[0].adminUserViewId;
          var token = res.data[0].token;
          // 设置全局变量的值
          app.globalData.adminUserViewId = res.data[0].adminUserViewId;
          app.globalData.token = res.data[0].token;
          // 将token存储到本地
          wx.setStorageSync('adminUserViewId', adminUserViewId);
          wx.setStorageSync('token', token);
          console.log("登录成功的adminUserViewId：" + adminUserViewId);
          console.log("登录成功的token：" + token);
          // 切换到首页
          wx.switchTab({
            url: '/pages/schedule/schedule'
          })
        } else {
          wx.showToast({
            title: '登录失败',
            icon: 'loading',
            duration: 1000
          });
        }
      },
      fail: function () {
        wx.hideLoading({
          success: () => {
            console.log("登录失败")
          }
        });
        console.log("登录失败");
        wx.showToast({
          title: '登录失败',
          icon: 'loading',
          duration: 1000
        });
      }
    })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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