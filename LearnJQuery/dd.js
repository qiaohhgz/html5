//得到答案
javascript:void((function (d) {
    var r = [];
    $("iframe").contents().find("td[height='30']").each(function () {
        var c = $.trim($(this).html());
        var l = c.indexOf("。");
        r.push(c.charAt(l - 1));
    });
    console.log("请复制下来这个答案:\n" + r.join(","));
    $("iframe").contents().find("td a").get(0).click();
})(document));

//填入答案
javascript:void((function (d) {
    var str = window.prompt("请输入刚才的答案。");
    if (str) {
        var rs = str.split(",");
        $("iframe").contents().find("td[height='30']").each(function (i) {
            var target = "input[value='" + rs[i] + "']";
            $(this).find(target).each(function () {
                $(this).get(0).checked = true;
            });
        });
        $("iframe").contents().find("input[name='Submit']").click();
    }
})(document));

//视频学习
javascript:void((function (doc) {
    var ops = {
        debug: false,
        target: "#dd1",
        time: 1515000,
        nextTime: 3000,
        idObj: {},
        idArray: [],
        index: 0,
        result: [],
        resultTemplate: {A: {next: "B"}, B: {next: "C"}, C: {next: "D"}, D: {next: "A"}}
    };

    _init();

    function log(msg) {
        if (console) {
            console.debug(msg);
        }
    }

    function _init() {
        if (confirm("Test ?")) {
            ops.debug = true;
            ops.time = 3000;
            ops.nextTime = 1000;
        }

        var _beginId = prompt("请输入开始ID，如果不输入默认从头开始。(例如sd1)");
        log("_beginId = " + _beginId);
        var _result = prompt("请输入的答案。(用分号分隔，例如: A;B;C)");
        log("_result = " + _result);
        if (!_result) {
            alert("输入有误，程序终止.");
            return;
        }
        var _hasPush = !_beginId;
        log("===================================");
        $(ops.target).find("a[id^='sd']").each(function () {
            var _id = $(this).attr("id");
            if (!_hasPush && _id == _beginId) {
                _hasPush = true;
            }
            if (_hasPush) {
                ops.idArray.push("#" + _id);
                log($("#" + _id).text());
            }
        });
        log("===================================");
        ops.result = _result.split(";");
        if (ops.result.length < ops.idArray.length) {
            alert("您输入的答案数量不对.\n总题目数:" + ops.idArray.length + "\n您输入的答案总数:" + ops.result.length);
            return;
        }
        log("===========配置================");
        log(JSON.stringify(ops));
        _beginWatch();
    }

    function _beginWatch() {
        log("===================================");
        if (ops.index == ops.idArray.length) {
            alert("程序执行完成.谢谢使用");
            return;
        }
        var _el = $(ops.idArray[ops.index++]);
        log("开始 => " + _el.text());
        _clickAndLoadFrame(_el);
        window.setTimeout(function () {
            var _a = _getE("a");
            if (_a.text() == "开始学习新课件") {
                log("click => 开始学习新课件");
                _clickAndLoadFrame(_a);
            } else if (_getE(".msg") && _getE(".msg").text() == "您已学习过本节，重复学习将不累计时长。") {
                log("您已学习过本节，重复学习将不累计时长。前往下一个视频...");
                window.setTimeout(_beginWatch, ops.nextTime);
                return;
            }
            window.setTimeout(function () {
                _setAndSubmit();
            }, ops.time);
        }, ops.nextTime);
    }

    function _getE(str) {
        var _frame = $("iframe").contents();
        return _frame.find(str);
    }

    function _setAndSubmit() {
        var _nav = _getE(".font14");
        var _form = _getE("#ansfrm");
        if (_nav.length && _form.length) {
            log(_nav.text());
            _form.find("input[value='" + ops.result[ops.index].toUpperCase() + "']").get(0).checked = true;
            if (_getE("#miao").text() == "您可以答题了") {
                log("点击提交按钮提交.");
                _getE("#submitbtn").click();
                window.setTimeout(function(){
                    if(_getE(".msg").text() == "答案不正确！您还能选择一次"){
                        window.setTimeout(function () {
                            var _r = ops.result[ops.index].toUpperCase();
                            _r = ops.resultTemplate[_r].next;
                            _form.find("input[value='" + _r + "']").get(0).checked = true;
                            log("再次点击提交按钮提交.");
                            _getE("#submitbtn").click();
                            window.setTimeout(function () {
                                log("结果信息: " + _getE(".msg").text() + "\n马上前往下一个课程.");
                                window.setTimeout(_beginWatch, ops.nextTime);
                            }, ops.nextTime);
                        }, ops.nextTime);
                    }else{
                        window.setTimeout(function () {
                            log("结果信息: " + _getE(".msg").text() + "\n马上前往下一个课程.");
                            window.setTimeout(_beginWatch, ops.nextTime);
                        }, ops.nextTime);
                    }
                }, ops.nextTime);
            } else {
                log("不能提交，前往下一个课程。");
                window.setTimeout(_beginWatch, ops.nextTime);
            }
        } else {
            log("没有找到右面的导航," + (ops.nextTime / 1000) + "秒后程序将执行下一个目标 => " + $(ops.idArray[ops.index]).text());
            window.setTimeout(_beginWatch, ops.nextTime);
        }
    }

    function _clickAndLoadFrame(_a) {
        $("iframe").attr("src", _a.attr("href"));
        _a.click();
    }
})(document));