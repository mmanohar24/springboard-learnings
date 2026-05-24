class Node
{
    constructor( value, adjacent = new Set() )
    {
        this.value = value;
        this.adjacent = adjacent;
    }
}

class Graph
{
    constructor()
    {
        this.nodes = new Set();
    }

    addVertex(vertex)
    {
        this.nodes.add(vertex);
    }

    addVertices(vertexArray)
    {
        for (let node of vertexArray)
        {
            this.addVertex(node)
        }
    }

    addEdge(v1, v2)
    {
        v1.adjacent.add(v2);
        v2.adjacent.add(v1);
    }

    removeEdge(v1, v2)
    {
        v1.adjacent.delete(v2);
        v2.adjacent.delete(v1);
    }

    removeVertex(vertex)
    {
        this.nodes.delete(vertex);
    }

    dfs(start)
    {
        let toVisitStack = [start];
        let seen = new Set([start]);
        let result = [];

        while(toVisitStack.length)
        {
            let currentNode = toVisitStack.pop();
            result.push(currentNode);

            for( let neighbor of currentNode.adjacent)
            {
                if(!seen.has(neighbor))
                {
                    toVisitStack.push(neighbor);
                    seen.add(neighbor)
                }
            }
        }
        return result;
    }

    bfs(start)
    {
        let toVisitQueue = [start];
        let seen = new Set([start]);
        let result = [];

        while(toVisitQueue.length)
        {
            let currentNode = toVisitQueue.shift();
            result.push(currentNode);

            for( let neighbor of currentNode.adjacent)
            {
                if(!seen.has(neighbor))
                {
                    toVisitQueue.push(neighbor);
                    seen.add(neighbor)
                }
            }
        }
        return result;
    }
}

// addVertex/addVertices
let graph = new Graph();

let a = new Node('A');
let b = new Node('B');
let c = new Node("C");
let d = new Node('D');

graph.addVertices([a,b]);
graph.addVertex(c);

graph.addVertices([a, b, c, d])
graph.addEdge(a, b);
graph.addEdge(a, c);
graph.addEdge(b, d);
graph.addEdge(c, d);

graph.removeEdge(b,a)
graph.removeEdge(c,d)

graph.removeVertex(c)
graph.removeVertex(d)

graph.nodes.has(a);
graph.nodes.has(b);
graph.nodes.has(c);
graph.nodes.has(d);

a.adjacent
b.adjacent
c.adjacent
d.adjacent

// DFS & BFS
let S = new Node('S');
let P = new Node('P');
let U = new Node('U');
let X = new Node('X');
let Q = new Node('Q');
let Y = new Node('Y');
let V = new Node('V');
let R = new Node('R');
let W = new Node('W');
let T = new Node('T');

graph.addVertices([S,P,U,X,Q,Y,V,R,W,T])

graph.addEdge(S, P);
graph.addEdge(S, U);

graph.addEdge(P, X);
graph.addEdge(U, X);

graph.addEdge(P, Q);
graph.addEdge(U, V);

graph.addEdge(X, Q);
graph.addEdge(X, Y);
graph.addEdge(X, V);

graph.addEdge(Q, R);
graph.addEdge(Y, R);

graph.addEdge(Y, W);
graph.addEdge(V, W);

graph.addEdge(R, T);
graph.addEdge(W, T);


graph.dfs(S) 
graph.bfs(S) 