/**
 * @brief html5音频加载
 * @author 白俊杰 2014/10/23
 * @param src 音频的路径
 * @param loop 音频是否循环播放
 * @param id 创建音频标签的id名
 * @return 返回该音频的DOM对象，如果返回false，则表示浏览器不支持audio标签
 */
function createSound(src, loop, id) {
	var sound = document.createElement('audio');
	if (!sound.canPlayType) return false;
	if (id) sound.id = id;
	sound.src = src;
	sound.preload = 'auto';
	if (typeof(loop) === 'undefined') loop = true;
	sound.loop = loop;
	return sound;
}