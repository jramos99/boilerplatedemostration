
export const topNav = () => {
	// Aqui definimos las variables
	const 
	d = document,
	headerBtn = d.querySelector('.hamburger'),
	menu = d.querySelector('.top-nav__menu');

	// aqui creamos la funcion que ejecuta el toogle del menu
	headerBtn.addEventListener('click', e =>{
		e.preventDefault();
		headerBtn.classList.toggle('is-active'),
		menu.classList.toggle('is-active');
	});
}
export const modalLanguage = () => {
	// Aqui definimos las variables
	const 
	d = document,
	modal = d.getElementById('language'),
	button = d.querySelector('.top-nav__language'),
	language = d.querySelectorAll('.modal-language');

	// aqui creamos la funcion que ejecuta el toogle del menu
	button.addEventListener('click', e =>{
		e.preventDefault();
		modal.classList.toggle('show')
	});

	for(let i = 0; i < language.length; i++){
		language[i].addEventListener('click', e =>{
			e.preventDefault();
			modal.classList.toggle('show')
		});
	}

}
	
	
