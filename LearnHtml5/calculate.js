self.onmessage = function(event) {
    var num = event.data;
    if (num) {
        var result = calculate(num);
        postMessage(result);
    }
}

function calculate(num) {
    var result = 0;
    for (var i = 0; i <= num; i++) {
        result += i;
    }
    return result;
}