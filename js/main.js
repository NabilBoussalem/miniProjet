let $div = $(".div article");

function randomColor()
{
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let opacity =0.6;

    for (let i = 0; i < $div.length; i++) {
        let element = $div[i];
        element.style.boxShadow="0 4px 8px 5px rgba("+red+","+green+","+blue+","+opacity+")";
    }
}

randomColor();


