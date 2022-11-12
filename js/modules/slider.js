// sliders
function slider({
  container,
  slide,
  prev,
  next,
  totalCounter,
  currentCounter,
  wrapperSlide,
  field,
}) {
  const slides = document.querySelectorAll(slide),
    slider = document.querySelector(container),
    prevSlide = document.querySelector(prev),
    nextSlide = document.querySelector(next),
    total = document.querySelector(totalCounter),
    current = document.querySelector(currentCounter),
    slidesWrapper = document.querySelector(wrapperSlide),
    sliderField = document.querySelector(field),
    width = window.getComputedStyle(slidesWrapper).width;
  let slideIndex = 1;
  let offset = 0;
  sliderField.style.width = 100 * slides.length + "%";
  sliderField.style.display = "flex";
  sliderField.style.transition = "0.5s all";
  slidesWrapper.style.overflow = "hidden";
  slides.forEach((slide) => {
    slide.style.width = width;
  });
  // showSlides(slideIndex);
  slider.style.position = "relative";
  const indicators = document.createElement("ol"),
    dots = [];

  indicators.classList.add("carousel-indicators");

  slider.append(indicators);
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.classList.add("dot");

    if (i == 0) {
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
  }
  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }
  if (slides.length) {
  } else {
  }

  // function showSlides(n) {
  //   if (n > slider.length) {
  //     slideIndex = 1;
  //   }
  //   if (n < 1) {
  //     slideIndex = slider.length;
  //   }
  //   function showSlidesShow() {
  //     slider[slideIndex - 1].classList.add("show");
  //     slider[slideIndex - 1].classList.remove("hide");
  //   }

  //   slider.forEach((item) => item.classList.add("hide"));
  //   showSlidesShow();

  // if (slider.length) {
  //   current.textContent = `0${slideIndex}`;
  // } else {
  //   current.textContent = slideIndex;
  // }
  // }

  // function plusSlider(n) {
  //   showSlides((slideIndex += n));
  // }
  function slideCurrentDots() {
    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
    dots.forEach((dot) => (dot.style.opacity = 0.5));
    dots[slideIndex - 1].style.opacity = 1;
  }
  function deleteNotW(str) {
    return +str.replace(/\D/g, "");
  }

  nextSlide.addEventListener("click", () => {
    if (offset == deleteNotW(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += deleteNotW(width);
    }
    sliderField.style.transform = `translateX(-${offset}px)`;
    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }
    slideCurrentDots();
  });
  prevSlide.addEventListener("click", () => {
    if (offset == 0) {
      offset = deleteNotW(width) * (slides.length - 1);
    } else {
      offset -= deleteNotW(width);
    }
    sliderField.style.transform = `translateX(-${offset}px)`;
    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }
    slideCurrentDots();
  });
  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");
      slideIndex = slideTo;
      offset = deleteNotW(width) * (slideTo - 1);
      sliderField.style.transform = `translateX(-${offset}px)`;
      slideCurrentDots();
    });
  });
}
export default slider;
