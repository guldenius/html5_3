// Element selector
// @param selector: string element select
function _q(selector) {
    //select elements
    var elements = document.querySelectorAll(selector);
    return elements;
}


// input profile field display
function showProfile() {

    //select element
    var div = document.querySelector(".profile-div");

    // If contains the "show" than it will be disappear
    if (div.classList.contains("show")) {
        div.classList.remove("show");
        console.log(div);
    } else {
        //Else add the "show"
        div.classList.add("show");
        console.log(div);
    }

}
