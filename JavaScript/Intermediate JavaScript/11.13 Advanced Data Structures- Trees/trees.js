class TreeNode
{
    constructor(value, children = [])
    {
        this.value = value;
        this.children = children;
    }
}

class Tree
{
    constructor(root = null)
    {
        this.root = root;
    }

    /** sumValues(): add up all of the values in the tree. */

    sumValues()
    {
        if(!this.root) return 0;

        let totalSum = 0;

        function traverse(node)
        {
            totalSum += node.value;

            for(let child of node.children)
            {
                traverse(child);
            }
        }

        traverse(this.root);
        return totalSum;
    }

    /** countEvens(): count all of the nodes in the tree with even values. */

    countEvens()
    {
        let totalEvens = 0;

        function traverse(node)
        {
            if(node.value % 2 === 0) totalEvens += 1;

            for(let child of node.children)
            {
                traverse(child);
            }
        }
        
        traverse(this.root);
        return totalEvens;
    }

    /** 
     * numGreater(lowerBound): return a count of the number of nodes
     * whose value is greater than lowerBound.
     * */
    
    numGreater(lowerBound)
    {
        let count = 0;

        function traverse(node)
        {
            if(node.value >= lowerBound) count += 1;

            for(let child of node.children)
            {
                traverse(child);
            }
        }

        traverse(this.root);
        return count;
    }
}

const tree = new Tree( new TreeNode(5, 
    [
        new TreeNode(3, 
            [
                new TreeNode(2),
                new TreeNode(4),
                new TreeNode(6)
            ]
        ),
        new TreeNode(8, 
            [
                new TreeNode(7),
                new TreeNode(12),
                new TreeNode(10)
            ]
        )
    ]
) );

console.log('Sum of values:', tree.sumValues());
console.log('Count of even values:', tree.countEvens());
console.log('Number of values greater than 4:', tree.numGreater(4));

// module.exports = { Tree, TreeNode };

