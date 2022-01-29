new Vue({
    el: "#app",

    //----[htmlのテキスト情報]----//
    data: {
        heading: "現在時間",
        time: '',
        // url: "https: //map.yahooapis.jp/weather/V1/place?coordinates=139.732293,35.663613&appid=",
        // appId: "dj00aiZpPVh2N3kzZUxwelF5biZzPWNvbnN1bWVyc2VjcmV0Jng9ZDM-"
    },

    methods: {
        //----[現在の日付・時刻を取得処理]----//
        updateTime: function() {
            let current = new Date()
            this.time = current.getHours() + ':' + current.getMinutes() + ':' + current.getSeconds();
        },

        //----[天気情報]----//
        weather: function() {

        }
    },
    //----[秒数の追加処理]----//
    mounted: function() {
        return setInterval(this.updateTime, 1000);
    }

})