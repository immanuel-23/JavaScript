/* Immediately Invoked Function Expression -(IIFE)
        (function (){ 
            // Function Logic Here. 
        })();

 */

(function () {
    console.log("apple");
})();

(function(dt) {
    console.log(dt.toLocaleTimeString());
})(new Date());



