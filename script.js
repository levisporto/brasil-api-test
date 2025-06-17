function closeTabCep(){
  document.getElementById("cep").style.display = "none";
}

function closeTabCnpj(){
  document.getElementById("cnpj").style.display = "none";
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
    pCNPJ.innerHTML = ''
  }
  
 
  let enderecoCnpj = document.getElementById("endereco-cnpj")

if(typeof data.logradouro  === "string"){
  enderecoCnpj.innerHTML = data.municipio + ', ' + data.uf + ', ' + data.descricao_tipo_de_logradouro + ' '  + data.logradouro + ' - BAIRRO ' +  data.bairro + ', Nº ' + data.numero + ', ' + data.complemento + ' - CEP ' + data.cep;
} else {
  enderecoCnpj.innerHTML = ''
}

  
let telCNPJ = document.getElementById("tel-cnpj");
data.ddd_telefone_1 = '(' + data.ddd_telefone_1.charAt(0) + data.ddd_telefone_1.charAt(1) + ') ' + data.ddd_telefone_1.slice(2);
  
if(typeof data.ddd_telefone_1 === "string"){
  telCNPJ.innerHTML = 'Telefone: ' + data.ddd_telefone_1;
} else {
  pCNPJ.innerHTML = ''
}
  
  













  }



  
  












async function buscarISBN() {
   
    let userISBN = document.getElementById("userIsbn").value;
    let response = await fetch(`https://brasilapi.com.br/api/isbn/v1/${userISBN}`);
   let data = await response.json();
   console.log(data);
    
    
 
 }
 


 //async function converterMoeda() {
   
//   let moeda = 
 //   let response = await fetch(`https://brasilapi.com.br/api/cambio/v1/cotacao/${moeda}/${ontem}`);
  // let data = await response.json();
 //  console.log(data);
    
    
 
// }


// converterMoeda()


 
