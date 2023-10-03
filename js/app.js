const listaCursos = document.querySelector('#lista-cursos');
const tabla = document.querySelector('#lista-carrito tbody')

let carrito =[];

function getCurso(e){
    e.preventDefault();
    console.log(e.target);
    if(e.target.classList.contains('agregar-carrito')){
        const item={}
        item.id= e.target.getAttribute('data-id');
        const padre =e.target.parentElement;
        item.name = padre.querySelector('h4').innerText;
        item.price = padre.querySelector('p span').innerText;
        item.image = padre.parentElement.querySelector('img').src;
        item.cantity = 1;
        addItem(item);
        //lenar la tabla
        showTable();
    }
}

function addItem(item){
    //verifica si el objeto existe en el carrito
    if(carrito.some(itemCarrto => item.id === itemCarrto.id)){
        carrito.forEach(itemCarrto =>{
            if(itemCarrto.id===item.id){
                itemCarrto.cantity ++;
            }
        });
    }else{
        carrito.push(item);
    }
    console.log(carrito);
}

function showTable(){
    //limpiar tabla
    tabla.innerHTML =''
    //iterar carrito para insertar
    carrito.forEach(item=>{
        tabla.appendChild(createRow(item));
    });
}

function createRow(item){
    const row = document.createElement('tr');
    let rowHTML = '';
    rowHTML += `<td><img src =" ${ item.image }" width = "100px"></td>`;
    rowHTML += `<td> ${ item.name } </td>`;
    rowHTML += `<td> ${ item.price } </td>`;
    rowHTML += `<td> ${ item.cantity } </td>`;
    const buttton = document.createElement('button');
    buttton.setAttribute('data-id', item.id);
    buttton.classList.add('btn');
    buttton.innerHTML = 'X';
    const td = document.createElement('td');
    td.appendChild(buttton);
    row.innerHTML = rowHTML;
    row.appendChild(td);
    return row;

}

function btnDelItem(e){
    if(e.target.classList.contains('btn')){
        const id= e.target.getAttribute('data-id');
        //Eleminar de carrito
        carrito = carrito.filter(itemCarrto => itemCarrto.id !== id);
        showTable();
    }
}

listaCursos.addEventListener('click', getCurso);
tabla.addEventListener('click', btnDelItem);

listaCursos.addEventListener('click', getCurso);
tabla.addEventListener('click', btnDelItem);