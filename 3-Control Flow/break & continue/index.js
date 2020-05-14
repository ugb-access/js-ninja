let masterRanks = ['l1', 'l2', 'l3', 'l4', 'l5'];

for( let i = masterRanks.length; i--;) {
    if(masterRanks[i] === 'l3') {
        break;
    }
    console.log(masterRanks[i])
}

// continue 

for( let j = 0; j < masterRanks.length; j++) {
    if(masterRanks[j] === 'l2') {   
        continue;
    }
    console.log(masterRanks[j]);
}