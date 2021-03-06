//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '小哥哥小姐姐，我想撩你，可以教我吗？',
    userInfo: {},
    hasUserInfo: false,
    genderSelected: null,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  clickMe: function(){
    if (this.data.hasUserInfo == true){
      wx.navigateTo({
        url: '../gender/gender'
      })
    } else {
      wx.showModal({
        title: '请问你是？',
        content: '请先允许咱获取您的信息哟！\r\n（不听不听，王八念经...）',
        confirmText: "好的哟~",
        showCancel: false
      })
    }
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
