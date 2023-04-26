var Start = document.querySelector('.Start')
var viking = document.querySelector('.viking')
var squelette = document.querySelector('.squelette')
var AttackV = document.querySelector('.AttackV')
var AttackS = document.querySelector('.AttackS')
var DefenseV = document.querySelector('.DefenseV')
var DefenseS = document.querySelector('.DefenseS')
var vieV = document.querySelector('.vieV')
var vieS = document.querySelector('.vieS')
var actionV = document.querySelector('.actionV')
var actionS = document.querySelector('.actionS')
var VieAV = 100
var VieAS = 100
var protectV = document.querySelector('.protectV')
var protectS = document.querySelector('.protectS')
var barrevieV = document.querySelector('.progressbar-placeV')
var barrevieS = document.querySelector('.progressbar-placeS')
var winV = document.querySelector('.winV')
var winS = document.querySelector('.winS')
var audio = new Audio('Battle-of-the-Ancients.mp3');
var coup = new Audio('umph.mp4');
var épée = new Audio('woosh.mp4');
audio.volume = 0.5;
vieV.innerText = VieAV;
var aDV = document.querySelector('.affichDV')
var aDS = document.querySelector('.afficheDS')
var Start1 = document.querySelector('.Start1')
var Start2 = document.querySelector('.Start2')

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

















Start.addEventListener("click", function () {
    audio.play()
    Play = getRandom(1, 2)
    console.log(Play)
    if (Play == 2) {
        Start.style.display = 'none';
        viking.style.display = 'block';
        squelette.style.display = 'block';
        Start2.style.display = 'flex'
        vieV.style.display = 'block';
        vieS.style.display = 'block';
        barrevieV.style.display = 'block';
        barrevieS.style.display = 'block';
    }
    else {
        Start.style.display = 'none';
        viking.style.display = 'block';
        squelette.style.display = 'block';
        vieV.style.display = 'block';
        vieS.style.display = 'block';
        barrevieV.style.display = 'block';
        barrevieS.style.display = 'block';
        Start1.style.display = 'flex'

    }

    setTimeout(function () {
        Start2.style.display = 'none'
        Start1.style.display = 'none'
        if (Play == 2) {
            AttackV.style.display = 'none'
            DefenseV.style.display = 'none'
            AttackS.style.display = 'block'
            DefenseS.style.display = 'block'
        }
        else {
            AttackV.style.display = 'block'
            DefenseV.style.display = 'block'
            AttackS.style.display = 'none'
            DefenseS.style.display = 'none'
        }
    }, 2000)
}
)



AttackV.addEventListener("click", function () {
    //personnage bouge
    if (protectS.style.display == 'flex') {
        degatS = getRandom(10, 30) / 2
        if (degatS >= VieAS) {
            viking.style.display = 'block';
            squelette.style.display = 'none';
            actionV.style.display = 'none';
            actionS.style.display = 'none';
            vieV.style.display = 'none';
            vieS.style.display = 'none';
            barrevieV.style.display = 'none';
            barrevieS.style.display = 'none';
            protectV.style.display = 'none';
            protectS.style.display = 'none';
            winV.style.display = 'block';
            viking.classList.add('VictoireV');
        }
        else {
            VieAS = VieAS - degatS
            viking.classList.add('animeV')
            aDS.innerText = degatS
            aDS.style.display = 'flex'
            aDS.classList.add('animeDS')
            setTimeout(function () { aDS.classList.remove('animeDS') }, 1000)
            setTimeout(function () { aDS.style.display = 'none' }, 999)
            squelette.classList.remove('animeS')
            var TailleVS = VieAS * 2
            vieS.style.width = TailleVS + "px";
            vieS.innerText = VieAS
            protectS.style.display = 'none'
            AttackV.style.display = 'none'
            DefenseV.style.display = 'none'
            AttackS.style.display = 'block'
            DefenseS.style.display = 'block'
        }
    }
    else {
        degatS = getRandom(10, 30)
        if (degatS >= VieAS) {
            viking.style.display = 'block';
            squelette.style.display = 'none';
            actionV.style.display = 'none';
            actionS.style.display = 'none';
            vieV.style.display = 'none';
            vieS.style.display = 'none';
            barrevieV.style.display = 'none';
            barrevieS.style.display = 'none';
            protectV.style.display = 'none';
            protectS.style.display = 'none';
            winV.style.display = 'block';
            viking.classList.add('VictoireV');
        }
        else {
            VieAS = VieAS - degatS
            viking.classList.add('animeV')
            aDS.innerText = degatS
            aDS.style.display = 'flex'
            aDS.classList.add('animeDS')
            setTimeout(function () { aDS.classList.remove('animeDS') }, 1000)
            setTimeout(function () { aDS.style.display = 'none' }, 999)

            squelette.classList.remove('animeS')
            var TailleVS = VieAS * 2
            vieS.style.width = TailleVS + "px";
            vieS.innerText = VieAS
            protectS.style.display = 'none'
            AttackV.style.display = 'none'
            DefenseV.style.display = 'none'
            AttackS.style.display = 'block'
            DefenseS.style.display = 'block'
        }
    }
    coup.play()
}
)

