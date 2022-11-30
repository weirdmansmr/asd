let photos = document.querySelector('.photos')
const arrNews = [
    [1, `src="./img/basketball_1.jpg"`],
    [2, `src="./img/basketball_2.jpg"`],
    [3, `src="./img/basketball_3.jpg"`],
    [4, `src="./img/basketball_4.jpg"`],
    [5, `src="./img/basketball_5.jpg"`],
    [6, `src="./img/basketball_6.jpg"`],
]

for (i = 0; i <= 6; i++) {
    photos.insertAdjacentHTML(
        "beforeend", 
        `
        <a href="#">
			<div class='img_text'>
				<p>Text prov ${arrNews[i][0]}</p>
			</div>
			<img class='gall_img' ${arrNews[i][1]} alt="stadium" srcset="">
		</a>
        `
    )

}