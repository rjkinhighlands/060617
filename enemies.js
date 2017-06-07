var enemies = [];

var EnemySpaceship = function () {
    this.health = Math.round(Math.random() * 100);
};

function startLevel(level) {
    if (level === 1) {
        makeEnemies(10);
    } else if (level === 2) {
        makeEnemies(100);
    }
    // ..
}

function makeEnemies(numEnemies) {
    for (var i = 0; i < numEnemires; i++) {
        enemies.push(new EnemySpaceship());
    }
}