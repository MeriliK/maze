window.onload = () =>   {

    function starter() {

        (function (logger) {
            console.old = console.log;
            console.log = function () {
                var output = "", arg, i;
        
                for (i = 0; i < arguments.length; i++) {
                    arg = arguments[i];
                    output += "<span class=\"log-" + (typeof arg) + "\">";
        
                    if (
                        typeof arg === "object" &&
                        typeof JSON === "object" &&
                        typeof JSON.stringify === "function"
                    ) {
                        output += JSON.stringify(arg);   
                    } else {
                        output += arg;   
                    }
        
                    output += "</span>&nbsp;";
                }
        
                logger.innerHTML += output + "<br>";
                console.old.apply(undefined, arguments);
            };
        })(document.getElementById("logger"));
    
        console.log("Oh no! You fell asleep in")
        console.log("the school, and now you're")
        console.log("trapped inside! With no lights!")
        console.log("get out.")
        console.log(" ")
        console.log("For the full experience,") 
        console.log("toggle visuals! (click twice, ") 
        console.log("after start)")
        console.log(" ")
        console.log("Move with buttons")
        console.log("or arrow keys!")
        console.log("Valmistajad:")
        console.log("Merili ja Anneli, 12a")
        console.log(" ")
        console.log(" ")

        setTimeout(gameStart, 8000);


    }

        function gameStart() {

    // Maze elements
        let s = document.createElement("div")
        s.style.width = "10px";
        s.style.height = "10px";
        s.style.backgroundColor = 'rgb(0, 0, 0)';
        s.className = "start";

        let f = document.createElement("div")
        f.style.width = "10px";
        f.style.height = "10px";
        f.style.backgroundColor = 'rgb(200, 0, 0)';
        f.className = "finish"

        let p = document.createElement("div")
        p.style.width = "10px";
        p.style.height = "10px";
        p.style.backgroundColor = 'rgb(0, 200, 0)';
        p.className = "path";

        let w = document.createElement("div")
        w.style.width = "10px";
        w.style.height = "10px";
        w.style.backgroundColor = 'rgb(0, 0, 200)';
        w.className = "solid";

        let u = document.createElement("div")
        u.style.width = "10px";
        u.style.height = "10px";
        u.style.backgroundColor = 'rgb(0, 200, 0)';
        u.classname = "spooki";

        let r = document.createElement("div");
        r.className = "pre-spook";
        r.style.width = "10px";
        r.style.height = "10px";
        r.style.backgroundColor = 'rgb(0, 200, 0)';


        let container = document.createElement("div");
        container.id = "container"
        container.style.width = "180px";
        container.style.height = "180px";
        document.body.appendChild(container);   


        // Level composition
        let levels = [];
        levels[0] = [
            [w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w],
            [w,p,p,p,p,p,p,w,p,p,f,w,p,p,p,p,p,w],
            [w,p,w,p,w,w,w,w,p,w,w,w,p,w,w,w,p,w],
            [w,p,w,p,p,p,p,w,p,w,p,p,p,p,p,w,p,w],
            [w,p,w,w,w,p,p,w,p,w,w,w,w,w,w,w,p,w],
            [w,p,p,p,w,w,p,w,p,w,p,p,p,p,p,p,p,w],
            [w,w,w,w,w,p,p,w,u,w,p,w,w,w,w,w,p,w],
            [w,p,p,p,p,p,w,w,r,w,p,w,p,p,p,p,p,w],
            [w,p,w,w,w,w,w,w,p,p,p,w,p,w,w,w,w,w],
            [w,p,p,p,p,p,p,w,w,w,w,w,p,w,p,p,s,w],
            [w,p,w,w,w,w,p,p,p,p,p,p,p,w,w,p,w,w],
            [w,p,w,p,p,w,w,w,w,w,w,w,w,w,w,p,p,w],
            [w,p,w,p,w,w,p,p,p,p,p,p,p,p,w,w,p,w],
            [w,p,w,p,p,p,p,w,w,w,p,p,w,p,p,p,p,w],
            [w,p,w,p,w,p,w,w,p,w,p,w,w,w,w,p,p,w],
            [w,p,w,p,w,w,w,p,p,w,p,p,p,p,w,w,p,w],
            [w,p,p,p,p,p,p,p,p,w,w,w,w,w,w,p,p,w],
            [w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w],  
        ];
    
        //console.log(levels);

        for(var level = 0; level < levels.length; level++) {
            var map = levels[level]; // 2D array
       // console.log('map', map)
        //console.log('map.length', map.length) // määrab y

            for(var k = 0; k < map.length; k++) { 
                var row = map[k]; 
                //console.log('row', row)
                //console.log('row.length', row.length)
               // console.log('[' + level + ',' + k + '] = ' + levels[level][k]);

                var myRowElement = document.createElement('div');
                myRowElement.classList.add('row');
                myRowElement.style.width = "180px";
                myRowElement.style.height = "10px"
                myRowElement.style.display = "flex";
                myRowElement.style.flexDirection = "row";

              
                for (var i = 0; i < row.length; i++) {
                    //console.log('I AM HERE', row[i]);
                    myRowElement.appendChild(row[i].cloneNode()); 

                   //    console.log(myRowElement);
                    container.appendChild(myRowElement);
                   // console.log("I AM WORKING")
                }
                




                var x = 15
                var y = 9

               let player = document.createElement("div");
                player.className = "player";
                player.style.width = "10px";
                player.style.height = "10px"

                map[y].splice(x,1,player)            
               
                
                
   


                function keyPressRight() {                 
                    x++

                    if (map[y][x].className === w.className) {
                        setTimeout(function keyPressright(){
                            console.log("can't move that way")
                        }, 600);
                        var img1 = document.createElement("img");
                        img1.src = "wall_smaller.gif";
                        img1.style.width = "630px"
                        
                        var src = document.getElementById("visuals");
                        src.appendChild(img1);

                        setTimeout(hide, 600);

                        function hide() {
                            img1.style.display = "none";
                        }
                        x--
                        return

                    } else if (map[y][x].className === f.className) {    

                        console.log("u won")

                    var imgW = document.createElement("img");
                        imgW.src = "escape.gif";
                        imgW.style.width = "630px"
                        
                        var src = document.getElementById("visuals");
                        src.appendChild(imgW);

                        setTimeout(newPage, 2500);    

                        function newPage () {
                            location.replace (url = "https://tenor.com/search/congratulations-gifs")
                        }


                    } else {
                        setTimeout(function keyPressright(){
                            console.log("moved right")
                        }, 600);
                        var img2 = document.createElement("img");
                        img2.src = "step.gif";
                        img2.style.width = "630px"
                    
                        
                        var src = document.getElementById("visuals");
                        src.appendChild(img2);

                        setTimeout(hide, 600);

                        function hide() {
                            img2.style.display = "none";
                        }
                        return map[y].splice(x-1,1,p) && map[y].splice(x,1,player)
                    
                    }
                };






                function keyPressLeft() {
                    x--

                    if (map[y][x].className === w.className) {
                       setTimeout(function keyPressright(){
                            console.log("can't move that way")
                        }, 600);
                        var img1 = document.createElement("img");
                        img1.src = "wall_smaller.gif";
                        img1.style.width = "630px"
                        
                        var src = document.getElementById("visuals");
                        src.appendChild(img1);

                        setTimeout(hide, 600);

                        function hide() {
                            img1.style.display = "none";
                        }
                        x++
                        return

                    } else {
                        setTimeout(function keyPressLeft(){
                            console.log("moved left")
                        }, 600);
                        var img2 = document.createElement("img");
                        img2.src = "step.gif";
                        img2.style.width = "630px"
                    
                        
                        var src = document.getElementById("visuals");
                        src.appendChild(img2);

                        setTimeout(hide, 600);

                        function hide() {
                            img2.style.display = "none";
                        }
                         
                        return map[y].splice(x+1,1,p) && map[y].splice(x,1,player)
                    }
                }





                function keyPressUp() {
                    y--

                    if (map[y][x].className === w.className) {
                        setTimeout(function keyPressright(){
                            console.log("can't move that way")
                        }, 600);
                        var img1 = document.createElement("img");
                        img1.src = "wall_smaller.gif";
                        img1.style.width = "630px"
                        
                        var src = document.getElementById("visuals");
                        src.appendChild(img1);

                        setTimeout(hide, 600);

                        function hide() {
                            img1.style.display = "none";
                        }
                        y++
                        return

                    } else if (map[y][x].className === r.className) {     
                            //console.log("pre-spooki")
                        setTimeout(function keyPressUp(){
                            console.log("...")
                        }, 1500);
                        var img3 = document.createElement("img");
                        img3.src = "nearby.gif";
                        img3.style.width = "630px"
                    
                        
                        var src = document.getElementById("visuals");
                        src.appendChild(img3);

                        setTimeout(hide, 1500);

                        function hide() {
                            img3.style.display = "none";
                        }

                        var img4 = document.createElement("img");
                        img4.id = "wait"
                        img4.src = "frame-18.png";
                        img4.style.width = "630px"
                        var src = document.getElementById("visuals");
                        src.appendChild(img4);
                        

                    } else if (map[y][x].className === u.className) {
                            //console.log("spooki")                        
                        let quest = document.getElementById("quest")
                        console.log(quest)
                        quest.style.display = "block"

                        document.getElementById("wrong1").addEventListener("click", spookt);
                        document.getElementById("wrong2").addEventListener("click", spookt);
                        document.getElementById("correct").addEventListener("click", proceed);
    
                        function spookt () {
                            quest.remove();
                            console.log("git gut")

                            var wait = document.getElementById("wait")
                            wait.style.display = "none";
                            
                            var imgSMH = document.createElement("img");
                            imgSMH.src = "smh.png";
                            imgSMH.style.width = "630px"
                            var src = document.getElementById("visuals");
                            src.appendChild(imgSMH);

                           setTimeout(study, 1000)
                            function study() {
                                location.replace(url="https://tpl.edu.ee/oppetoo/ulekoolilised-testid/")
                            }
                        }                                
    
                        function proceed () {
                            //console.log("unspooked")

                            var img4 = document.getElementById("wait")
                            img4.style.display = "none"
                            
                            console.log('"Tubli! Oled"')
                            console.log ('"kulturiseeritud inimene!" ')
                            quest.remove();

                            var imgBYE = document.createElement("img");
                            imgBYE.src = "goodbye.gif";
                            imgBYE.style.width = "630px"
                        
                            
                            var src = document.getElementById("visuals");
                            src.appendChild(imgBYE);
    
                            setTimeout(hide, 1600);
    
                            function hide() {
                                imgBYE.style.display = "none";
                            }
                            
                        }
                    
                    } else {
                        setTimeout(function keyPressUp(){
                            console.log("moved up")
                        }, 600);
                        var img2 = document.createElement("img");
                        img2.src = "step.gif";
                        img2.style.width = "630px"
                    
                        
                        var src = document.getElementById("visuals");
                        src.appendChild(img2);

                        setTimeout(hide, 600);

                        function hide() {
                            img2.style.display = "none";
                        }

                        return map[y+1].splice(x,1,p) && map[y].splice(x,1,player)

                    } 
                };





                function keyPressDown() {
                    y++

                    if (map[y][x].className === w.className) {
                        setTimeout(function keyPressright(){
                            console.log("can't move that way")
                        }, 600);
                        var img1 = document.createElement("img");
                        img1.src = "wall_smaller.gif";
                        img1.style.width = "630px"
                        
                        var src = document.getElementById("visuals");
                        src.appendChild(img1);

                        setTimeout(hide, 600);

                        function hide() {
                            img1.style.display = "none";
                        }
                        y--
                        return

                    } else {
                        setTimeout(function keyPressDown(){
                            console.log("moved down");
                        }, 600);
                        var img2 = document.createElement("img");
                        img2.src = "step.gif";
                        img2.style.width = "630px"
                    
                        
                        var src = document.getElementById("visuals");
                        src.appendChild(img2);

                        setTimeout(hide, 600);

                        function hide() {
                            img2.style.display = "none";
                        }
                        return map[y-1].splice(x,1,p) && map[y].splice(x,1,player)
                    }
                };
            };  
            
            document.addEventListener('keyup', (e) => {
                e = e || window.event;

                if (e.key === 'ArrowUp') {
                    for(n=0; n<1; n++) {
                    keyPressUp.apply()}
                 //   console.log("up was pressed")


                } else if (e.key === 'ArrowDown') {
                    for(m=0; m<1; m++) {
                    keyPressDown.apply()}
                //    console.log("down was pressed")

                    
                } else if (e.key === 'ArrowLeft') {
                    for(t=0; t<1; t++) {
                    keyPressLeft.apply()}
                //    console.log("left was pressed")

                } else if (e.key === 'ArrowRight') {
                    for(g=0; g<1; g++) {
                    keyPressRight.apply()} 
                 //   console.log("right was pressed")
                }
            });  

            document.getElementById("left").addEventListener("click", keyPressLeft);
            document.getElementById("right").addEventListener("click", keyPressRight);
            document.getElementById("up").addEventListener("click", keyPressUp);
            document.getElementById("down").addEventListener("click", keyPressDown);
              
        };     

    };

    function toggle() {
        var x = document.getElementById("visuals");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        };
      };

    var v = 0 
    function ligther() {
        v++

        if(v < 4) {
            console.log (v + " out of three matches gone")

            let mapper = document.getElementById("map")
            mapper.style.display ="block"

            setTimeout(hidecon, 6000);

            function hidecon() {
                mapper.style.display = "none";
            }

        } else {
            return
        }
    }


    document.getElementById("match").addEventListener("click", ligther); 
    document.getElementById("vibrations").addEventListener("click", toggle); 


    var button = document.getElementById("startBtn");

    button.onclick = function() {
        starter.apply()
        this.parentNode.removeChild(button);
    }

}

    
    



