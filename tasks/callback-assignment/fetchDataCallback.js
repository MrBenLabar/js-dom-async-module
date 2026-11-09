
function fetchDataWithCallback(callback) {

    setTimeout(function() {

        // Simulate an error
        let error = false;

        try {

            if (error) {
                throw new Error("Fetch failed");
            }

            // Call the callback function
            callback("Data fetched");

        } catch (err) {

            console.error("Error: " + err.message);

        }

    }, 2000);

}

// Call the function and display the result
fetchDataWithCallback(function(message) {
    console.log(message);
});
