console.log("dld;lsl")


array = [
    
    "What if everything is an illusion and nothing exists? In that case, I definitely overpaid for my carpet.",

"If you don't like your analyst, see your local algebraist!",

'I must not fear. Fear is the mind killer. Fear is the little death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.',

'What do you despise? By this are you truly known.',

'It is so shocking to find out how many people do not believe that they can learn, and how many more believe learning to be difficult.'

]


function display() {
    document.getElementById('text').innerHTML = "that was math <button onclick='getQuote()'>this is math, see a quote</button>"
    console.log("clicked")
}

function getQuote() {
    var grab = array[Math.floor(Math.random()*array.length)];
     document.getElementById('quote').innerHTML = grab;
}

function makeQuote() {
    var userQuote = document.getElementById('user-quote').value;
    array.push(userQuote);
}
function ifNoMath() {
    console.log(maths)
    
    var maths = ["trig", "calc", "geometry", 'physics'];
    var text = "";
    if (maths.length == 0) {
        document.getElementById('math-stuff').innerHTML = "no math so sad"
    } else {
       
        var i;
        for (i = 0; i < maths.length; i++) {
            text += maths[i] + "<br>";
        }
        document.getElementById("math-stuff").innerHTML = text;
        
    }
}


