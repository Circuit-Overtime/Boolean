function typeWriterEffectHTML(idOfTextHolder, textToType, speed) {
    var i = 0;
    var speed = speed || 55; // Default speed if not provided
    document.getElementById(idOfTextHolder).innerHTML = "";
    function type() {
        if (i < textToType.length) {
            document.getElementById(idOfTextHolder).innerHTML += textToType.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type(); // Call the function to start the typing effect
    
  }
  
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
      location.replace("skills.htm");
    }) //feature for website link
  
    document.getElementById("redirectWebsiteCV").addEventListener("click", () => {
      location.replace("cv.htm");
    }) //feature for cv link
  
  
      document.getElementById("profileLogoCont").addEventListener("load", () => {
       
      })
  
      window.onload = e => {
          document.getElementById("LazyLoadprofileLogoCont").style.opacity = 0;
      }
  
      typeWriterEffectHTML("classDesc","Medal of Excellence SOF CSE 19' | 3rd Position SOF CSE 14' | 2nd Position SOF CSE 18' | LSA exe.BIT Runners 20' | GFG BiWizard - World Rank 120 22' | GFG - BiWizard - World Rank 114 23' | Techverse2.0 Winner", 32)