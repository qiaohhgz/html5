javascript:void((function (d) {
    function _log(obj) {
        if (console) {
            console.log(obj);
        }
    }

    var ops = {
        target: "#myPanel"
    }

    function _init() {
        if ($(ops.target)) {
            _log("remove exist");
            $("body").remove($(ops.target));
        }
        var panel = $("<div></div>").css({
            position: fixed,
            width: "300px",
            height: "200px",
            border: "solid 2px blue"
        });
        $("body").append(panel);
    }
})(document));