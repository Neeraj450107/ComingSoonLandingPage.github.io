const scriptURL = 'https://script.google.com/macros/s/AKfycbx6iyeffUvmWFVnA23gyH7kiraIOE-Xo2wu4WVBD0_Rus_CdZ75twWmNcIciZ8onKhjaA/exec'


const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Congrats , You Have Successfully Registered !"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
       
        
      })
       form.reset()
      
        
      .catch(error => console.error('Error!', error.message))
});