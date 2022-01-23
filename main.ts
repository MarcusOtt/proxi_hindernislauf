input.onButtonPressed(Button.A, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        if (Proxi.RBlock(abstand) && Proxi.LBlock(abstand)) {
            if (Proxi.Lese_RBlock() < Proxi.Lese_LBlock()) {
                drehung("rechts")
            } else {
                drehung("links")
            }
        } else if (Proxi.RBlock(abstand)) {
            drehung("rechts")
        } else if (Proxi.LBlock(abstand)) {
            drehung("links")
        } else {
            Proxi.vorwärts()
            basic.showIcon(IconNames.Happy)
        }
        Proxi.drehungsstopp()
        Proxi.stehenbleiben()
        basic.pause(100)
    }
})
function drehung (Richtung: string) {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        `)
    soundExpression.slide.playUntilDone()
    basic.pause(100)
    if (Richtung == "rechts") {
        basic.showLeds(`
            . . . . .
            # . # . .
            . . . . .
            # . . . #
            . # # # .
            `)
        Proxi.rechtsdrehung()
    } else if (Richtung == "links") {
        basic.showLeds(`
            . . . . .
            . . # . #
            . . . . .
            # . . . #
            . # # # .
            `)
        Proxi.linksdrehung()
    } else {
    	
    }
    basic.pause(500)
}
let abstand = 0
basic.showIcon(IconNames.Happy)
abstand = 50
