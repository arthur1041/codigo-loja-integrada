//Getting all products
let products = turnIndexesIntoOuterHTML(Array.from(document.getElementsByClassName('listagem-item')));
//}

//Getting the title{
let titleText = document.getElementsByTagName('title')[0].innerText;
//}

//Removing all the style
document.querySelectorAll('style,link[rel="stylesheet"]').forEach(item => item.remove());
//}


//Removing HTML
document.documentElement.innerHTML = '';

//Adding meta tags {
document.getElementsByTagName('head')[0].innerHTML = '<meta charset="UTF-8">';
let meta2 = document.createElement('meta');
meta2.name = "viewport";
meta2.content = "width=device-width, initial-scale=1.0";
document.getElementsByTagName('head')[0].appendChild(meta2);
//}

// Adding title tag {
let title = document.createElement('title');
title.innerText = titleText;
document.getElementsByTagName('head')[0].appendChild(title);
//}

//Add new styles {
let style = document.createElement("style");
style.innerText = `
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  font-family: "Roboto", sans-serif;
}

body,
ul,
li,
p {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 1.2rem;
}

a,
i {
  text-decoration: none;
  color: goldenrod;
}

h1 {
  max-width: 100%;
  display: block;
}

.header {
  /* background-color: goldenrod; */

  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 90px;
  padding-right: 90px;
  align-items: center;
  flex-wrap: wrap;
}
.headerline {
  margin: 0 auto;
  width: 80%;
  height: 1px;
  border-bottom: 1px solid goldenrod;
  margin-bottom: 100px;
}

.licart {
  display: flex;
  align-items: center;
}

.menu {
  display: flex;
}

.menu li {
  margin-left: 10px;
}

.menu li a {
  display: block;
  padding: 10px;
}

.acoes-produto-responsiva {
  display: none;
}
.flexSec {
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 0 auto;
}

.searchfield {
  margin: 0 auto;
  padding: 20px;
  outline: none;
  border-radius: 5em;
  width: 70%;
}

.flexSec > div {
  flex: 1 1 200px;
  margin: 0 10px;
}

.footer {
  margin-top: 100px;
  width: 100%;
  height: 300px;
  background-color: goldenrod;
  color: white;
}

@media (min-width: 730px) {
  .searchfield{
    width: 40%;
  }
}

@media (min-width: 930px) {
  .searchfield{
    width: 30%;
  }
}
`;
document.getElementsByTagName('head')[0].appendChild(style);

let linkAwesome = document.createElement('link');
linkAwesome.rel = "stylesheet";
linkAwesome.href = "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
document.getElementsByTagName('head')[0].appendChild(linkAwesome);
//}


//Adding new HTML {
document.body.innerHTML = `
<!-- BODY -->
<header class="header">
        <a href="/">Loja Teste</a>
        <nav>
            <ul class="menu">
                <li class="licart"><i class="fa fa-shopping-cart" aria-hidden="true"></i><a href="#">Carrinho</a></li>
                <li><a href="/conta/pedido/listar">Meus pedidos</a></li>
                <li><a href="/conta/index">Minha conta</a></li>
            </ul>
        </nav>
    </header>
    <div class="headerline">

    </div>

    <form action="/buscar" method="get" style="margin-bottom: 100px">
        <center><input class="searchfield" type="text" name="q" placeholder="Buscar" type="text">
        </center>
    </form>

    <section class="flexSec">

    </section>


    <div class="footer" >Footer</div>
`;
//}

// let container = document.querySelector('.container');

//Printing products
products.forEach(product => {
    document.querySelector('.flexSec').innerHTML += product;
})



////////FUNCTIONS//////////////

function turnIndexesIntoOuterHTML(elements) {
    let aux = [];
    let cont = 0;
    elements.forEach(element => {
        aux[cont] = element.outerHTML;
        cont++;
    })
    return aux;
}
