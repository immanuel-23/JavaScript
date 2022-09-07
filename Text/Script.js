window.onload = function() {
    var input1 = document.getElementById("i1"),
        input2 = document.getElementById("i2");
    input1.addEventListener('input', function() {
        input2.value = input1.value.replace(/[^A-Za-z]+/g, '');
    });
};