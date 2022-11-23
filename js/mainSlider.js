let slideList = document.getElementById("slideWrap");

for (i = 5; i > 0; i--) {
    slideList.insertAdjacentHTML(
        "afterbegin", 
        `
        <li>
			<a href='#'> 
				<div class="slide">
					<div class="slide_text">
						<h3>Text ${i} proba pera zagolovka</h3>
					</div>
				</div>
			</a> 
		</li>
        `
    )
}

let slider = document.getElementById("slider");
let sliderWidth = slider.offsetWidth;
let count = 1;
let items = slideList.querySelectorAll("li").length;
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let responsiveSlider = function() {
	let prevSlide = function() {
	  if(count > 1) {
		 count = count - 2;
		 slideList.style.left = "-" + count * sliderWidth + "px";
		 count++;
	  }
	  else if(count = 1) {
		 count = items - 1;
		 slideList.style.left = "-" + count * sliderWidth + "px";
		 count++;
	  }
	};
	
	let nextSlide = function() {
	  if(count < items) {
		 slideList.style.left = "-" + count * sliderWidth + "px";
		 count++;
	  }
	  else if(count = items) {
		 slideList.style.left = "0px";
		 count = 1;
	  }
	};
	
	next.addEventListener("click", function() {
	  nextSlide();
	});
	
	prev.addEventListener("click", function() {
	  prevSlide();
	});
	
	setInterval(function() {
	  nextSlide()
	}, 10000);
};
	
window.onload = function() {
	responsiveSlider();  
}

