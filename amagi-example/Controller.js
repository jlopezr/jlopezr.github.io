const DocReady = () => {

    let urlBase = location.href.substring(0, location.href.lastIndexOf("/")+1);
    // console.log(urlBase);
    let RequestofScroller, RequestofHeadlines, RequestofBreakingNews;
    RequestofHeadlines = new XMLHttpRequest(); RequestofBreakingNews = new XMLHttpRequest();
    RequestofHeadlines.onreadystatechange=function() { if (this.readyState == 4 && this.status == 200) { HeadlinesDataManager(this); }}
    RequestofBreakingNews.onreadystatechange=function() { if (this.readyState == 4 && this.status == 200) { BreakingNewsManager(this); }}
    
    RequestofHeadlines.open("GET", urlBase+"Automate.php", true); RequestofHeadlines.send();
    RequestofBreakingNews.open("GET", urlBase+"Breaking_automate.php", true); RequestofBreakingNews.send();

   
   

    /* HEADLINE NEWS MANAGER */
    const HeadlinesDataManager = (xml) => { let x, i, xmlDoc, theArray; 
    xmlDoc = xml.responseXML; x = xmlDoc.getElementsByTagName("TITLE");
    theArray = [];
   
    for (i = 0; i< x.length; i++) {
        theArray[i] = x[i].childNodes[0].nodeValue;
    } 
  
    let j = 0;
    (function RotateHeadingData() {
     
        document.getElementById('newHolder').innerHTML = "<span class='letterAnim'>"+theArray[j]+"</span>";
            if (++j< theArray.length) {
                if(j == theArray.length-1) {
                    j=0;
            }
         setTimeout(RotateHeadingData, 5000);
     }
    })();
  }

  /* BREAKING NEWS MANAGER */
  const BreakingNewsManager = (xml) => { 

   let x, i, xmlDoc, theArray; 
    xmlDoc = xml.responseXML; x = xmlDoc.getElementsByTagName("TITLE");
    theArray = [];
   
    for (i = 0; i< x.length; i++) {
        theArray[i] = x[i].childNodes[0].nodeValue;
    } 

    let j = 0;
  

    (function RotateHeadingData() {
      //console.log('This Triggered');
      var FixSize = Number(theArray[j].length);
      
      
       // console.log(FixSize);
        document.getElementById("_newHead").innerHTML = "<div class='triangle-right' id='triangle-right'></div><h1 id='__breaking'>"+theArray[j]+"</h1>";
        document.getElementById("triangle-right").innerHTML = "";

        if(theArray[j] == 'BREAKING NEWS') {
          document.getElementById("__breaking").style.fontSize='60px';
          document.getElementById("__breaking").style.animation = 'breaking 1200ms ease-out forwards';
         // console.log(FixSize+' 20');
        }
/* 
        if(FixSize < 20) {
          document.getElementById("__breaking").style.fontSize='40px';
          console.log(FixSize+' 20');
        } 
        
        else if(FixSize < 30) { 
           document.getElementById("__breaking").style.fontSize='20px';
          console.log(FixSize+' 30');
        }

        else if(FixSize < 40) { 
           document.getElementById("__breaking").style.fontSize='20px';
          console.log(FixSize+' 40');
        }

        else if(FixSize < 50) { 
           document.getElementById("__breaking").style.fontSize='20px';
          console.log('50');
        } */
        
            if (j++< theArray.length) {
                if(j == theArray.length) {
                    j=0;
            }
         setTimeout(RotateHeadingData, 5000);
     }
    })(); 
  }

  
  /* DIGITAL CLOCK */
  const DisplayClock = () => {
    let date, h, m, s, session, time, day;
    date = new Date(); h = date.getHours(); m = date.getMinutes(); s = date.getSeconds(); session = "AM";
    if(h == 0) { h = 12; } if(h > 12){ h = h - 12; session = "PM";
    } h = (h < 10) ? "0" + h : h; m = (m < 10) ? "0" + m : m; s = (s < 10) ? "0" + s : s;
    /* day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri","Sat"];
    month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec']; */
    // time = day[date.getDay()]+' '+month[date.getMonth()]+' '+date.getUTCFullYear()+", "+ h + ":" + m + ":" + s + " " + session;
    // month = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    // time = date.getDate()+'/'+month[date.getMonth()]+'/'+date.getUTCFullYear()+", "+ h + ":" + m + ":" + s + " " + session;
    time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("_theClock").innerText = time;
    document.getElementById("_theClock").textContent = time;
    setTimeout(DisplayClock, 1000); 
  }
    DisplayClock();


    
};

