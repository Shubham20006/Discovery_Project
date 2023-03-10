window.addEventListener("DOMContentLoaded", function () {
    // load the elements in JS file
    let left = document.querySelector("#button1");
    let right = document.querySelector("#button2");
    let title = document.querySelector(".title");
    let desc = document.querySelector(".desc");

    let arr = [
        {
            title: "Discovery's newest property in Kaua'i North Shore Preserve",
             desc: "Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kaua'i. North Shore Preserve, a one-of- a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings."
        },
        {
            title: "James Island Discovery's Newest Property",
            desc: "Discovery Land Company is excited to announce our 24th private luxury residential community. James Island Golf and Ocean Club, a 780-acre private island in British Columbia with only 76 lots, is Discovery Land Company's most exclusive community to date and Discovery's first project in Caneda,"
        },
        {
            title: "CostaTerra Discovery's 23rd property",
            desc: "Discovery Land Company, the world's leading developer of luxury private residential communities,clubs and resorts has announced its 23rd property and first in Europe,"
        },
        {
            title: "Troubadour To Open Golf Course Fall 2019",
            desc: "Troubadour Golf & Field Club, a Discovery Land Company community, is pleased to announce the opening of its 18-hole Tom Fazio-designed golf course this fall"
        },
    ];
    let counter = 0;
    title.textContent = arr[0].title;
    desc.textContent = arr[0].desc;
   
    left.addEventListener("click", function() {
        if (counter > 0) {
            counter = counter - 1;
            title.textContent = arr[counter].title;
            desc.textContent = arr[counter].desc;
        }
    });

    right.addEventListener("click", function() {
        if (counter < arr.length - 1) {
            counter = counter + 1;
            title.textContent = arr[counter].title;
            desc.textContent = arr[counter].desc;
        }
    });
});