// miniprogram/pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  loginTap: function (e) {
    wx.switchTab({
      url: '../../pages/index/index',
      success: function (res) {
        
      },
      fail: function (res) {
        
      }
    })
  }
})