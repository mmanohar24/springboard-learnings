document.addEventListener('DOMContentLoaded', function()
{
    let boxContainer = document.getElementById('box-container');
    let newBoxButton = document.getElementById('new-box-button');
    let colorForm = document.getElementById('color-form');
    let colorInput = document.getElementById('color-input');

    let boxColor = null;
    let boxIdCounter = 0;

    colorForm.addEventListener('submit', function(e)
    {
        e.preventDefault();

        let newColor = colorInput.value;

        let boxes = document.querySelectorAll('box');
        for( let box of boxes)
        {
            box.style.backgroundColor = newColor;
        }

        colorInput.input = '';
        boxColor = newColor;
    })

    function addNewBox()
    {
        let box = document.createElement('div');
        box.setAttribute('dataBoxId', boxIdCounter.toString());
        box.textContent = `Box ${boxIdCounter}`;
        box.className = 'box';
        box.style.backgroundColor = boxColor;
        boxContainer.appendChild(box);
        
        boxIdCounter++;
    }

    newBoxButton.addEventListener('click', function()
    {
        addNewBox();
    })

    document.addEventListener('dblclick', function(e)
    {
        if(e.target.classList.contains('box'))
        {
            e.target.remove();
        }
    })

    document.addEventListener('mouseover', function(e)
    {
        if(e.target.classList.contains('box'))
        {
            e.target.textContent = `X: ${e.pageX} Y: ${e.pageY}`;
        }
    })

    document.addEventListener('mouseout', function(e)
    {
        if(e.target.classList.contains('box'))
        {
            const boxId = e.target.getAttribute('dataBoxId');
            e.target.textContent = `Box: ${boxId}`;
        }
    })

    document.addEventListener('keydown', function(e)
    {
        if(e.target.id = 'color-input')
        {            
            return;
        }

        if(e.key === 'n' || e.key === 'N')
        {
            addNewBox();
        }
    })
})


