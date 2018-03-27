(function(){
    test_group("MyQuery selector", function() {
        assert($(".dummyClass").elements.length === 2, "class selector");
        assert($("#dummyId").elements.length === 1, "id selector");
        assert($("head").elements.length === 1, "head selector");
        assert($("p .dummyClass").elements.length === 1, "combined element+class selector");
        assert($("a b c").elements.length === 3, "chained a b c selector");
    });

    test_group("MyQuery class instance methods", function() {
        assert($(".anotherDummy").elements.length === 0, "initial class");
        $(".dummyClass").addClass("anotherDummy");
        assert($(".anotherDummy").elements.length === 2, "added class");
        $(".dummyClass").removeClass("anotherDummy");
        assert($(".anotherDummy").elements.length === 0, "removed class");
    });

    test_group("MyQuery each/map instance methods", function() {
        assert($(".toremove").elements.length === 2, "divs to remove");
        $(".toremove").each(element => element.remove());
        assert($(".toremove").elements.length === 0, "divs removed after each");
        // var newArray = $(".exampleClass").map(element => { return element.innerHTML + " world"; });
        var newArray = $(".exampleClass").map(element => { element.setAttribute("style","color:green"); return element.innerHTML + " world"; });
        assert(newArray[1] === "My world", "map +world result (string #2)");
        assert($(".exampleClass").any(element => element.innerHTML === "Hello") === true, "any test");
        assert($(".exampleClass").all(element => element.innerHTML === "Hello") === false, "all test");
        assert($(".exampleClass").filter(element => element.innerHTML === "Hello").elements.length === 1, "filter test");
        $(".dummyClass").css("color", "red");
        assert($(".dummyClass").all(element => element.getAttribute("style").includes("red")) === true, "css test");
        assert($(".dummyClass").count() === 2, "count test");
        assert($(".dummyClass").getAttribute("style")[0].includes("red") === true, "getAttribute test");
        $(".dummyClass").setAttribute("style","blue");
        assert($(".dummyClass").all(element => element.getAttribute("style").includes("blue")) === true, "setAttribute test");
        assert($(".dummyClass").elements[0].tagName.toLowerCase() === "div", "get test");
    });
})();