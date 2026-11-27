function updateClock() {
    const clock = document.getElementByID("clock");
    if(clock)
        clock.textContent = Date().toLocalTimeString();
}
updateteClock();
setInterval(updateClock, 1000);