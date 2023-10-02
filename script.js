let banner=document.querySelector('.banner');
const switchButton = document.getElementById('switch');
switchButton.addEventListener('click',()=>{
    banner.classList.toggle('light')
    document.body.classList.toggle('light');
    switchButton.classList.toggle('active')
})


// let banner=document.querySelector('.banner');
// const switchButton = document.getElementById('switch');
// switchButton.onclick=function(){
//         banner.classList.toggle('.light')
//         document.body.classList.toggle('light');
//     switchButton.classList.toggle('active')
//     }

    // let banner=document.querySelector('.banner');
    // let dayNight=document.querySelector('.dayNight');
    // dayNight.onclick=function(){
    //     banner.classList.toggle('night')
    // }