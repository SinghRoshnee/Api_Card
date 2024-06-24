const btn = document.querySelector("button");
const box = document.querySelector(".box");
btn.addEventListener("click", (e) => {
  console.log(e);
  box.style.height = "450px";
  box.style.width = "470px";
  btn.style.display = "none";

  let requestUrl = "https://api.github.com/users/SinghRoshnee";
  let hmlrequest = new XMLHttpRequest();
  hmlrequest.open("GET", requestUrl);
  hmlrequest.onreadystatechange = function () {
    //   console.log(hmlrequest.readyState);
    if (hmlrequest.readyState === 4) {
      let edata = JSON.parse(this.responseText);

      // Update the login paragraph
      document.querySelector(".login").innerHTML = `Username is ${edata.login}`;
      console.log(edata.login);

      // Create the image element and insert it after the login paragraph
      var x = document.createElement("IMG");
      x.setAttribute("src", edata.avatar_url);
      x.setAttribute("width", "100");
      x.setAttribute("height", "100");
      x.style.margin = "20px";
      document.querySelector(".login").insertAdjacentElement("afterend", x);

      console.log(`avatar is ${edata.avatar_url}`);
      document.querySelector(
        ".folowing"
      ).innerHTML = `Following are ${edata.following}`;
      console.log(edata.following);
      document.querySelector(
        ".followers"
      ).innerHTML = `Followers are ${edata.followers}`;
      console.log(edata.followers);

      document.querySelector(
        ".repo"
      ).innerHTML = `Number of Repositories is :  ${edata.public_repos}`;
      console.log(`repository count is ${edata.public_repos}`);
    }
  };

  hmlrequest.send();
});
