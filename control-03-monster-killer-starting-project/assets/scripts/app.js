const  ATTACK_VALUE = 10;
const  STRONG_ATTACK_VALUE = 14;
const MONSTER_ATTACH_VALUE = 12;
const HEAL_VALUE = 20;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife

adjustHealthBars(chosenMaxLife);
function roundEnd() {
    if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0){
        alert('Draw!');
    } else if (currentPlayerHealth <= 0){
        alert('Looser');
    } else if (currentMonsterHealth <= 0){
        alert('You Win, mate!');
    }
}

function attackMonster(mode) {
    if (mode === 'ATTACK'){
        maxDamage = ATTACK_VALUE;
    } else if (mode === 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    currentMonsterHealth -=  dealMonsterDamage(MONSTER_ATTACH_VALUE);
    currentPlayerHealth -= dealPlayerDamage(maxDamage);
    roundEnd();
}

function attackHandler() {
    attackMonster('ATTACK');
}

function strongAttackHandler() {
    attackMonster('STRONG_ATTACK');
}

function healthHandler() {
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
        alert('Cheater');
    } else {
        increasePlayerHealth(HEAL_VALUE);
        currentPlayerHealth +=  HEAL_VALUE;
        roundEnd();
    }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healthHandler)