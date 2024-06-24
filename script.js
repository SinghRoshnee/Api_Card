const btn = document.querySelector("button");
const box = document.querySelector(".box");
btn.addEventListener("click", (e) => {
  console.log(e);
  box.style.height = " 450px";
  box.style.width = " 470px";
  btn.style.display = "none";

  let requestUrl = "https://api.github.com/users/SinghRoshnee";
  let hmlrequest = new XMLHttpRequest();
  hmlrequest.open("GET", requestUrl);
  hmlrequest.onreadystatechange = function () {
    //   console.log(hmlrequest.readyState);
    if (hmlrequest.readyState === 4) {
      let edata = JSON.parse(this.responseText);
      document.querySelector(".login").innerHTML = `Username is ${edata.login}`;
      console.log(edata.login);
      var x = document.createElement("IMG");
      x.setAttribute("src", edata.avatar_url);
      x.setAttribute("width", "100");
      x.setAttribute("height", "100");
      x.style.margin = "20px";
      box.appendChild(x);
      console.log(`avatr is ${edata.avatar_url}`);
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
      ).innerHTML = `Repository link is :  ${edata.repos_url}`;

      console.log(`repository  is  ${edata.repos_url}`);
    }
  };

  hmlrequest.send();
});
