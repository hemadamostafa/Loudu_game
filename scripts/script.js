function gameBoard(playerArr) {
    // code for console test
    // gameobj.players[0].stones[0].ele.css("top",gameobj.gameBoxs[2][0]+"px").css("left",gameobj.gameBoxs[2][1]+"px");
    this.infoPlaces = [[610,10],[10,563],[610,563],[10,10]];
    this.stonePlaces = [[[485,102],[485,183],[443,143],[525,143]],[[121,464],[121,546],[79,505],[163,505]],[[121,102],[121,183],[162,145],[79,145]],[[482,464],[441,506],[482,546],[524,506]]];
    this.stoneColor = ["blu","gre","red","yel"];
    this.darkPlaces = [[390,10],[10,390],[10,10],[390,390]];
    this.gameBoxs = [
    //blue 0
    [558,281],[513,281],[468,281],[423,281],[378,281]/*,["curve"]*/
    ,[340,240],[340,195],[340,150],[340,105],[340,60],[340,15],[300,15]
    //         red 13
    ,[255,15],[255,60],[255,105],[255,150],[255,195],[255,240]/*,["curve"]*/
    ,[220,281],[175,281],[130,281],[85,281],[40,281],[0,281],[0,320]
    //        green 26
    ,[5,358],[45,358],[90,358],[135,358],[180,358],[220,358]/*,["curve"]*/
    ,[255,400],[255,445],[255,490],[255,535],[255,580],[255,620],[300,615]
    //         yellow 39
    ,[340,620],[340,570],[340,530],[340,490],[340,450],[340,400]/*,["curve"]*/
    ,[380,358],[425,358],[465,358],[510,358],[555,358],[600,358],[600,320]
    ,[600,280]];
    this.winWay = [[[560,320],[520,320],[475,320],[430,320],[385,320],[335,320]],[[45,320],[90,320],[135,320],[180,320],[220,320],[270,320]],[[305,62],[305,107],[305,150],[305,195],[305,240],[305,287]],[[305,575],[305,530],[305,487],[305,443],[305,400],[305,350]]];
    /*
    this.bluWay = [[560,320],[520,320],[475,320],[430,320],[385,320],[335,320]];
    this.redWay = [[305,62],[305,107],[305,150],[305,195],[305,240],[305,287]];
    this.greWay = [[45,320],[90,320],[135,320],[180,320],[220,320],[270,320]];
    this.yelWay = [[305,575],[305,530],[305,487],[305,443],[305,400],[305,350]];*/
    this.playerNow = 0;
    this.allArrive = false;
    this.board = this;
    var board = this;
    this.players = [];
    this.end = false;
    this.zeros = [0,26,13,39];
    this.ends = [50,24,11,37];
    this.safeBoxs = [0,26,13,39];
    this.crownPlaces = [[430,15],[55,393],[55,15],[430,393]];
    this.winners = 0;
    //Construct Start

    this.rando = function(){
        randNum = Math.floor(Math.random() * 6)+1;
        var dice = "<img src='images/"+randNum+".png' class='die position-absolute' style='height: 80px; width: 80px; top:300px; left:280px;' />";
        $("#gameBoard").append(dice);
        return randNum;
    }
    this.ran = function(){
        randNum = Math.floor(Math.random() * 4);
        return randNum;
    }

    // Creation for
    for(var i = 0;i<playerArr.length;i++){
        var darkArea = "<div class='d-none bg-warning position-absolute fd' style='opacity:.5; height:262px; width:262px; top:"+this.darkPlaces[i][0]+"px; left:"+this.darkPlaces[i][1]+"px;' id='dark"+i+"'></div>";
        $("#gameBoard").append(darkArea);
        var dark = $("#dark"+i);
        board.players.push(new player(i,dark));
    }

    //while(!this.allArrive)
    
    /*for(var i = 0;i<15;i++){
        if(board.playerNow >= playerArr.length){
            board.playerNow = 0;
        }
        $("#dark"+board.playerNow).removeClass("d-none");
        $("#dark"+board.playerNow).click(function(){
            $(this).addClass("d-none");
            board.steps = board.rando();
        })

        board.nowReady = false;
        board.playerNow++;
    }*/

    // Here the Game Play

    /*
    while(!board.end){  // infinet loop untel end button click or all arrive

        while(true){
            board.players[board.playerNow].dark.removeClass("d-none");
            board.players[board.playerNow].dark.click(function(){
                $(this).addClass("d-none");
                board.rando();
                for(var k=0;k<4;k++){
                    players[board.playerNow].stones[k].clickable();
                }


                //players[board.playerNow].stone.move(board.rando());
            })
        }
    }*/

    
var cou = 0;
    this.recurce = function(){

        if(board.players[board.playerNow].win){
            if(board.playerNow >= board.players.length-1){
                board.playerNow = 0;
            }else{
                board.playerNow++;
            }
            cosnole.log("Winned one go next");
            board.recurce();
        }
        console.log("round"+ ++cou);
        var dice = null;
        console.log("Player : "+board.playerNow);
        // hide all dark area
        $(".fd").addClass("d-none killClick");
        // show the player's dark area
        board.players[board.playerNow].dark.removeClass("d-none killClick");

        // if click happen on it

        // this is the  tow way select
        //board.players[board.playerNow].dark.click(function(){

        // Antention here where the place that the adding eevent to the dark now it's at the player class constructor
        
        //$("#dark"+board.playerNow).click(function(){
            //console.table("dark area clicked : "+board.playerNow);
            // hide it
            //$(this).addClass("d-none killClick");
            // throw dice and keep number
            //var dice = board.rando();
            // go to all stones of the player and make it all active (clickable) ------- old line

            /*if(countHome == 4 && dice != 6){
                // got to next player or if it's last then return
                if(board.playerNow >= board.players.length-1){
                    board.playerNow = 0;
                }else{
                    board.playerNow++;
                }
                console.log("nothing happen all home and it's not 6");
                board.recurce();
            }else{
                // all home but it's 6
                if(countHome == 4){
                    board.players[board.playerNow].stones[0].move(6);
                    // then go next player or return
                    if(board.playerNow >= board.players.length-1){
                        board.playerNow = 0;
                    }else{
                        board.playerNow++;
                    }
                    console.log("all home but its 6");
                    board.recurce();
                }
                // if there is only one outside
                if(countHome == 3){
                    // then move it with out any click
                    board.players[board.playerNow].stones[outside[0]].move(dice);
                    // then go next player or return
                    if(board.playerNow >= board.players.length-1){
                        board.playerNow = 0;
                    }else{
                        board.playerNow++;
                    }
                    console.log("only one out Move it");
                    board.recurce();
                // more than one out side
                }else if(countHome < 3){
                    // and it's 6
                    if(dice == 6){
                        for(var n=0;n<4;n++){
                            // make the in home and out home All Clickable
                            board.players[board.playerNow].stones[n].ele.addClass("clickable");
                        }
                    }else{
                        // goto outsides stones only and make them clickable
                        outside.forEach(element => {
                            board.players[board.playerNow].stones[element].ele.addClass("clickable");
                            console.log("we make clickable to choose");
                        })
                    }
                }
            }*/
            
            // if click happen on the actives one
            
            /*$(".clickable").click(function(){
                console.log("Clicked Clickable");
                // board.players[board.playerNow].dark.addClass("d-none");

                // get which stone
                var stoneId = $(this).attr("id").slice(2,3);

                 // Move it
                 if(board.players[board.playerNow].stones[stoneId].inHome){
                    board.players[board.playerNow].stones[stoneId].move(board.playerNow.stones[stoneId].zero);
                 }
                 
                 // make it not clickable
                 $(".clickable").removeClass("clickable");

                 // if it's last player goto the first Else get the next
                 if(board.playerNow >= board.players.length-1){
                     board.playerNow = 0;
                 }else{
                     board.playerNow++;
                 }
                 // next turn
                 board.recurce();

            })*/

            //players[board.playerNow].stone.move(board.rando());
            //board.players[board.playerNow].checkAuto(dice);
        //})
    }
    //Construct End
    function stone(ele,zero,end,place,team){
        this.zero = zero;
        this.end = end;
        this.currentBox = this.zero;
        this.ele = ele;
        this.canGoWin = false;
        this.inHome = true;
        this.onWin = false;
        this.winned = false;
        this.place = place;
        this.team = team;
        this.clickable = function(){
            this.ele.addClass("clickable");
        }
        // move the stone
        this.move = function (dice){
            // if it's in home and the dice is 6
            /*
            if(dice == 6 && this.inHome){
                // go to ypur team zero
                var currentBoxPostion = board.gameBoxs[board.zeros[zero]];
                this.ele.animate({top:currentBoxPostion[0]+"px",left:currentBoxPostion[1]+"px"});
                // you aren't home any time
                this.inHome = false;
            }*/
            // go to your place
            // it will need program cause if it's on his in canal
            /*
            this.currentBox = this.currentBox + dice;
            if(this.currentBox > board.gameBoxs.length){
                console.log("you are in the right current box");
                this.currentBox = this.currentBox - board.gameBoxs.length
            }
            var currentBoxPostion = board.gameBoxs[this.currentBox];
            this.ele.animate({top:currentBoxPostion[0]+"px",left:currentBoxPostion[1]+"px"});*/

            // new move code
            if(this.inHome){
                var currentBoxPostion = board.gameBoxs[this.zero];
                this.ele.animate({top:currentBoxPostion[0]+"px",left:currentBoxPostion[1]+"px"});
            }else{
                var start = this.currentBox;
                var end = this.currentBox + dice;
                if(board.playerNow != 0 && end > 51){
                    for(var i=start;i<=51;i++){
                        this.currentBox = i;
                        var currentBoxPostion = board.gameBoxs[this.currentBox];
                        this.ele.animate({top:currentBoxPostion[0]+"px",left:currentBoxPostion[1]+"px"});
                    }
                    for(var i=0;i<end-51;i++){
                        this.currentBox = i;
                        var currentBoxPostion = board.gameBoxs[this.currentBox];
                        this.ele.animate({top:currentBoxPostion[0]+"px",left:currentBoxPostion[1]+"px"});
                    }
                    // eating code
                    if(board.safeBoxs.includes(this.currentBox)){
                        // do nothing it's already safe
                    }else{
                        // var stop = false; old way to break the tow loops
                        loop1:
                        for(var i=0;i<board.players.length;i++){
                            console.log((this.ele.attr("id").slice(2,3) == i));
                            if(this.team == i){
                                console.log("the same team")
                                continue;
                            }else{
                                loop2:
                                for(var n=0;n<4;n++){
                                    if(board.players[i].stones[n] == this){
                                        continue;
                                    }else{
                                        if(board.players[i].stones[n].currentBox == this.currentBox && (!board.players[i].stones[n].onWin || !board.players[i].stones[n].winned)){
                                            console.log("Yes I Ate")
                                            board.players[i].stones[n].returnHome();
                                            break loop1;
                                            // stop = true;
                                        }
                                    }
                                }
                                //if(stop){break;}
                            }
                        }
                    }
                    this.canGoWin = true;
                }else{
                    //console.table("the end :"+end,"the element general end :"+this.end,"element start"+this.zero);
                    //console.log((end > this.end && end - this.zero <= 0));
                    // check if his next step'll be in the win way or not 
                    //if((end > this.end && end - this.zero < 0) || (board.playerNow == 0 && end > this.end)){
                    if((end > this.end && this.canGoWin && !this.onWin) || (board.playerNow == 0 && end > this.end)){
                        // on win way until the end
                        console.table(end,this.end);
                        this.onWin = true;
                        // move in usual way
                        for(var i=start;i<=this.end;i++){
                            this.currentBox = i;
                            var currentBoxPostion = board.gameBoxs[this.currentBox];
                            this.ele.animate({top:currentBoxPostion[0]+"px",left:currentBoxPostion[1]+"px"});
                        }
                        // thin move in win way
                        for(var i=0;i<end-this.end;i++){
                            this.currentBox = i;
                            var currentBoxPostion = board.winWay[board.playerNow][i];
                            this.ele.animate({top:currentBoxPostion[0]+"px",left:currentBoxPostion[1]+"px"});
                        }
                    }else{
                        if(this.onWin){
                            var final = 5;
                            if(dice+this.currentBox>final){
                                // this situation none
                                // then go next player or return
                                if(board.playerNow >= board.players.length-1){
                                    board.playerNow = 0;
                                }else{
                                    board.playerNow++;
                                }
                                board.recurce();
                            }else if(dice+this.currentBox<final){
                                // move it in the win way
                                for(var i=this.currentBox;i<=end;i++){
                                    this.currentBox = i;
                                    var currentBoxPostion = board.winWay[board.playerNow][i];
                                    this.ele.animate({top:currentBoxPostion[0]+"px",left:currentBoxPostion[1]+"px"});
                                }
                            }else{
                                // Winned
                                this.winned = true;
                                board.players[board.playerNow].winnedStones++;
                                for(var i=this.currentBox;i<=end;i++){
                                    this.currentBox = i;
                                    var currentBoxPostion = board.winWay[board.playerNow][i];
                                    this.ele.animate({top:currentBoxPostion[0]+"px",left:currentBoxPostion[1]+"px"});
                                }
                                if(board.players[board.playerNow].winnedStones == 4){
                                    board.players[board.playerNow].win = true;
                                    board.players[board.playerNow].playerCrown.removeClass("d-none");

                                }
                                
                            }

                        }else{
                            // very usual move
                            for(var i=start;i<=end;i++){
                                this.currentBox = i;
                                var currentBoxPostion = board.gameBoxs[this.currentBox];
                                this.ele.animate({top:currentBoxPostion[0]+"px",left:currentBoxPostion[1]+"px"});
                            }
                            // eating code
                            if(board.safeBoxs.includes(this.currentBox)){
                                // do nothing it's already safe
                            }else{
                                // var stop = false; old way to break the tow loops
                                loop1:
                                for(var i=0;i<board.players.length;i++){
                                    console.log((this.ele.attr("id").slice(2,3) == i));
                                    if(this.team == i){
                                        console.log("the same team")
                                        continue;
                                    }else{
                                        loop2:
                                        for(var n=0;n<4;n++){
                                            if(board.players[i].stones[n] == this){
                                                continue;
                                            }else{
                                                if(board.players[i].stones[n].currentBox == this.currentBox && (!board.players[i].stones[n].onWin && !board.players[i].stones[n].winned)){
                                                    console.log("Yes I Ate")
                                                    board.players[i].stones[n].returnHome();
                                                    break loop1;
                                                    // stop = true;
                                                }
                                            }
                                    }
                                        //if(stop){break;}
                                    }
                                }
                            }
                        }
                    }
                }
            }
            
        }
        this.returnHome = function(){
            this.inHome = true;
            this.ele.animate({top:place[0]+"px",left:place[1]+"px"});
            this.currentBox = this.zero;
            this.canGoWin = false;
            // move to home
        }

    }

    function player(i,dark){
        // sub construct
        var dark_Event = dark.click(function(){
            console.table("dark area clicked : "+board.playerNow);
            // hide it
            $(this).addClass("d-none killClick");
            // throw dice and keep number
            dice = board.rando();
            board.players[board.playerNow].checkAuto(dice);
            // the old place for adding clickable class
        })
        this.dark = dark_Event;
        this.label = $("#p"+i);
        this.win = false;
        this.name;
        this.stones = [];
        this.winnedStones = 0;
        this.zero = board.zeros[i];
        this.end = board.ends[i];
        var playerInfo = "<div id='p"+i+"' class='position-absolute bg-info rounded' style='top:"+board.infoPlaces[i][0]+"px;left:"+board.infoPlaces[i][1]+"px;'><h3 class='fs-1'>"+playerArr[i]+"</h3></div>";
        this.playerCrown = "<img id='"+i+"' src='images/crown.png' class='position-absolute d-none' style='top:"+board.crownPlaces[i][0]+"px;left:"+board.crownPlaces[i][1]+"px;height:175px;'>"
        $("#gameBoard").append(playerInfo);
        $("#gameBoard").append(this.playerCrown);
        for(var j = 0;j<4;j++){
            var stoneimg = "<img src='images/"+board.stoneColor[i]+".png' class='position-absolute iStone' style='height: 40px;top:"+board.stonePlaces[i][j][0]+"px;left:"+board.stonePlaces[i][j][1]+"px;' id='s"+i+j+"' alt=''>";
            $("#gameBoard").append(stoneimg);
            var ele = $("#s"+i+j);
            this.stones.push(new stone(ele,this.zero,this.end,board.stonePlaces[i][j],i));
        }
        this.checkAuto = function(dice){
            var countHome = 0;
            var countwin = 0;
            var outside = [];
            var available = [];
            var currentBoxs = [];
            // first count how much stones in home and specifec the out side
            for(var k=0;k<4;k++){
                // chick if all in home or one outside ------ modern
                if(this.stones[k].inHome){
                    countHome++;
                    continue;
                }else if(this.stones[k].winned){
                    countwin++;
                    continue;
                }else{
                    if(this.stones[k].currentBox in  currentBoxs){
                        continue;
                    }else{
                        currentBoxs.push(this.stones[k].currentBox);
                        outside.push(k);
                    }
                }
            }
/*
            for(var i=0;i<4;i++){
                this.stones[k]
                if(dice == 6){

                }
            }
*/
            console.log(outside,outside.length)
            // old code
            // check if all home or not
/*
                if(countHome == 4){
                // is dice 6
                if(dice == 6){
                    // random stone
                    var randomStone = board.ran();
                    // go to your zero
                    this.stones[randomStone].move(this.zero);
                    // now it's out home
                    this.stones[randomStone].inHome = false;
                    // then go next player or return
                    if(board.playerNow >= board.players.length-1){
                        board.playerNow = 0;
                    }else{
                        board.playerNow++;
                    }

                    console.log("all home but its 6");
                    board.recurce();
                // or not
                }else{
                    // go next do nothing
                    if(board.playerNow >= board.players.length-1){
                        board.playerNow = 0;
                    }else{
                        board.playerNow++;
                    }
                    console.log("nothing happen all home and it's not 6");
                    board.recurce();
                }
                }else{
                    // check if there is three home
                    if(countHome == 3){
                        // check dice is 6 or not
                        if(dice == 6){
                            // make all clickable
                            for(var n=0;n<4;n++){
                                // make the in home and out home All Clickable
                                if(this.stones[n].winned){
                                    continue;
                                }
                                this.stones[n].ele.addClass("clickable");
                            }
                            $(".clickable").click(function(){
                                console.log("Clicked Clickable");
                                // board.players[board.playerNow].dark.addClass("d-none");
                
                                // get which stone
                                var stoneId = $(this).attr("id").slice(2,3);
                
                                // Move it
                                if(board.players[board.playerNow].stones[stoneId].inHome){
                                    // move it out home
                                    board.players[board.playerNow].stones[stoneId].move(board.players[board.playerNow].stones[stoneId].zero);
                                    // and make it out home
                                    board.players[board.playerNow].stones[stoneId].inHome = false;
                                }else{
                                    board.players[board.playerNow].stones[stoneId].move(dice);
                                }

                                // remove eevent
                                $(".clickable").unbind();
                                // make it not clickable any more
                                $(".clickable").removeClass("clickable");
                
                                // if it's last player goto the first Else get the next
                                if(board.playerNow >= board.players.length-1){
                                    board.playerNow = 0;
                                }else{
                                    board.playerNow++;
                                }
                                // next turn
                                board.recurce();
                
                            })
                        }else{
                            // move the only out one
                            // then move it with out any click
                            this.stones[outside[0]].move(dice);
                            // then go next player or return
                            if(board.playerNow >= board.players.length-1){
                                board.playerNow = 0;
                            }else{
                                board.playerNow++;
                            }
                            console.log("not 6 only one out Move it");
                            board.recurce();
                        }

                    }else{
                        if(dice == 6){
                            // all Clickable
                            for(var n=0;n<4;n++){
                                // make the in home and out home All Clickable
                                if(this.winned){
                                    continue;
                                }
                                this.stones[n].ele.addClass("clickable");
                            }
                            $(".clickable").click(function(){
                                console.log("Clicked Clickable");
                                // board.players[board.playerNow].dark.addClass("d-none");
                
                                // get which stone
                                var stoneId = $(this).attr("id").slice(2,3);
                
                                // Move it
                                if(board.players[board.playerNow].stones[stoneId].inHome){
                                    // move it out home
                                    board.players[board.playerNow].stones[stoneId].move(board.players[board.playerNow].stones[stoneId].zero);
                                    // and make it out home
                                    board.players[board.playerNow].stones[stoneId].inHome = false;
                                }else{
                                    board.players[board.playerNow].stones[stoneId].move(dice);
                                }

                                // remove eevent
                                $(".clickable").unbind();
                                // make it not clickable
                                $(".clickable").removeClass("clickable");
                
                                // if it's last player goto the first Else get the next
                                if(board.playerNow >= board.players.length-1){
                                    board.playerNow = 0;
                                }else{
                                    board.playerNow++;
                                }
                                // next turn
                                board.recurce();
                
                            })
                            console.log("more than one out and it's 6");

                        }else{
                            // clickable out only
                            outside.forEach(element => {
                                this.stones[element].ele.addClass("clickable");
                                console.log("we make clickable to choose the out only");
                            })
                            $(".clickable").click(function(){
                                console.log("Clicked Clickable");
                                // board.players[board.playerNow].dark.addClass("d-none");
                
                                // get which stone
                                var stoneId = $(this).attr("id").slice(2,3);
                
                                // Move it
                                if(board.players[board.playerNow].stones[stoneId].inHome){
                                    // move it out home
                                    board.players[board.playerNow].stones[stoneId].move(board.players[board.playerNow].stones[stoneId].zero);
                                    // and make it out home
                                    board.players[board.playerNow].stones[stoneId].inHome = false;
                                }else{
                                    board.players[board.playerNow].stones[stoneId].move(dice);
                                }

                                // remove eevent
                                $(".clickable").unbind();
                                // make it not clickable
                                $(".clickable").removeClass("clickable");
                
                                // if it's last player goto the first Else get the next
                                if(board.playerNow >= board.players.length-1){
                                    board.playerNow = 0;
                                }else{
                                    board.playerNow++;
                                }
                                // next turn
                                board.recurce();
                
                            })

                        }
                    }
                }
*/
            
            // here all in home and in win no one outside
            if(outside.length == 0){
                if(dice == 6){
                    // random stone
                    var randomStone = board.ran();
                    // go to your zero
                    this.stones[randomStone].move(this.zero);
                    // now it's out home
                    this.stones[randomStone].inHome = false;
                    // then go next player or return
                    if(board.playerNow >= board.players.length-1){
                        board.playerNow = 0;
                    }else{
                        board.playerNow++;
                    }
                    console.log("all home but its 6");
                    board.recurce();
                }else{
                    // go next do nothing
                    if(board.playerNow >= board.players.length-1){
                        board.playerNow = 0;
                    }else{
                        board.playerNow++;
                    }
                    console.log("nothing happen all home and it's not 6");
                    board.recurce();
                }
            }else{
                // only one on the road
                if(outside.length == 1){
                    if(dice == 6){
                        for(var n=0;n<4;n++){
                            // make the in home and out home All Clickable
                            if(this.stones[n].winned){
                                continue;
                            }
                            if(this.stones[n].onWin){
                                continue;
                            }
                            this.stones[n].ele.addClass("clickable");
                        }
                        $(".clickable").click(function(){
                            console.log("Clicked Clickable");
                            // board.players[board.playerNow].dark.addClass("d-none");
            
                            // get which stone
                            var stoneId = $(this).attr("id").slice(2,3);
            
                             // Move it
                             if(board.players[board.playerNow].stones[stoneId].inHome){
                                 // move it out home
                                board.players[board.playerNow].stones[stoneId].move(board.players[board.playerNow].stones[stoneId].zero);
                                // and make it out home
                                board.players[board.playerNow].stones[stoneId].inHome = false;
                             }else{
                                board.players[board.playerNow].stones[stoneId].move(dice);
                             }

                             // remove eevent
                             $(".clickable").unbind();
                             // make it not clickable any more
                             $(".clickable").removeClass("clickable");
            
                             // if it's last player goto the first Else get the next
                             if(board.playerNow >= board.players.length-1){
                                 board.playerNow = 0;
                             }else{
                                 board.playerNow++;
                             }
                             // next turn
                             board.recurce();
            
                        })
                    }else{
                        // move the only out one
                        // then move it with out any click
                        if(this.stones[outside[0]].onWin){
                            if(dice + this.stones[outside[0]].currentBox > 5){
                                if(board.playerNow >= board.players.length-1){
                                    board.playerNow = 0;
                                }else{
                                    board.playerNow++;
                                }
                                console.log("not 6 only one out on win way and it w'' pass");
                                board.recurce();
                            }else{
                                this.stones[outside[0]].move(dice);
                            }
                        }else{
                            this.stones[outside[0]].move(dice);
                        }
                        // then go next player or return
                        console.log(board.playerNow);
                        if(board.playerNow >= board.players.length-1){
                            board.playerNow = 0;
                        }else{
                            board.playerNow++;
                        }
                        console.log(board.playerNow);
                        console.log("not 6 only one out Move it");
                        board.recurce();
                    }
                }else{ // more than one outside
                    console.log("more than one outside");
                    if(dice == 6){
                        // all Clickable
                        for(var n=0;n<4;n++){
                            // make the in home and out home All Clickable
                            console.log("must clickable");
                            if(this.stones[n].winned){
                                continue;
                            }
                            if(this.stones[n].onWin){
                                continue;
                            }
                            this.stones[n].ele.addClass("clickable");

                        }
                        $(".clickable").click(function(){
                            console.log("Clicked Clickable");
                            // board.players[board.playerNow].dark.addClass("d-none");
            
                            // get which stone
                            var stoneId = $(this).attr("id").slice(2,3);
            
                             // Move it
                             if(board.players[board.playerNow].stones[stoneId].inHome){
                                 // move it out home
                                board.players[board.playerNow].stones[stoneId].move(board.players[board.playerNow].stones[stoneId].zero);
                                // and make it out home
                                board.players[board.playerNow].stones[stoneId].inHome = false;
                             }else{
                                board.players[board.playerNow].stones[stoneId].move(dice);
                             }

                             // remove eevent
                             $(".clickable").unbind();
                             // make it not clickable
                             $(".clickable").removeClass("clickable");
            
                             // if it's last player goto the first Else get the next
                             if(board.playerNow >= board.players.length-1){
                                 board.playerNow = 0;
                             }else{
                                 board.playerNow++;
                             }
                             // next turn
                             board.recurce();
            
                        })
                        console.log("more than one out and it's 6");

                    }else{
                        // clickable out only
                        // here utilit if the current box of 2 or more clickable same then move auto any one
                        outside.forEach(element => {
                            if(this.stones[element].onWin){
                                if(dice + this.stones[outside[0]].currentBox > 5){
                                    // instead of continue in for each
                                    return;
                                }else{
                                    this.stones[element].ele.addClass("clickable");
                                }
                            }else{
                                this.stones[element].ele.addClass("clickable");
                            }
                            console.log("we make clickable to choose the out only");
                        })
                        $(".clickable").click(function(){
                            console.log("Clicked Clickable");
                            // board.players[board.playerNow].dark.addClass("d-none");
            
                            // get which stone
                            var stoneId = $(this).attr("id").slice(2,3);
            
                             // Move it
                             if(board.players[board.playerNow].stones[stoneId].inHome){
                                 // move it out home
                                board.players[board.playerNow].stones[stoneId].move(board.players[board.playerNow].stones[stoneId].zero);
                                // and make it out home
                                board.players[board.playerNow].stones[stoneId].inHome = false;
                             }else{
                                board.players[board.playerNow].stones[stoneId].move(dice);
                             }

                             // remove eevent
                             $(".clickable").unbind();
                             // make it not clickable
                             $(".clickable").removeClass("clickable");
            
                             // if it's last player goto the first Else get the next
                             if(board.playerNow >= board.players.length-1){
                                 board.playerNow = 0;
                             }else{
                                 board.playerNow++;
                             }
                             // next turn
                             board.recurce();
            
                        })
                        if($(".clickable").length == 1){
                            console.log("Triigggggggggggggggggggg");
                            $(".clickable").trigger('click');
                        }
                        if($(".clickable").length == 0){
                            if(board.playerNow >= board.players.length-1){
                                board.playerNow = 0;
                            }else{
                                board.playerNow++;
                            }
                        }

                    }
                }
            }
        }
        // end
    }

    board.recurce();
    // 57 player round
    // full round 54


}

