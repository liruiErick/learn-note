// HTML转义
function HTMLEncode(html) {
    var temp = document.createElement('div');
    (temp.textContent != null) ? (temp.textContent = html) : (temp.innerText = html);
    var output = temp.innerHTML;
    temp = null;
    return output;
}

var tagText = '<p><b>123&456</b></p>';
console.log(HTMLEncode(tagText)); //=> &lt;p&gt;&lt;b&gt;123&amp;456&lt;/b&gt;&lt;/p&gt;


// HTML反转义
function HTMLDecode(text) { 
    var temp = document.createElement('div'); 
    temp.innerHTML = text; 
    var output = temp.innerText || temp.textContent; 
    temp = null; 
    return output; 
} 
var tagText = '<p><b>123&456</b></p>';
var encodeText = HTMLEncode(tagText);
console.log(encodeText); //=> &lt;p&gt;&lt;b&gt;123&amp;456&lt;/b&gt;&lt;/p&gt;
console.log(HTMLDecode(encodeText)); //=> <p><b>123&456</b></p>


// 用Javascript进行HTML转义
function HTMLEncode(str) {
    var s = '';
    if (str.length == 0) return '';
    s = str.replace(/&/g, '&amp;');
    s = s.replace(/</g, '&lt;');
    s = s.replace(/>/g, '&gt;');
    s = s.replace(/ /g, '&nbsp;');
    s = s.replace(/\'/g, '&#39;');
    s = s.replace(/\"/g, '&quot;');
    s = s.replace(/\n/g, '<br/>');
    return s; 
}

function HTMLDecode(str) {
    var s = '';
    if (str.length == 0) return '';
    s = str.replace(/&amp;/g, '&');
    s = s.replace(/&lt;/g, '<');
    s = s.replace(/&gt;/g, '>');
    s = s.replace(/&nbsp;/g, ' ');
    s = s.replace(/&#39;/g, '\'');
    s = s.replace(/&quot;/g, '\"');
    s = s.replace(/<br\/>/g, '\n');
    return s;
}