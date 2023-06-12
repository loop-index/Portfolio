var introText = [`
<p style="color: #5ECCF3; font-size: 120px; line-height: 100px;">hi, </p>
<p style="color: #5ECCF3; font-size: 120px; line-height: 100px;">i'm <span class="grad">duong.</span></p>`, 
`
<p style="color: #5ECCF3; font-size: 30px; line-height: 30px;"><span class="grad">i’m a rising junior studying </span><span class="highlight">computer science</span><span class="grad"> at michigan state university, with a minor in </span><span class="highlight">game development</span>.</p>
<br>
<p style="color: #5ECCF3; font-size: 30px; line-height: 30px;"><span class="grad">in my free time, when i’m not endlessly browsing the net, i do play </span><span class="highlight">guitar</span><span class="grad">. i am in a band!</span></p>
<br>
<p style="color: #5ECCF3; font-size: 30px; line-height: 30px;"><span class="grad">i also used to be a first robotics kid. hello from team </span><span style="color: white;">6520</span>!</p>
`,
`
<p style="color: #5ECCF3; font-size: 30px; line-height: 30px;">i have experience working in several web-related positions {</p>
<br>
<p style="font-size: 30px; line-height: 30px;"><span class="highlight">dassault systemes </span><span style="color: white;">(r&d web developer intern)</span></p>
<p style="font-size: 30px; line-height: 30px;"><span class="highlight">msu information services </span><span style="color: white;">(web developer intern)</span></p>
<p style="font-size: 30px; line-height: 30px;"><span class="highlight">aisolutions jsc </span><span style="color: white;">(backend developer intern)</span></p>
<br>
<p style="color: #5ECCF3; font-size: 30px; line-height: 30px;">}</p>
`]

var curIntroText = 0;
$("#intro-text").html(introText[curIntroText]);

let introFading = false;
document.onwheel = function(e) {
    if (introFading) return;
    if (e.deltaY < 0) {
        curIntroText = Math.max(curIntroText - 1, 0);
    } else {
        curIntroText = Math.min(curIntroText + 1, introText.length - 1);
    }
    introFading = true;
    $("#intro-text").fadeOut(500, function() {      
        $(this).html(introText[curIntroText]);
        introFading = false;
    }).fadeIn(500);
}

// $(window).scroll(function() {
//     console.log("scroll");
//     $(this).fadeOut(500, function() {
//         curIntroText = min(curIntroText + 1, introText.length - 1);
//         $(this).html(introText[curIntroText]);
//     }
//     ).fadeIn(500);
// });