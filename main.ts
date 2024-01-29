scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.skillmap.islandTile3, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.skillmap.islandTile0, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.skillmap.islandTile6, function (sprite, location) {
    game.gameOver(true)
})
let Bike = sprites.create(img`
    . . . . . . d d . . . . . . . . 
    . . . . . . d d . . . . . . . . 
    . . . . . . d . . . . . . . . . 
    . . . . . 4 4 4 4 d . . . . . . 
    . . . . . 4 4 4 . . f 2 2 2 f . 
    . . . . . 4 4 4 4 4 d . 2 . . . 
    . . . . . 4 4 4 4 . . . 2 . . . 
    . . . . . f f f 4 4 4 . 2 . . . 
    . . 2 2 2 2 2 2 4 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 4 2 2 2 2 2 2 . 
    . . . 2 . . . . e . e . . 2 . . 
    . . f 2 . . . . . . . . f 2 . . 
    . f f 2 f . . . . . . f f 2 f . 
    . f 2 2 f . . . . . . f 2 2 f . 
    . f f f f . . . . . . f f f f . 
    . . f f . . . . . . . . f f . . 
    `, SpriteKind.Player)
controller.moveSprite(Bike)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(Bike, sprites.skillmap.islandTile5)
scene.cameraFollowSprite(Bike)
