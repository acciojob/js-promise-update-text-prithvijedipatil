funtion delayoutput(){
	return new Promise((resolve)=>{
		setTimeOut(()=>{
			resolve("Hello, world!")
		},1000);
	});
}

delayoutput().then((data)=>{
	document.getElementById("output").innerText =data;
})