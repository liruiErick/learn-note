$(function(){
	var $selectDate = $("#selectDate");
	var $selectMonth = $selectDate.children(".selectMonth");
	var $select = $selectMonth.children("select");
	var $year = $selectMonth.find(".view .year");
	var $month = $selectMonth.find(".view .month");
	var $selectDay = $selectDate.children(".selectDay");
	var $selectDayList = $selectDate.find(".selectDay .wrap");

	var curDate = new Date(),
		curYear = curDate.getFullYear(),
		curMonth = curDate.getMonth() + 1,
		curDay = curDate.getDate();

	$year.text(curYear);
	$month.text(curMonth);
	// 为select创建月
	createMonth($select[0], curMonth, curYear, 36);
	// 创建天
	var totalDay = getMaxDay(curMonth, curYear);
	createDay(totalDay);

	var $selectDayItem = $selectDate.find(".selectDay .wrap > div");
	// 设置滑动项
	var slideItem = new bjj.Slider($selectDay, {
		isVer: true,
		offset: -1,
		align: "center",
		aequilate: false,
		initIndex: curDay-1,
		onClick: function(i) {
			curDay = i+1;
			slideItem.gotoItem(i);
		}
	});

	$select.on("change", function() {
		var value = this.value;
		var year = value.substr(0,4);
		var month = value.substr(5);
		$year.text(year);
		$month.text(month);
		// 根据选择月份重新创建天
		createDay(getMaxDay(month, year));
		slideItem.update(curDay-1);
	});

	function getMaxDay(month, year) {
		var maxDay = 31,
			month = parseInt(month);

		switch (month) {
			case 2:
				// 计算闰年
				// 能被4整除且又能不能被100整除 是闰年
				// 能直接被400整除也是闰年
				maxDay = ((year%4==0 && year%100!=0) || year%400==0) ? 29 : 28;
				break;
			case 4:
			case 6:
			case 9:
			case 11:
				maxDay = 30;
				break;
		}
		return maxDay;
	}
	function createMonth(select, curMonth, curYear, range) {
		select.length = 0;
		for (var i = 0; i < range; i++) {
			var str = curYear + "年" + curMonth + "月";
			select.options[i] = new Option(str, curYear+"/"+curMonth);
			curMonth--;
			if (curMonth == 0) {
				curMonth = 12;
				curYear--;
			}
		}
	}
	function createDay(totalDay) {
		$selectDayList.empty();
		for (var i=1; i<=totalDay; i++) {
			$selectDayList.append("<div>"+i+"</div>");
		}
	}
});