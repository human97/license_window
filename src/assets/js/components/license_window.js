// license_window

const form = document.getElementById('form')
const allRadio = form.querySelectorAll('.plan')

// формула расчёта
const count = () => {
    allRadio.forEach((e) => {
        if (e.checked) {
            // когда радио кнопка чек меняется цвет бэкграунда и бордера
            e.parentNode.parentNode.style.backgroundColor = '#bfe1fd4d'
            e.parentNode.parentNode.style.borderColor = '#c1d9fc'

            let planCost = e.value // стоимость выбранной лицензии
            let license = form.querySelector('#numberSelect').value // кол-во лицензий
            let total = planCost * license // итоговая стоимость
            form.querySelector('.total_price').innerHTML = `&#36;${total}<sup>us</sup>` // вывод иоговой стоимости

            // условия вывода выбранного плана лицензий
            if (planCost == 34) {
                form.querySelector('#selPlanNum').textContent = '3'
            } else if (planCost == 22) {
                form.querySelector('#selPlanNum').textContent = '2'
            } else {
                form.querySelector('#selPlanNum').textContent = '1'
            }
        } else {
            e.parentNode.parentNode.style.backgroundColor = 'transparent'
            e.parentNode.parentNode.style.borderColor = 'transparent'
        }
    })
}

count()

// 
form.addEventListener('change', function (e) {
    let clickCount = e.target.className
    if (clickCount === 'plan' || 'number_select') {
        count()
    }
})


document.getElementById('btn_byu').addEventListener('click', function (e) {
    e.preventDefault()
})