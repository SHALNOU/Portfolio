const buttonDarkMode = document.querySelector('.dark-mode-btn')



// проверка темной на истеме пользывателя
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {

	buttonDarkMode.classList.add('dark-mode-btn-active')
	document.body.classList.add('dark')

}


// проверка на значения в локале 
if (localStorage.getItem('darkMode') === 'dark') {
	buttonDarkMode.classList.add('dark-mode-btn-active')
	document.body.classList.add('dark')
} else if (localStorage.getItem('darkMode') === 'light') {
	buttonDarkMode.classList.remove('dark-mode-btn-active')
	document.body.classList.remove('dark')
}


// включение ночного режима по кнопке и добавил значений в локал
buttonDarkMode.addEventListener('click', () => {
	buttonDarkMode.classList.toggle('dark-mode-btn-active')
	const isDark = document.body.classList.toggle('dark')

	if (isDark) {
		localStorage.setItem('darkMode', 'dark')
	} else {
		localStorage.setItem('darkMode', 'light')
	}
})


//если меняются настройки темы на компе то и в коде
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
	const newColor = event.matches ? 'dark' : 'light'

	if (newColor === 'dark') {
		buttonDarkMode.classList.add('dark-mode-btn-active')
		document.body.classList.add('dark')
	} else {
		buttonDarkMode.classList.remove('dark-mode-btn-active')
		document.body.classList.remove('dark')
	}
})



