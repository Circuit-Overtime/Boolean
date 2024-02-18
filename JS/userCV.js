document.getElementById("redirectWebsite").addEventListener("click", () => {
    location.replace("portfolio.htm");
  }) //feature for website link

  document.getElementById("redirectSocial").addEventListener("click", () => {
    location.replace("skills.html");
  }) //feature for cv link


  document.querySelectorAll(".longLoad").forEach(elm => {
    document.querySelectorAll("."+elm.classList[0])[0].addEventListener("load", () => {
      document.querySelector(".slowLoadOne").style.opacity = "0"
    })
    document.querySelectorAll("."+elm.classList[0])[1].addEventListener("load", () => {
      document.querySelector(".slowLoadTwo").style.opacity = "0"
    })
  })


  document.getElementById("linkedinRedirect").addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/ayushmanhere/", "_blank") //respective social links
  })
  
  document.getElementById("instagramRedirect").addEventListener("click", () => {
    window.open("https://www.instagram.com/_b00lean_/", "_blank") //respective social links
  })
  
  
  document.getElementById("githubRedirect").addEventListener("click", () => {
    window.open("https://github.com/Circuit-Overtime", "_blank") //respective social links
  })
