//今日の日付を取得
var today = new Date();
console.log(today);

//画面が読み込まれた際に関数を呼び出して、～年～月を表示させる
window.onload = function(){
    CalendarHeader(today);
    CalendarTable();
}

//headerの位置に～年～月を表示
function CalendarHeader(today){
    var year = today.getFullYear();

    var month = today.getMonth() + 1;

    var header = year + "年" + month + "月";

    document.getElementById("Header_year_month").textContent = header;
}

//ボタンを押すたびに前年を表示する
function last_year(){
    today.setFullYear(today.getFullYear() - 1);
    CalendarHeader(today);
}

//ボタンを押すたびに来年を表示する
function next_year(){
    today.setFullYear(today.getFullYear() + 1);
    CalendarHeader(today);
}

//ボタンを押すたびに先月を表示する
function last_month(){
    today.setMonth(today.getMonth() - 1);
    CalendarHeader(today);
}

//ボタンを押すたびに来月を表示する
function next_month(){
    today.setMonth(today.getMonth() + 1);
    CalendarHeader(today);
}

//ボタンを押すたびに最初の～年～月に戻る
function reset_year_month(){
    today = new Date();
    CalendarHeader(today);
}

const week = ["日", "月", "火", "水", "木", "金", "土"];

//テーブルの作成
function CalendarTable(){
    const html_table = document.createElement("table");
    const html_thead = document.createElement("thead");
    const html_tr = document.createElement("tr");
    for(let i = 0; i < week.length; i++){
        const html_th = document.createElement("th");
        const text = document.createTextNode(week[i]);
        if(text.data == "日"){
            html_th.classList.add("sunday");
        }
        html_th.appendChild(text);
        html_tr.appendChild(html_th);
    }
    html_thead.appendChild(html_tr);
    html_table.appendChild(html_thead);  
    const calender = document.getElementById("calender");
    calender.appendChild(html_table);
}
