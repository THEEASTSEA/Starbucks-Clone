const badgeEL = document.querySelector('header .badges');
// .throttle(함수, 시간ms
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 뱃지 숨기기
    // badgeEL.style.display = 'none';
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEL, .6, {
      opacity: 0,
      display: 'none'
    });
    // to-top 버튼 보이기
    gsap.to('#to-top', .2, {
      x: 0
    });
  } else {
    // 뱃지 보이기
    // badgeEL.style.display = 'block';
    gsap.to(badgeEL, .6, {
      opacity: 1,
      display: 'block'
    });
    // to-top 버튼 숨기기
    gsap.to('#to-top', .2, {
      x: 100
    });
  }
}, 300));



const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
}) 


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    // 첫번째 0.7초, 두번째 1.4초, 세번째 2.1초, 네번쨰 2.7초
    // 뒤에 실행
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
}); 
// new 자바스크립트 생성자(클레스)


new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 2000 //ms, 0.5s
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }

})

const promotionEL = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  // !을 통해 반대값 할당
  if (isHidePromotion) {
    promotionEL.classList.add('hide');
    // 숨김 처리
  } else {
    promotionEL.classList.remove('hide');
    // 보임 처리
  }
})




// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // 무한반복
    yoyo: true, // 한번 재생된 애니메이션을 뒤로 재생
    ease: Power2.easeInOuteaseInOut,
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// ScrollMagic

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를
      triggerHook: .8 // 뷰 포인트 상의 감시 기준 선(0~1) 
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
  // 특정한 요소를 감시하는 요소를 만들어주는 메소드
  // 클래스를 추가, 제거하는 역할
});
