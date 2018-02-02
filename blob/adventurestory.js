$(function(){
   question1(); 
});

var question1 = function(){
    $("div.narrative, span.q1").html("You approach an abandoned castle in the shadows of the night. What do you do?");
    $(".q1").show();
    $(".buttons").html("<button class='btn btn-success q1-good'>Enter</button>");
    $(".buttons").append("<button class='btn btn-danger q1-bad'>Leave</button>");
    
    $(".q1-good").click(function(){
        $(".q1-choice").html("Enter").show();
        question2();
    });
    
    $(".q1-bad").click(function(){
       $(".q1-choice").html("Leave").show();
       $(".narrative").html("You leave the castle grounds and go home. You ain't dealing with no spooky stuff.");
       $(".buttons").hide();
    });
};

var question2 = function(){
    $("div.narrative, span.q2").html("Entering the castle, you step into a large foyer that has two big wooden doors leading into another room and two staircases leading up to the same place. Which do you take?");
    $(".q2").show();
    $(".buttons").html("<button class='btn btn-success q2-good'>Doors</button>");
    $(".buttons").append("<button class='btn btn-danger q2-bad'>Stairs</button>");
    
    $(".q2-good").click(function(){
       $(".q2-choice").html("Doors").show();
       question3("Doors");
    });
    
    $(".q2-bad").click(function(){
       $(".q2-choice").html("Stairs").show();
       $(".narrative").html("You take the stairs up only to meet a swinging axe, decapitating and killing you.");
       $(".buttons").hide();
    });
};

var question3 = function(){
    $("div.narrative, span.q3").html("You enter past the doors into a large chamber surrounded by large stone pillars. In the middle of the room stood a podium with an ancient book, but there's also a treasure chest in the far end of the chamber. Which do you approach?");
    $(".q3").show();
    $(".buttons").html("<button class='btn btn-success q3-good'>Book</button>");
    $(".buttons").append("<button class='btn btn-danger q3-bad'>Chest</button>");
    
    $(".q3-good").click(function(){
       $(".q3-choice").html("Book").show();
       question4("Book");
    });
    
    $(".q3-bad").click(function(){
       $(".q3-choice").html("Chest").show();
       $(".narrative").html("You approach the chest and open it, only to find out it's a Mimic as it eats you whole.");
       $(".buttons").hide();
    });
};

var question4 = function(){
    $("div.narrative, span.q4").html("You approach the book and take it into your hands. Opening the cover, mysterious black clouds emerge from the pages as it envelops you. After the clouds cleared, you find yourself standing on a cliff overlooking a destroyed kingdom. To your right lays a path going downhill towards the kingdom, but to your left lays a dead knight with rusted armor and a sword in his hand. Where do you go?");
    $(".q4").show();
    $(".buttons").html("<button class='btn btn-success q4-good'>Right</button>");
    $(".buttons").append("<button class='btn btn-danger q4-bad'>Left</button>");
    
    $(".q4-good").click(function(){
       $(".q4-choice").html("Right").show();
       question5("Right");
    });
    
    $(".q4-bad").click(function(){
       $(".q4-choice").html("Left").show();
       $(".narrative").html("You go left and approach the dead knight, but once you were close, the knight rose and stabbed you in your gut, leaving you to bleed out and die.");
       $(".buttons").hide();
    });
};

var question5 = function(){
    $("div.narrative, span.q5").html("You go right, down the path, to the destroyed kingdom. As you approached the outskirts of the buildings, a chime could be heard coming from inside a nearby cathedral.");
    $(".q5").show();
    $(".buttons").html("<button class='btn btn-success q5-good'>Ignore</button>");
    $(".buttons").append("<button class='btn btn-danger q5-bad'>Investigate</button>");
    
    $(".q5-good").click(function(){
        $(".q5-choice").html("Ignore").show();
        question6("Ignore");
    });
    
    $(".q5-bad").click(function(){
        $(".q5-choice").html("Investigate").show();
        $(".narrative").html("You go towards the sound of the chime, entering the cathedral before a scythe swings down and impales you.");
        $(".buttons").hide();
    });
};

var question6 = function(){
    $("div.narrative, span.q6").html("You ignore the chimes as you continue through the town, making your way towards the far end of the kingdom. There, a graveyard stood with a stone tomb in the center. Before you could enter the tomb, skeletons arose from their graves and made their way towards you. What do you do?");
    $(".q6").show();
    $(".buttons").html("<button class='btn btn-success q6-good'>Evade</button>");
    $(".buttons").append("<button class='btn btn-danger q6-bad'>Fight</button>");
    
    $(".q6-good").click(function(){
        $(".q6-choice").html("Evade").show();
        question7("Evade");
    });
    
    $(".q6-bad").click(function(){
        $(".q6-choice").html("Fight").show();
        $(".narrative").html("You attempt to fight the skeletons, but they overwhelm you as they tear you to pieces.");
        $(".buttons").hide();
    });
};

var question7 = function(){
    $("div.narrative, span.q7").html("You manage to evade the skeletons as enter the stone tomb, where a spiraling staircase descends into the darkness. Stepping down into the dark, you reach the bottom after a few minutes and come across a large rectangular chamber where a lich king sat in his throne at the far end. His eyes glowed to life as he stood, wielding green fire in his palms as he cackled deviously.");
    $(".q7").show();
    $(".buttons").html("<button class='btn btn-success q7-good'>Evade</button>");
    $(".buttons").append("<button class='btn btn-danger q7-bad'>Attack</button>");
    
    $(".q7-good").click(function(){
        $(".q7-choice").html("Evade").show();
        question8("Evade");
    });
    
    $(".q7-bad").click(function(){
        $(".q7-choice").html("Attack").show();
        $(".narrative").html("You charge at the lich king, but before you could land a hit, he burned you alive, killing you.");
        $(".buttons").hide();
    });
};

var question8 = function(){
    $("div.narrative, span.q8").html("You evade the fire the lich king throws at you as you make your way closer. Near his feet lays a sword; and so you roll towards it, pick it up, and-");
    $(".q8").show();
    $(".buttons").html("<button class='btn btn-success q8-good'>Stab</button>");
    $(".buttons").append("<button class='btn btn-danger q8-bad'>Slash</buttons>");
    
    $(".q8-good").click(function(){
        $(".q8-choice").html("Stab").show();
        question9("Stab");
    });
    
    $(".q8-bad").click(function(){
        $(".q8-choice").html("Slash").show();
        $(".narrative").html("-slash at the lich king, but he blocks your sword before raising his palm up to your face, burning you until you died.");
        $(".buttons").hide();
    });
};

var question9 = function(){
    $("div.narrative, span.q9").html("-stab the blade into the lich king's ribs. He wails out in pain as he disintegrates into a pile of ash. Amongst the ash rests a small green orb the size of a marble.");
    $(".q9").show();
    $(".buttons").html("<button class='btn btn-danger q9-bad'>Grab</button>");
    $(".buttons").append("<button class='btn btn-danger q9-bad'>Grab</button>");
    
    $(".q9-bad").click(function(){
        $(".q9-choice").html("Grab").show();
        question10("Grab");
    });
};

var question10 = function(){
    $("div.narrative, span.q10").html("You grab the marble and hold it in your hand. Then, a voice whispers into your head. 'You will take my place,' it cackled. And so you did, the years withering by as your soul became nonexistent. In the end, death is inevitable.");
    $(".q10").show();
    $(".buttons").hide();
};