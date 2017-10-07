function copy(str){
    var save = function(e) {
        e.clipboardData.setData('text/plain', str);
        e.preventDefault();
    };
    document.addEventListener('copy', save);
    document.execCommand('copy');
    document.removeEventListener('copy',save);
}
