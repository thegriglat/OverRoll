const Heroes = [
    { name: "ana", logo: require('./assets/ana.png'), role: 'support' },
    { name: "ashe", logo: require('./assets/ashe.png'), role: 'dps' },
    { name: "baptiste", logo: require('./assets/baptiste.png'), role: 'support' },
    { name: "bastion", logo: require('./assets/bastion.png'), role: 'dps' },
    { name: "brigitte", logo: require('./assets/brigitte.png'), role: 'support' },
    { name: "doomfist", logo: require('./assets/doomfist.png'), role: 'dps' },
    { name: "dva", logo: require('./assets/dva.png'), role: 'tank' },
    { name: "echo", logo: require('./assets/echo.png'), role: 'dps' },
    { name: "genji", logo: require('./assets/genji.png'), role: 'dps' },
    { name: "hanzo", logo: require('./assets/hanzo.png'), role: 'dps' },
    { name: "junkrat", logo: require('./assets/junkrat.png'), role: 'dps' },
    { name: "lucio", logo: require('./assets/lucio.png'), role: 'support' },
    { name: "mccree", logo: require('./assets/mccree.png'), role: 'dps' },
    { name: "mei", logo: require('./assets/mei.png'), role: 'dps' },
    { name: "mercy", logo: require('./assets/mercy.png'), role: 'support' },
    { name: "moira", logo: require('./assets/moira.png'), role: 'support' },
    { name: "orisa", logo: require('./assets/orisa.png'), role: 'tank' },
    { name: "pharah", logo: require('./assets/pharah.png'), role: 'dps' },
    { name: "reaper", logo: require('./assets/reaper.png'), role: 'dps' },
    { name: "reinhardt", logo: require('./assets/reinhardt.png'), role: 'tank' },
    { name: "roadhog", logo: require('./assets/roadhog.png'), role: 'tank' },
    { name: "sigma", logo: require('./assets/sigma.png'), role: 'tank' },
    { name: "soldier-76", logo: require('./assets/soldier-76.png'), role: 'dps' },
    { name: "sombra", logo: require('./assets/sombra.png'), role: 'dps' },
    { name: "symmetra", logo: require('./assets/symmetra.png'), role: 'dps' },
    { name: "torbjorn", logo: require('./assets/torbjorn.png'), role: 'dps' },
    { name: "tracer", logo: require('./assets/tracer.png'), role: 'dps' },
    { name: "widowmaker", logo: require('./assets/widowmaker.png'), role: 'dps' },
    { name: "winston", logo: require('./assets/winston.png'), role: 'tank' },
    { name: "wrecking-ball", logo: require('./assets/wrecking-ball.png'), role: 'tank' },
    { name: "zarya", logo: require('./assets/zarya.png'), role: 'tank' },

];

export function getRndHero(role) {
    if (role === undefined) role = "all";
    const _l = Heroes.filter(e => e.role === role || role === "all");
    const i = Math.trunc(Math.random() * _l.length);
    return _l[i];
}

export default Heroes;