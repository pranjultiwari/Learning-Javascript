document.getElementById('fname')
.addEventListener('focus', function()
{
    this.style.background = 'red';
})

document.getElementById('lname')
.addEventListener('focus', function()
{
    this.style.background = 'red';
})

document.getElementById('fname')
.addEventListener('blur', function()
{
    this.style.background = 'white';
})

document.getElementById('lname')
.addEventListener('blur', function()
{
    this.style.background = 'white';
})