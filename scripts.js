const items = document.querySelectorAll('.tictactoe__item'),
      table = document.querySelector('.tictactoe'),
      span = document.getElementById('span');

let counter = 0;
let triple = 0;
let zerosArr = [];
let crossesArr = [];


table.addEventListener('click', function(e){
    const target = e.target;
    if(target.classList.contains('empty')){
        setElem(target);
        target.classList.remove('empty')
    }
});

function setElem(item){
    if(counter == 0){
        item.innerHTML = "<div class='tictactoe__item-cross'></div>";
        counter = 1;
        span.innerHTML = "zeros";
        crossesArr.push(+item.id);
        checkWin(crossesArr);
        return;
    }
    item.innerHTML = "<div class='tictactoe__item-zero'></div>";
    counter = 0;
    span.innerHTML = "crosses";
    zerosArr.push(+item.id);
    checkWin(zerosArr);
};

function checkWin(arr){
    const winArrs = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
    winArrs.forEach(function(item){
        for(let k in item){
            if(!arr.includes(item[k])){
                triple = 0;
                return;
            }
            triple++;
            if(triple == 3){
                popup();
            }
        }
    })
}

function popup(){
    const popup = document.getElementById('popup'),
          spanWin = document.getElementById('spanWin');
    if(counter == 1){
        popup.showModal();
        spanWin.innerHTML = 'CROSSES';
    } else {
        popup.showModal();
        spanWin.innerHTML = 'ZEROS';
    }
}
