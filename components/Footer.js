Footer();
function Footer() {
  const div = document.createElement("div");
  footer.innerHTML = "";
  div.classList.add("container");
  div.innerHTML = `
<div class="row gy-5">
<div class="col-12 col-sm-10 col-md-5 col-lg-5">
  <div class="brand-logo">
    <!-- Div i zbrazët për të ruajtur pozicionin -->
  </div>
  <div class="brand-tagline h2 my-3 w-75">
    AGJENCIONI TROSHUPA
  </div>
  <div class="brand-socials my-3 mt-4">
    <a href="#" class="mx-2"> <i class="bi bi-facebook"></i></a>
    <a href="#" class="mx-2"> <i class="bi bi-youtube"></i></a>
    <a href="#" class="mx-2"> <i class="bi bi-instagram"></i></a>
    <a href="#" class="mx-2"> <i class="bi bi-twitter"></i></a>
  </div>
</div>
<div class="col-12 col-md-7 col-lg-7">
  <div class="row gy-5">
    <div class="col-6 col-sm-5 col-lg-3">
      <div class="fw-6"></div>
      <div class="row gy-2 mt-2">
        <div><a href="#">Rreth nesh</a></div>
        <div><a href="#">Karriera</a></div>
        <div><a href="#">Shërbimet</a></div>
        <div><a href="#">Blog</a></div>
      </div>
    </div>
    <div class="col-6 col-sm-5 col-lg-3">
      <div class="fw-6"></div>
      <div class="row gy-2 mt-2">
        <div><a href="#">ytroshupa@com</a></div>
        <div><a href="#">+(383) 48/209-781</a></div>
      </div>
    </div>
      </div>
    </div>
  </div>
</div>
</div>
`;
  footer.appendChild(div);
}