AttackS.addEventListener("click", function () {
    //personnage bouge
    if (protectV.style.display == 'flex') {
        degatV = getRandom(10, 30) / 2
        if (degatV >= VieAV) {
            viking.style.display = 'none';
            squelette.style.display = 'block';
            actionV.style.display = 'none';
            vieV.style.display = 'none';
            vieS.style.display = 'none';
            actionV.style.display = 'none';
            actionS.style.display = 'none'
            barrevieV.style.display = 'none';
            barrevieS.style.display = 'none';
            protectV.style.display = 'none';
            protectS.style.display = 'none';
            winS.style.display = 'block'
            squelette.classList.add('VictoireS');
        }
        else {
            squelette.classList.add('animeS')
            aDV.innerText = degatV
            aDV.style.display = 'flex'
            aDV.classList.add('animeDV')
            setTimeout(function () { aDV.classList.remove('animeDV') }, 1000)
            setTimeout(function () { aDV.style.display = 'none' }, 999)
            VieAV = VieAV - degatV
            viking.classList.remove('animeV')
            var TailleVV = VieAV * 2
            vieV.style.width = TailleVV + "px";
            vieV.innerText = VieAV
            protectV.style.display = 'none'
            AttackS.style.display = 'none'
            DefenseS.style.display = 'none'
            AttackV.style.display = 'block'
            DefenseV.style.display = 'block'
        }
    }
    else {
        degatV = getRandom(10, 30)
        if (degatV >= VieAV) {
            viking.style.display = 'none';
            squelette.style.display = 'block';
            actionV.style.display = 'none';
            vieV.style.display = 'none';
            vieS.style.display = 'none';
            actionV.style.display = 'none';
            actionS.style.display = 'none';
            barrevieV.style.display = 'none';
            barrevieS.style.display = 'none';
            protectV.style.display = 'none';
            protectS.style.display = 'none';
            winS.style.display = 'block';
            squelette.classList.add('VictoireS');
        }
        else {
            squelette.classList.add('animeS')
            aDV.innerText = degatV
            aDV.style.display = 'flex'
            aDV.classList.add('animeDV')
            VieAV = VieAV - degatV
            viking.classList.remove('animeV')
            setTimeout(function () { aDV.classList.remove('animeDV') }, 1000)
            setTimeout(function () { aDV.style.display = 'none' }, 999)
            var TailleVV = VieAV * 2
            vieV.style.width = TailleVV + "px";
            vieV.innerText = VieAV
            protectV.style.display = 'none'
            AttackS.style.display = 'none'
            DefenseS.style.display = 'none'
            AttackV.style.display = 'block'
            DefenseV.style.display = 'block'
        }
    }
    épée.play()
}
)

DefenseV.addEventListener("click", function () {
    protectV.style.display = 'flex'
    AttackV.style.display = 'none'
    DefenseV.style.display = 'none'
    AttackS.style.display = 'block'
    DefenseS.style.display = 'block'
    squelette.classList.remove('animeS')
}
)

DefenseS.addEventListener("click", function () {
    protectS.style.display = 'flex'
    AttackS.style.display = 'none'
    DefenseS.style.display = 'none'
    AttackV.style.display = 'block'
    DefenseV.style.display = 'block'
    viking.classList.remove('animeV')
}
)

