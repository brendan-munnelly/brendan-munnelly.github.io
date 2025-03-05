
// Copy code sample to clipboard

    document.querySelectorAll('.copy-code').forEach(button => {
        button.addEventListener('click', function() {
          const btnId = this.id;
          const codeId = btnId.replace('btn-', 'strCode-');
          const text = document.getElementById(codeId).textContent;
          console.log(`codeId = ${codeId}`);
          
          navigator.clipboard.writeText(text)
            .then(() => { // Remove the parameter here
              // Temporary visual feedback
              const originalText = this.innerHTML;
              this.innerHTML = 'Copied <i class=\"fa-solid fa-check\"><\/i>';
              document.getElementById(btnId).style.color = "#00ff00";
              document.getElementById(btnId).style.borderColor = "#00ff00";
              setTimeout(() => {
                this.innerHTML = originalText;
                document.getElementById(btnId).style.color = "";
                document.getElementById(btnId).style.borderColor = "";
              }, 2000);
            })
            .catch(err => {
              console.error('Failed to copy: ', err);
            });
        });
      });
 
    
    document.querySelectorAll('.copy-html').forEach(button => {
        button.addEventListener('click', function() {
          const btnId = this.id;
          const codeId = btnId.replace('btn-', 'strCode-');
          const text = document.getElementById(codeId).textContent;
          console.log(`codeId = ${codeId}`);
          
          navigator.clipboard.writeText(text)
            .then(() => { // Remove the parameter here
              // Temporary visual feedback
              const originalText = this.innerHTML;
              this.innerHTML = 'Copied <i class=\"fa-solid fa-check\"><\/i>';
              document.getElementById(btnId).style.color = "#00ff00";
              document.getElementById(btnId).style.borderColor = "#00ff00";
              setTimeout(() => {
                this.innerHTML = originalText;
                document.getElementById(btnId).style.color = "";
                document.getElementById(btnId).style.borderColor = "";
              }, 2000);
            })
            .catch(err => {
              console.error('Failed to copy: ', err);
            });
        });
      });
 

    document.querySelectorAll('.copy-css').forEach(button => {
        button.addEventListener('click', function() {
          const btnId = this.id;
          const codeId = btnId.replace('btn-', 'strCode-');
          const text = document.getElementById(codeId).textContent;
          console.log(`codeId = ${codeId}`);
          
          navigator.clipboard.writeText(text)
            .then(() => { // Remove the parameter here
              // Temporary visual feedback
              const originalText = this.innerHTML;
              this.innerHTML = 'Copied <i class=\"fa-solid fa-check\"><\/i>';
              document.getElementById(btnId).style.color = "#00ff00";
              document.getElementById(btnId).style.borderColor = "#00ff00";
              setTimeout(() => {
                this.innerHTML = originalText;
                document.getElementById(btnId).style.color = "";
                document.getElementById(btnId).style.borderColor = "";
              }, 2000);
            })
            .catch(err => {
              console.error('Failed to copy: ', err);
            });
        });
      });

      document.querySelectorAll('.copy-gpt').forEach(button => {
        button.addEventListener('click', function() {
          const btnId = this.id;
          const codeId = btnId.replace('btn-', 'strCode-');
          const text = document.getElementById(codeId).textContent;
          console.log(`codeId = ${codeId}`);
          
          navigator.clipboard.writeText(text)
            .then(() => { // Remove the parameter here
              // Temporary visual feedback
              const originalText = this.innerHTML;
              this.innerHTML = 'Copied <i class=\"fa-solid fa-check\"><\/i>';
              document.getElementById(btnId).style.color = "#00ff00";
              document.getElementById(btnId).style.borderColor = "#00ff00";
              setTimeout(() => {
                this.innerHTML = originalText;
                document.getElementById(btnId).style.color = "";
                document.getElementById(btnId).style.borderColor = "";
              }, 2000);
            })
            .catch(err => {
              console.error('Failed to copy: ', err);
            });
        });
      });



    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes("firefox")) {
        document.documentElement.classList.add("firefox");
    } else if (userAgent.includes("chrome") && !userAgent.includes("edg")) {
        document.documentElement.classList.add("chrome");
    } else if (userAgent.includes("safari") && !userAgent.includes("chrome")) {
        document.documentElement.classList.add("safari");
    }
    else {
        document.documentElement.classList.add("chrome");
    }










