//your JS code here. If required.
let op = document.getElementById("output");
function Prominse(resolve,reject) {
	resolve("Hello, world!");
}
let prom1 = new Promise();

prom1.then(data)=>{
	op.innerText = data;
}