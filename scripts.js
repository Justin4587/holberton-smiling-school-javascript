
function quotesBuilder(item, i) {
  let activeStatus = "";
  if (!i) {
    activeStatus = "active";
  };
  $("#carousel_testimonials").append(`
  <div class="carousel-item ${activeStatus}">
  <div class="row flex-wrap justify-content-center align-items-center m-5 px-3">
      <div class="d-flex flex-column col-3">
        <img src="${item.pic_url}" class="rounded-circle" width="160px" height="160px">
      </div>              
      <blockquote class="d-flex flex-wrap flex-column blockquote col-9">
      <p class="mb-0">« ${item.text}</p>
      <footer class="blockquote-footer text-white">${item.name}<cite class="Source Title"><br>${item.title}</cite></footer>
    </blockquote>  
  </div>
</div>`)
}

function tutorialsBuilder(item, i) {
  let activeStatus = "";
  if (!i) {
    activeStatus = "active";
  };
  $("#carousel_tutorials").append(`
  <div class="card carousel-item ${activeStatus} border-0" style="height: 335px; width: 255px">
  <div id="video-card-image" class="d-block align-self-center justify-content-center" style="background-image: url(${item.thumb_url}); background-size: cover; background-position: center; height: 154px; width: 255px;">
    <img src="./images/play.png" class="mx-auto my-5 d-block card-image align-self-center" style="width: 64px; height: 64px;">
  </div>
  <div class="card-body" style="height: 181px">
    <h5 class="card-title m-0 p-0">${item.title}</h5>
    <p class="card-text text-secondary">${item['sub-title']}</p>
    <div class="d-flex justify-content-start">
      <img src="${item.author_pic_url}" class="rounded-circle" width="30px" height="30px">
      <p class="text-purple">${item.author}</p>
    </div>
    <div class="d-flex justify-content-space-between">
      <img src="./images/star_on.png" width="15px" height="15px">
      <img src="./images/star_on.png" width="15px" height="15px">
      <img src="./images/star_on.png" width="15px" height="15px">
      <img src="./images/star_on.png" width="15px" height="15px">
      <img src="./images/star_off.png" width="15px" height="15px">
      <p class="text-purple">${item.duration}</p>
    </div>
  </div>
</div>`)
}

function latestBuilder(item, i) {
  let activeStatus = "";
  if (!i) {
    activeStatus = "active";
  };
  $("#carousel_latest").append(`
  <div class="card carousel-item ${activeStatus} border-0" style="height: 335px; width: 255px">
  <div id="video-card-image" class="d-block align-self-center justify-content-center" style="background-image: url(${item.thumb_url}); background-size: cover; background-position: center; height: 154px; width: 255px;">
    <img src="./images/play.png" class="mx-auto my-5 d-block card-image align-self-center" style="width: 64px; height: 64px;">
  </div>
  <div class="card-body" style="height: 181px">
    <h5 class="card-title m-0 p-0">${item.title}</h5>
    <p class="card-text text-secondary">${item['sub-title']}</p>
    <div class="d-flex justify-content-start">
      <img src="${item.author_pic_url}" class="rounded-circle" width="30px" height="30px">
      <p class="text-purple">${item.author}</p>
    </div>
    <div class="d-flex justify-content-space-between">
      <img src="./images/star_on.png" width="15px" height="15px">
      <img src="./images/star_on.png" width="15px" height="15px">
      <img src="./images/star_on.png" width="15px" height="15px">
      <img src="./images/star_on.png" width="15px" height="15px">
      <img src="./images/star_off.png" width="15px" height="15px">
      <p class="text-purple">${item.duration}</p>
    </div>
  </div>
</div>`)
}

function coursesBuilder(courses, i) {
  let activeStatus = "";
  if (!i) {
    activeStatus = "active";
  };
  $("#coursesResults").append(`
  <div class="card carousel-item ${activeStatus} border-0" style="height: 335px; width: 255px">
  <div id="video-card-image" class="d-block align-self-center justify-content-center" style="background-image: url(${courses.thumb_url}); background-size: cover; background-position: center; height: 154px; width: 255px;">
    <img src="./images/play.png" class="mx-auto my-5 d-block card-image align-self-center" style="width: 64px; height: 64px;">
  </div>
  <div class="card-body" style="height: 181px">
    <h5 class="card-title m-0 p-0">${courses.title}</h5>
    <p class="card-text text-secondary">${courses['sub-title']}</p>
    <div class="d-flex justify-content-start">
      <img src="${courses.author_pic_url}" class="rounded-circle" width="30px" height="30px">
      <p class="text-purple">${courses.author}</p>
    </div>
    <div class="d-flex justify-content-space-between">
      <img src="./images/star_on.png" width="15px" height="15px">
      <img src="./images/star_on.png" width="15px" height="15px">
      <img src="./images/star_on.png" width="15px" height="15px">
      <img src="./images/star_on.png" width="15px" height="15px">
      <img src="./images/star_off.png" width="15px" height="15px">
      <p class="text-purple">${courses.duration}</p>
    </div>
  </div>
</div>`)
}

async function quotesData () {
  $.ajax({
    url: "https://smileschool-api.hbtn.info/quotes",
    method: "GET",
    contentType: "application/json",
    success: function (result) {
      $("#carousel_testimonials").empty();
      hideSpinner();
      result.forEach((item, i) => {
        quotesBuilder(item, i);
      });
    }
  });
}

async function tutorialsData () {
  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    contentType: "application/json",
    success: function (result) {
      $("#carousel_tutorials").empty();
      hideSpinner();
      result.forEach((item, i) => {
        console.log(i);
        tutorialsBuilder(item, i);
      });
    }
  });
}

async function latestData () {
  $.ajax({
    url: "https://smileschool-api.hbtn.info/latest-videos",
    method: "GET",
    contentType: "application/json",
    success: function (result) {
      $("#carousel_latest").empty();
      hideSpinner();
      result.forEach((item, i) => {
        console.log(i);
        latestBuilder(item, i);
      });
    }
  });
}

async function coursesData () {
  $.ajax({
    url: "https://smileschool-api.hbtn.info/courses",
    method: "GET",
    contentType: "application/json",
    success: function (result) {
      $("#coursesResults").empty();
      const {courses} = result;
      hideSpinner();
      courses.forEach((courses, i) => {
        console.log(courses);
        console.log(result);
        coursesBuilder(courses, i);
      });
    }
  });
}

// Function to hide the Spinner
function hideSpinner() {
	document.getElementById('spinner').style.display = 'none';
}

window.onload = () => {
  quotesData();
  tutorialsData();
  latestData();
  coursesData();
}
