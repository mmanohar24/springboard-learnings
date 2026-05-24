class BinarySearchTreeNode
{
    constructor(value, left = null, right = null)
    {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree
{
    constructor(root = null)
    {
        this.root = root;
    }

    insert(value)
    {
        // Creates a new node
        const newNode = new BinarySearchTreeNode(value);

        // If the tree is empty, make the new node the root
        if(this.root === null)
        {
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while(true)
        {
            // If the insert value is less than the current node's value, move to left subtree.
            if(value < current.value)
            {
                // If there's no left child, then we found a spot to insert.
                if(current.left === null)
                {
                    // Create a new node, attach it and return the tree
                    current.left = newNode;
                    return this;
                }
                // If not, move down the left child and keep looking
                else
                {
                    current = current.left
                }
            }
            // If the insert value is greater than the current node's value, move to left subtree.
            else if(value > current.value)
            {
                // If there's no right child, then we found a spot to insert.
                if(current.right === null)
                {
                    // create a new node, attach it and return the tree
                    current.right = newNode;
                    return this;
                }
                // If note, move down the right child and keep looking
                else
                {
                    current = current.right;
                }
            }
            // If the insert value === current.value, this code does nothing and return.
            else
            {
                return this;
            }
        }
    }

    // A helper method to return the updated subtree root.
    insertRecursively(value)
    {
        this.root = this.insertNode(this.root, value);
        return this;
    }

    insertNode(node, value)
    {
        // If the subtree is empty, create a new node and return it.
        if(node === null)
        {
            return new BinarySearchTreeNode(value);
        }
        
        // If the insert value is less than the node.value, recursively insert the node into the left side.
        if(value < node.value)
        {
            node.left = this.insertNode(node.left, value);
        }
        // If the insert value is greater than the node.value, recursively insert the node into the right side.
        else if(value > node.value)
        {
            node.right = this.insertNode(node.right, value);
        }
        // Return the node itself, when insert value === node.value
        return node;
    }

    findIteratively(value)
    {
        // Start searching from the root
        let current = this.root;

        // This loop runs as long as the current node is not null
        while(current)
        {
            // If the find value === current node's value, return the current node
            if(value === current.value)
            {
                return current;
            }
            // If the find value is less than the current node's value, update the current to it's left child
            else if(value < current.value)
            {
                current = current.left;
            }
            // If the find value is greater than the current node's value, update the current to it's right child
            else
            {
                current = current.right
            }
        }
        // If current node is null, return undefined
        return undefined;
    }

    // A helper method to return the node
    findRecursively(value)
    {
        return this.findNode(this.root, value);
    }

    findNode(node, value)
    {
        // Return undefined, if the node is null
        if(node === null) return undefined;

        // Return the node, if the find value === node's value
        if(value === node.value) return node;

        // Recursive findNode to left, if the find value is less than the node's value
        if(value < node.value)
        {
            return this.findNode(node.left, value);
        }
        // Recursive findNode to right, if the find value is greater than the node's value
        else
        {
            return this.findNode(node.right, value)
        }
    }

    // DFSPre-Order
    dfsPreOrder()
    {
        // Empty array to store the values
        const preOrderArray = [];

        function traverse(node)
        {
            if(node === null) return;
            // First, vist node and push the node value
            preOrderArray.push(node.value);
            // Second, traverse to left subtree
            traverse(node.left);
            // Third, traverse to right subtree
            traverse(node.right);
        }
        traverse(this.root);
        return preOrderArray;
    }

    // DFS In-Order 
    dfsInOrder()
    {
        // Emptry array to store the values
        const inOrderArray = [];

        function traverse(node)
        {
            if( node === null) return;
            // First, traverse to left subtree
            traverse(node.left);
            // Second, push the node value into the inOrderArray
            inOrderArray.push(node.value);
            // Third, traverse to right subtree
            traverse(node.right);
        }
        traverse(this.root);
        return inOrderArray;
    }

    // DFS Post-Order 
    dfsPostOrder()
    {
        // Emptry array to store the values
        const postArray = [];

        function traverse(node)
        {
            if( node === null) return;
            // First, traverse to left subtree
            traverse(node.left);
            // Second, traverse to right subtree
            traverse(node.right);
            // Third, push the node value into the postArray
            postArray.push(node.value);
        }
        traverse(this.root);
        return postArray;
    }

    // BFS
    breadthFirstSearch()
    {
        const bfsArray = [];
        const bfsQueue = [];

        if(this.root !== null) bfsQueue.push(this.root);

        while(bfsQueue.length > 0)
        {
            const node = bfsQueue.shift();
            bfsArray.push(node.value);

            if(node.left !== null) bfsQueue.push(node.left);
            if(node.right !== null) bfsQueue.push(node.right);
        }
        return bfsArray;
    }

    // Removal

    remove(value)
    {
        // If the tree is empty, there is nothing to remove.
        if(this.root === null) return undefined;

        let parent = null;
        let current = this.root;

        // 1. Find the node to remove and its parent
        while(current !== null && current.value !== value)
        {
            parent = current;

            if(value < current.value)
            {
                current = current.left
            }
            else
            {
                current = current.right;
            }
        }

            if(current === null) return undefined;

            const replaceChild = (parentNode, nodeToReplace, newChild) => {
                if(parentNode === null)
                {
                    this.root = newChild;
                }
                else if(parentNode.left === nodeToReplace)
                {
                    parentNode.left = newChild;
                }
                else
                {
                    parentNode.right = newChild;
                }
            }

        // Case: 0 or 1 child
        if(current.left === null || current.right === null)
        {
            const child = current.left !== null ? current.left : current.right;

            replaceChild(parent, current, child);
            current.left = null;
            current.right = null;
            return current;
        }

        // Removal of 2 child

        let successorParent = current;
        let successor = current.right;

        while(successor.left !== null)
        {
            successorParent = successor;
            successor = successor.left;
        }

        if(successorParent.left === successor)
        {
            successorParent.left = successorParent.right;
        }
        else
        {
            successorParent.right = successor.right;
        }

        successor.left = current.left;
        successor.right = current.right;

        replaceChild(parent, current, successor);

        current.left = null;
        current.right = null;

        return current;
    }

    // isBalanced

    isBalanced()
    {
        function checkNodeHeight(node)
        {
            if (node === null) return 0;

            const leftHeight = checkNodeHeight(node.left);
            if(leftHeight === -1) return -1;

            const rightHeight = checkNodeHeight(node.right);
            if(rightHeight === -1) return -1;

            if(Math.abs(leftHeight - rightHeight) > 1) return -1;

            return Math.max(leftHeight, rightHeight) + 1;
        }
        return checkNodeHeight(this.root) !== -1;
    }

    // Second Highest Value in the Binary Search Tree

    findSecondHighest()
    {
        if(this.root === null)
        {
            return undefined;
        }

        if(this.root.left === null && this.root.right === null)
        {
            return undefined;
        }

        let parent = null;
        let current = this.root;

        while(current.right !== null)
        {
            parent = current;
            current = current.right;
        }

        if(current.left !== null)
        {
            let node = current.left;
            while(node.right !== null)
            {
                node = node.right;
            }
            return node.value;
        }

        return parent.value;
    }

    // dfsInOrder Iterative
    dfsInOrderIterative()
    {
        let arr = [];
        let stack = [];
        let current = this.root;

        while(current !== null || stack.length > 0)
        {
            while(current)
            {
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            arr.push(current.value);
            current = current.right;
        }
        return arr;
    }
}

const binarySearchTree = new BinarySearchTree();

console.log('INSERT ITERATIVE METHOD')

binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
binarySearchTree.insert(1)
binarySearchTree.insert(5)
binarySearchTree.insert(50);
// binarySearchTree.insert(120);

console.log(' Insert Root: ', binarySearchTree.root.value);
console.log(' Insert Root Right Child: ', binarySearchTree.root.right.value);
console.log(' Insert Root Left Child(Right Value): ', binarySearchTree.root.left.right.value);
console.log('----------------')

console.log('INSERT RECURSIVE METHOD')

binarySearchTree.insertRecursively(15);
binarySearchTree.insertRecursively(20);
binarySearchTree.insertRecursively(10);
binarySearchTree.insertRecursively(12);

console.log(' Root Value: ', binarySearchTree.root.value)
console.log(" Root's Right Child Value: ", binarySearchTree.root.right.value)
console.log(" Root's Left Child (Right Value): ", binarySearchTree.root.left.right.value)
console.log('----------------')

console.log('FIND ITERATIVE METHOD')

const foundNode1 = binarySearchTree.findIteratively(20);
const foundNode2 = binarySearchTree.findIteratively(120);

console.log(foundNode1.value);
console.log(foundNode2);
console.log(foundNode1.left);
console.log(foundNode1.right);
console.log('----------------')

console.log('FIND RECURSIVE METHOD')

const foundNode3 = binarySearchTree.findRecursively(20);
console.log(foundNode3.value);
console.log(foundNode3.left);
console.log(foundNode3.right);
console.log('----------------')

console.log('DFS PRE-ORDER METHOD')
console.log(' DFS Pre-Order', binarySearchTree.dfsPreOrder());
console.log('----------------')

console.log('DFS IN-ORDER METHOD')
console.log(' DFS In-Order', binarySearchTree.dfsInOrder());
console.log('----------------')

console.log('DFS POST-ORDER METHOD')
console.log(' DFS Post-Order', binarySearchTree.dfsPostOrder());
console.log('----------------')

console.log(' BREADTH FIRST SEARCH')
console.log(binarySearchTree.breadthFirstSearch());
console.log('----------------')

console.log('REMOVE LEAF NODE (12)');
console.log('Before Remove: ', binarySearchTree.dfsInOrder());

const removedLeaf = binarySearchTree.remove(12);

console.log(' Removed Node Value: ', removedLeaf.value);
console.log(' After Remove: ', binarySearchTree.dfsInOrder());
console.log(' Find Removed Node: ', binarySearchTree.findIteratively(12));
console.log('----------------');

console.log('REMOVE NODE WITH ONE CHILD (10)');

console.log(' Before Remove: ', binarySearchTree.dfsInOrder());
const removedOneChild = binarySearchTree.remove(10);

console.log(' Removed Node Value: ', removedOneChild.value);
console.log(' After Remove: ', binarySearchTree.dfsInOrder());
console.log(' New Left Child of Root: ', binarySearchTree.root.left.value);
console.log('----------------');

console.log('REMOVE ROOT NODE (15)');

const bstForRootRemoval = new BinarySearchTree();

bstForRootRemoval.insert(15);
bstForRootRemoval.insert(10);
bstForRootRemoval.insert(20);
bstForRootRemoval.insert(12);
bstForRootRemoval.insert(5);
bstForRootRemoval.insert(17);
bstForRootRemoval.insert(25);

console.log(' Before Remove Root: ', bstForRootRemoval.dfsInOrder());

const removedRoot = bstForRootRemoval.remove(15);
console.log(' Removed Root Value: ', removedRoot.value);
console.log(' After Remove Root: ', bstForRootRemoval.dfsInOrder());
console.log(' New Root Value: ', bstForRootRemoval.root.value);
console.log('----------------');

console.log('IS BALANCED');

console.log(' Tree In-Order: ', binarySearchTree.dfsInOrder());
console.log(' Is Balanced?: ', binarySearchTree.isBalanced());
console.log('----------------');

console.log('SECOND HIGHEST VALUE');

console.log(' In-Order Traversal: ', binarySearchTree.dfsInOrder());
console.log(' Second Highest Value: ', binarySearchTree.findSecondHighest());
console.log('----------------');

console.log('DFS IN-ORDER ITERATIVE METHOD');

console.log(' Recursive In-Order: ', binarySearchTree.dfsInOrder());
console.log(' Iterative In-Order: ', binarySearchTree.dfsInOrderIterative());
console.log('----------------');