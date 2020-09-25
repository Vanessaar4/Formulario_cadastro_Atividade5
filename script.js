var obj = new Array();
var cont = 0;

function adicionaLinha(idTabela) {
    var f = document.getElementById("formDD");
    if(f.nome.value != "" && f.matricula.value != "" && f.Cpf.value != "" && f.Telefone.value != ""){    
        addArray();
        if(verifDados() == false){
            var tb = document.getElementById(idTabela);
            var linha = tb.insertRow(cont+1);
            linha.innerHTML = "<td>" + obj[cont].nome + 
            "</td><td>" + formatDT() + 
            "</td><td>" + obj[cont].matricula + 
            "</td><td>" + obj[cont].Cpf + 
            "</td><td>" + obj[cont].Telefone;
            cont++;
            document.getElementById("formDD").reset();
        }
    } else {
        alert("TODOS OS CAMPOS PRECISAM SER PREENCHIDOS!!!");
    }
}

function addArray(){
    var f = document.getElementById("formDD");
    obj.push({
        nome: f.nome.value,
        dataNasc: formatDT(),
        matricula: f.matricula.value,
        Cpf: f.Cpf.value,
        Telefone: f.Telefone.value
    });
}

function verifDados(){
    var i;
    if(obj.length > 1){
        for(i=0;i<obj.length-1;i++){
            if(obj[i].matricula == obj[obj.length-1].matricula){
                obj.pop();
                alert("MATRICULA INFORMADA JÁ CADASTRADA NO SISTEMA!!!");
                return true;
            }
            if(obj[i].Cpf == obj[obj.length-1].Cpf){
                obj.pop();
                alert("CPF INFORMADO JÁ CADASTRADO NO SISTEMA!!");
                return true;
            }
        }
    }
    return false;
}

function mascara_cpf(){
    var cpf = document.getElementById("cpf");
    cpf.value = cpf.value.replace(/\D/g, "");
    if (cpf.value.length <= 11) {
        cpf.value = cpf.value.replace(/(\d{3})(\d)/, "$1.$2")
        cpf.value = cpf.value.replace(/(\d{3})(\d)/, "$1.$2")
        cpf.value = cpf.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2")

    } else { 
        cpf.value = cpf.value.replace(/^(\d{2})(\d)/, "$1.$2")        
        cpf.value = cpf.value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")     
        cpf.value = cpf.value.replace(/\.(\d{3})(\d)/, ".$1/$2")       
        cpf.value = cpf.value.replace(/(\d{4})(\d)/, "$1-$2")
       
    }
}

function mascara_tel(){
    var num = document.getElementById("tel");
    num.value = num.value.replace(/\D/g, "");
    num.value = num.value.replace(/^(\d\d)(\d)/g,"($1) $2");//Coloca parênteses em volta dos dois primeiros dígitos
	if(num.value.length < 14){
        num.value = num.value.replace(/(\d{4})(\d)/,"$1-$2");//Número com 8 dígitos. Formato: (99) 9999-9999
    } else {
        num.value = num.value.replace(/(\d{5})(\d)/,"$1-$2");//Número com 9 dígitos. Formato: (99) 99999-9999
    }
}

function formatDT(){
    var t = document.getElementById("data").value;
    var aux = t.split("-");
    return aux[2] + "/" + aux[1] + "/" + aux[0];
}