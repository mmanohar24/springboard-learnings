class BinaryTreeNode
{
    constructor(value, left = null, right = null)
    {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree
{
    constructor(root = null)
    {
        this.root = root;
    }

    /**
     * minDepth(): return the minimum depth of the tree
     * The minimum depth is the number of nodes along the shortest path from root node down to the nearest leaf node.
     */

    minDepth()
    {
        if(!this.root) return 0;

        function traverse(node)
        {
            if(!node.left && !node.right) return 1;

            const left = node.left ? traverse(node.left) : Infinity;
            const right = node.right ? traverse(node.right) : Infinity;
            return 1 + Math.min(left, right);
        }

        return traverse(this.root);

    }

    maxDepth()
    {
        if(!this.root) return 0;

        // function traverse(node)
        // {
        //     if(!node.left && !node.right) return 1;

        //     let leftDepth = node.left ? traverse(node.left) : 0;
        //     let rightDepth = node.right ? traverse(node.right) : 0;
        //     return 1 + Math.max(leftDepth, rightDepth);
        // }

        function traverse(node)
        {
            if(!node) return 0;
            return 1 + Math.max(traverse(node.left), traverse(node.right));
        }

        return traverse(this.root);
    }

    maxSum()
    {
        if(!this.root) return 0;
        let maxSum = -Infinity;

        function traverse(node)
        {
            if(!node) return 0;

            const left = Math.max(0, traverse(node.left));
            const right = Math.max(0, traverse(node.right));
            maxSum = Math.max(maxSum, node.value + left + right);
            return node.value + Math.max(left, right);
        }

        traverse(this.root);
        return maxSum;
    }

    nextLarger(lowerBound)
    {
        if(!this.root) return null;
        let closest = null;

        function traverse(node)
        {
            if(!node) return;

            if(node.value > lowerBound)
            {
                if(closest === null || node.value < closest)
                {
                    closest = node.value;
                }
            }
            
            traverse(node.left);
            traverse(node.right);
        }
        traverse(this.root);
        return closest;
    }


    areCousins(nodeA, nodeB)
    {
        if(!this.root) return false;
        if(!nodeA || !nodeB) return false;
        if(nodeA === nodeB) return false;
        if(nodeA === this.root || nodeB === this.root) return false;

        // BFS level-order: track parent for each node at the current level
        const queue = [{ node: this.root, parent: null }];

        while(queue.length)
        {
            const levelSize = queue.length;
            let parentA = null;
            let parentB = null;

            for(let i = 0; i < levelSize; i++)
            {
                const current = queue.shift();

                if(current.node === nodeA) parentA = current.parent;
                if(current.node === nodeB) parentB = current.parent;

                if(current.node.left) queue.push({ node: current.node.left, parent: current.node });
                if(current.node.right) queue.push({ node: current.node.right, parent: current.node });
            }

            // After finishing this level, decide
            if(parentA && parentB) return parentA !== parentB;
            if((parentA && !parentB) || (!parentA && parentB)) return false;
        }

        return false;
    }

    lowestCommonAncestors(p,q)
    {
        return this.lwc(this.root, p, q);
    }

    lwc(root, p, q)
    {
        if(root === null) return null;
        if(root === p || root === q) return root;

        let left = this.lwc(root.left, p, q);
        let right = this.lwc(root.right, p, q);

        if(left != null && right != null) return root;

        return left !== null ? left : right;
    }
}

const tree = new BinaryTree( new BinaryTreeNode(6, 
    new BinaryTreeNode(4, new BinaryTreeNode(3), new BinaryTreeNode(11) ),
    new BinaryTreeNode(8,
        new BinaryTreeNode(4), 
        new BinaryTreeNode(5,
            new BinaryTreeNode(7, new BinaryTreeNode(-2), new BinaryTreeNode(1) )
        )
    )
)
);

console.log('Minimum Depth: ', tree.minDepth());  
console.log('Maximum Depth: ', tree.maxDepth()); 
console.log('Maximum Sum: ', tree.maxSum());    
console.log('Next Larger: ', tree.nextLarger(4));

const nodeA = tree.root.left.left;
const nodeB = tree.root.right.left;
console.log('Are Cousins: ', tree.areCousins(nodeA, nodeB));

const lca = tree.lowestCommonAncestors(nodeA, nodeB);
console.log('Lowest Common Ancestors: ', lca ? lca.value : null);