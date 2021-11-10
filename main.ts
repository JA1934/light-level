basic.forever(function () {
    // If the light level is greater than 128 say hello
    if (input.lightLevel() > 128) {
        basic.showString("Hello!")
    } else {
        // If light level less show this image.
        images.createBigImage(`
            # . . . . . . . . #
            . # . . . . . . # .
            . . # . . . . # . .
            . . . # . . # . . .
            . . . . # # . . . .
            `).scrollImage(1, 200)
    }
})
