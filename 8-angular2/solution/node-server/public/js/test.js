(function() {
    function workingSum(a, b) {
        return a+b;
    }
    function brokenSum(a, b) {
        return a*b;
    }
    function workingMultiply(a, b) {
        return a*b;
    }
    function brokenMultiply(a,b) {
        return a+b;
    }

    test_group("sum test group", function() {
        assert(workingSum(2,2) === 4, "working sum 1");
        assert(workingSum(3,3) === 6, "working sum 2");
        assert(workingSum(4,4) === 8, "working sum 3");
    });
    test_group("multiply test group", function() {
        assert(workingMultiply(2,2) === 4, "working multiply 1");
        assert(brokenMultiply(3,3) === 9, "broken multiply 2");
        assert(workingMultiply(4,4) === 16, "working multiply 3");
    });
})();