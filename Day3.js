rucksacks = rucksacks.split('\n');

let sum_of_priorities_part1 = 0;
for (let i = 0; i < rucksacks.length; i++) {
    const c = rucksacks[i];
        let first_half  = c.substring(0, c.length/2);
        let second_half = c.substring(c.length/2, c.length);
        
        var read_yet = false;

        for (let j = 0; j < first_half.length; j++) {
            const letter = first_half[j];
            var index = second_half.indexOf(letter)

            if(index != -1 && !read_yet){
                sum_of_priorities_part1 += calcolaPriorita(letter)
                read_yet = true;
            }
        }
}

console.log("Day3 - part1: ->",  sum_of_priorities_part1)

/* ------------------------------------------------------------ */

let sum_of_priorities_part2 = 0;
let three_rucksacks = "";

for (let i = 0; i < rucksacks.length; i++) {
    const c = rucksacks[i];
    three_rucksacks += c + "|";
    if((i+1)% 3 == 0){
        let fst = three_rucksacks.split("|")[0];
        let snd = three_rucksacks.split("|")[1];
        let trd = three_rucksacks.split("|")[2];
        
        let found = false;
        for (let j = 0; j < fst.length; j++) {
            const letter = fst[j];
            //check if char is inside the second string
            let index = snd.indexOf(letter)
            if (index != -1 && !found){
                for (let k = 0; k < trd.length; k++) {
                    //check if char is also inside the third string
                    let index2 = trd.indexOf(letter)
                    if(index2 != -1 && !found){
                        found = true;
                        sum_of_priorities_part2 += calcolaPriorita(letter);
                    }
                }
            }
        }
    }
    
    // reset every 3 times
    (i+1) % 3 == 0 
        ? three_rucksacks = "" 
        : null;
      
}
console.log("Day3 - part2: ->",  sum_of_priorities_part2)

/* ------------------------------------------------------------ */
function calcolaPriorita(lettera){
    let letters = ["","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    return letters.indexOf(lettera);
}
