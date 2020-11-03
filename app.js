const container = document.querySelector(".container");

function showDescriptionModal() {
  console.log("modal");
}

async function getJobs() {
  let response = await fetch(
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?&location=america"
  );
  response.json().then((data) => {
    data.map((job) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <div class="company-info">
          <h3 class="company-name">${job.company}</h3>
          <img src="${
            job.company_logo ? job.company_logo : "logo_notfound.png"
          }" alt="company logo"/>
        </div>

        <hr>

        <div class="job-info">
          <h4 class="job-title">${job.title}</h4>
          <p class="job-description">${job.description
            .split(" ")
            .splice(0, 50)
            .join(" ")}<button class="btn-showMoreDescription">....</button></p>
        </div>

        <hr>

        <div>
          <p>Posted on: ${job.created_at.substr(0, 16)}</p>
        </div>
      `;
      container.append(card);
      document
        .querySelector(".btn-showMoreDescription")
        .addEventListener("click", showDescriptionModal);
    });
  });
}

getJobs();

// company: "FaceCake Marketing Technologies, Inc."
// company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBckdOIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c37bb6d7ee0e1a6600c04b74332bd8bcb914d060/FC_Logo_BLK_Correct.png"
// company_url: null
// created_at: "Mon Nov 02 23:18:42 UTC 2020"
// description:
// how_to_apply: "<p>Email resumé to: <a href="mailto:recruiting@facecake.com">recruiting@facecake.com</a></p>↵"
// id: "46119d88-207c-4830-a643-8353e5a67ca9"
// location: "91367"
// title: "Senior Front-End Web Developer"
// type: "Full Time"
// url: "https://jobs.gi
