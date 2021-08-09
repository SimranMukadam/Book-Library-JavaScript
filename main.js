
var titles =document.getElementsByClassName('title');
console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));

Array.from(titles).forEach(function(item){
    console.log(item);
})

const sim =document.querySelector('#book-list li:nth-child(2)');
console.log(sim);

const all=document.querySelectorAll('#book-list li span.name');
console.log(all);

var banner =document.querySelector('#page-banner');
console.log(banner.nodeType);
console.log(banner.nodeName);
console.log(banner.hasChildNodes());
console.log(banner.cloneNode(true));


var books =document.querySelector('#book-list');

console.log('parent node is:', books.parentNode);
console.log('parent element is:', books.parentElement.parentElement);
console.log(books.childNodes);
console.log(books.children);
console.log(books.nextSibling);
console.log(books.nextElementSibling);
console.log(books.previousSibling);
console.log(books.previousElementSibling);



var links =document.querySelector('#page-banner a');
links.addEventListener('click',function(e){
    e.preventDefault();
})

//bubble event
var ul =document.querySelector('#book-list ul');

ul.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
    
        var li =e.target.parentElement;
        li.parentNode.removeChild(li);
    }
})

//add book
var addForm =document.forms['add-book'];

addForm.addEventListener('submit',function(e){
    e.preventDefault();
    var value = addForm.querySelector('input[type="text"]').value;

    var li = document.createElement('li');
    var bookName =document.createElement('span');
    var dltbtn=document.createElement('span');

    bookName.className="name";
    dltbtn.className="delete";

    bookName.textContent =value;
    dltbtn.textContent="delete";

    li.appendChild(bookName);
    li.appendChild(dltbtn);
    ul.appendChild(li);



});


const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
   ul.style.display = "none";
  } else {
   ul.style.display = "initial";
  }
});

const searchBar =document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup',function(e){
    const term = e.target.value.toLowerCase();
    const books = ul.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title =book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term)!=-1){
            book.style.display="block";
        }else{
            book.style.display="none";
        }
    })
})


















