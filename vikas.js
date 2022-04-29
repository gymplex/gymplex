let imagesArray = ['url(./assests/v1.jpeg)','url(./assests/v2.jpeg)','url(./assests/v3.jpeg)','url(./assests/v4.jpeg)','url(./assests/v5.jpeg)'];

setInterval(e=>{
    // for(let i =0; i<imagesArray.length; i++){
        random = Math.floor(Math.random()*5);
        document.body.style.backgroundImage = imagesArray[random]
    // }
}, 2000)