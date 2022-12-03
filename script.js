function calculate_player_rank() {
    let player_level = document.getElementById("player_level").value;
    rank = Math.pow(player_level / 353.341654925471, 1 / (-0.116559433021637));
    rank = Math.round(rank);
    document.getElementById("player_rank").innerHTML = "Player's approximate rank is " + rank;
}

function calculate_clan_rank() {
    let clan_xp = document.getElementById("clan_xp").value;
    rank = Math.pow(clan_xp / 9765518203.36893, 1 / (-0.803866367443068));
    rank = Math.round(rank);
    document.getElementById("clan_rank").innerHTML = "Clan's approximate rank is " + rank;
}