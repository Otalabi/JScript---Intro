//This function receives an id and gets the related HTML object.
var $ = function (id) {
    return document.getElementById(id);
}
// This is the event handler for the onclick event of the button "calculate"
var calculate_click = function () {
    // Get the user entries for the first two text boxes and allows them to have decimal
    var subtotal = parseFloat($("subtotal").value);
    var taxRate = parseFloat($("tax_rate").value);
    //sets a Boolean variable
    var isValid = true;

    //Sets the value of the last two boxes to empty strings
    $("sales_tax").value = "";
    $("total").value = "";

    //Validates the first entry
    if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
        $("subtotal_message").firstChild.nodeValue = "Must be positive and less than $10,000";
        isValid = false;

    } else {
        $("subtotal_message").firstChild.nodeValue = "";//sets the span id text to blank
    }

    //Validates the second entry
    if(isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        $("tax_rate_message").firstChild.nodeValue = "Must be positive and less than 12";
        isValid = false;

    } else {
        $("tax_rate_message").firstChild.nodeValue = "";
    }
    //if all inputs are valid calculate sales_tax and total
    if (isValid)   {
        var sales_tax;
        var total;
        // calculate results. parenthesis is for order of operations
        sales_tax = subtotal * (taxRate/100);
        // adds subtotal and sales_tax together
        total = subtotal + sales_tax;
        $("sales_tax").value = sales_tax.toFixed(2);// assigns the value of sales_tax and round it up to 2 decimal places
        $("total").value = total.toFixed(2);// assigns the value of total and also round it up to 2 decimal places
        $("subtotal_message").firstChild.nodeValue = "Enter order subtotal";
        $("tax_rate_message").firstChild.nodeValue = "Enter sales tax rate";

    }
    $("subtotal").focus();//sets focus back to subtotal
}
// This is the event handler for the onclick event of the button "clear".
var clear_click = function () {
    $("subtotal").value = "";//assigns blank to subtotal
    $("tax_rate").value = "";
    $("sales_tax").value = "";
    $("total").value = "";
    //assigns new text to the span id
    $("subtotal_message").firstChild.nodeValue = "Enter order subtotal";
    $("tax_rate_message").firstChild.nodeValue = "Enter sales tax rate ";
    $("subtotal").focus();

}
// This is the event handler for the onload event of the page.
window.onload = function () {
    $("subtotal").focus(); // sends the focus to the subtotal when page is loaded
    $("calculate").onclick = calculate_click;// Assigns the event handler named calculate_click to the onclick event calculate
    $("clear").onclick = clear_click;// Assigns the event handler named clear_click to the onclick event clear
}


