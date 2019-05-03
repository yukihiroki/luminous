

 var minamoto={
	 name:"源 しいな", english_name:Shina Minamoto
	 sun:true, mon:true, tue:true, wed:true, thu:true, fri:true, sat:true, 
	 in_sun:"6:00", in_mon:"6:00", in_tue:"6:00", in_wed:"6:00", in_thu:"6:00", in_fri:"6:00", in_sat:"6:00", 
	 out_sun:"Last",  out_mon:"Last",  out_tue:"Last",  out_wed:"Last",  out_thu:"Last",  out_fri:"Last",  out_sat:"Last"
 }
 
 
 
 
 
 /*index.htmlの場合
 今日の曜日を取得
 その曜日がtrueならDOM追加
 name,insun,outsun
 englishnameはspanを入れたいから
 english_name.slice( 0, 1)を
 
 */
 /*schedule.htmlの場合
 indexと同じ処理＋明日の処理
 ＋全曜日でtrueならば〇、falseならば×を指定の場所に返す
 
 */
 
 
 //パスをスライスしてキャスト名を取得。そのキャスト名のプロパティをshift_inとかにいれればいい
 var castname
 if(path.slice( 0, 6)=="casts/"){
	 castname = (path.slice( 0, 6)).slice(0,-5);
 }
castname.sun;

