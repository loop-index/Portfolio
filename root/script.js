import { debouncer, debounce_leading } from './utils.js';

var introText = [`<p style="color: #5ECCF3; font-size: 8vw; line-height: 6vw;">hi, </p>
<p style="color: #5ECCF3; font-size: 8vw; line-height: 6vw;">i'm <span class="grad">duong.</span></p>`,

    `<p style="color: #5ECCF3; font-size: 2vw; line-height: 2vw;"><span class="grad">i’m a rising junior studying </span><span class="highlight">computer science</span><span class="grad"> at michigan state university, with a minor in </span><span class="highlight">game development</span>.</p>
<br>
<p style="color: #5ECCF3; font-size: 2vw; line-height: 2vw;"><span class="grad">in my free time, when i’m not endlessly browsing the net, i do play </span><span class="highlight">guitar</span><span class="grad">. i am in a </span><a href="https://open.spotify.com/artist/3gmhn3vGKwE48jxT1w7bHh?si=t7-lW0iXRw6j7tnekwN0sA" target="_blank">band!</a></p>
<br>
<p style="color: #5ECCF3; font-size: 2vw; line-height: 2vw;"><span class="grad">i also used to be a first robotics kid. hello from team </span><a href="https://gart6520.com" target="_blank">6520</a>!</p>`,

    `<p style="color: #5ECCF3; font-size: 2vw; line-height: 2vw;">i have experience working in several web-related positions {</p>
<br style="line-height: 2vw;"><div class="tab">
<p style="font-size: 2vw; line-height: 2vw;"><span class="highlight">dassault systemes </span><span style="color: white;">(r&d web developer intern)</span></p>
<p style="font-size: 2vw; line-height: 2vw;"><span class="highlight">msu information services </span><span style="color: white;">(web developer intern)</span></p>
<p style="font-size: 2vw; line-height: 2vw;"><span class="highlight">aisolutions jsc </span><span style="color: white;">(backend developer intern)</span></p>
</div><br style="line-height: 2vw;">
<p style="color: #5ECCF3; font-size: 2vw; line-height: 2vw;">}</p>`]

var curIntroText = 0;
$("#intro-text").html(introText[curIntroText]);


let tags = {
    "automobile": [10031, 13042],
    "health": [10075, 11680],
    "food": [10076, 16661],
    "clothing": [11278, 10059],
    "education": [10024, 13678],
    "luxury": [11724, 10067],
    "sports": [10083, 11576],
    "games": [10057, 13874]
}


// On ready
$(document).ready(function () {
    updateAds([]);

    $(".dspDemo").on("click", function () {
        $(this).toggleClass("active");
        let userTags = [];
        $(".dspDemo").each(function () {
            if ($(this).hasClass("active")) {
                userTags = userTags.concat(tags[$(this).text()]);
            }
        });
        console.log(userTags);
        updateAds(userTags);
    });
});

var introFading = false;
var scrollTimeoutID = null;
var fadeTimeoutID = null;

document.addEventListener("wheel", function (e) {
    // console.log('scrolling ' + e.deltaY)
    if (introFading) {
        clearTimeout(scrollTimeoutID);
        clearTimeout(fadeTimeoutID);

        scrollTimeoutID = setTimeout(() => {
            introFading = false;
            $("#fa-mouse").css("opacity", "1");
        }, 100);

        return;
    }

    if (curIntroText >= introText.length - 1 && e.deltaY > 0) {
        $('body').css({
            // "height": "auto",
        });
        $('#scrollScreen').removeClass('sticky-top');
        $('#projectScreen').removeClass('d-none');

    } else if ($(document).scrollTop() <= 0) {
        $('body').css("height", "100vh");
        $('#scrollScreen').addClass('sticky-top');
        $('#projectScreen').addClass('d-none');

        if (e.deltaY < 0 && curIntroText > 0) {
            curIntroText = Math.max(curIntroText - 1, 0);
        } else if (e.deltaY > 0 && curIntroText < introText.length - 1) {
            curIntroText = Math.min(curIntroText + 1, introText.length - 1);
        } else {
            return;
        }

        introFading = true;
        $("#intro-text").fadeOut(500, function () {
            $(this).html(introText[curIntroText]);
        }).fadeIn(500, null, function () {
            fadeTimeoutID = setTimeout(() => {
                introFading = false;
                $("#fa-mouse").css("opacity", "1");
            }, 500);
        });
    }
});

// iFrame handler
function fullscreen(){
    $('#debtTracker').toggleClass('col-4');
    $('#debtTracker').toggleClass('col-12');
    $('#debtTracker').html('<iframe src="https://debttracker-68158.web.app" title="DebtTracker" style="width: 100%; height: 80vh; border-radius: 5px;"></iframe>');
    $('#debtTracker').next().toggleClass('col-8');
    $('#debtTracker').next().toggleClass('col-12');
}

$('#debtTrackerDemo').on('click', fullscreen);

// Update ads
function updateAds(userTags) {
    userTags = userTags.join("%2C");
    $(".ad").each(function () {
        let image;
        fetch("https://cataas.com/cat?json=true").then(response => response.json()).then(data => {
            image = data.url;
            fetch(`https://dsp-555b3b937386.herokuapp.com/ad_request?user_tags=${userTags}&floor_price=10`, 
            { 
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                $(this).html(`
                <div class="card p-0 m-0" style="width: 100%; aspect-ratio: 1/1; overflow: hidden">
                    <img src="https://cataas.com/${image}" class="card-img-top" alt="..." style="width: 100%; height: 100%; object-fit: cover;">
                    <div class="overlay">
                        <div class="card-img-overlay d-flex flex-column justify-content-end">
                            <h5 class="card-title">${data.advertiser}</h5>
                            <p class="card-text">${data.adText}</p>
                        </div>
                    </div>
                </div>`)
            });
        });
    });
}
