let imagesArray = ['url(./assests/1.jpeg)','url(./assests/2.jpeg)','url(./assests/3.jpeg)','url(./assests/4.jpeg)','url(./assests/5.jpeg)'];

setInterval(e=>{
    // for(let i =0; i<imagesArray.length; i++){
        random = Math.floor(Math.random()*5);
        document.body.style.backgroundImage = imagesArray[random]
    // }
}, 2000)