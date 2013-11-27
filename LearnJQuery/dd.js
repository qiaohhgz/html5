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
javascript:void((function (d) {
    var ops = {
        target: "#dd1",
        time: 3000
    };

    function _run() {
        $(ops.target).find("a[id^='sd']").each(function () {
            var _id = $(this).attr("id");
            window.setTimeout(function(){
                _beginWatch(_id);
            }, ops.time);
            return false;
        });
    }

    function _beginWatch(id) {
        console.log($("#" + id).html());
    }

    _run();
})(document));