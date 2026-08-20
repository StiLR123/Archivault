bluetooth.setTransmitPower(7)
bluetooth.startTemperatureService()
bluetooth.startAccelerometerService()
basic.forever(function () {
    basic.showLeds(`
        # . . # .
        . # . # #
        . . # . .
        # # . # .
        . # . . #
        `)
    basic.pause(100)
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        # . # . #
        . # # # .
        # . # . #
        . . # . .
        `)
    basic.pause(100)
    basic.clearScreen()
    basic.showLeds(`
        . # . . #
        # # . # .
        . . # . .
        . # . # #
        # . . # .
        `)
    basic.pause(100)
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        # . # . #
        . # # # .
        # . # . #
        . . # . .
        `)
})
