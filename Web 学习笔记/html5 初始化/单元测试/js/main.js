module( "测试示例1" );
function qUnitTest(para) {
	if (typeof para == "number") {
		return true;
	} else {
		return false;
	}
}

test( "qUnitTest()", function() {
	ok( qUnitTest(4), '4是一个数字' );
	ok( !qUnitTest("4"), '"4"不是一个数字' );
	ok( qUnitTest("4"), '"4"不是一个数字' );
});