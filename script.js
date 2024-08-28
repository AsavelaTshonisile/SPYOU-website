
     
    <script>
        function showProductInfo() {
            // Get product information
            var productName = document.getElementById("productName").textContent;
            var productPrice = document.getElementById("productPrice").textContent;
            var productQuantity = document.getElementById("productQuantity").textContent;

            // Store product information in localStorage
            localStorage.setItem("productName", productName);
            localStorage.setItem("productPrice", productPrice);
            localStorage.setItem("productQuantity", productQuantity);

            // Redirect to the other page with the table
            window.location.href = "other_page.html";
        }
    </script>