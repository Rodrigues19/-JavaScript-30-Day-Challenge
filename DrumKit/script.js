function change(id){
    let keyDrum = document.getElementById(id);
    keyDrum.classList.add('box-active');
    let timeA = setTimeout( () => {
        let keyDrum = document.getElementById(id);
        keyDrum.classList.remove('box-active');
    }, 70);
}

function keyEvent(event){
    switch (event.keyCoode) {
        case 97 :
            const audio = new Audio('sounds/clap.waw');
            change('A');
            audio.play();
            break;
        case 115 :
            const audio = new Audio('sounds/hihat.waw');
            change('S');
            audio1.play();
            break;
        case 100 :
            const audio = new Audio('sounds/kick.waw');
            change('D');
            audio2.play();
            break;
        case 102 :
            const audio = new Audio('sounds/openhat.waw');
            change('F');
            audio3.play();
            break;
        case 103 :
            const audio = new Audio('sounds/boom.waw');
            change('G');
            audio4.play();
            break;
        case 104 :
            const audio = new Audio('sounds/ride.waw');
            change('H');
            audio5.play();
            break;
        case 106 :
            const audio = new Audio('sounds/snare.waw');
            change('J');
            audio6.play();
            break;
        case 107 :
            const audio = new Audio('sounds/tom.waw');
            change('K');
            audio7.play();
            break;
        case 108 :
            const audio = new Audio('sounds/tink.waw');
            change('L');
            audio8.play();
            break;                        

    }
}

function clickEvent(event){
    switch (id) {
        case 97 :
            const audio = new Audio('sounds/clap.waw');
            change('A');
            audio.play();
            break;
        case 115 :
            const audio = new Audio('sounds/hihat.waw');
            change('S');
            audio1.play();
            break;
        case 100 :
            const audio = new Audio('sounds/kick.waw');
            change('D');
            audio2.play();
            break;
        case 102 :
            const audio = new Audio('sounds/openhat.waw');
            change('F');
            audio3.play();
            break;
        case 103 :
            const audio = new Audio('sounds/boom.waw');
            change('G');
            audio4.play();
            break;
        case 104 :
            const audio = new Audio('sounds/ride.waw');
            change('H');
            audio5.play();
            break;
        case 106 :
            const audio = new Audio('sounds/snare.waw');
            change('J');
            audio6.play();
            break;
        case 107 :
            const audio = new Audio('sounds/tom.waw');
            change('K');
            audio7.play();
            break;
        case 108 :
            const audio = new Audio('sounds/tink.waw');
            change('L');
            audio8.play();
            break;                        

    }
}



