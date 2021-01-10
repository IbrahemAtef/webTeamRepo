
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

const totop = document.querySelector(".bullets");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        totop.style.display = "block";
    }
    else {
        totop.style.display = "none";
    }
});

const dive = document.querySelectorAll(".r-box");
dive.forEach(dive => {
    document.addEventListener("click", function (e) {
        console.log(e);
        if (e.target.dataset.section == 'f-grill') {
            let linere = document.querySelectorAll(".line-re h5");
            linere.forEach(el => {
                el.style.color = 'black'
            });
            let divgrill = document.querySelectorAll("#grills");
            divgrill.forEach(divgrill => {
                divgrill.style.display = "block";
                e.target.style.color = '#ff9800';
            });
            dive.style.display = "none";
        }
        else if (e.target.dataset.section == 'f-Pastries') {
            let linere = document.querySelectorAll(".line-re h5");
            linere.forEach(el => {
                el.style.color = 'black'
            });
            let divPastries = document.querySelectorAll("#Pastries");
            divPastries.forEach(divPastries => {
                divPastries.style.display = "block";
                e.target.style.color = '#ff9800';
            });
            dive.style.display = "none";
        }
        else if (e.target.dataset.section == 'f-Soups') {
            let linere = document.querySelectorAll(".line-re h5");
            linere.forEach(el => {
                el.style.color = 'black'
            });
            let divSoups = document.querySelectorAll("#Soups");
            divSoups.forEach(divSoups => {
                divSoups.style.display = "block";
                e.target.style.color = '#ff9800';
            });
            dive.style.display = "none";
        }
        else if (e.target.dataset.section == 'f-Seafood') {
            let linere = document.querySelectorAll(".line-re h5");
            linere.forEach(el => {
                el.style.color = 'black'
            });
            let divSeafood = document.querySelectorAll("#Seafood");
            divSeafood.forEach(divSeafood => {
                divSeafood.style.display = "block";
                e.target.style.color = '#ff9800';
            });
            dive.style.display = "none";
        }
        else if (e.target.dataset.section == 'f-Popular-dishes') {
            let linere = document.querySelectorAll(".line-re h5");
            linere.forEach(el => {
                el.style.color = 'black'
            });
            let divPopulardishes = document.querySelectorAll("#Popular-dishes");
            divPopulardishes.forEach(divPopulardishes => {
                divPopulardishes.style.display = "block";
                e.target.style.color = '#ff9800';
            });
            dive.style.display = "none";
        }
        else if (e.target.dataset.section == 'f-sweets') {
            let linere = document.querySelectorAll(".line-re h5");
            linere.forEach(el => {
                el.style.color = 'black'
            });
            let divsweets = document.querySelectorAll("#sweets");
            divsweets.forEach(divsweets => {
                divsweets.style.display = "block";
                e.target.style.color = '#ff9800';
            });
            dive.style.display = "none";
        }
        else {
            if (e.target.dataset.section == 'all') {
                let linere = document.querySelectorAll(".line-re h5");
                linere.forEach(el => {
                    el.style.color = 'black'
                });
                dive.style.display = "block";
                e.target.style.color = '#ff9800';
            }
        }
    });
});

