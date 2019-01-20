class GameOfLife {
    // copy the given array and initialize grid and grid size
    constructor(grid = []) {
        this.setGrid(grid);
    }

    // check if cell is a live
    _isCellALive(row, col, x, y) {
        // in-case of array boundry, neighbour would be on opposite side of the boundary.
        const gridSize = this.gridSize;
        const neighbourX = (row + x + gridSize) % gridSize;
        const neighbourY = (col + y + gridSize) % gridSize;

        if (neighbourX !== row || neighbourY !== col) {
            if (this.grid[neighbourX][neighbourY] === 1) {
                return true
            }
        }

        return false;
    }

    // check if cell on given coordinate lives or dies
    _doesLivesOn(row, col) {
        const neighbourCells = [-1, 0, 1];

        // count the number of live neighbors
        const numberOfLiveNeighbours = neighbourCells.reduce((total, x) => neighbourCells.reduce((count, y) => {
                if (this._isCellALive(row, col, x, y)) {
                    count += 1;
                }

                return count;
            }, total)
            , 0);

        // if the cell is living and has 2 or 3 live neighbours
        if (this.grid[row][col] === 1 &&
            (numberOfLiveNeighbours === 2 || numberOfLiveNeighbours === 3)) {
            return true;
        }

        // if the cell is dead and has exactly 3 neighbours
        if (this.grid[row][col] === 0 && numberOfLiveNeighbours === 3) {
            return true;
        }

        // otherwise it's either overpopulated or underpopulated
        // and the cell is dead
        return false;
    }

    // calculate cells that live on for next iteration
    getNextGeneration() {
        const nextGen = new Array(this.gridSize).fill(0).map(() => new Array(this.gridSize).fill(0));

        this.grid = nextGen.map((cols, row) =>
            cols.map((_, col) =>
                this._doesLivesOn(row, col) ? 1 : 0));

        return this.grid.map(cols => [].concat(cols));
    }

    setGrid(grid) {
        this.grid = grid.map(cells => [].concat(cells));
        this.gridSize = this.grid.length;
    }

    getGrid() {
        return this.grid;
    }
}