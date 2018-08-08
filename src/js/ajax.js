function ajax(url, type = 'get', async = 'true', data = null) {
    return new Promise(function(resolve, reject) {
        var xml = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xml.onload = function() {
            if (xml.status >= 200 && xml.status <= 300 || xml.status === 304) {
                resolve(xml.responseText);
            } else {
                reject(new Error(`找不到当前url地址：${url}`))
            }
        }
        xml.open(type, url, async);
        xml.send(data);
    })
}