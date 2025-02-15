const Data_URL = 'your_data_url_here'; // Make sure to replace this with your actual data URL

async function getPosts(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    showPostSection(data);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

function showPostSection(data) {
  const postsSection = document.querySelectorAll('.posts-section'); // Ensure you have the correct selector

  postsSection.forEach((section) => {
    const currentSection = section;
    currentSection.innerHTML = ''; // Clear current section's inner HTML

    const categoryName = section.dataset.postsCategory;
    const categoryData = data.find((category) => category.name === categoryName);

    if (categoryData) {
      const { title, description, PostsObject } = categoryData;

      const sectionContainer = document.createElement('div');
      sectionContainer.classList.add('container');

      const row = document.createElement('div');
      row.classList.add('row', 'gy-4');

      const textWrapper = document.createElement('div');
      textWrapper.classList.add('col-12', 'col-sm-10', 'col-md-8', 'col-lg-7');
      textWrapper.innerHTML = `
        <h2 class="cl-blue-900">${title}</h2>
        <p class="mt-3">${description}</p>
      `;

      const postWrapper = document.createElement('div');
      postWrapper.classList.add('col-12');
      const postWrapperRow = document.createElement('div');
      postWrapperRow.classList.add('row', 'row-cols-1', 'row-cols-sm-2', 'row-cols-md-3', 'mt-3');

      PostsObject.forEach((post) => {
        const { title, imgURL, description } = post;
        const postEl = document.createElement('div');
        postEl.classList.add('col');
        postEl.innerHTML = `
          <div class="card h-100 border-0 bg-transparent">
            <img src="${imgURL}" class="card-img-top b-6" alt="${title}" />
            <div class="card-body px-0 py-4">
              <h5 class="card-title cl-primary-800">${title}</h5>
              <p class="card-text cl-battelshipGrey-600">${description}</p>
              <a href="./BlogInner.html" class="">Card link <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
        `;
        postWrapperRow.appendChild(postEl);
      });

      postWrapper.appendChild(postWrapperRow);
      row.appendChild(textWrapper);
      row.appendChild(postWrapper);
      sectionContainer.appendChild(row);
      currentSection.appendChild(sectionContainer);
    }
  });
}

// Call the function with your data URL
getPosts(Data_URL);
