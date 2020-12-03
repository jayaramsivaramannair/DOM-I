function updateContent() {
    let d = new Date();
    let secs;
    let milSecs;

    secs = d.getSeconds();
    document.getElementById('secondTens').innerText = Math.floor(secs / 10);
    document.getElementById('secondOnes').innerText = secs % 10;


    milSecs = d.getMilliseconds();
    document.getElementById('msHundreds').innerText = Math.floor(milSecs / 100);
    document.getElementById('msTens').innerText = Math.floor((milSecs % 10));
}

setInterval(updateContent, 100);

