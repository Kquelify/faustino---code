Kquel = 0

def on_button_pressed_a():
    global Kquel
    Kquel = input.running_time_micros()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_a2():
    if on_button_pressed_a2:

       basic.show_string("Stopped Time :>")

    elapsed = input.running_time() - Kquel
    basic.show_number(Math.idiv(elapsed,1000))
input.on_button_pressed(Button.B, on_button_pressed_a2)
    