var block = document.querySelectorAll('.block')

for (let i = 0; i < block.length; i++) {
    block[i].addEventListener('click', function(){
        console.log('click');
    })
}