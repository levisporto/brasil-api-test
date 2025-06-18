function closeTabCep(){
  document.getElementById("cep").style.display = "none";
}

function closeTabCnpj(){
  document.getElementById("cnpj").style.display = "none";
}

function closeTabIsbn(){
  document.getElementById("isbn").style.display = "none";
}

function closeTabConversao(){
  document.getElementById("moeda").style.display = "none";
}

function extractNumbers(inputStr) {
  return inputStr.replace(/\D/g, '');
}




async function buscarCEP() {
    document.getElementById("cep").style.display = "block";
   let userCEP = document.getElementById("userCep").value;
 
   let response = await fetch(`https://brasilapi.com.br/api/cep/v1/${userCEP}`);

  let data = await response.json();
  console.log(data);
   
let h2CEP = document.getElementById("h2-cep")
if(typeof data.street === "string"){
  h2CEP.innerHTML = data.street;
} else {
  h2CEP.innerHTML = 'CEP não encontrado!'
}


let pCEP = document.getElementById("p-cep")

if(typeof data.neighborhood === "string"){
  pCEP.innerHTML ='Bairro ' + data.neighborhood;
} else {
  pCEP.innerHTML = 'Verifique se digitou corretamente.'
}

let pCity = document.getElementById("p-city")

if(typeof data.city === "string"){
  pCity.innerHTML = data.city + ', ' + data.state;
} else {
  pCity.innerHTML = ''
}




}








