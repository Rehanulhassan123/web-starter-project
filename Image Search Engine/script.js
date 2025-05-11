const input = document.querySelector("#input");
const searchForm = document.querySelector(".searchForm");
const showImages = document.querySelector(".searchResults");
const showMoreBtn = document.querySelector(".showMore");
let page = 1;
let serachText = "";
let URL = "";
let accessID = "your access id";
async function getImages() {
  serachText = input.value;
  const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${serachText}&client_id=${accessID}&per_page=12`;
  try {
    const response = await fetch(URL);

    if (response.ok) {
      const data = await response.json();
      let results = data.results;
      if (page === 1) {
        showImages.innerHTML = "";
      }
      results.map((res) => {
        let img = document.createElement("img");
        img.src = res.urls.small;
        let imageLink = document.createElement("a");
        imageLink.href = res.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(img);
        showImages.appendChild(imageLink);
      });
      showMoreBtn.style.display = "block";
    } else {
      console.log("Error in Fetching the Data");
    }
  } catch (error) {
    console.log("Error occured", error);
  }
}
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  getImages();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  getImages();
});
