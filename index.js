const speed = 500 // in ms

let larray = document.querySelectorAll(".contents-wrapper>div");
let i = 0;

function wrapper() {
        let logmessage = i+1 + " of " + larray.length;
        console.log (logmessage);
        downloadLecture(larray[i]);
        i++;
        if (i >= larray.length) clearInterval(looper);
}

function downloadLecture(lecture) {

        // open download menu
        try {
                lecture.querySelector(".menu-opener").click();
        }
        catch(err) {
                console.log("Cannot find download button for this lecture.");
                return;
        }
        
        // open modal
        setTimeout(function(){
                        document.querySelector(".menu.open>.menu-items>ul>li:nth-child(2)>a").click();
                        setTimeout(function(){
                                        document.querySelector(".downloadOptions select").selectedIndex = 1;
                                        let lclass = lecture.querySelector("header div").innerText;
                                        let ltime = lecture.querySelector(".time").innerText;
                                        let ldate = lecture.querySelector(".date").innerText;
                                        ldate = ldate.split(',').join('');
                                        let filename = lclass + "-" + ltime + "-" + ldate + ".mp4";
                                        filename = filename.split(' ').join('_');
                                        filename = filename.split('-').join('_');
                                        let url = "https://echo360.org/media/download?s3Url=" + encodeURIComponent(document.querySelector(".downloadOptions select").value.split(" ")[0]) + "&fileName=" + filename;
                                        document.querySelector(".modal-footer .right>a").href = url;
                                        document.querySelector(".modal-footer .right>a").click();
                },speed);

        },speed);
}

looper = setInterval(wrapper,speed*4);
