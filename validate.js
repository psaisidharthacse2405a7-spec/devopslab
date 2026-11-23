function validateForm(){
    var name = document.getElementById("name").value;
    var size = document.getElementById("size").value;
    var vegOrNonVeg = document.getElementById("veg or non-veg").value;
    var address = document.getElementById("address").value;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (size === "") {
        alert("Please select a size.");
        return false;
    }

    if (vegOrNonVeg === "") {
        alert("Please select an option.");
        return false;
    }

    if (address === "") {
        alert("Please enter your address.");
        return false;
    }
    alert("Order placed successfully!");
    return true;
}