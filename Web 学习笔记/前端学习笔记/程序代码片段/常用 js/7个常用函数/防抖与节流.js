/**
 * 防抖函数
 * @param  {Function} func      源函数
 * @param  {Number}   wait      毫秒数，调用该函数后，如果函数在 wait 毫秒内没有被再次调用，才会执行一次。
 * @param  {Boolean}  immediate 如果为 true，则函数会立即执行，如果在 wait 毫秒内没有被再次调用，下次调用才会再次执行。
 * @return {Function}           返回一个新函数，该函数在停止调用一段时间后执行一次。
 */
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this,
			args = arguments,
			callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!callNow) func.apply(context, args);
		}, wait);
		if (callNow) func.apply(context, args);
	};
}
// ES6
export function debounce(func, wait, immediate) {
    let timeout;
    return function(...args) {
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            if (!callNow) func.apply(this, args);
        }, wait);
        if (callNow) func.apply(this, args);
    };
}

// 用法
var myEfficientFn = debounce(function() {
	// 所有繁重的操作
}, 250);
window.addEventListener('resize', myEfficientFn);


// 基于 rAF 的防抖
export function debounce(func, immediate) {
    let id;
    return function(...args) {
        let callNow = immediate && !id;
        cancelAnimationFrame(id);
        id = requestAnimationFrame(() => {
            id = null;
            if (!callNow) func.apply(this, args);
        });
        if (callNow) func.apply(this, args);
    };
}
// 用法
var myEfficientFn = debounce(function() {
    // 所有繁重的操作
});
window.addEventListener('resize', myEfficientFn);


/**
 * 防抖函数变种
 * @param   {Function} func      源函数
 * @param   {Number}   wait      毫秒数，调用该函数后，如果函数在 wait 毫秒内没有被再次调用，才会执行一次。
 * @returns {Function}           返回一个新函数，新函数第一个参数表示是否立即执行。
 */
export function debounce(func, wait) {
    let timeout;
    return function(callNow, ...args) {
        clearTimeout(timeout);
        if (callNow) {
            func.apply(this, args);
        } else {
            timeout = setTimeout(() => {
                func.apply(this, args);
            }, wait);
        }
    };
}

/**
 * 基于 rAF 的防抖函数变种
 * @param   {Function} func      源函数
 * @returns {Function}           返回一个新函数，新函数第一个参数表示是否立即执行。
 */
export function debounce(func) {
    let id;
    return function(callNow, ...args) {
        cancelAnimationFrame(id);
        if (callNow) {
            func.apply(this, args);
        } else {
            id = requestAnimationFrame(() => {
                func.apply(this, args);
            });
        }
    };
}

/**
 * 基于 rAF 的防抖函数变种2
 * @param   {Function} func      源函数
 * @param   {Number}   wait      rAF 次数，调用该函数后，如果函数在 wait 次 rAF 内没有被再次调用，才会执行一次。
 * @returns {Function}           返回一个新函数，新函数第一个参数表示是否立即执行。
 */
function debounce(func, wait) {
    wait = wait || 1;
    let id, count;
    let rAF = function(event) {
        if (count) {
            count--;
            id = requestAnimationFrame(() => rAF.call(this, event));
        } else {
            func.call(this, event);
        }
    };
    return function({nativeEvent:event}) {
        cancelAnimationFrame(id);
        count = wait;
        rAF.call(this, event);
    };
}



/**
 * 节流函数
 * @param  {Function} func      源函数
 * @param  {Number}   wait      毫秒数，表示 wait 毫秒后执行一次。
 *                              如果在 wait 毫秒内多次调用该函数，则函数不会执行。
 * @param  {Boolean}  immediate 如果为 true，则调用函数会立即执行，并在 wait 毫秒内不会再执行。
 * @return {Function}           返回一个新函数，该函数在规定时间内只会执行一次。
 */
function throttle(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this,
			args = arguments
		if (!timeout) {
			timeout = setTimeout(function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			}, wait);
			if (immediate) func.apply(context, args);
		}
	};
}
// ES6
export function throttle(func, wait, immediate) {
    let timeout;
    return function(...args) {
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null;
                if (!immediate) func.apply(this, args);
            }, wait);
            if (immediate) func.apply(this, args);
        }
    };
}

// 用法
var myEfficientFn = throttle(function() {
	// 所有繁重的操作
}, 250);
window.addEventListener('scroll', myEfficientFn);



// 基于 rAF 的节流
export function throttle(func, immediate) {
    let ticking;
    return function(...args) {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(() => {
                ticking = false;
                if (!immediate) func.apply(this, args);
            });
            if (immediate) func.apply(this, args);
        }
    };
}

function onScroll() {
	// do something...
	console.log("Success");
}

var myEfficientFn = throttle(onScroll, 250);
// 滚动事件监听
window.addEventListener('scroll', myEfficientFn, false);


