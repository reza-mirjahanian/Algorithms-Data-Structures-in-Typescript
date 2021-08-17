

function graphBFS(graph: Graph, start: number) {
    const queue = [start],
        visited = new Set(queue);
    while (queue.length) {
        const shifted = queue.shift();
        console.log({shifted})
        if(shifted){
            for (const item of graph.neighbors(shifted)) {
                if (!visited.has(item)) {
                    queue.push(item);
                    visited.add(item);
                }
            }
        }

    }
}


graphBFS(graph,7);
