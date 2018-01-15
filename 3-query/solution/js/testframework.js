currentTestGroupName = "";

function test_group(name, test_group_function) {
    var groupContainer = document.createElement("div");
    groupContainer.className = "container border border-dark my-3";
    groupContainer.innerHTML += `
            <h3>${"Test group: " + name}</h3>
            <table class="tests table table-bordered table-dark testPassed">
                <thead>
                    <th>Test name</th>
                    <th>Test passed?</th>
                </thead>
            </table>
    `;
    document.body.appendChild(groupContainer);

    assert = function(value, name){
        addTestCellToGroup(groupContainer.getElementsByTagName('table')[0], name, value);
    }

    try {
        test_group_function();
    } catch(err) {
        addTestCellToGroup(groupContainer.getElementsByTagName('table')[0], "Test group failed, exception is: " + err, false);
    }
}

function addTestCellToGroup(groupContainer, testName, testPassed) {
    groupContainer.innerHTML += `
        <tr class="${testPassed?"testPassed":"testFailed"}">
            <td>${testName}</td>
            <td>${testPassed}</td>
        </tr>
        `;
    if(!testPassed) {
        groupContainer.classList.remove("testPassed");
        groupContainer.classList.add("testFailed");
    }
}