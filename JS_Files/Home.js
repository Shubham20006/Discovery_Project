window.addEventListener("DOMContentLoaded", function () {
    // load the elements in JS file
    let left = document.querySelector("#button1");
    let right = document.querySelector("#button2");
    let temp = document.querySelector(".temp");
    let title1 = document.querySelector(".title1");
    let title2 = document.querySelector(".title2");
    let location = document.querySelector(".location");



    let arr = [
        {
            temp: "78°F  -  10.7mph  - 88° ",
            title1: "Lake Tahoe,California",
            title2: "Homewood Mountain & Lake Club",
            location: "39.08629948516978° N / -120.1605391°W",
        },
        {
            temp: "39°F - 0mph  - 0° ",
            title1: "Silicon Valley,California",
            title2: "CordeValle",
            location: "37.067811° N / -121.632827°W",
        },
        {
            temp: "44°F - 0mph  - 0° ",
            title1: "La Quinta,California",
            title2: "Madison",
            location: "33.660960° N / -116.244456°W",
        },
        {
            temp: "45°F - 1mph -  257° ",
            title1: "La Quinta,California",
            title2: "Hideaway",
            location: "33.667059° N / -116.260879°W",
        },
        {
            temp: "57°F - 5mph -  20° ",
            title1: "Las Vegas,Nevada",
            title2: "The Summit",
            location: "36.1094° N / -115.3287°W",
        },
        {
            temp: "36°F  -3mph   -56° ",
            title1: "Scottsdale,Arizona",
            title2: "Estancia",
            location: "33.738105° N / -111.865240°W",
        },
        {
            temp: "35°F - 3mph -  56° ",
            title1: "Scottsdale,Arizona",
            title2: "Mirabel",
            location: "33.823760° N / -111.851592°W",
        },
        {
            temp: "54°F - 5mph -  345° ",
            title1: "Los Cabos,Mexico",
            title2: "El Dorado",
            location: "22.995771° N / -109.746423°W",
        },
        {
            temp: "61°F  -4mph  - 351° ",
            title1: "Cabo San Lucas,Mexico",
            title2: "Chileno Bay",
            location: "22.953650° N / -109.816218°W",
        },
        {
            temp: "37°F - 9mph -  200° ",
            title1: "British Columbia,Canada",
            title2: "James Island",
            location: "48.602830922° N / -123.342998628°W",
        },
    ];
    let counter = 0;
    temp.textContent = arr[0].temp;
    title1.textContent = arr[0].title1;
    title2.textContent = arr[0].title2;
    location.textContent = arr[0].location;

    left.addEventListener("click", function () {
        if (counter > 0) {
            counter = counter - 1;
            temp.textContent = arr[counter].temp;
            title1.textContent = arr[counter].title1;
            title2.textContent = arr[counter].title2;
            location.textContent = arr[counter].location;
        }
    });

    right.addEventListener("click", function () {
        if (counter < arr.length - 1) {
            counter = counter + 1;
            temp.textContent = arr[counter].temp;
            title1.textContent = arr[counter].title1;
            title2.textContent = arr[counter].title2;
            location.textContent = arr[counter].location;
        }
    });
});