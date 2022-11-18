input.onGesture(Gesture.Shake, function () {
    Emfanisiprogramatos = randint(1, 3)
    basic.showNumber(Emfanisiprogramatos)
    if (Emfanisiprogramatos == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    if (Emfanisiprogramatos == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (Emfanisiprogramatos == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    radio.sendNumber(0)
})
let Emfanisiprogramatos = 0
radio.setGroup(0)
