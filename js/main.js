'use strict'

window.onload = function(){
	console.log('loaded');
	let contact = document.getElementsByClassName("contact")[0];

	//contact info swaps between "Contact Info" & Email / Cell when clicked
	contact.onclick = function(){
		if(!this.classList.toggle("default")){
			this.innerHTML = '<a href="mailto:dboisselle@hotmail.com"><strong>Email<strong></a> <br />' +
			'<em>OR</em> <br />' +
			'<strong>(910)818-1674</strong>';
		}else{
			this.innerHTML = "Contact Info";
		}
	}

	//main-nav's opacity changes to 0 when the user scrolls past set position
	let position = 380;
	window.onscroll = function(){
	   if(window.scrollY >= position) {
	      document.getElementsByClassName('main-nav')[0].style.opacity = 0;
	   }else{
			 document.getElementsByClassName('main-nav')[0].style.opacity = 1;
		 }
	};
}
