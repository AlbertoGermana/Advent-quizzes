/*
    A X - Pietra 1
    B Y - Carta 2
    C Z - Forbice 3
*/
let rounds = guide.split("\n");

let pl2_score_part1 = calculateScore(rounds);
let pl2_score_part2 = calculateScore2(rounds);

console.log("Day2 - part1: ->", pl2_score_part1) // 14069 il punteggio nella parte 1 del gioco
console.log("Day2 - part2: ->", pl2_score_part2) // 12411 il punteggio nella parte 2 del gioco

function calculateScore(guide){
    let t = 0
    for (let i = 0; i < guide.length; i++) {
        const round = guide[i];
    
        switch (round) {
            case "B X": t += 1; break; // day2-p1 (perde)
            case "C Y": t += 2; break; // day2-p1 (perde)
            case "A Z": t += 3; break; // day2-p1 (perde)
            case "A X": t += 4; break; // day2-p1 (pareggio)
            case "B Y": t += 5; break; // day2-p1 (pareggio)
            case "C Z": t += 6; break; // day2-p1 (pareggio)
            case "C X": t += 7; break; // day2-p1 (vince)
            case "A Y": t += 8; break; // day2-p1 (vince)
            case "B Z": t += 9; break; // day2-p1 (vince)
            default: break;
        }
    }
    return t
}

function calculateScore2(guide){
    /*  PARTE 2
        calcola se in quel round devo vincere-perdere o pareggiare
        X PERDE
        Y PAREGGIA
        Z VINCE */
    let t = 0
    for (let i = 0; i < guide.length; i++) {
        const round = guide[i];
    
        switch (round) {
            case "A X": t += 0 + 3; break; // day2-p2 (perdo con forbice)
            case "B X": t += 0 + 1; break; // day2-p2 (perdo con pietra)
            case "C X": t += 0 + 2; break; // day2-p2 (perdo con carta)
            case "A Y": t += 3 + 1; break; // day2-p2 (pareggio con pietra)
            case "B Y": t += 3 + 2; break; // day2-p2 (pareggio con carta)
            case "C Y": t += 3 + 3; break; // day2-p2 (pareggio con forbice)
            case "A Z": t += 6 + 2; break; // day2-p2 (vinco con carta)
            case "B Z": t += 6 + 3; break; // day2-p2 (vinco con forbice)
            case "C Z": t += 6 + 1; break; // day2-p2 (vinco con pietra)
            default: break;
        }
    }
    return t
}



