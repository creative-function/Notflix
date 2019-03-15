console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

// CHARACTERS
let garnetButton = document.querySelector(".garnetIMG");
let pearlButton = document.querySelector(".pearlIMG");
let stevenButton = document.querySelector(".stevenIMG");
let ameButton = document.querySelector(".ameIMG");

//LOGO AND DESCRIPTION

let showLogo = document.querySelector(".showLogo");
let showDescription = document.querySelector(".show-description");

// GEM-TABS

let garnetTab = document.querySelector(".garnet-tab");
let pearlGemTab = document.querySelector(".pearl-tab");
let stevenGemTab = document.querySelector(".steven-tab");
let ameGemTab = document.querySelector(".ame-tab");

// POPOUT-BOXES

let garnetInfoPopout = document.querySelector(".garnet-info");
let pearlInfoPopout = document.querySelector(".pearl-info");
let stevenInfoPopout = document.querySelector(".steven-info");
let ameInfoPopout = document.querySelector(".ame-info");

//ONLOAD VARIABLES
let onloadGems = document.querySelectorAll(".popout-styling");


//GARNET TOGGLE CODE

let garnetPopoutOpen = false;
let toggleGarnetPopout = function(event) {
    event.stopPropagation();
    console.log("Garnet toggle activated");

    if (!garnetPopoutOpen) {
        TweenMax.to('.popout-styling:nth-child(1)', 1, {
            x: '-100%',
            ease: Back.easeOut
        }, 0.5);
        garnetPopoutOpen = true;
    } else {
        TweenMax.to('.popout-styling:nth-child(1)', 1, {
            x: '0%',
            ease: Back.easeIn
        }, 0.5);
        garnetPopoutOpen = false;
    }
}
garnetButton.addEventListener("click", toggleGarnetPopout);
garnetTab.addEventListener("click", toggleGarnetPopout);
garnetInfoPopout.addEventListener("click",toggleGarnetPopout);

// PEARL TOGGLE CODE

let pearlPopoutOpen = false;
let togglePearlPopout= function(event) {
    event.stopPropagation();
    console.log("Pearl toggle activated");

    if (!pearlPopoutOpen) {
        TweenMax.to('.popout-styling:nth-child(2)', 1, {
            x: '-100%',
            ease: Back.easeOut
        }, 0.5);
        pearlPopoutOpen = true;
    } else {
        TweenMax.to('.popout-styling:nth-child(2)', 1, {
            x: '0%',
            ease: Back.easeIn
        }, 0.5);
        pearlPopoutOpen = false;
    }
}


pearlButton.addEventListener("click", togglePearlPopout);
pearlGemTab.addEventListener("click",togglePearlPopout);
pearlInfoPopout.addEventListener("click",togglePearlPopout);

//STEVEN TOGGLE CODE

let stevenPopoutOpen = false;
let toggleStevenPopout = function(event) {
    event.stopPropagation();
    console.log("Steven toggle activated");

    if (!stevenPopoutOpen) {
        TweenMax.to('.popout-styling:nth-child(3)', 1, {
            x: '-100%',
            ease: Back.easeOut
        }, 0.5);
        stevenPopoutOpen = true;
    } else {
        TweenMax.to('.popout-styling:nth-child(3)', 1, {
            x: '0%',
            ease: Back.easeIn
        }, 0.5);
        stevenPopoutOpen = false;
    }
}

stevenButton.addEventListener("click", toggleStevenPopout);
stevenGemTab.addEventListener("click", toggleStevenPopout);
stevenInfoPopout.addEventListener("click", toggleStevenPopout);


//AME TOGGLE CODE


let amePopoutOpen = false;
let toggleAmePopout= function(event) {
    event.stopPropagation();
    console.log("toggle activated");

    if (!amePopoutOpen) {
        TweenMax.to('.popout-styling:nth-child(4)', 1, {
            x: '-100%',
            ease: Back.easeOut
        }, 0.5);
        amePopoutOpen = true;
    } else {
        TweenMax.to('.popout-styling:nth-child(4)', 1, {
            x: '0%',
            ease: Back.easeIn
        }, 0.5);
        amePopoutOpen = false;
    }
}

ameButton.addEventListener("click", toggleAmePopout);
ameGemTab.addEventListener("click", toggleAmePopout);
ameInfoPopout.addEventListener("click", toggleAmePopout);


// ONLOAD ANIMATIONS



let tl = new TimelineLite();

window.onload = function(){
    
    
    TweenMax.staggerTo(onloadGems,.5,{
        x:0
    } ,.25)
    
    console.log("gems have loaded");


    tl.from(garnetButton, 1,{x:-100})
        .from(pearlButton,1,{
            opacity:0
        })
        .from(stevenButton,1,{scale:.5})
        .from(ameButton,1,{x:100})
        .from(showLogo,1,{y:-100})
        .from(showDescription,1,{opacity:0,y:-100});
}