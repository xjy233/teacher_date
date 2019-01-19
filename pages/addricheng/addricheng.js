// pages/addricheng/addricheng.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    levels: ['紧急且重要', '重要不紧急', '紧急不重要', '不紧急不重要'],
    categories: ['上课', '工作', '学习', '娱乐', '运动', '纪念日', '其他'],
    repeat: ['不重复', '每天重复', '每周重复', '每月重复', '每年重复'],
    levels_index: 0,
    categories_index: 0,
    repeat_index: 0,
    isRuleTrue:true
  },

  gotoReminder: function () {
    wx.navigateTo({
      url: '/pages/remider/remider',
    })
  },
  handleLevelChange: function (e) {
    this.setData({
      levels_index: e.detail.value
    })
  },
  handleCategoriesChange: function (e) {
    this.setData({
      categories_index: e.detail.value
    })
  },
  handleRepeatChange: function (e) {
    this.setData({
      repeat_index: e.detail.value
    })
  },

  handleSaveTap: function () {
    wx.showToast({
      title: '已完成',
      icon: 'success',
      duration: 1000
    });
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
  },
  /**
   * 点击开关按钮
   */
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
})