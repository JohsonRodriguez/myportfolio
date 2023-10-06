var data= {
    chatinit:{
        title: ["Hi there <span class='emoji'> &#128075;</span>","what do you want to create today?"],
        options: ["Web 🌐","App 📲"]
    },
    web: {
        title:["We are going to create a website 👨🏻‍💻", "and what kind do you want?"],
        options:['Landing Page','Ecommerce','WebApp'],
        url : {
            
        }
    },
    
    app: {
        title:["Thanks for your response","We are make a beatiful Andriod app for you","Click on contact me"],
        options:[""],
        url : {
            more:"https://wa.me/19108133673?text=I'm%20interested%20work%20with%20you",
            link:["#"]
        }
    },
    landing: {
        title:["Thanks for your response","We are make a beatiful Landing page for you","Click on contact me"],
        options:[""],
        url : {
            more:"https://wa.me/19108133673?text=I'm%20interested%20work%20with%20you",
            link:["#"]
        }
    },
    ecommerce: {
        title:["Thanks for your response","We are make a beatiful E-commerce page for you","Click on contact me"],
        options:[""],
        url : {
            more:"https://wa.me/19108133673?text=I'm%20interested%20work%20with%20you",
            link:["#"]
        }
    },
    webapp: {
        title:["Thanks for your response","We are make a beatiful Web App page for you","Click on contact me"],
        options:[""],
        url : {
            more:"https://wa.me/19108133673?text=I'm%20interested%20work%20with%20you",
            link:["#"]
        }
    }

}
const chatbotToggler = document.querySelector(".chatbot-toggler");
chatbotToggler.addEventListener("click", initChat);
var cbot= document.getElementById("chat-box");
var len1= data.chatinit.title.length;


function initChat(){
    document.body.classList.toggle("show-chatbot");
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    // var elm= document.createElement("p");
    // elm.innerHTML= this.innerText;
    // elm.setAttribute("class","msg2");
    // cbot.appendChild(elm);

    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
     document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","msg2");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);
    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.more+'">'+'Contac me</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt link");
        cbot.appendChild(opt);
    }
    handleScroll();

}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}