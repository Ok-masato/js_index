function clock() {
    // 数字が1桁の場合、先頭に0を付ける
    var twoDigits = function(num){
        var digits
        if(num <10){
            digits="0"+num;
        }
        else digits=num;
        return digits;
    }

    // 曜日を表す各文字列の配列
    var weeks = new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");

    // 現在日時の取得
    var now = new Date();

    var year = now.getFullYear();
    var month = twoDigits(now.getMonth()+1);
    var day = twoDigits(now.getDate());
    var week = weeks[now.getDay()];
    var hour = twoDigits(now.getHours());
    var min = twoDigits(now.getMinutes());
    var sec = twoDigits(now.getSeconds());

    document.getElementById("clock_date").textContent = year + "/" + month + "/" + day + "(" + week + ")";
    document.getElementById("clock_time").textContent = hour + ":" + min + ":" + sec;
}
setInterval(clock, 1000);