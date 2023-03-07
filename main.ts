let Kquel = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    Kquel = input.runningTimeMicros()
})
function on_button_pressed_a2() {
    if (on_button_pressed_a2) {
        basic.showString("Stopped Time :>")
    }
    
    let elapsed = input.runningTime() - Kquel
    basic.showNumber(Math.idiv(elapsed, 1000))
}

input.onButtonPressed(Button.B, on_button_pressed_a2)
