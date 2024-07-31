/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: arrow colours
@author: 
@tags: []
@addedOn: 2024-07-30
*/


const correctTune = tune`
100: E4^100,
100: B4^100,
3000`;
const gameOverTune = tune`
300: B4^500,
300: A4^500,
300: G#4^500,
300: G4^1200,
14000`;
const quickTone = tune`
37.5: B5-10,
1162.5`;


const up_yellow = "1"
const up_red = "2"
const up_green = "3"
const up_blue = "4"
const up = [up_yellow, up_red, up_green, up_blue]

const right_yellow = "q"
const right_red = "w"
const right_green = "e"
const right_blue = "r"
const right = [right_yellow, right_red, right_green, right_blue]

const down_yellow = "a"
const down_red = "s"
const down_green = "d"
const down_blue = "f"
const down = [down_yellow, down_red, down_green, down_blue]

const left_yellow = "z"
const left_red = "x"
const left_green = "c"
const left_blue = "v"
const left = [left_yellow, left_red, left_green, left_blue]

const directions = [up, right, down, left]


const sequence = []

sequence_loc = 0

sequence.push(directions[Math.floor(Math.random() * 4)][Math.floor(Math.random() * 4)]); // add one random thingy 
play_sequence()

const left_hint = "o"
const right_hint = "p"

const yellow_display = "i"
const red_display = "l"
const green_display = "k"
const blue_display = "j"

const up_display = "7"
const right_display = "8"
const down_display = "9"
const left_display = "0"

const game_over = "g"

