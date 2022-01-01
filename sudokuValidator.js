function validSolution(board) {
    const transposedBoard = board[0].map((_, colIndex) => board.map(row => row[colIndex]));
    const sudokuPass = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const boardPass = board.every((row) => !row.includes(0) && sudokuPass.every((num) => row.includes(num)));
    const transposedPass = transposedBoard.every((row) => sudokuPass.every((num) => row.includes(num)));
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {

        }
    }
    return boardPass && transposedPass;
}

module.exports = validSolution;