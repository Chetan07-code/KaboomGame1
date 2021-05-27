 const player1 = add([
  sprite('player1'),
  scale(0.8),
  pos(30,30),
  body()
])

const MOVE_SPEED =200

keyDown('right',()=>{
  player1.move(MOVE_SPEED,0)
})



keyDown('left',()=>{
  player1.move(-MOVE_SPEED,0)
})

addLevel ([
   '       ',
   '   @     ',
   '        ',
   'xxxxxxx',
],{
  width:40,
  height:40,
  'x' : [sprite('ground'),solid()],
  '@' : [ sprite ('enemy'),scale(0.9),body(), 'dangerous']
})

player1.collides('dangerous',()=>{
  destroy(player1)
})