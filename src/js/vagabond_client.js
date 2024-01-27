
var Url = "https://core-appliance-412305.ts.r.appspot.com/upload";
var dUrl = "http://localhost:3000/upload";

function submitForm(e) {
    if (e)
        e.preventDefault();

    var formData = new FormData(myform);
    if (!formData.get("email"))
        formData.set("email", localStorage.getItem("email"))

    fetch(Url + "?stage=" + myform.target, {
        method: "POST",
        body: formData,
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("network returns error");
        }
        return response.text();
    })
    .then((resp) => {
        let respdiv = document.createElement("pre");
        respdiv.innerHTML = resp;
        myform.replaceWith(respdiv);
        console.log("resp from server ", resp);
        localStorage.setItem("email", formData.get("email"))
    })
    .catch((error) => {
        // Handle error
        console.log("error ", error);
    });
}

var myform = document.getElementById("vagabondForm");
myform.addEventListener("submit", submitForm);
