var util = require('../../utils/numUpToCase.js')
//获取应用实例
var app = getApp()
Page({
  data: {
    orig: '0',
    word: '零元整',
    numberList:[7,8,9,4,5,6,1,2,3],
    wheight:500
  },
  //事件处理函数
  press(e) {
      // 处理不能再按的事件
      let t = this.data.orig.split('.');
      // 小数点重复
      if(t.length > 1 && e.target.dataset.num == '.') return null;
      // 小数点后面最多两位
      if(t.length > 1){
          if(t[1].length == 2) return null;
      }
      let orig = this.data.orig;
      if(orig.length == 13) return null;
      let newOrig = '';
      if(this.data.orig === '0' && e.target.dataset.num != '.'){
        newOrig = e.target.dataset.num.toString();
      }else{
        newOrig = this.data.orig + e.target.dataset.num.toString();
      }
      this.setData({
          'orig': newOrig
      })
      this.change();
  },
  change() {
      let newWord = util.Uppercase(this.data.orig);
      this.setData({
          'word': newWord
      })
  },
  ac(){
      this.setData({
          'orig': '0',
          'word': '零元整'
      })
  },
  back() {
      let orginArr = this.data.orig.split('');
      if(orginArr.length === 1){
          return this.ac();
      }
      orginArr.pop();
      this.setData({
          'orig': orginArr.join('')
      })
      this.change();
  },
  onLoad: function () {
    wx.getSystemInfo({
    success: (res)=> {
        this.setData({
            'wheight': res.windowHeight
        })
    }
    })
  }
})
