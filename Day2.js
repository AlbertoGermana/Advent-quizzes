/*
    A X - Rock 1
    B Y - Paper 2
    C Z - Scissors 3
*/
let rounds = guide.split("\n");

let pl2_score_part1 = calculateScore(rounds);
let pl2_score_part2 = calculateScore2(rounds);

console.log("Day2 - part1: ->", pl2_score_part1)
console.log("Day2 - part2: ->", pl2_score_part2)

function calculateScore(guide){
    let t = 0
    for (let i = 0; i < guide.length; i++) {
        const round = guide[i];
    
        switch (round) {
            case "B X": t += 1; break; // day2-p1 (lose)
            case "C Y": t += 2; break; // day2-p1 (lose)
            case "A Z": t += 3; break; // day2-p1 (lose)
            case "A X": t += 4; break; // day2-p1 (=)
            case "B Y": t += 5; break; // day2-p1 (=)
            case "C Z": t += 6; break; // day2-p1 (=)
            case "C X": t += 7; break; // day2-p1 (win)
            case "A Y": t += 8; break; // day2-p1 (win)
            case "B Z": t += 9; break; // day2-p1 (win)
            default: break;
        }
    }
    return t
}

function calculateScore2(guide){
    //  PART 2 -> X lose | Y = | Z win
    let t = 0
    for (let i = 0; i < guide.length; i++) {
        const round = guide[i];
    
        switch (round) {
            case "A X": t += 0 + 3; break; // day2-p2 (lose with Scissors)
            case "B X": t += 0 + 1; break; // day2-p2 (lose with Rock)
            case "C X": t += 0 + 2; break; // day2-p2 (lose with Paper)
            case "A Y": t += 3 + 1; break; // day2-p2 (= with Rock)
            case "B Y": t += 3 + 2; break; // day2-p2 (= with Paper)
            case "C Y": t += 3 + 3; break; // day2-p2 (= with Scissors)
            case "A Z": t += 6 + 2; break; // day2-p2 (win with Paper)
            case "B Z": t += 6 + 3; break; // day2-p2 (win with Scissors)
            case "C Z": t += 6 + 1; break; // day2-p2 (win with Rock)
            default: break;
        }
    }
    return t
}



