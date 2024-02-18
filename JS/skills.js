document.getElementById("linkedinRedirect").addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/ayushmanhere/", "_blank") //respective social links
  })
  
  document.getElementById("instagramRedirect").addEventListener("click", () => {
    window.open("https://www.instagram.com/_b00lean_/", "_blank") //respective social links
  })
  
  
  document.getElementById("githubRedirect").addEventListener("click", () => {
    window.open("https://github.com/Circuit-Overtime", "_blank") //respective social links
  })
  

  document.getElementById("redirectWebsite").addEventListener("click", () => {
    location.replace("portfolio.htm");
  }) //feature for website link
document.getElementById("mainContainer").style.opacity = 0;
  window.onload = e => {
    
    setTimeout(() => {
      document.getElementById("mainContainer").style.opacity = 1;        
      document.querySelectorAll(".slow").forEach((elm, index) => {
        document.querySelectorAll(".slow")[index].style.opacity = "0";
        setTimeout(() => {
          document.querySelectorAll(".slow")[index].style.transition = (1*index)+"s";
          document.querySelectorAll(".slow")[index].style.opacity = "1";
        }, 500);

      })
    }, 500);

  }