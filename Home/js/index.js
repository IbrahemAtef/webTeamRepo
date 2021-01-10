//select landing page
let landingpage = document.querySelector(".landing-page")
//Get Array of Imgs
let imgsArray = ["newbac.png", "newbac1.png", "newbac2.png", "newbac3.png", "newbac4.png", "newbac5.png", "newbac6.png"];

setInterval(() => {
    //get random number
    let randomnumber = Math.floor(Math.random() * imgsArray.length);
    //change background imgs url
    landingpage.style.backgroundImage = 'url("imgs/' + imgsArray[randomnumber] + '")';

}, 10000);

//creat popup with img
let ourchefs = document.querySelectorAll(".chefs img");

ourchefs.forEach(img => {
    img.addEventListener('click', (e) => {
        //creat overlay
        let overlay = document.createElement("div");
        //add class
        overlay.className = 'popup-overlay';
        //append overlay to the body
        document.body.appendChild(overlay);

        //creat popup box
        let popupbox = document.createElement("div");

        //add class to popup box
        popupbox.className = 'popup-box';

        //creat the image
        let popupimage = document.createElement("img");

        //set image source
        popupimage.src = img.src;

        //add image to popup
        popupbox.appendChild(popupimage);

        //append popup box to body
        document.body.appendChild(popupbox);

        if (img.alt !== null) {
            //creat heading
            let name = document.createElement("h2");

            //creat text for heading
            let nametxt = document.createTextNode(img.alt);

            //append the text to heading
            name.appendChild(nametxt);

            //append heading to popup box
            popupbox.appendChild(name);
        }

        //creat the close span
        let closebutton = document.createElement("span");

        //creat the close button text
        let closebuttontxt = document.createTextNode("X");

        //append text to close button
        closebutton.appendChild(closebuttontxt);

        //add class name
        closebutton.className = 'close-button';

        //append close button to popup box
        popupbox.appendChild(closebutton);


    });

});

//close popup
document.addEventListener("click", function (e) {
    if (e.target.className == 'close-button') {
        //remove the popup box
        e.target.parentNode.remove();

        //remove overlay
        document.querySelector(".popup-overlay").remove();
    }
});

//select all bullets
const allbullets = document.querySelectorAll(".nav-bullets .bullets");

//select all links
const alllinks = document.querySelectorAll(".links a");

//select all Recpies types
const alltypes = document.querySelectorAll(".menurecpies li")

function scrolltosomewhere(element) {
    element.forEach(ele => {
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

scrolltosomewhere(allbullets);
scrolltosomewhere(alllinks);
scrolltosomewhere(alltypes);
