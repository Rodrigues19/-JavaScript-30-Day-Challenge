function change(id) {
  let keyDrum = document.getElementById(id);
  keyDrum.classList.add("box-active");
  let timeA = setTimeout(() => {
    let keyDrum = document.getElementById(id);
    keyDrum.classList.remove("box-active");
  }, 70);
}

function keyEvent(event) {
  switch (event.keyCode) {
    case 97:
      const audio = new Audio("sounds/clap.wav");
      change("A");
      audio.play();
      break;
    case 115:
      const audio1 = new Audio("sounds/hihat.wav");
      change("S");
      audio1.play();
      break;
    case 100:
      const audio2 = new Audio("sounds/kick.wav");
      change("D");
      audio2.play();
      break;
    case 102:
      const audio3 = new Audio("sounds/openhat.wav");
      change("F");
      audio3.play();
      break;
    case 103:
      const audio4 = new Audio("sounds/boom.wav");
      change("G");
      audio4.play();
      break;
    case 104:
      const audio5 = new Audio("sounds/ride.wav");
      change("H");
      audio5.play();
      break;
    case 106:
      const audio6 = new Audio("sounds/snare.wav");
      change("J");
      audio6.play();
      break;
    case 107:
      const audio7 = new Audio("sounds/tom.wav");
      change("K");
      audio7.play();
      break;
    case 108:
      const audio8 = new Audio("sounds/tink.wav");
      change("L");
      audio8.play();
      break;
  }
}
