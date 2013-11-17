/**
 * Created with IntelliJ IDEA.
 * User: Jim_qiao
 * Date: 11/5/13
 * Time: 5:59 PM
 * To change this template use File | Settings | File Templates.
 */
;
(function ($) {
    $().ready(function () {
        function KeyCodeTool(target, btn, panel) {
            var obj = target;
            var keyArray = [];
            obj.keyup(function (event) {
                console.log(event.keyCode);
            });
            btn.click(function (event) {
                panel.html("Hello world");
            });
        };

        var keyCodeTool = new KeyCodeTool($("body"), $("showBtn"), $("keyCodeContent"));
    });
})(jQuery);