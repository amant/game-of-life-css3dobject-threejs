# Game of Life (Three JS CSS-3D-Object)
The game of life was invented by John Conway in 1970, in response to a problem of John von Neumann who was looking for a machine capable of self-replication. 
Algorithm is base on basic rule on how cell dies, continues to live or is created.

The game of life based on the principle of evolution of the grid over time. 
At each step, called generation, the cells evolve according to their neighborhood (each cell has 8 neighbouring cells).
``` 
 _ _ _
|.|.|.|
 - - -
|.|X|.|
 - - -
|.|.|.|
 - - -
 ```

 ## Rules:
 - Death: If a living cell is too isolated (0 or 1 neighbour) or over populated surrounded by (4 or more neighbours) then it dies.
 - Survives: If it is surrounded by (2 or 3 neighbours) then it remain alive.
 - Birth: A cell becomes a live if dead cell is surrounded by (3 neighbours).
 
[DEMO](https://amant.github.io/game-of-life-css3dobject-threejs/) 
