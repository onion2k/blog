console.log('obs');

var numSteps = 20.0;

function buildThresholdList() {

    var thresholds = [];

    for (var i=1.0; i<=numSteps; i++) {
        var ratio = i/numSteps;
        thresholds.push(ratio);
    }

    thresholds.push(0);

    return thresholds;

}

function callback(e, o) {
    e.forEach(function(el){
        el.target.style.opacity = el.intersectionRatio;
    });
}

var options = {
    root: null,
    rootMargin: '200px 0px -20px 0px',
    threshold: buildThresholdList()
}

var observer = new window.IntersectionObserver(callback, options);
var targets = document.querySelectorAll('.blog-post-link');

targets.forEach(function(b){
    observer.observe(b);
});    
