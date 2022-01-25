new Vue({
    el: "#app",

    //----[htmlのテキスト情報]----//
    data: {
        heading: "現在時間",
        time: ''
    },

    //----[現在の日付・時刻を取得処理]----//
    methods: {
        updateTime: function() {
            let current = new Date()
            this.time = current.getHours() + ':' + current.getMinutes() + ':' + current.getSeconds();
        }
    },

    //----[秒数の追加処理]----//
    mounted: function() {
        return setInterval(this.updateTime, 1000);
    }
})