controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`galgaDart1`, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(assets.image`RocketMan0`, SpriteKind.Player)
controller.moveSprite(spacePlane, 200, 200)
spacePlane.setStayInScreen(true)
info.setLife(3)
music.playMelody("C5 A B G A F G E ", 120)
game.onUpdateInterval(1000, function () {
    bogey = sprites.create(assets.image`MSS Centerprise0`, SpriteKind.Enemy)
    bogey.setPosition(160, randint(5, 115))
    bogey.setVelocity(-100, 0)
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
