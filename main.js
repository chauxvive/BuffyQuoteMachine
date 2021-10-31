//quote generator
function getNewQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteBox').innerHTML = quotes[randomNumber];
}

//tweet this
function tweetQuote() {
    var msg = document.getElementById('quoteBox').textContent;
    if (msg != "Get yourself some Buffy Love")
        window.open('https://twitter.com/intent/tweet?text="' + msg + '"', '_blank');
}


//quote archive
var quotes = [

    "I’m the thing that monsters have nightmares about. And right now, you and me are gonna show ‘em why.<br>- Buffy",

    "The hardest thing in this world is to live in it. Be brave. Live. <br>- Buffy",

    "Out. For. A. Walk. Bitch. <br>- Spike",

    "Yes, it’s terribly simple. The good guys are always stalwart and true, the bad guys are easily distinguished by their pointy horns or black hats, and, uh, we always defeat them and save the day. No one ever dies, and everybody lives happily ever after.<br>- Giles",

    "I may be dead, but I’m still pretty. <br>- Buffy",

    "Seize the moment, ‘cause tomorrow you might be dead <br>- Buffy",

    "I’ve seen honest faces before. They’re usually attached to liars. <br>- Willow",

    "Don’t be ridiculous. Martha Stewart isn’t a demon. She’s a witch. Nobody could do that much decoupage without calling on the powers of darkness. <br>- Anya",

    "If the apocalypse comes, beep me. <br>- Buffy",

    "<b>No weapons. No friends. No hope. Take that all away and what's left?<br><br>Me.</b>",

    "Power. I have it, they don't. <br>This bothers them. <br>- Buffy",

    "I don't understand how this all happens. How we go through this. I mean, I knew her, and then she's- there's just a body, and I don't understand why she just can't get back in it and not be dead anymore. It's stupid. It's mortal and stupid. And Xander's crying and not talking, and I was having fruit punch, and I thought, well, Joyce will never have any more fruit punch ever, and she'll never have eggs, or yawn or brush her hair, not ever, and no one will explain to me why. <br>- Anya",

    "The hardest thing in this world is to live in it.<br>- Buffy",

    "They'll never know how tough it is, to be the one who isn't chosen. To live so near to the spotlight and never step in it. But I know. I see more than anybody realizes because nobody's watching me. I saw you last night. I see you working here today. You're not special. You're extraordinary. <br>- Xander",

    "From now on, we won't just face our worst fears. We will seek them out. We will find them and cut out their hearts one by one. There is only one thing on this earth more powerful than evil and that's us. <br>- Buffy",

    "I don't know what's coming next. But I do know it's gonna be just like this- hard, painful. But in the end it's gonna be us. If we do all our parts, believe it, we'll be the ones left standing. Here endeth the lesson. <br>- Buffy",

    "What do you think happened? Another demon woman was attracted to me. I’m going gay! I’ve decided I’m turning gay. Willow, gay me up. Come on, let’s gay. <br>– Xander",

    "Well, isn't this usually the part where you... kick me in the head and run out, virtue fluttering? <br>– Spike",

    "You gotta give me something to do. There's no way I'm sleeping. Don't you need anyone dead? Or maimed? I can settle for maimed.<br>– Faith",

    "You know, I honestly don't think there's a human word fabulous enough for me.<br>- Glory",
    
    "The Big Moments are going to come. You can't help that. It's what you do afterwards that counts. That's when you find out who you are. <br>- Buffy"
    
     "Strong is fighting. It's hard and it's painful and it's every day. It's what we have to do and we can do it together, but if you're too much of a coward for that, then burn. <br>- Buffy"
    
     "I don't know what's coming next. But I do know it's gonna be just like this-- hard. Painful. But in the end it's gonna be us. If we do all our parts, believe it, we'll be the ones left standing. <br>- Buffy"


];
