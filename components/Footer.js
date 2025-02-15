Footer();
function Footer() {
  const div = document.createElement("div");
  footer.innerHTML = "";
  div.classList.add("container");
  div.innerHTML = `
<div class="row gy-5">
<div class="col-12 col-md-7 col-lg-7">
  <div class="row gy-5">
    <div class="col-6 col-sm-5 col-lg-3">
      <div class="fw-6">Troshupa</div>
      <div class="row gy-2 mt-2">
        <div><a href="#">Rreth nesh</a></div>
        <div><a href="#">Karriera</a></div>
        <div><a href="#">Shërbimet</a></div>
        <div><a href="#">Blog</a></div>
      </div>
    </div>
    <div class="col-6 col-sm-5 col-lg-3">
      <div class="fw-6">Connect</div>
      <div class="row gy-2 mt-2">
        <div><a href="#">murati.arianit@com</a></div>
        <div><a href="#">+(383) 48/209-781</a></div>
      </div>
    </div>
    <div class="col-10 col-sm-10 col-lg-6">
      <div class="fw-6">Join Newsletter</div>
      <div class="row mt-2">
        <form>
          <input
            class="w-100 my-2 py-2 px-3 rounded-pill border-0"
            type="text"
            name=""
            id=""
            placeholder="Shkruani emailin këtu"
            required
          />
          <button type="button" class="btn btn-warning rounded-pill bg-brand-primay">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
`;
  footer.appendChild(div);
}
