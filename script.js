const ctx = document.getElementById("grafico");

new Chart(ctx,{
type:"line",

data:{

labels:["Jan","Fev","Mar","Abr","Mai","Jun"],

datasets:[{

label:"Vendas",

data:[1200,1900,1500,2500,3200,4200],

borderWidth:3,

fill:false

}]

},

options:{

responsive:true

}

});
