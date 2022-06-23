window.addEventListener("load", function() {
    const takeOff = document.getElementById('takeoff');
    const status = document.getElementById('flightStatus');
    const sBackground = document.getElementById('shuttleBackground');
    const sHeight = document.getElementById('spaceShuttleHeight');
    const down = document.getElementById('down');
    const imgObject = document.getElementById('rocket');


    takeOff.addEventListener("click", function () {
       let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
       if (result){
            status.innerHTML ="Shuttle in flight.";
            sBackground.style.backgroundColor = 'blue';
            sHeight.innerHTML = 10000;
       }
      })
      down.addEventListener("click", () => { 
       // let movement = parseInt(imgObject.style.marginBottom) - 10 + 'px';
        imgObject.style.position = 'relative';
        let movement = imgObject.style.bottom = '-10px';
        imgObject.style.bottom = movement;
        //sHeight.innerHTML = parseInt(sHeight.innerHTML) - 10000;
    })//
});

// windowWrite your JavaScript code here.
// Remember to pay attention to page loading!
