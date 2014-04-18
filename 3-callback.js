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

var count = 0;

for (var i = 0, ln = 10; i < ln; i++) {
    console.log("Calling evenDoubler for value: " + i);
    evenDoubler(i, function(err, results, time) {
        if (err) {
            console.log("ERROR: " + err.message);
        } else {
            console.log("The results are: " + results + " (" + time + " ms)");
        }
        if (++count === 10) {
            console.log("Done!");
        }
    });    
};


console.log("-----");