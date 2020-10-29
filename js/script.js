window.onload = () => {

    let sliderImg0 = document.querySelector('#img0');
    let sliderImg1 = document.querySelector('#img1');
    let sliderImg2 = document.querySelector('#img2');

    let slider = document.querySelector('.slider');
    let body = document.querySelector('body');

    sliderImg0.style.zIndex = '-1';
    sliderImg1.style.zIndex = '-2';
    sliderImg2.style.zIndex = '-3';

    let sliderImgs = document.querySelectorAll('.slider-img');
    let dots = document.querySelectorAll('.dotbox__dot');

    for (let i = 0; i < sliderImgs.length; i++) {

        let inext;
        if (i < sliderImgs.length - 1) {
            inext = i + 1;
        } else {
            inext = 0;
        }

        dots[i].addEventListener('click', () => {
            for (let k = 0; k < sliderImgs.length; k++) {
                sliderImgs[k].classList.remove('anim1');
                sliderImgs[k].classList.remove('anim2');
                dots[k].classList.remove('anim');
            }
            
            for (let j = 0; j < sliderImgs.length; j++) {
                let ij;
                if (i + j < sliderImgs.length) {
                    ij = i + j;
                } else {
                    ij = i + j - sliderImgs.length;
                }
                console.log('ij = ' + ij);
                sliderImgs[ij].style.zIndex = -1 - j;
            }

            sliderImgs[i].classList.add('anim1');
            dots[i].classList.add('anim');
        });

        dots[i].addEventListener('transitionend', () => {
            dots[i].classList.remove('anim');
            dots[inext].classList.add('anim');
        });

        sliderImgs[i].addEventListener('transitionend', (event) => {
            if (event.elapsedTime == '4') { // end of anim 1
                sliderImgs[i].classList.remove('anim1');
                sliderImgs[i].classList.add('anim2');
                sliderImgs[inext].classList.add('anim1');
            }
            if (event.propertyName == 'opacity') { // end of anim 2
                sliderImgs[i].style.zIndex = sliderImgs[i].style.zIndex - sliderImgs.length;
                sliderImgs[i].classList.remove('anim2');
            }
        });
    }

    sliderImg0.classList.add('anim1');
    dots[0].classList.add('anim');

}