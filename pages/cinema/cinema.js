//cinima.js
Page({
    data: {

        scrollHeight: 0,

        loading: true,
        userInfo: {}
    },
    onLoad: function () {
        console.log('onLoad')
        const that = this
        
        

        this.loadCinema();
    },

    // 滑动到底部，加载更多
    lower(e){
        this.setData({
            loading: true
        })
        this.loadCinema()
    },
    //加载影院
    loadCinema(){
        const that = this;
        wx.request({
            url: 'https://m.maoyan.com/cinemas.json',
            method: "GET",
            header: {
                'content-type': 'application/json'
            },
            success(res){
                console.log(res);
            }
        })
    },
    bindDetail(e){
        const id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: 'detail/detail?id=' + id
        })
    }
})