async function buscarCNPJ() {
 
  document.getElementById("cnpj").style.display = "block";


   let userCNPJ = document.getElementById("userCnpj").value;
   userCNPJ = extractNumbers(userCNPJ);

   let response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${userCNPJ}`);
  let data = await response.json();
  console.log(data);
   
  

  let h2CNPJ = document.getElementById("h2-cnpj")
  if(typeof data.razao_social === "string"){
    h2CNPJ.innerHTML = data.razao_social;
  } else {
    h2CNPJ.innerHTML = 'CNPJ não encontrado!'
  }
  
  
  let pCNPJ = document.getElementById("p-cnpj")
  
  if(typeof data.cnae_fiscal_descricao === "string"){
    pCNPJ.innerHTML = data.cnae_fiscal_descricao;
  } else {
    pCNPJ.innerHTML = 'Verifique se digitou corretamente.'
  }


  let natCNPJ = document.getElementById("nat-cnpj")
  
  if(typeof data.natureza_juridica === "string"){
    natCNPJ.innerHTML = data.natureza_juridica;
  } else {
    natCNPJ.innerHTML = ''
  }
  
 
  let enderecoCnpj = document.getElementById("endereco-cnpj")

if(typeof data.logradouro  === "string"){
  enderecoCnpj.innerHTML = data.municipio + ', ' + data.uf + ', ' + data.descricao_tipo_de_logradouro + ' '  + data.logradouro + ' - BAIRRO ' +  data.bairro + ', Nº ' + data.numero + ', ' + data.complemento + ' - CEP ' + data.cep;
} else {
  enderecoCnpj.innerHTML = ''
}

  
let telCNPJ = document.getElementById("tel-cnpj");

  
if(typeof data.ddd_telefone_1 === "string"){
  data.ddd_telefone_1 = '(' + data.ddd_telefone_1.charAt(0) + data.ddd_telefone_1.charAt(1) + ') ' + data.ddd_telefone_1.slice(2);
  telCNPJ.innerHTML = 'Telefone: ' + data.ddd_telefone_1;
} else {
  telCNPJ.innerHTML = ' '
}

let lista = document.getElementById("lista-cnae");
let details = document.getElementById("details");
let details2 = document.getElementById("details2");


if(typeof  data.bairro  === "string"){
  details2.style.display = "block";
  details.innerHTML = 'Outros CNAE';
  lista.innerHTML = ' '
  const list = document.createElement("ul"); 
  for (let i = 0; i < data.cnaes_secundarios.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = data.cnaes_secundarios[i].descricao;
      list.appendChild(listItem);
  }
  
  lista.appendChild(list);
} else {
  details.innerHTML = ' ';
  details2.style.display = "none";
}
  

  }



  
  














  async function buscarISBN() {
 
    document.getElementById("isbn").style.display = "block";
  
  
     let userISBN = document.getElementById("userIsbn").value;
     userISBN = extractNumbers(userISBN);
  
     let response = await fetch(`https://brasilapi.com.br/api/isbn/v1/${userISBN}`);
    let data = await response.json();
    console.log(data);
     
    
  
    let h2ISBN = document.getElementById("h2-isbn")
    if(typeof data.title === "string"){
      h2ISBN.innerHTML = data.title;
    } else {
      h2ISBN.innerHTML = 'ISBN não encontrado!'
    }
    
    
    let pISBN = document.getElementById("p-isbn")
    let authorList = data.authors.length

    if(typeof data.title === "string"){
      if(authorList == 1){
        pISBN.innerHTML = data.authors[0]}
      if(authorList == 2){
        pISBN.innerHTML = data.authors[0] + ', ' + data.authors[1]
      }if(authorList == 3){
        pISBN.innerHTML = data.authors[0] + ', ' + data.authors[1] + ', ' + data.authors[2]}
        if(authorList == 4){
          pISBN.innerHTML = data.authors[0] + ', ' + data.authors[1] + ', ' + data.authors[2] + ', ' + data.authors[3]}
      
    } else {
      pISBN.innerHTML = 'Verifique se digitou corretamente.'
    }
  
  
    let natISBN = document.getElementById("nat-isbn")
    
    if(typeof data.location === "string"){
      natISBN.innerHTML = data.location + ', ' + data.year;
    } else {
      natISBN.innerHTML = ''
    }
    
   
    let enderecoCnpj = document.getElementById("endereco-isbn")
  
  if(typeof data.logradouro  === "string"){
    enderecoCnpj.innerHTML = data.municipio + ', ' + data.uf + ', ' + data.descricao_tipo_de_logradouro + ' '  + data.logradouro + ' - BAIRRO ' +  data.bairro + ', Nº ' + data.numero + ', ' + data.complemento + ' - CEP ' + data.cep;
  } else {
    enderecoCnpj.innerHTML = ''
  }
  
    
  let publisherISBN = document.getElementById("publisher-isbn");
  
    
  if(typeof data.publisher === "string"){
    publisherISBN.innerHTML = data.publisher;
  } else {
    publisherISBN.innerHTML = ' '
  }
  
  

  let paginasISBN = document.getElementById("paginas-isbn");
  
    
  if (typeof data.format === 'string') {
    if (data.format === 'PHYSICAL') {
      if (data.dimensions && data.dimensions.height) {
        paginasISBN.innerHTML = `Livro físico, ${data.page_count} páginas. ${data.dimensions.height} cm (altura) por ${data.dimensions.width} cm (largura)`;
      } if(data.page_count){
        paginasISBN.innerHTML = `Livro físico, ${data.page_count} páginas`;
      }
       else {
        paginasISBN.innerHTML = `Livro físico`;
      }
    } if (data.page_count) {
      paginasISBN.innerHTML = `Edição digital, ${data.page_count} páginas`;
    } else {
      paginasISBN.innerHTML = `Edição digital`
    }
  } else {
    paginasISBN.innerHTML = ' ';
  }
  

  let subjectsISBN = document.getElementById("subjects-isbn");
  
  let subjectsList = data.subjects.length

    if(typeof data.title === "string"){
      if(subjectsList == 1){
        subjectsISBN.innerHTML = data.subjects[0]}
      if(subjectsList == 2){
        subjectsISBN.innerHTML = data.subjects[0] + ', ' + data.subjects[1]
      }if(subjectsList == 3){
        subjectsISBN.innerHTML = data.subjects[0] + ', ' + data.subjects[1] + ', ' + data.subjects[2]}
        if(subjectsList == 4){
          subjectsISBN.innerHTML = data.subjects[0] + ', ' + data.subjects[1] + ', ' + data.subjects[2] + ', ' + data.subjects[3]}
          if(subjectsList == 5){
            subjectsISBN.innerHTML = data.subjects[0] + ', ' + data.subjects[1] + ', ' + data.subjects[2] + ', ' + data.subjects[3] + ', ' + data.subjects[4]}
    } else {
      subjectsISBN.innerHTML = ''
    }
  

  let synopsisISBN = document.getElementById("synopsis-isbn");
  
    
  if(typeof data.synopsis === "string"){
    synopsisISBN.innerHTML = data.synopsis;
  } else {
    synopsisISBN.innerHTML = ' '
  }
  





  
    }
  




    async function converter() {
   
     let moeda = document.getElementById("moedas").value;
     
     let date = new Date();
     let dataUser = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()-5}`
     console.log(dataUser);
    let response = await fetch(`https://brasilapi.com.br/api/cambio/v1/cotacao/${moeda}/${dataUser}`);
    
    let data = await response.json();
  console.log(data);
  


     let moedaUser = document.getElementById("moedaUser").value;
     let h2moeda = document.getElementById("h2-moeda");

     if(moedaUser){
      document.getElementById("moeda").style.display = "block";
     }
   
     let equivalencia;
     if(moedaUser>1){
       equivalencia = ' equivalem a '
     }else{
       equivalencia = ' equivale a '
     } 

     switch (moeda) {
      case 'USD':
        if(moedaUser > 1){
          displayMoeda = "Dólares";
        }
        
      else{
        displayMoeda = "Dólar";
      }
        break;
      case 'GBP':
        if(moedaUser > 1){
          displayMoeda = "Libras Esterlinas";
        }
        
      else{
        displayMoeda = "Libra Esterlina";
      }
        
        break;
        case 'JPY':
          if(moedaUser > 1){
            displayMoeda = "Ienes";
          }
          
        else{
          displayMoeda = "Iene";
        }
          
          break;
          case 'EUR':
            if(moedaUser > 1){
              displayMoeda = "Euros";
            }
            
          else{
            displayMoeda = "Euro";
          }
            
            break;

        }

        

     h2moeda.innerHTML = (moedaUser * data.cotacoes[4].cotacao_compra).toFixed(2);
     let pmoeda = document.getElementById("p-moeda");
     pmoeda.innerHTML = moedaUser+ ' ' + displayMoeda + equivalencia + (moedaUser * data.cotacoes[4].cotacao_compra).toFixed(2) + ' Reais (BRL) na cotação de ontem.';


     let h2Real = document.getElementById("h2-real");
     h2Real.innerHTML =  (moedaUser / data.cotacoes[4].cotacao_compra).toFixed(2);


     let pReal = document.getElementById("real");
     let real
    if (moedaUser>1){
      real = ' Reais (BRL)'
    } else{
      real = ' Real (BRL)'
    }
     pReal.innerHTML = moedaUser + real + equivalencia + (moedaUser / data.cotacoes[4].cotacao_compra).toFixed(2) + ' ' + displayMoeda + ' na cotação de ontem.'
  }    


 
