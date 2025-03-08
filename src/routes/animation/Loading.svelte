<div class="wrapper">
    <h3>Loading1</h3>

    <div class="container">
        <p>Loading...</p>
        <div class="loader">
            <span style="--i:1;"></span>
            <span style="--i:2;"></span>
            <span style="--i:3;"></span>
            <span style="--i:4;"></span>
            <span style="--i:5;"></span>
            <span style="--i:6;"></span>
            <span style="--i:7;"></span>
            <span style="--i:8;"></span>
            <span style="--i:9;"></span>
            <span style="--i:10;"></span>
            <span style="--i:11;"></span>
            <span style="--i:12;"></span>
            <span style="--i:13;"></span>
            <span style="--i:14;"></span>
            <span style="--i:15;"></span>
            <span style="--i:16;"></span>
            <span style="--i:17;"></span>
            <span style="--i:18;"></span>
            <span style="--i:19;"></span>
            <span style="--i:20;"></span>
        </div>
    </div>
</div>

<style>
    .wrapper {
        margin: 1rem 0;
        padding: 1rem;
        box-shadow: 1px 2px 3px lightgray,
        1px 2px 3px lightgray inset;
        border-radius: 10px;

        h3 {
            margin-bottom: 0.5rem;
            color: #ff3c00;
            border-bottom: 2px dotted lightgray;
        }

        .container {
            position: relative;
            width: 100%;
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #161616;
            overflow: hidden;
        }
    }

    p {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
    }

    .loader {
        position: relative;
        width: 100px;
        height: 100px;
        animation: changeColor 5s linear infinite;
    }

    .loader span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: rotate(calc(var(--i) * 18deg));
    }

    .loader span:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        background: #00ffd5;
        border-radius: 50%;
        box-shadow: 0 0 10px #00ffd5,
                    0 0 20px #00ffd5,
                    0 0 40px #00ffd5,
                    0 0 60px #00ffd5,
                    0 0 80px #00ffd5,
                    0 0 100px #00ffd5;
        animation: animate 2s linear infinite;
        animation-delay: calc(var(--i) * 0.1s);
    }

    @keyframes changeColor {
        0% {
            filter: hue-rotate(0);
        }

        100% {
            filter: hue-rotate(360deg);
        }
    }
    
    @keyframes animate {
        0% {
            transform: scale(1);
        }
        80%,100% {
            transform: scale(0);
        }
    }
</style>