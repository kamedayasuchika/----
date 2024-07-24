//今日の日付を取得
let today = new Date();

const week = ["日", "月", "火", "水", "木", "金", "土"];

//画面が読み込まれた際に関数を呼び出して、～年～月を表示させる
window.onload = function(){
    Calendar(today);
    CalendarTable();
}

//headerの位置に～年～月を表示
function Calendar(today){
    var year = today.getFullYear();

    var month = today.getMonth() + 1;

    var header = year + "年" + month + "月";

    document.getElementById("Header_year_month").textContent = header;

    CalendarTable(year,month)
}


//曜日テーブルの作成
function CalendarTable(year,month){
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const thead_tr = document.createElement("tr");
    for(let i = 0; i < week.length; i++){
        const thead_th = document.createElement("th");
        const textweek = document.createTextNode(week[i]);
        if(textweek.data == "日"){
            thead_th.classList.add("sunday");
        }
        thead_th.appendChild(textweek);
        thead_tr.appendChild(thead_th);
    }
    thead.appendChild(thead_tr);
    table.appendChild(thead); 
    
    //日付
    const tbody = document.createElement("tbody");

    var year = today.getFullYear();
    var month = today.getMonth();
    var startDayOfWeek = new Date(year, month , 1).getDay();
    var monthOfEndDay = new Date(year, month, 0).getDate();
    var countDay = 0;

    //５行分の表示と、７列分の表示
    for(let t = 0; t < 5; t++){
        const tbody_tr = document.createElement("tr");
        for(let j = 0; j < week.length; j++){
            //１週目は１日～その週の土曜日まで　
            if(t == 0 && startDayOfWeek == j){
                const tbody_th = document.createElement("th");
                countDay++;
                const textday = document.createTextNode(countDay);
                tbody_th.appendChild(textday);
                tbody_tr.appendChild(tbody_th);  
            }else if(countDay != 0 && countDay < monthOfEndDay){
                const tbody_th = document.createElement("th");
                countDay++;
                const textday = document.createTextNode(countDay);
                tbody_th.appendChild(textday);
                tbody_tr.appendChild(tbody_th);
            }else{ //取れてこない部分を空白で表示
                const tbody_td = document.createElement("td");
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





//ボタンを押すたびに前年を表示する
function last_year(){
    today.setFullYear(today.getFullYear() - 1);
    Calendar(today);
}

//ボタンを押すたびに来年を表示する
function next_year(){
    today.setFullYear(today.getFullYear() + 1);
    Calendar(today);
}

//ボタンを押すたびに先月を表示する
function last_month(){
    today.setMonth(today.getMonth() - 1);
    Calendar(today);
}

//ボタンを押すたびに来月を表示する
function next_month(){
    today.setMonth(today.getMonth() + 1);
    Calendar(today);
}

//ボタンを押すたびに最初の～年～月に戻る
function reset_year_month(){
    today = new Date();
    Calendar(today);
}