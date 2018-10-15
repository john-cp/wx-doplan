var Reg = require("../../common/js/RegExr.js");
Page({
  data: {
    steps: [
      {
        text: '',
        desc: '账号信息'
      },
      {
        text: '',
        desc: '创建或加入企业'
      }
    ],

    activeStep: 0,
    phone: '',
    tips_phone: '',
    verCode: '',
    tips_verCode: '',
    relName: '',
    tips_relName: '',
    password: '',
    tips_password: '',
    password2: '',
    tips_password2: '',
    btn_text: '下一步',
    
    active_tab: 0,
    company: '',
    tips_company: '',
    industry: ['美国', '中国', '巴西', '日本'],
    index: -1,
    add: '',
    tips_add: ''
  },

  onLoad() {

  },

  inputFocus ({ target }) {
    var obj = {},
        text = 'tips_' + target.dataset.text;
    obj[text] = '';
    this.setData(obj)  
  },

  input_change ({detail, target}) {
    var text = target.dataset.text,
    obj = {};
    obj[text] = detail;
    this.setData(obj);
  },

  getVerCode () {
    if (!this.data.phone) {
      this.setData({ tips_phone: '请输入手机号' })
      return
    } else if (!Reg.phone.test(this.data.phone)) {
      this.setData({ tips_phone: '手机号格式有误' })
      return
    } 
  },

  goback () {
    this.setData({
      activeStep: 0,
      btn_text: '下一步'
      });
  },

  nextStep ({ target }) {
    if(target.dataset.text == '下一步') {  
      // if (!this.data.phone) {
      //   this.setData({ tips_phone: '请输入手机号' })
      //   return
      // } else if (!Reg.phone.test(this.data.phone)) {
      //   this.setData({ tips_phone: '手机号格式有误' })
      //   return
      // } 

      // if (!this.data.verCode) {
      //   this.setData({ tips_verCode: '请输入验证码'})
      //   return
      // }

      // if (!this.data.relName) {
      //   this.setData({ tips_relName: '请输入验真实姓名' })
      //   return
      // }

      // if (!this.data.password) {
      //   this.setData({ tips_password: '请输入密码' })
      //   return
      // }

      // if (!this.data.password2) {
      //   this.setData({ tips_password2: '请再次输入密码' })
      //   return
      // } else if (this.data.password != this.data.password2) {
      //   this.setData({ tips_password2: '密码有误，请重新输入' })
      //   return
      // }

      this.setData({
        activeStep: 1,
        btn_text: '创建企业' 
      })
    }
  },

  bindPickerChange (e) {
    this.setData({
      index: e.detail.value
    })
  },

  tabChange ({detail}) {
    var text = detail.index == 0 ? '创建企业' : '加入企业';
    this.setData({        
      btn_text: text
    })
  }
});
