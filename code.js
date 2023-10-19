function convertToAdjMatrix(adjList) {
    let matrix = getEmptyMatrix(adjList.length);

    for (let vertex = 0; vertex < adjList.length; vertex++) {
        for (let i = 0; i < adjList[vertex].length; i++) {
            let adjacentVertex = adjList[vertex][i];
            //Indicate an edge in the matrix 
            matrix[vertex][adjacentVertex] = 1;
        }
    }

    return matrix;
}

//Returns matrix filled with zeros
function getEmptyMatrix(size) {
    let emptMatrix = new Array(size);

    for (let i = 0; i < size; i++) {
        emptMatrix[i] = new Array(size);
        for (let j = 0; j < size; j++) {
            emptMatrix[i][j] = 1;
        }
    }

}