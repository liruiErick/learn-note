// 根据搜索词，获取列表
// 如果搜索词为空，则返回全部列表
// 如果搜索词没有变化，则返回当前列表
// 第二个参数表示是否强制重新获取列表
var curSearchStr;
function hazySearch(searchStr, update) {
	if (!searchStr) searchStr = '';
	if (!update) {
		if (!searchStr) {
			curSearchStr = searchStr;
			return IDList;
		} else if (curSearchStr === searchStr) {
			return curShowList;
		}
	}

	curSearchStr = searchStr;
	var reg = new RegExp(curSearchStr, 'i'),
		resultList = [],
		searchStrUpperCase = searchStr.toUpperCase();

	for (var i = 0, listLen = IDList.length; i < listLen; i++) {
		var unit = IDList[i];
		if (isArray(unit)) {
			resultList[i] = [];
			for (var j = 0, unitLen = unit.length; j < unitLen; j++) {
				var itemInfo = unit[j];
				if (!isObejct(itemInfo)) continue;
				var name = itemInfo.name;
				if (reg.test(name)) { // 一般查询
					resultList[i].push(itemInfo);
				} else { // 拼音查询
					for (var k = 0, nameLen = name.length; k < nameLen; k++) {
						var pinyin = bjj.pinyin.getFullChars(name.substr(k)).toUpperCase();
						if (pinyin.indexOf(searchStrUpperCase) == 0) {
							resultList[i].push(itemInfo);
							break;
						}
					}
				}
			}
		}
	}

	return resultList;
}