//閲覧しているpathの取得
				var path = location.pathname;
				var shift, shift_in, shift_out = new Array(7);
				shift = [true, true, true, true, true, true, true];
				shift_in = ["6:00", "6:00", "6:00", "6:00", "6:00", "61:00", "6:00"];
				shift_out = ["Last", "Last", "Last", "Last", "Last", "Last", "Last"];
		//pathによってどのキャストかを判断。そのキャストのシフトを出力
		switch(path) {
			case "casts/minamoto.html":
				shift = [true, true, true, true, true, true, true];
				shift_in = ["6:00", "6:00", "6:00", "6:00", "6:00", "61:00", "6:00"];
				shift_out = ["Last", "Last", "Last", "Last", "Last", "Last", "Last"];
				break;
			case "casts/nobunaga.html":
				shift = [true, true, true, true, true, true, true];
				shift_in = ["6:00", "19:00", "19:00", "19:00", "19:00", "19:00","6:00"];
				shift_out = ["翌朝8:00", "翌朝8:00", "翌朝8:00", "翌朝8:00", "翌朝8:00", "Last", "Last"];
				break;
			case "casts/izayoi.html":
				shift = [true, true, false, false, false, false, false];
				shift_in = ["21:30", "10:00", "", "", "", "", ""];
				shift_out = ["Last", "24:00", "", "", "", "", ""];
				break;
			case "casts/asahina.html":
				shift = [false, true, true, true, true, true, true];
					shift_in = ["", "6:00", "6:00", "6:00", "6:00", "6:00", "6:00"];
				shift_out = ["", "Last", "Last", "Last", "Last", "Last", "Last"];
				break;
			case "casts/shinomori.html":
				shift = [true, false, false, false, false, false, true];
				shift_in = ["10:00", "", "", "", "", "", "10:00"];
				shift_out = ["20:00", "", "", "", "", "", "20:00"];
				break;
			case "casts/kikuchi.html":
				shift = [true, true, true, true, true, true, true];
				shift_in = ["6:00", "19:00", "19:00", "19:00", "19:00", "19:00", "6:00"];
				shift_out = ["24:00", "24:00", "24:00", "24:00", "24:00", "24:00", "24:00"];
				break;
			case "casts/natsume.html":
				shift = [true, true, true, true, true, true, true];
				shift_in = ["要確認", "要確認", "要確認", "要確認", "要確認", "要確認", "要確認"];
				shift_out = ["要確認", "要確認", "要確認", "要確認", "要確認", "要確認", "要確認"];
				break;
			case "casts/kirigaya.html":
				shift = [true, true, true, true, true, true, true];
				shift_in = ["6:00", "6:00", "6:00", "6:00", "6:00", "6:00", "6:00"];
				shift_out = ["Last", "Last", "Last", "Last", "Last", "Last", "Last"];
				break;
			case "casts/hoshi.html":
				shift = [true, true, true, true, true, true, true];
				shift_in = ["要確認", "要確認", "要確認", "要確認", "要確認", "要確認", "要確認"];
				shift_out = ["要確認", "要確認", "要確認", "要確認", "要確認", "要確認", "要確認"];
				break;
			case "casts/maru.html":
				shift = [true, true, true, true, true, true, true];
				shift_in = ["要確認", "要確認", "要確認", "要確認", "要確認", "要確認", "要確認"];
				shift_out = ["要確認", "要確認", "要確認", "要確認", "要確認", "要確認", "要確認"];
				break;
			case "casts/mogami.html":
				shift = [true, true, true, true, true, true, true];
				shift_in = ["6:00", "6:00", "6:00", "6:00", "6:00", "6:00", "6:00"];
				shift_out = ["Last", "Last", "Last", "Last", "Last", "Last", "Last"];
				break;
		}
		var	date = new Array(7);
		var week = [ "(日)", "（月）", "（火）", "（水）", "（木）", "（金）", "（土）" ];//曜日定義

		for (var i = 0; i <= 6; i++){
			date[i] = new Date();
			date[i].setDate(date[i].getDate() + i);//日付セット
			date[i][1]=date[i].getMonth()+1;//配列に日付を入れる
			date[i][2]=date[i].getDate();
			date[i][3]=date[i].getDay();
			document.getElementById("day_"+i).textContent = date[i][1]+"/"+date[i][2]+week[date[i][3]];
			if(shift[date[i][3]]){
				if(shift_in[date[i][3]]=="要確認"){//出勤だけど時間未定の場合
					document.getElementById("shift_in_"+i).textContent = "要確認";
				}else{//出勤で時間の指定がある場合
					document.getElementById("shift_in_"+i).textContent = shift_in[date[i][3]];
					document.getElementById("shift_in_"+i).appendChild( document.createElement("br") );
					document.getElementById("shift_in_"+i).appendChild( document.createTextNode("↓") );
					document.getElementById("shift_in_"+i).appendChild( document.createElement("br") );
					document.getElementById("shift_out_"+i).textContent =shift_out[date[i][3]];
				}
			}else{//休みの場合
				document.getElementById("shift_in_"+i).textContent = "お休み";
			}
		}
		//次回の出勤予定の処理
		var count_date = 1,
			countup = 0;

		while(count_date< 7){
			//週１出勤かつ、出勤日が今日の曜日の場合
			if(shift[date[0][3]]==true && shift[date[1][3]]==false && shift[date[2][3]]==false && shift[date[3][3]]==false && shift[date[4][3]]==false && shift[date[5][3]]==false && shift[date[6][3]]==false){
				date[0].setDate(date[0].getDate() + 7);
				date[0][1]=date[0].getMonth()+1;
				date[0][2]=date[0].getDate();
				date[0][3]=date[0].getDay();
				document.getElementById("day_next").textContent = date[0][1]+"/"+date[0][2]+week[date[0][3]];
				
				if(shift_in[date[count_date][3]]=="要確認"){//出勤だけど時間未定の場合
					document.getElementById("shift_in_next").textContent = "要確認";
					break;
				}else{
					document.getElementById("shift_in_next").textContent = shift_in[date[count_date][3]];
					document.getElementById("shift_in_next").appendChild( document.createElement("br") );
					document.getElementById("shift_in_next").appendChild( document.createTextNode("↓") );
					document.getElementById("shift_in_next").appendChild( document.createElement("br") );
					document.getElementById("shift_out_next").textContent = shift_out[date[count_date][3]];
					break;
				}
			//通常
			}else if(shift[date[count_date][3]]==true){
				document.getElementById("day_next").textContent = date[count_date][1]+"/"+date[count_date][2]+week[date[count_date][3]];

				if(shift_in[date[count_date][3]]=="要確認"){//出勤だけど時間未定の場合
					document.getElementById("shift_in_next").textContent = "要確認";
					break;
				}else{
					document.getElementById("shift_in_next").textContent = shift_in[date[count_date][3]];
					document.getElementById("shift_in_next").appendChild( document.createElement("br") );
					document.getElementById("shift_in_next").appendChild( document.createTextNode("↓") );
					document.getElementById("shift_in_next").appendChild( document.createElement("br") );
					document.getElementById("shift_out_next").textContent = shift_out[date[count_date][3]];
					break;
				}
			}
			if(count_date==6) count_date = 0;//週末から週の始めに戻る
			count_date++;
		}






