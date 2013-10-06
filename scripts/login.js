function getLogin() {
	$.ajax({
		type : 'get',
		url : 'http://localhost:9000/login',
		data : "email=" + $("#email").val() + "&password=" + $("#password").val() + "",
		dataType : 'html',
		success : function(msg) {
			layer.alert("success:" + msg.responseText);
		},
		error : function(msg) {
			layer.alert("error:" + msg.responseText);
		}
	})

	$.post("http://localhost:9000/login", {
		email : "John",
		password : "2pm"
	}, function(data) {
		layer.alert("Data Loaded: " + data);
	});
}

function postLogin() {
	$.ajax({
		url : "http://localhost:9000/login",
		type : "GET",
		data : {
			email : "John",
			password : "2pm"
		},
		dataType : "json",
		success : function(Jdata) {
			layer.alert(Jdata);
		},
		error : function() {
			layer.alert("ERROR!!!");
		}
	});
	$.getJSON('http://localhost:9000/login?email=John&password=2pm', function(data) {
		layer.alert(Jdata);
	});
}

function showDiv() {
	$.layer({
		move : ['#moveLbl', true],
		closeBtn : [0, false],
		type : 1,
		title : ['', false],
		fix : false,
		area : ['300px', '100px'],
		page : {
			dom : '#loginFrm'
		}
	});
	$('#closeBtn').live('click', function() {
		var index = LAYER.getIndex(this);
		LAYER.close(index);
	});
}
