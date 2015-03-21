//
// Точка входа.
//
$(document).ready(function() {

    GamePlay.init({
        startLevel: 1,
        serverScript: 'rating.php',
        levels: [
            {
                numLevel: 1,
                timer: 15,
                wormSpeed: 300,
                doctorSpeed: null
            },
            {
                numLevel: 2,
                timer: 20,
                wormSpeed: 300,
                doctorSpeed: 200
            }
        ],
        attrClassFoods: [
            'access',
            'exe',
            'database',
            'file',
            'image',
            'mail'
        ],
        attrIdPlayField: '#matrix1',
        attrClassCell: 'cell',
        attrClassWorm: 'worm',
        attrClassDoctor: 'doctor',
        attrIdMessage: '#message',
        attrIdUsername: '#user',
        attrIdTimer: '#timer',
        attrIdScore: '#score',
        attrIdLevel: '#level',
        attrIdStart: '#start',
        attrIdGameOver: '#gameOver',
        numRows: 20,
        numCols: 20
    });

});
