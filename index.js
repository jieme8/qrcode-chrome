chrome.tabs.getSelected(function(t){
	console.log(t)
	$("#demo").qrcode({ 
	    //render: "table", //table方式 
	    width: 400, //宽度 
	    height:400, //高度 
	    text: t.url//任意内容 
	}); 
})

