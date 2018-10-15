// miniprogram/pages/login/login.js
Page({
  data: {
    username: '',
    password: '',
    checked: true,
    tips_password:'',
    tips_name:''
  },

  onLoad: function (options) {

  },
  
  username_change({ detail }) {
    this.setData({ username: detail });
  },

  password_change({ detail }) {
    this.setData({ password: detail });
  },

  input({ target }){
    if (target.dataset.text == 'name') {
      this.setData({ tips_name: '' });
    } else {
      this.setData({ tips_password: '' });
    }
  },

  onChange({ detail }) {
    this.setData({ checked: detail });
  },

  loginTap: function (e) {
    console.log(this.data)
    if (!this.data.username) {
      this.setData({tips_name: '请输入用户名！'})
      return
    }
    if (!this.data.password) {
      this.setData({tips_password: '请输入密码！'})
      return
    }
    wx.switchTab({
      url: '../../pages/index/index',
      success: function (res) {
        
      },
      fail: function (res) {
        
      }
    })
  }
})