/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function spiralOrder(matrix) {
    const visited = [];
    let position = [0, 0];
    const rmax = matrix.length;
    const cmax = matrix[0].length;
    visited.push(`${position[0]}${position[1]}`);

    // keep moving until unable to move
    // remember the positions already visited
    let direction = next(position, [0, 1], rmax, cmax, visited);
    while (direction) {
        position[0] += direction[0];
        position[1] += direction[1];
        visited.push(`${position[0]}${position[1]}`);
        direction = next(position, direction, rmax, cmax, visited);
    }

    return visited.map((el) => {
        const [r, c] = el.split('');
        return matrix[parseInt(r)][parseInt(c)];
    });
};

const next = function next(position, direction, rmax, cmax, visited) {
    const directions = {
        right: [0, 1],
        down: [1, 0],
        left: [0, -1],
        up: [-1, 0],
    };

    // current direction preferred unless a
    // boundary is hit.
    const mr = position[0] + direction[0];
    const mc = position[1] + direction[1];
    // boundaries are the edges of the array or a
    // position we have already visited
    if (
        mr >= 0 &&
        mr < rmax &&
        mc >= 0 &&
        mc < cmax &&
        !visited.includes(`${mr}${mc}`)
    ) {
        return direction;
    }

    // if unable to move in current direction
    // move in some other direction in a
    // preferential order.
    // order of preference is right, down, left up
    const keys = Object.keys(directions);
    for (const key of keys) {
        const mr = position[0] + directions[key][0];
        const mc = position[1] + directions[key][1];
        // boundaries are the edges of the array or a
        // position we have already visited
        if (
            mr >= 0 &&
            mr < rmax &&
            mc >= 0 &&
            mc < cmax &&
            !visited.includes(`${mr}${mc}`)
        ) {
            return directions[key];
        }
    }

    // unable to move in any direction
    return null;
};

console.log(
    spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
);

console.log(
    spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
    ])
);

console.log(
    spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
    ])
);
