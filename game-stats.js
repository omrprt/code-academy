const team = {
    _players: [{
            firstName: 'John',
            lastName: 'Smith',
            age: 25
        },
        {
            firstName: 'Pablo',
            lastName: 'Rivera',
            age: 23
        },
        {
            firstName: 'Jane',
            lastName: 'Mei',
            age: 20
        }
    ],
    _games: [{
            opponent: 'Brancos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Wolves',
            teamPoints: 35,
            opponentPoints: 50
        },
        {
            opponent: 'Cats',
            teamPoints: 20,
            opponentPoints: 50
        },
    ],
    get players() {
        return this._players;
    },

    get games() {
        return this._games;
    },

    addPlayer(firstName, lastName, age) {
        let player ={
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player)
    },

    addGame(oppName, points, oppPoints) {
        const game = {
            opponent: oppName,
            points: points,
            opponentPoints: oppPoints
        };
        this.games.push(game);
    }
}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 57);

console.log(team.players)

team.addGame('Lions', 100, 50);
team.addGame('Juice', 50, 25);
team.addGame('Lizards', 25, 99);

console.log(team.games);
