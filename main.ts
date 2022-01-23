function linksdrehung () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . . .
        # . . . #
        . # # # .
        `)
    Proxi.linksdrehung()
    basic.pause(500)
}
input.onButtonPressed(Button.A, function () {
    basic.pause(1000)
    while (!(input.buttonIsPressed(Button.B))) {
        if (Proxi.RBlock(abstand) && Proxi.LBlock(abstand)) {
            if (Proxi.Lese_RBlock() < Proxi.Lese_LBlock()) {
                rechtsdrehung()
            } else {
                linksdrehung()
            }
        } else if (Proxi.RBlock(abstand)) {
            rechtsdrehung()
        } else if (Proxi.LBlock(abstand)) {
            linksdrehung()
        } else {
            Proxi.vorwärts()
            basic.showIcon(IconNames.Happy)
        }
        basic.pause(100)
        if (Math.randomBoolean()) {
            linksOderRechts = 1
        } else {
            linksOderRechts = 0
        }
        Proxi.drehungsstopp()
        Proxi.stehenbleiben()
    }
})
function rechtsdrehung () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # . # . .
        . . . . .
        # . . . #
        . # # # .
        `)
    Proxi.rechtsdrehung()
    basic.pause(500)
}
let linksOderRechts = 0
let abstand = 0
basic.showIcon(IconNames.Happy)
abstand = 50
