window.onload = () =>   {


let level = [];

let s = document.createElement("div")

s.style.width = "10px";
s.style.height = "10px";
s.style.backgroundColour = rgb(0, 0, 0)



let F = document.createElement("div")

s.style.width = "10px";
s.style.height = "10px";
s.style.backgroundColour = rgb(200, 0, 0)

var p = document.createElement("div")

s.style.width = "10px";
s.style.height = "10px";
s.style.backgroundColour = rgb(0, 200, 0)

var w = document.createElement("div")

s.style.width = "10px";
s.style.height = "10px";
s.style.backgroundColour = rgb(0, 0, 200)



level[0] = {
    map:[
        [w,w,p,f,w],
        [w,p,p,p,p],
        [p,p,w,w,p],
        [p,p,p,w,p],
        [s,w,p,w,p],
    ],
}

document.body.appendChild(level[0])

}