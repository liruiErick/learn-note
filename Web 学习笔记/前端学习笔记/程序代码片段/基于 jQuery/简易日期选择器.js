// 简易日期选择器
var $select = $('form select'),
	$select_year = $select.filter('#year').width('3em'),
	$select_month = $select.filter('#month').width('2em'),
	$select_day = $select.filter('#day').width('2em'),
	$select_hour = $select.filter('#hour').width('2em').css('margin-left', '1em'),
	$select_minute = $select.filter('#minute').width('2em'),
	$select_second = $select.filter('#second').width('2em');

var curDate = new Date(),
	curYear = curDate.getFullYear(),
	curMonth = curDate.getMonth() + 1,
	curDay = curDate.getDate(),
	curHour = curDate.getHours(),
	curMinute = curDate.getMinutes(),
	curSecond = curDate.getSeconds();

var	maxYear = curYear + 50,
	totalDay = getMaxDay(curMonth, curYear);

addOption($select_year[0], curYear, maxYear);
addOption($select_month[0], 1, 12, curMonth);
addOption($select_day[0], 1, totalDay, curDay);
addOption($select_hour[0], 0, 23, curHour);
addOption($select_minute[0], 0, 59, curMinute);
addOption($select_second[0], 0, 59, curSecond);

$select_year.on('change', function() {
	var maxDay = getMaxDay($select_month[0].value, this.value),
		curDay = parseInt($select_day.val());
	if (curDay > maxDay) curDay = maxDay;
	if (maxDay == totalDay) return;
	totalDay = maxDay;
	addOption($select_day[0], 1, totalDay, curDay);
});
$select_month.on('change', function() {
	var maxDay = getMaxDay(this.value, $select_year[0].value),
		curDay = parseInt($select_day.val());
	if (curDay > maxDay) curDay = maxDay;
	if (maxDay == totalDay) return;
	totalDay = maxDay;
	addOption($select_day[0], 1, totalDay, curDay);
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
function addOption(select, startOption, endOption, curOption) {
	curOption = curOption || startOption;
	select.length = 0;
	for (var i = startOption, j = 0; i <= endOption; i++,j++) {
		var str = i + '';
		if (str.length == 1) str = '0' + str;
		select.options[j] = new Option(str, i);
	}
	select.selectedIndex = curOption - startOption;
}