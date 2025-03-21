<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gaming Squad</title>
    <link rel="stylesheet" href="style.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }
        body {
            background: #0c0c1d;
            color: white;
            text-align: center;
        }
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background: #12122b;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #9d4edd;
        }
        nav ul {
            list-style: none;
            display: flex;
        }
        nav ul li {
            margin: 0 15px;
        }
        nav ul li a {
            color: white;
            text-decoration: none;
            transition: 0.3s;
        }
        nav ul li a:hover {
            color: #9d4edd;
        }
        .btn {
            background: linear-gradient(45deg, #9d4edd, #4a00e0);
            padding: 10px 20px;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: 0.3s;
        }
        .btn:hover {
            opacity: 0.8;
        }
        .hero {
            padding: 100px 20px;
            background: url('gaming-bg.jpg') no-repeat center center/cover;
            text-align: center;
        }
        .hero h2 {
            font-size: 20px;
            color: #9d4edd;
            letter-spacing: 2px;
        }
        .hero h1 {
            font-size: 50px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <div class="logo">SQUAD</div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Tournament</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <a href="#" class="btn">Join Our Team</a>
        </nav>
    </header>
    
    <section class="hero">
        <h2>ENJOY THE GAMES</h2>
        <h1>Epic Games Made For<br> True Gamers!</h1>
        <a href="#" class="btn">Join With Us</a>
    </section>
</body>
</html>