setLegend(
  [ up_yellow, bitmap`
.......66.......
......6626......
.....666626.....
....66666666....
...6666666666...
..666666666666..
.66666666666666.
6666666666666666
.....666666.....
.....666666.....
.....666666.....
.....666666.....
.....666666.....
.....666666.....
.....666666.....
.....666666.....` ],
  [ up_red, bitmap`
.......33.......
......3323......
.....333323.....
....33333333....
...3333333333...
..333333333333..
.33333333333333.
3333333333333333
.....333333.....
.....333333.....
.....333333.....
.....333333.....
.....333333.....
.....333333.....
.....333333.....
.....333333.....` ],
  [ up_green, bitmap`
.......44.......
......4424......
.....444424.....
....44444444....
...4444444444...
..444444444444..
.44444444444444.
4444444444444444
.....444444.....
.....444444.....
.....444444.....
.....444444.....
.....444444.....
.....444444.....
.....444444.....
.....444444.....` ],
  [ up_blue, bitmap`
.......77.......
......7727......
.....777727.....
....77777777....
...7777777777...
..777777777777..
.77777777777777.
7777777777777777
.....777777.....
.....777777.....
.....777777.....
.....777777.....
.....777777.....
.....777777.....
.....777777.....
.....777777.....` ],
  [ right_yellow, bitmap`
........6.......
........66......
........666.....
........6666....
........66666...
66666666666666..
666666666666666.
6666666666666666
6666666666666626
666666666666626.
66666666666666..
........66666...
........6666....
........666.....
........66......
........6.......` ],
  [ right_red, bitmap`
........3.......
........33......
........333.....
........3333....
........33333...
33333333333333..
333333333333333.
3333333333333333
3333333333333323
333333333333323.
33333333333333..
........33333...
........3333....
........333.....
........33......
........3.......` ],
  [ right_green, bitmap`
........4.......
........44......
........444.....
........4444....
........44444...
44444444444444..
444444444444444.
4444444444444444
4444444444444424
444444444444424.
44444444444444..
........44444...
........4444....
........444.....
........44......
........4.......` ],
  [ right_blue, bitmap`
........7.......
........77......
........777.....
........7777....
........77777...
77777777777777..
777777777777777.
7777777777777777
7777777777777727
777777777777727.
77777777777777..
........77777...
........7777....
........777.....
........77......
........7.......` ],
  [ down_yellow, bitmap`
.....666666.....
.....666666.....
.....666666.....
.....666666.....
.....666666.....
.....666666.....
.....666666.....
.....666666.....
6666666666666666
.66666666666666.
..666666666666..
...6666666666...
....66666666....
.....626666.....
......6266......
.......66.......` ],
  [ down_red, bitmap`
.....333333.....
.....333333.....
.....333333.....
.....333333.....
.....333333.....
.....333333.....
.....333333.....
.....333333.....
3333333333333333
.33333333333333.
..333333333333..
...3333333333...
....33333333....
.....323333.....
......3233......
.......33.......` ],
  [ down_green, bitmap`
.....444444.....
.....444444.....
.....444444.....
.....444444.....
.....444444.....
.....444444.....
.....444444.....
.....444444.....
4444444444444444
.44444444444444.
..444444444444..
...4444444444...
....44444444....
.....424444.....
......4244......
.......44.......` ],
  [ down_blue, bitmap`
.....777777.....
.....777777.....
.....777777.....
.....777777.....
.....777777.....
.....777777.....
.....777777.....
.....777777.....
7777777777777777
.77777777777777.
..777777777777..
...7777777777...
....77777777....
.....727777.....
......7277......
.......77.......` ],
  [ left_yellow, bitmap`
.......6........
......66........
.....666........
....6666........
...66666........
..66666666666666
.626666666666666
6266666666666666
6666666666666666
.666666666666666
..66666666666666
...66666........
....6666........
.....666........
......66........
.......6........` ],
  [ left_red, bitmap`
.......3........
......33........
.....333........
....3333........
...33333........
..33333333333333
.323333333333333
3233333333333333
3333333333333333
.333333333333333
..33333333333333
...33333........
....3333........
.....333........
......33........
.......3........` ],
  [ left_green, bitmap`
.......4........
......44........
.....444........
....4444........
...44444........
..44444444444444
.424444444444444
4244444444444444
4444444444444444
.444444444444444
..44444444444444
...44444........
....4444........
.....444........
......44........
.......4........` ],
  [ left_blue, bitmap`
.......7........
......77........
.....777........
....7777........
...77777........
..77777777777777
.727777777777777
7277777777777777
7777777777777777
.777777777777777
..77777777777777
...77777........
....7777........
.....777........
......77........
.......7........` ],
  [ left_hint, bitmap`
.......LL.......
......LLLL......
.....LLLLLL.....
.......LL.......
.......LL.......
..L....LL....L..
.LL..........LL.
LLLLLL....LLLLLL
LLLLLL....LLLLLL
.LL..........LL.
..L....LL....L..
.......LL.......
.......LL.......
.....LLLLLL.....
......LLLL......
.......LL.......` ],
  [ right_hint, bitmap`
......6666......
.....666666.....
.....666666.....
.....666666.....
.....666666.....
.7777.6666.3333.
777777....333333
777777....333333
777777....333333
777777....333333
.7777.4444.3333.
.....444444.....
.....444444.....
.....444444.....
.....444444.....
......4444......` ],
  [ yellow_display, bitmap`
................
..........666...
.........66666..
....6666666666..
...66666666666..
..66666666666...
..6666666666....
.66666666666....
.6666666666666..
66666666666666..
666666666666666.
666666666666666.
.66666666666666.
......66...666..
................
................` ],
  [ red_display, bitmap`
.......3........
................
.333.3...333....
..3333.3.3333...
3.33333333333...
3333333333333...
333333333333....
.33333333333....
..333333333.....
..3333333333....
...33333333.3...
..33333333333...
..333333333333..
...3333.3.3333..
..33333..333....
...3333.........` ],
  [ green_display, bitmap`
................
.....44.........
....4444........
..4444444.......
..44444444..4...
.4444444444444..
.4444444444444..
.44444444444444.
.44444444444444.
.44444444444444.
..4444444444444.
....44444444444.
......44..4444..
......44...44...
......4.........
......4.........` ],
  [ blue_display, bitmap`
...7777.77......
..77777777.7....
.777777777......
.777...777......
.7777...........
.77777777.......
.777777777777...
.7777777777777..
.7777777777777..
.77777777777777.
.77777777777777.
.77777777777777.
..777777777777..
..777777777777..
....7777777.....
................` ],
  [ up_display, bitmap`
.......LL.......
......LL2L......
.....LLLL2L.....
....LLLLLLLL....
...LLLLLLLLLL...
..LLLLLLLLLLLL..
.LLLLLLLLLLLLLL.
LLLLLLLLLLLLLLLL
.....LLLLLL.....
.....LLLLLL.....
.....LLLLLL.....
.....LLLLLL.....
.....LLLLLL.....
.....LLLLLL.....
.....LLLLLL.....
.....LLLLLL.....` ],
  [ right_display, bitmap`
........L.......
........LL......
........LLL.....
........LLLL....
........LLLLL...
LLLLLLLLLLLLLL..
LLLLLLLLLLLLLLL.
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLL2L
LLLLLLLLLLLLL2L.
LLLLLLLLLLLLLL..
........LLLLL...
........LLLL....
........LLL.....
........LL......
........L.......` ],
  [ down_display, bitmap`
.....LLLLLL.....
.....LLLLLL.....
.....LLLLLL.....
.....LLLLLL.....
.....LLLLLL.....
.....LLLLLL.....
.....LLLLLL.....
.....LLLLLL.....
LLLLLLLLLLLLLLLL
.LLLLLLLLLLLLLL.
..LLLLLLLLLLLL..
...LLLLLLLLLL...
....LLLLLLLL....
.....L2LLLL.....
......L2LL......
.......LL.......` ],
  [ left_display, bitmap`
.......L........
......LL........
.....LLL........
....LLLL........
...LLLLL........
..LLLLLLLLLLLLLL
.L2LLLLLLLLLLLLL
L2LLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
.LLLLLLLLLLLLLLL
..LLLLLLLLLLLLLL
...LLLLL........
....LLLL........
.....LLL........
......LL........
.......L........` ],
  [ game_over, bitmap`
................
333.333.3.3.333.
3...3.3.333.3...
3...333.3.3.33..
3.3.3.3.3.3.3...
333.3.3.3.3.333.
................
................
................
333.3.3.333.333.
3.3.3.3.3...3.3.
3.3.3.3.33..33..
3.3.3.3.3...3.3.
333..3..333.3.3.
................
................` ],
)

