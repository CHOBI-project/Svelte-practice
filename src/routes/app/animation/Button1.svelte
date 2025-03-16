<div>
    <h3>Button1</h3>

    <div class="container">
        <button type="button" class="btn">Hover Me!</button>
    </div>
</div>

<style>
    div {
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
    }

    .container {
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #161616;
        overflow: hidden;

        .btn {
            background-color: #f3f2f2;
            padding: 15px 40px;
            border: none;
            outline: none;
            color: #fff;
            cursor: pointer;
            position: relative;
            z-index: 0;
            border-radius: 12px;
        }

        .btn:after {
            content: "";
            z-index: -1;
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #333;
            left: 0;
            top: 0;
            border-radius: 10px;
        }

        .btn:before {
            content: "";
            background: linear-gradient(
                    45deg,
                    #ff0000, #ff7300, #fffb00, #48ff00,
                    #00ffd5, #002bff, #ff00c8, #ff0000
            );
            position: absolute;
            top: -2px;
            left: -2px;
            background-size: 600%;
            z-index: -1;
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            filter: blur(8px);
            border-radius: 10px;
            opacity: 0;
            transition: opacity .3s ease-in-out;
            animation: glowing 10s linear infinite;
        }

        .btn:hover:before {
            opacity: 1;
        }

        .btn:active:after {
            background: transparent;
        }

        .btn:active:before {
            color: #000;
            font-weight: bold;
        }
    }

    @keyframes glowing {
        0% {
            background-position: 0 0;
        }
        50% {
            background-position: 400% 0;
        }
        100% {
            background-position: 0 0;
        }
    }
</style>