var gameobj;
var playerArr = [];

function putInput(numPlayers){
    for(var i = 1;i<numPlayers+1; i++ ){
        var inp = "<div class='mb-3'><label class='form-label'>Player "+i+" Name</label><input type='email' class='form-control border-2' id='player"+i+"'></div>";
        $("#put").append(inp);
    }
}
var numPlayers;
$(function(){
    $("#namePlayers").hide();
    $("#gameBoard").hide();
    $("#2").click(function(){
        $("#numPlayers").hide();
        numPlayers = 2;
        putInput(numPlayers);
        $("#namePlayers").show();
    })
    $("#3").click(function(){
        $("#numPlayers").hide();
        numPlayers = 3;
        putInput(numPlayers);
        $("#namePlayers").show();
    })
    $("#4").click(function(){
        $("#numPlayers").hide();
        numPlayers = 4;
        putInput(numPlayers);
        $("#namePlayers").show();
        
    })

    $("#getNames").click(function(){
        $("#namePlayers").hide();
        if(numPlayers == 2){
            if($("#player1").val() == "" || $("#player2").val() == ""){
                alert("you Have To Fill All Text Boxs");
            }else{
                playerArr.push($("#player1").val(),$("#player2").val());
                $("#gameBoard").show();
                gameobj = new gameBoard(playerArr);
            }
        }
        if(numPlayers == 3){
                if($("#player1").val() == "" || $("#player2").val() == "" ||  $("#player3").val() == ""){
                    alert("you Have To Fill All Text Boxs");
                }else{
                    playerArr.push($("#player1").val(),$("#player2").val(),$("#player3").val());
                    $("#gameBoard").show();
                    gameobj = new gameBoard(playerArr);
                }
        }
        if(numPlayers == 4){
                if($("#player1").val() == "" || $("#player2").val() == "" || $("#player3").val() == "" || $("#player4").val() == ""){
                    alert("you Have To Fill All Text Boxs");
                }else{
                    playerArr.push($("#player1").val(),$("#player2").val(),$("#player3").val(),$("#player4").val());
                    $("#gameBoard").show();
                    gameobj = new gameBoard(playerArr);
                }
        }
    })
})