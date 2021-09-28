let conuts = document.querySelectorAll(".count");
let time = 300;
conuts.forEach(count => {
	let UpdateCount = () =>{
		let target = +count.getAttribute("data-target");
		let counter = +count.innerText;

		let inc = target / time;

		if (counter < target) {
			count.innerText = Math.ceil(counter + inc);
			setTimeout(UpdateCount, 1);
		}else{
			count.innerText = target;
		}
	} 
	UpdateCount();
});