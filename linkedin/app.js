let profileMenu = document.getElementById("profileMenu");

let seeMore = document.getElementById("see-more");

let seeLess = document.getElementById("see-more-link");

let sidebarActivity = document.getElementById("sidebarActivity");

let moreLink = document.getElementById("showMoreLink");

 

function toggleMenu() {

  profileMenu.classList.toggle("open-menu");

}

function toggleMenu1() {

  seeMore.classList.toggle("hidden");

  if (seeMore.classList.contains("hidden")) {

    seeLess.innerHTML = "See More...";

  } else {

    seeLess.innerHTML = "See Less...";

  }

}

function toggleActivity() {

  sidebarActivity.classList.toggle("open-activity");

  if (sidebarActivity.classList.contains("open-activity")) {

    moreLink.innerHTML = "Show Less <b>-</b>";

  } else {

    moreLink.innerHTML = "Show more <b>+</b>";

  }

}