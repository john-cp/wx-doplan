// pages/mine/mine.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //tabbar
    tabbar: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideTabBar();
    app.editTabbar();
  },

  
  addclick () {
    wx.request({
      url: 'https://www.baidu.com/img/baidu_85beaf5496f291521eb75ba38eacbd87.svg',
      data: {},
      method: 'GET',
      header: {
        'content-type': 'image/svg+xml'
      },
      success: function (res) {
        console.log(res)
      },
      fail: function (err) {
        console.log(err)
      }
    })
  }  
})