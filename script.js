// -------------Toggle Dark mode----------
let banner=document.querySelector('.banner');
const switchButton = document.getElementById('switch');
switchButton.addEventListener('click',()=>{
    banner.classList.toggle('light')
    document.body.classList.toggle('light');
    switchButton.classList.toggle('active')
})


// --------- tabs Change--------------------------------
    
        var tablinks=document.getElementsByClassName("tab-links");
        var tabcontents=document.getElementsByClassName("tab-contents");
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

// ---------Menus---------
var sdemenu=document.getElementById("sidemenu");
function openmenu(){
    sdemenu.style.right="0";
}
function closemenu(){
    sdemenu.style.right="-200px";
}

// ------------Form Send--------------------------------
    
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxzuYA4ReGeFpvBiA7VLhRvb-HwQ6kQsaqdrlMUFmJ5gEl3Xmx3Uy18VIPrfoVg-1Ui/exec';
        const form = document.forms['submit-to-google-sheet'];
        const msg=document.getElementById("msg");

        
        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => {
                  
                  msg.innerHTML="Message sent successfully"
                  setTimeout(function() {
                      msg.innerHTML=""
                  },5000)
                  form.reset()
              })
  
              .catch(error => {
                  msg.style.color="red"
                  msg.innerHTML="Error in your message"
                  setTimeout(function() {
                      msg.innerHTML=""
                  },5000)
                  form.reset()
              })
          })