new Vue({
    el: "#app",
    //----[htmlのテキスト情報]----//
    data: {
        heading: "現在の天気予報",
    },

    methods: {
        updateTime: function() { //現在の日付・時刻を取得 
            let time = new Date()
            return time;
        }
    }
})