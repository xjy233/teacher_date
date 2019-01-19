// pages/detailed/detailed.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    repeat: ['不重复', '每天重复', '每周重复', '每月重复', '每年重复'],
    repeat_index: 0,
    isRuleTrue: true
  },
  gotoReminder: function () {
    wx.navigateTo({
      url: '/pages/remider/remider',
    })
  },
  handleRepeatChange: function (e) {
    this.setData({
      repeat_index: e.detail.value
    })
  },
  switchChange: function (e) {
    // console.log(e.detail.value)
    if (e.detail.value == false) {
      this.setData({
        isRuleTrue: false
      })
    } else {
      this.setData({
        isRuleTrue: true
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