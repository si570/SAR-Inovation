<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>⚡️ Awesome Drone Pro</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }

        header {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: #fff;
            padding: 1em;
            text-align: center;
            font-size: 32px;
            letter-spacing: 2px;
        }

        #videoBackground {
            position: fixed;
            right: 0;
            bottom: 0;
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            z-index: -1;
        }

        section {
            display: flex;
            justify-content: space-between;
            max-width: 1200px;
            margin: 20px auto;
            padding: 20px;
            background-color: rgba(255, 255, 255, 0.8);
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            text-align: left;
        }

        #droneContent {
            flex: 2;
            padding-right: 20px;
        }

        /* Rest of the styles remain the same */
    </style>
</head>

<body>

    <header>
        <h1>⚡️ Awesome Drone Pro</h1>
    </header>

    <video id="videoBackground" autoplay muted loop>
        <source src="background-video.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>

    <section>
        <!-- Rest of the content remains the same -->
    </section>

    <script>
        function showPurchaseForm() {
            document.getElementById('buyButton').style.display = 'none';
            document.getElementById('purchaseForm').style.display = 'block';
            document.getElementById('videoBackground').pause();
        }

        function submitForm() {
            alert("Thank you for your purchase, " + document.getElementById('name').value + "! Your drone will be shipped to " +
                document.getElementById('address').value + " soon.");
            document.getElementById('videoBackground').play();
        }

        function goToBasket() {
            alert("Redirecting to the basket page...");
            // Add code to navigate to the basket page
        }

        function goToHome() {
            alert("Redirecting to the home page...");
            // Add code to navigate to the home page
        }
    </script>

</body>

</html>
