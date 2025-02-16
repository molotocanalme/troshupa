function showReview() {
  videoSection.innerHTML = "";
  const videoSectionEl = document.createElement("div");
  videoSectionEl.classList.add("container");
  videoSectionEl.classList.add("light-bg");
  videoSectionEl.innerHTML = `
    <div class="row align-items-center">
      <div class="col-12 col-md-6 py-5">
        <h2>Agjenncioni Troshupa ishte një ëndërr për të punuar për të</h2>
        <p class="my-4">
          Maecenas efficitur scelerisque lorem, et varius lacus tincidunt
          vel. Pellentesque a arcu vitae diam dapibus mattis vel vel orci.
          Vivamus eleifend nec felis vel auctor.
        </p>
        <figcaption class="reviewer-info d-flex align-items-center mt-5">
          <div class="px-3">
            <div class="fs-6 cl-blue-700 fw-bold"></div>
            <span class="mt-1 cl-primary"> </span>
          </div>
        </figcaption>
      </div>
      <div
        class="col-12 col-md-6 video-wrapper overflow-hidden b-6 position-relative"
      >
        <div
          class="action-wrapper position-absolute d-flex align-items-center text-white"
          style="bottom: 10%; left: 6%"
        >
          <i class="bi bi-play-circle-fill fs-1"></i>
          <a href="" class="mx-3 text-decoration-none text-white"
            >Play Video</a
          >
        </div>
        <a href="#">
          <video class="img-fit-cover" controls>
            <source src="./videos/video.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </a>
      </div>
    </div>
  `;
  videoSection.appendChild(videoSectionEl);
}
