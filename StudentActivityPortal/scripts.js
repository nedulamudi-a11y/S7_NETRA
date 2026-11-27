
document.getElementById("form").onsubmit = function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("result").textContent =
        "Welcome " + name + "! Registration Successful.";

    this.reset();
};
