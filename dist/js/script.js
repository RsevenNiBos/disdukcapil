
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Menghentikan pengiriman form

    // Mengambil nilai dari isian form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Menampilkan output di div dengan id "output"
    var outputContainer = document.getElementById("output");
    outputContainer.innerHTML = "";

    var nameOutput = document.createElement("p");
    nameOutput.innerHTML = "<label>Nama:</label> <span>" + name + "</span>";
    outputContainer.appendChild(nameOutput);

    var emailOutput = document.createElement("p");
    emailOutput.innerHTML = "<label>Email:</label> <span>" + email + "</span>";
    outputContainer.appendChild(emailOutput);

    var messageOutput = document.createElement("p");
    messageOutput.innerHTML = "<label>Pesan:</label> <span>" + message + "</span>";
    outputContainer.appendChild(messageOutput);

    // Mengosongkan form setelah submit
    document.getElementById("myForm").reset();
});










