let photos = document.querySelector('.photos')

for (i = 1; i <= 6; i++) {
    photos.insertAdjacentHTML(
        "beforeend", 
        `
        <a href="#">
			<div class='img_text'>
				<p>Text prov ${i}</p>
			</div>
			<img class='gall_img' src="./img/volleyBall_back.jpg" alt="stadium" srcset="">
		</a>
        `
    )
}