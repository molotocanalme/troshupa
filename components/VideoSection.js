showReview();
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
                <img
                  class="img-fit-cover"
                  src="./images/Videosection-Img.png"
                  alt=""
                  srcset=""
                />
              </a>
            </div>
          </div>
    `;
  videoSection.appendChild(videoSectionEl);
}
