/**
 * confirmar a exclusao de um contato
 */
function confirmar(idcon){
	let resposta = confirm("Confirma a exclusão deste contado?")
	if(resposta === true){
		//alert(idcon)
		window.location.href = "delete?idcon="+ idcon
	}
}