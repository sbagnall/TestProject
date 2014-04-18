var maxTime = 1000;

// if input is even then double it
// if input is odd - error
// call takes random amount of time (<1s)
var evenDoubler = function(v, callback) {
    
    var err, results, time;
    
    time = Math.random() * maxTime;
    
    setTimeout(function() {
      
        if (v % 2 === 0) {
            results = v * 2;     
        } else {
            err = new Error("Odd input");
        }
        
        callback(err, results, Math.round(time));
        
    }, time);

};

module.exports.evenDoubler = evenDoubler;

module.exports.foo = "bar";
