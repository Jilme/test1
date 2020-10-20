input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 - - F - - - - ", 120)
})
basic.forever(function () {
    led.plot(1, 4)
})
