//今日の日付を取得
let today = new Date();

const week = ["日", "月", "火", "水", "木", "金", "土"];

//画面が読み込まれた際に関数を呼び出して、カレンダーを表示させる
window.onload = function(){
    Calendarheader(today);
    CalendarTable();
}

//headerの位置に～年～月を表示
function Calendarheader(today){
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var header = year + "年" + month + "月";
    document.getElementById("Header_year_month").textContent = header;
}

//カレンダーの作成
function CalendarTable(){
    const table = document.createElement("table");
    table.id = "calendartable";
    const thead = document.createElement("thead");
    const thead_tr = document.createElement("tr");
    for(let i = 0; i < week.length; i++){  //カレンダーの曜日部分の作成
        const thead_th = document.createElement("th");
        const textweek = document.createTextNode(week[i]);
        thead_th.appendChild(textweek);
        thead_tr.appendChild(thead_th);
    }
    thead.appendChild(thead_tr);
    table.appendChild(thead); 
    
    //カレンダーの作成に必要な情報
    var year = today.getFullYear(); //表示される年
    var month = today.getMonth(); //表示される月
    var startDayOfWeek = new Date(year, month , 1).getDay(); //月始めの曜日
    var monthOfEndDay = new Date(year, month +1, 0).getDate(); //月末日
    var countDay = 0; //日付
    
    //カレンダーの５行分の表示と、７列分の表示
    const tbody = document.createElement("tbody");
    tbody.id = "calendartbody";
    for(let t = 0; t < 6; t++){
        const tbody_tr = document.createElement("tr");
        for(let j = 0; j < week.length; j++){
            //１週目
            if(t == 0 && startDayOfWeek == j){
                const tbody_th = document.createElement("th");
                countDay++;
                const textday = document.createTextNode(countDay);
                tbody_th.appendChild(textday);
                tbody_tr.appendChild(tbody_th);  
            }else if(countDay != 0 && countDay < monthOfEndDay && t < 5){ //２週目から５週目まで
                const tbody_th = document.createElement("th");
                countDay++;
                const textday = document.createTextNode(countDay);
                tbody_th.appendChild(textday);
                tbody_tr.appendChild(tbody_th);
            }else if(t == 5 && countDay < monthOfEndDay){
                countDay++;
                var joinweek = document.getElementById("calendartbody");  
                var x = joinweek.rows[4];
                console.log(x);
                


               
            }else{ //取れてこない部分を空白で表示
                const tbody_td = document.createElement("th");
                const textday = document.createTextNode("");
                tbody_td.appendChild(textday);
                tbody_tr.appendChild(tbody_td);
            } 
            tbody.appendChild(tbody_tr);  
        }
    table.appendChild(tbody); 
    const calender = document.getElementById("calender");
    calender.appendChild(table);
    }
}

//表示されているカレンダーの情報をリセットする処理(これをやらないとボタンを押す度にカレンダーが増え続ける。)
function removeCalendar(){
    var calendartable = document.getElementById("calender");
    while(calendartable.firstChild){
        calendartable.removeChild(calendartable.firstChild);
        CalendarTable();
    }
}

//ボタンを押すたびに前年を表示する
function last_year(){
    today.setFullYear(today.getFullYear() - 1);
    Calendarheader(today);
    removeCalendar();
}

//ボタンを押すたびに来年を表示する
function next_year(){
    today.setFullYear(today.getFullYear() + 1);
    Calendarheader(today);
    removeCalendar();
}

//ボタンを押すたびに先月を表示する
function last_month(){
    today.setMonth(today.getMonth() - 1);
    Calendarheader(today);
    removeCalendar();
}

//ボタンを押すたびに来月を表示する
function next_month(){
    today.setMonth(today.getMonth() + 1);
    Calendarheader(today);
    removeCalendar();
}

//ボタンを押すたびに最初の～年～月に戻る
function reset_year_month(){
    today = new Date();
    Calendarheader(today);
    removeCalendar();
}