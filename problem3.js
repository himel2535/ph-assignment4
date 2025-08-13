const player1 = { name: "Brazil", foul: 5, cardY: 1, cardR: 0 };
const player2 = { name: "Argentina", foul: 7, cardY: 0, cardR: 0 };

function bestTeam(player1, player2) {
    const player1UnFair = player1.foul + player1.cardY + player1.cardR;
    const player2UnFair = player2.foul + player2.cardY + player2.cardR;

    if (
    typeof player1 !== "object" ||
    typeof player2 !== "object" ||
    Array.isArray(player1) ||
    Array.isArray(player2)
    ) 
    {
        return "Invalid";
    }

    else {
    if (player1UnFair < player2UnFair) {
        return player1.name;
    } 
    else if (player2UnFair < player1UnFair) {
        return player2.name;
    } 
    else {
        return "Tie";
    }
  }
}
result = bestTeam(player1, player2);
console.log(result);
