function validSolution(board) {
    const transposedBoard = board[0].map((_, colIndex) => board.map(row => row[colIndex]));
    const sudokuPass = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // console.log(transposedBoard)
    board.every((row) => {
        console.log(row);
        if (row.includes(0)) return false;
        if (!sudokuPass.every((num) => row.includes(num))) {
            return false;
        }
    })
    console.log("passes this");
    transposedBoard.forEach((row) => {
        console.log(row, sudokuPass.every((num) => row.includes(num)));
        if (!sudokuPass.every((num) => row.includes(num))) {
            return false;
        }
    })
    return true;
}

module.exports = validSolution;