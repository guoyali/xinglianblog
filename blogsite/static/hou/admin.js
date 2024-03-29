
    // 获取路径中的参数
    function getUrlParam() {
        var url = (location.search); //获取url中"?"符后的字符串包括‘？’ ，window.location.href获取的是url完整的字符串
        var theParam = new Object();
        if (url.indexOf("?") != -1) { //确保‘？’不是最后一个字符串，即携带的参数不为空
            var str = url.substr(1); //substr是字符串的用法之一，抽取指定字符的数目，这里抽取？后的所有字符
            strs = str.split("&"); //将获取到的字符串从&分割，输出参数数组，即输出[参数1=xx,参数2=xx,参数3=xx,...]的数组形式
            for (var i = 0; i < strs.length; i++) { //遍历参数数组
                theParam[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]); //这里意思是抽取每个参数等号后面的值，unescape是解码的意思
            }
        }
        return theParam; //返回参数值
    }
    退出登陆
    var uid = getUrlParam().uid
    function out() {
        ajaxFuction ('/quit/', { 'uid': uid}, function(res) {
            if (res.data) {
                window.location.href = '/login/'
            }
        })
    }

    // 封装调用接口方法
    function ajaxFuction(ajaxUrl, data, callback) {
        if (!Boolean(data)) {
            data = {}
        }
        if (!Boolean(callback)) {
            callback = function (_) {}
        }
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: ajaxUrl,
            data: data,
            success: function (res) {
                callback(res)
            }
        })
    }