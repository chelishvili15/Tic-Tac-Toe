var arr =[], arrCont = new Array(9);
var cont = document.getElementById('conteiner');

function makeArr(){
var obj = document.getElementById('first').childNodes;

arr.push(obj[1]);
arr.push(obj[3]);
arr.push(obj[5]);

var obj = document.getElementById('second').childNodes;

arr.push(obj[1]);
arr.push(obj[3]);
arr.push(obj[5]);
var obj = document.getElementById('third').childNodes;

arr.push(obj[1]);
arr.push(obj[3]);
arr.push(obj[5]);

for (let i in arr){
    arr[i].innerHTML = '';
    arr[i].style.backgroundColor = 'blue';
    arr[i].style.color = 'whitesmoke';
    }
}

function fin(){
    //first row
    if (arr[0] == 'X' && arr[1] == 'X' && arr[2] == 'X' || 
        arr[0] == 'O' && arr[1] == 'O' && arr[2] == 'O')
        {
        arrCont[0].style.backgroundColor = 'white';
        arrCont[0].style.color = 'red';
        arrCont[1].style.backgroundColor = 'white';
        arrCont[1].style.color = 'red';
        arrCont[2].style.backgroundColor = 'white';
        arrCont[2].style.color = 'red';
        return true;
    }
    //second row
    if (arr[3] == 'X' && arr[4] == 'X' && arr[5] == 'X' || 
        arr[3] == 'O' && arr[4] == 'O' && arr[5] == 'O'){
        arrCont[3].style.backgroundColor = 'white';
        arrCont[3].style.color = 'red';
        arrCont[4].style.backgroundColor = 'white';
        arrCont[4].style.color = 'red';
        arrCont[5].style.backgroundColor = 'white';
        arrCont[5].style.color = 'red';
        return true;
    }
    //third row
    if (arr[6] == 'X' && arr[7] == 'X' && arr[8] == 'X' || 
        arr[6] == 'O' && arr[7] == 'O' && arr[8] == 'O'){
        arrCont[6].style.backgroundColor = 'white';
        arrCont[6].style.color = 'red';
        arrCont[7].style.backgroundColor = 'white';
        arrCont[7].style.color = 'red';
        arrCont[8].style.backgroundColor = 'white';
        arrCont[8].style.color = 'red';
        return true;
    }
    if (arr[0] == 'X' && arr[3] == 'X' && arr[6] == 'X' || 
        arr[0] == 'O' && arr[3] == 'O' && arr[6] == 'O'){
        arrCont[0].style.backgroundColor = 'white';
        arrCont[0].style.color = 'red';
        arrCont[3].style.backgroundColor = 'white';
        arrCont[3].style.color = 'red';
        arrCont[6].style.backgroundColor = 'white';
        arrCont[6].style.color = 'red';
        return true;
    }
    //second column
    if (arr[1] == 'X' && arr[4] == 'X' && arr[7] == 'X' || 
        arr[1] == 'O' && arr[4] == 'O' && arr[7] == 'O'){
        arrCont[1].style.backgroundColor = 'white';
        arrCont[1].style.color = 'red';
        arrCont[4].style.backgroundColor = 'white';
        arrCont[4].style.color = 'red';
        arrCont[7].style.backgroundColor = 'white';
        arrCont[7].style.color = 'red';
        return true;
    }
    //third column
    if (arr[2] == 'X' && arr[5] == 'X' && arr[8] == 'X' || 
        arr[2] == 'O' && arr[5] == 'O' && arr[8] == 'O'){
        arrCont[2].style.backgroundColor = 'white';
        arrCont[2].style.color = 'red';
        arrCont[5].style.backgroundColor = 'white';
        arrCont[5].style.color = 'red';
        arrCont[8].style.backgroundColor = 'white';
        arrCont[8].style.color = 'red';
        return true;
    }
    //first diagonal
    if (arr[0] == 'X' && arr[4] == 'X' && arr[8] == 'X' || 
        arr[0] == 'O' && arr[4] == 'O' && arr[8] == 'O'){
        arrCont[0].style.backgroundColor = 'white';
        arrCont[0].style.color = 'red';
        arrCont[4].style.backgroundColor = 'white';
        arrCont[4].style.color = 'red';
        arrCont[8].style.backgroundColor = 'white';
        arrCont[8].style.color = 'red';
        return true;
    }
    //second diagonal
    if (arr[2] == 'X' && arr[4] == 'X' && arr[6] == 'X' || 
        arr[2] == 'O' && arr[4] == 'O' && arr[6] == 'O'){
        arrCont[4].style.backgroundColor = 'white';
        arrCont[4].style.color = 'red';
        arrCont[6].style.backgroundColor = 'white';
        arrCont[6].style.color = 'red';
        arrCont[2].style.backgroundColor = 'white';
        arrCont[2].style.color = 'red';
        return true;
    }
    return false;
}

makeArr();
var count = 1;

for (let i = 0; i<9; i++){
    arr[i].addEventListener('click', function(){
        if (arr[i] !== 'X' && arr[i] !== 'O' && count % 2 == 1){
            arr[i].innerHTML = 'X';
            arrCont[i] = arr[i];
            arr[i] = 'X'; 
            if (count <11 ){
                count ++;
            }
        } else 
        if (arr[i] !== 'X' && arr[i] !== 'O' && count % 2 == 0){
            arr[i].innerHTML = 'O';
            arrCont[i] = arr[i];
            arr[i] = 'O';
            if (count <11 ){
                count ++;
            }
        }

        console.log(fin());
        console.log(count);

        if ( fin() && count != 11){
            count = 11;
        } else
        if (count == 10){
            count ++;
        } else
        if (count == 11){
            arr = [];
            makeArr();
            count = 1;
            console.log(arr);
        }
    })
}