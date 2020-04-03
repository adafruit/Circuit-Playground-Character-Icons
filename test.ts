// tests go here; this will not be compiled when this package is used as a library
[
    circuitplayground.Adabot,
    circuitplayground.Blinka,
    circuitplayground.Mho,
    circuitplayground.Minerva,
    circuitplayground.Sparky
].forEach(i => {
    let sprite = sprites.create(i.doubled().doubled())
    sprite.setVelocity(Math.randomRange(-60, 60), Math.randomRange(-60, 60))
    sprite.setFlag(SpriteFlag.BounceOnWall, true)
})
effects.starField.startScreenEffect()
