const googlePlaceholder = document.querySelector('.g-place')
const youtube1Placeholder = document.querySelector('.y1-place');
const youtube2Placeholder = document.querySelector('.y2-place');
const input = document.querySelectorAll("input");


const gPlaceValue = "search or enter url"
let i = 0;
setInterval(() => {
    googlePlaceholder.innerHTML += gPlaceValue[i];
    i++;
    if (i == 20) {
        i = 0;
        googlePlaceholder.innerHTML = "";
    }
}, 200)


const y1PlaceValue = "youtube Search";
let j = 0;
setInterval(() => {
    youtube1Placeholder.innerHTML += y1PlaceValue[j];
    j++;
    if (j == 15) {
        j = 0;
        youtube1Placeholder.innerHTML = "";
    }
}, 200)





const y2PlaceValue = "youtube Search";
let k = 0;
setInterval(() => {
    youtube2Placeholder.innerHTML += y2PlaceValue[k];
    k++;
    if (k == 15) {
        k = 0;
        youtube2Placeholder.innerHTML = "";
    }
}, 200)


input[0].addEventListener("focusin", (e) => {
    googlePlaceholder.style.display = "none";
});

input[1].addEventListener("focusin", (e) => {
    youtube1Placeholder.style.display = "none"
})

input[2].addEventListener("focusin", (e) => {
    youtube2Placeholder.style.display = "none"
})

input[0].addEventListener("focusout", (e) => {
    i = 0;
    googlePlaceholder.innerHTML = "";
    if (e.target.value == "") {
        googlePlaceholder.style.display = "inline-block";
    }
});


input[1].addEventListener("focusout", (e) => {
    j = 0;
    youtube1Placeholder.innerHTML = "";
    if (e.target.value == "") {
        youtube1Placeholder.style.display = "inline"
    }
});


input[2].addEventListener("focusout", (e) => {
    k = 0;
    youtube2Placeholder.innerHTML = "";
    if (e.target.value == "") {
        youtube2Placeholder.style.display = "inline"
    }
})


function search_google(ele) {
    if (event.key === 'Enter') {
        let value = (ele.value).toString();
        if (value.includes("http://", 0) || value.includes("https://", 0)) {
            location.href = value;
        }
        else {
            location.href = `https://www.google.com/search?q=${value}`;
        }
    }
}


function search_youtube(ele) {
    if (event.key === 'Enter') {
        location.href = `https://www.youtube.com/results?search_query=${ele.value}`;
    }
}

function gitHub() {
    location.href = `https://github.com`;
}

function chatGpt() {
    location.href = `https://chat.openai.com/`;
}

function linkedin() {
    location.href = `https://www.linkedin.com/feed/`;
}

function gmail() {
    location.href = `https://mail.google.com/mail/u/0/#inbox`;
}