window.onload = () =>   {

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



        function gameStart() {

            document.getElementById("startGame").removeEventListener("click", gameStart)
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
    

        let container = document.createElement("div");
        container.className = "container"
        container.style.width = "180px";
        container.style.height = "180px";
        document.body.appendChild(container);   


        // Level composition
        let levels = [];
        levels[0] = [
            [w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w],
            [w,p,p,p,p,p,p,w,p,p,f,w,p,p,p,p,p,w],
            [w,p,w,p,w,w,w,w,p,w,w,w,p,w,w,w,p,w],
            [w,p,w,p,p,p,p,w,u,w,p,p,p,p,p,w,p,w],
            [w,p,w,w,w,p,p,w,p,w,w,w,w,w,w,w,p,w],
            [w,p,p,p,w,w,p,w,p,w,p,p,p,p,p,p,p,w],
            [w,w,w,w,w,p,p,w,p,w,p,w,w,w,w,w,p,w],
            [w,p,p,p,p,p,w,w,p,w,p,w,p,p,p,p,p,w],
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
                    //console.log('I AM HERE YO', row[i]);
                    myRowElement.appendChild(row[i].cloneNode()); 

                   //    console.log(myRowElement);
                    container.appendChild(myRowElement);
                   // console.log("I AM WORKING")
                }
                
                


                var x = 15
                var y = 9

                //  console.log(document.body)

               let player = document.createElement("div")
                player.className = "player"
                player.style.width = "10px";
                player.style.height = "10px"
                
                map[y].splice(x,1,player)            
                //console.log(map[y][x])        
                
                
                
                function startSpooki() { 
                    let modal = document.createElement("div")
                    modal.className = "modal"
                    modal.style.width

                    //kui vajutab välja või vasta valesti
                    //container.remove()
                }

    
                function keyPressRight() {
                    x++

                   // console.log(y)
                   // console.log(x)
                   // console.log(map[y][x].className)

                    if (map[y][x].className === w.className) {
                        console.log("can't move")
                        x--
                        //console.log(x)
                        return
                    } else if (map[y][x].className === u.className) {
                        
                        //console.log("spooki")
                        startSpooki.apply()
                    
                    } else {
                        console.log("moved right")
                        return map[y].splice(x-1,1,p) && map[y].splice(x,1,player)
                    } 
                }


                function keyPressLeft() {
                    //console.log(x)
                    x--

                   // console.log(y)
                   // console.log(x)
                   // console.log(map[y][x].className)

                    if (map[y][x].className === w.className) {
                        console.log("can't move")
                        x++
                     //   console.log(x)
                        return
                    } else {
                        console.log("moved left")
                        return map[y].splice(x+1,1,p) && map[y].splice(x,1,player)
                    } 
                }


                function keyPressUp() {
                   // console.log(y)

                    y--

                    //console.log(y)
                    //console.log(x)
                    //console.log(map[y][x].className)

                    if (map[y][x].className === w.className) {
                        console.log("can't move")
                        y++
                    //    console.log(y)
                        return
                    } else {
                        console.log("moved up")
                        return map[y+1].splice(x,1,p) && map[y].splice(x,1,player)

                    } 
                }


                function keyPressDown() {
                    //console.log(y); 
                    y++

                      //  console.log(y)
                     //   console.log(x)
                    //console.log(map[y][x].className)

                    if (map[y][x].className === w.className) {
                        console.log("can't move");
                        y--
                      //  console.log(y);
                        return
                    } else {
                        console.log("moved down");
                        return map[y-1].splice(x,1,p) && map[y].splice(x,1,player)
                    };
                };
 
            };  
            
            document.addEventListener('keydown', (e) => {
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
            })  

            document.getElementById("left").addEventListener("click", keyPressLeft);
            document.getElementById("right").addEventListener("click", keyPressRight);
            document.getElementById("up").addEventListener("click", keyPressUp);
            document.getElementById("down").addEventListener("click", keyPressDown);
              
        }   
    }

    document.getElementById("startGame").addEventListener("click", gameStart); 



}

        

    



    
    //document.getElementById("Start").addEventListener("click", gameStart); 
    