display = map`
...
.${sequence[sequence_loc]}.
o.p`

input_direction = null

input_colour = null

input_sequence_loc = 0

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function play_sequence() {
  let wait_time = 1500; // Convert seconds to milliseconds
  for (let i = 0; i < sequence.length; i++) {
    let no_display = map`...
    ...
    o.p`;
    setMap(no_display);
    await wait(wait_time / 10);
    playTune(quickTone)
    let display = map`...
    .${sequence[i]}.
    o.p`;
    setMap(display);
    await wait(wait_time); // Wait before continuing to the next iteration
    wait_time *= 0.8; // Update wait_time for the next iteration
  }
  input_sequence_loc = 0
  sequence_loc = 0
  let display = map`...
  ...
  o.p`;
  setMap(display);
}

async function converter(){
  console.log(input_direction)
  console.log(input_colour)
  if (input_direction && input_colour != null) {
    console.log("input_direction && input_colour")
    if (input_direction[input_colour] == sequence[input_sequence_loc]) {
      console.log("input_direction[input_colour] == sequence[input_sequence_loc]")
      playTune(correctTune);
      display = map`...
      .${input_direction[input_colour]}.
      o.p`
      setMap(display)
      
      input_direction = null
      input_colour = null
      
      input_sequence_loc += 1
      if (input_sequence_loc >= sequence.length) {
        // wait here
        await wait(500); // Wait for 500 milliseconds
        sequence.push(directions[Math.floor(Math.random() * 4)][Math.floor(Math.random() * 4)]); // add one random thingy 
        play_sequence()
        console.log("input_sequence_loc >= sequence.length")
      }
    } else {
      playTune(gameOverTune);
      let game_over = map`
      ...
      .g.
      ...`;
      setMap(game_over);
      input_sequence_loc = 0
      sequence_loc = 0
      input_direction = null
      input_colour = null
      sequence.length = 0; // Clear the sequence array
      await wait(2000);
      sequence.push(directions[Math.floor(Math.random() * 4)][Math.floor(Math.random() * 4)]); // add one random thingy 
      console.log("Before play sequence")
      await play_sequence(); // Ensure this is awaited
      console.log("Directly after play sequence")
      let display = map`
      ...
      .${sequence[sequence_loc]}.
      o.p`
      setMap(display);
      console.log("end of game over")
    }
  }
}

setMap(display)



onInput("w", () => {
  input_direction = up
  
  display = map`...
  .7.
  o.p`
  setMap(display)
  converter()
})

onInput("d", () => {
  input_direction = right
  
  display = map`...
  .8.
  o.p`
  setMap(display)
  converter()
})

onInput("s", () => {
  input_direction = down
  
  display = map`...
  .9.
  o.p`
  setMap(display)
  converter()
})

onInput("a", () => {
  input_direction = left
  
  display = map`...
  .0.
  o.p`
  setMap(display)
  converter()
})

onInput("i", () => {
  input_colour = 0
  
  display = map`...
  .i.
  o.p`
  setMap(display)
  converter()
})

onInput("l", () => {
  input_colour = 1
  
  display = map`...
  .l.
  o.p`
  setMap(display)
  converter()
})

onInput("k", () => {
  input_colour = 2
  
  display = map`...
  .k.
  o.p`
  setMap(display)
  converter()
})

onInput("j", () => {
  input_colour = 3
  
  display = map`...
  .j.
  o.p`
  setMap(display)
  converter()
})





afterInput(() => {
  
})