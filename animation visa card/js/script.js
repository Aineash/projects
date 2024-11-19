document.getElementById('box').addEventListener('click', function()
{
    this.classList.toggle('rotated');

    if (this.classList.contains('rotated'))
    {
        this.style.transform = 'rotateY(180deg)';
    }

    else {
        this.style.transform = 'rotateY(0deg)';
    }
});