setTimeout(()=> {
  document.getElementById("loader").style.animation = "logo 1s alternate infinite"
}, 2000);
setTimeout(()=> {
  document.getElementById("loader").style.display = "none";
  document.getElementById("app").style.display = "block"
}, 3000);

function openmenu() {
  setTimeout(()=> {
    document.getElementById("menu_icon").style.color = "#000";
  }, 100);
  document.getElementById("menu_icon").style.color = "#f3f3f3";
  document.getElementById("sidenav").style.width = "200px";
}

function closemenu() {
  document.getElementById("sidenav").style.width = "0";
}

function li1() {
  document.getElementById("window").style.display = "none";
  document.getElementById("background").style.background = "#fff9e2";
  document.getElementById("typewriter").style.display = "block";
  document.getElementById("tools").style.display = "block";
  document.getElementById("apps").style.display = "none";
  document.getElementById("li2").style.background = "#ffffff";
  document.getElementById("li2").style.color = "#8d7dff";
  document.getElementById("li3").style.background = "#ffffff";
  document.getElementById("li3").style.color = "#8d7dff";
  document.getElementById("li1").style.background = "#ffd700";
  document.getElementById("li1").style.color = "#000000";
}

function li2() {
  document.getElementById("window").style.display = "block";
  document.getElementById("typewriter").style.display = "none";
  document.getElementById("tools").style.display = "none";
  document.getElementById("menu_icon").style.color = "#000";
  document.getElementById("background").style.background = "#fff";
  document.getElementById("apps").style.display = "none";
  document.getElementById("li1").style.background = "#ffffff";
  document.getElementById("li1").style.color = "#8d7dff";
  document.getElementById("li3").style.background = "#ffffff";
  document.getElementById("li3").style.color = "#8d7dff";
  document.getElementById("li2").style.background = "#ffd700";
  document.getElementById("li2").style.color = "#000000";
}

function li3() {
  document.getElementById("window").style.display = "block";
  document.getElementById("typewriter").style.display = "none";
  document.getElementById("tools").style.display = "none";
  document.getElementById("menu_icon").style.color = "#000";
  document.getElementById("background").style.background = "#fff";
  document.getElementById("apps").style.display = "none";
  document.getElementById("li2").style.background = "#ffffff";
  document.getElementById("li2").style.color = "#8d7dff";
  document.getElementById("li1").style.background = "#ffffff";
  document.getElementById("li1").style.color = "#8d7dff";
  document.getElementById("li3").style.background = "#ffd700";
  document.getElementById("li3").style.color = "#000000";
}

function dd(url, name) {
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = name;
  
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

function effect3() {
  setTimeout(()=> {
    document.getElementById("download_button1").style.background = "#ffffff";
    document.getElementById("download_button1").style.color = "#00ffbb"
  }, 100);
  document.getElementById("download_button1").style.background = "#00ffbb";
  document.getElementById("download_button1").style.color = "#ffffff";
  dd("https://www.mediafire.com/file/st7jd6hns05o3d3/FreeFlix.apk/file?dkey=d79utx67vc0&r=175", "freeflix[mohamed_gharbi].apk")
}

function effect2() {
  setTimeout(()=> {
    document.getElementById("download_button2").style.background = "#ffffff";
    document.getElementById("download_button2").style.color = "#00ffbb"
  }, 100);
  document.getElementById("download_button2").style.background = "#00ffbb";
  document.getElementById("download_button2").style.color = "#ffffff";
  dd("https://www.mediafire.com/file/d1xuw1ve785v7ff/Minecraft.apk/file?dkey=dtnsedp26tn&r=906", "minecrat[mohamed_gharbi].apk")
}

function apps() {
  document.getElementById("window").style.display = "none";
  document.getElementById("typewriter").style.display = "none";
  document.getElementById("tools").style.display = "none";
  document.getElementById("background").style.background = "#fff";
  document.getElementById("window").src = "";
  document.getElementById("apps").style.display = "block"
  document.getElementById("li2").style.background = "#ffffff";
  document.getElementById("li2").style.color = "#8d7dff";
  document.getElementById("li1").style.background = "#ffffff";
  document.getElementById("li1").style.color = "#8d7dff";
  document.getElementById("li3").style.background = "#ffffff";
  document.getElementById("li3").style.color = "#8d7dff";
}

function effect1(id) {
  setTimeout(()=> {
    document.getElementById(id).style.background = "#00ffbb";
    document.getElementById(id).style.color = "#ffffff"
  }, 100);
  document.getElementById(id).style.background = "#ffffff";
  document.getElementById(id).style.color = "#00ffbb"
}

function settings() {
  document.getElementById("overlay").style.display = "block"
}

function close_setting() {
  document.getElementById("overlay").style.display = "none"
}

function light() {
  document.getElementById("background").style.background = "#fff";
  document.getElementById("menu_icon").style.color = "#111";
  document.getElementById("topnav").style.color = "#fff";
}

function dark() {
  document.getElementById("background").style.background = "#111";
  document.getElementById("menu_icon").style.color = "#fff";
  document.getElementById("topnav").style.color = "#111";
}

function about() {
  document.getElementById("about").style.display = "block"
}

function close_about() {
  document.getElementById("about").style.display = "none"
}