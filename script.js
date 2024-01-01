function calculate_player_rank() {
    let player_level = document.getElementById("player_level").value;
    rank = Math.pow(player_level / 375.014687647882, 1 / (-0.120203030642183));
    rank = Math.round(rank);
    document.getElementById("player_rank").innerHTML = "Player's approximate rank is " + rank;
}

function calculate_clan_rank() {
    let clan_xp = document.getElementById("clan_xp").value;
    rank = Math.pow(clan_xp / 10064755961.5884, 1 / (-0.783051223137246));
    rank = Math.round(rank);
    document.getElementById("clan_rank").innerHTML = "Clan's approximate rank is " + rank;
}
