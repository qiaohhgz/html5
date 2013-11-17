/**
 * Created with IntelliJ IDEA.
 * User: Jim_qiao
 * Date: 11/5/13
 * Time: 5:59 PM
 * To change this template use File | Settings | File Templates.
 */
function KeyCodeTool(o) {
    var obj = o;
    var keyArray = [];
    o.onkeyup = onKeyUpHandler();
    function onKeyUpHandler(event) {
        console.log(event);
    };
    this.showJsonKeyCode = function (obj) {
        if(typeof obj == "string"){
            obj = document.getElementById(obj);
        }
        obj.innerHTML = "Hello world";
    };
}
var keyCodeTool = new KeyCodeTool(document.body);