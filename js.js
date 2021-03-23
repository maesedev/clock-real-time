/*clasico*/
const secundero = document.querySelector('#secundero')
const minutero = document.querySelector('#minutero')
const horario = document.querySelector('#horario')
const am = document.getElementById('div-am')
const pm = document.getElementById('div-pm')


/*digital*/
const hora = document.querySelector('.hora')
const minutos = document.querySelector('.minutos')

/*clasico*/
let date = new Date()

const mover_secundero = ()=>{

	secundero.style.transform = `rotate(${date.getSeconds()*6}deg)`
	// minutero.style.transition = 'transmform .3s ease'

}


const mover_minuteroYHorario = ()=>{
	if(true){}
	minutero.style.transform = `rotate(${date.getMinutes()*6}deg)`;


	hora_clasico = date.getHours()
	minutos_clasico = date.getMinutes()


	if(hora_clasico>12)hora_clasico-=12;
	prev_deg = date.getHours() * 30 
	horario.style.transform =`rotate(${prev_deg + (minutos_clasico*.5)}deg)`



}
/*end funciones del reloj clasico*/

/*relog digital*/
const increase_Hora=()=>{
	let hora_digital = date.getHours();

	if(hora_digital > 12 ){
		hora_digital-=12
	}
	if(hora_digital < 10){
		hora_digital = '0' + date.getHours()
	}

	hora.innerText = hora_digital + " :";

}




const increase_minutos=()=>{
	let minutos_digital = date.getMinutes();
	
	if(minutos_digital < 10){
		minutos_digital = '0' + date.getMinutes()
	}

	minutos.innerText = minutos_digital;

}

const  AM_PM = ()=>{
	if(date.getHours <12){
		am.style.background = "var(--am-pm-ON)"
		pm.style.background = "var(--am-pm-OFF)"
	}
	else{
		am.style.background = "var(--am-pm-OFF)"
		pm.style.background = "var(--am-pm-ON)"
		}
	}


const actualizar_temp = ()=>{
	date = new Date()

	mover_secundero()
	mover_minuteroYHorario()

	increase_minutos()
	increase_Hora()
	AM_PM()

	return date
}


setInterval(actualizar_temp,1000)
