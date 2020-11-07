// comp

const form = document.getElementById('form')
const allRadio = form.querySelectorAll('.plan')

// формула расчёта
const count = () => {
    for (let i = 0; i < allRadio.length; i++) {
        if (allRadio[i].checked) {
            allRadio[i].parentNode.parentNode.style.backgroundColor = '#bfe1fd4d'
            allRadio[i].parentNode.parentNode.style.borderColor = '#c1d9fc'
            let planCost = allRadio[i].value // стоимость выбранной лицензии
            let license = form.querySelector('#numberSelect').value // кол-во лицензий
            let total = planCost * license // итоговая стоимость
            form.querySelector('.total_price').innerHTML = `&#36;${total}<sup>us</sup>` // вывод иоговой стоимости

            if (planCost == 34) {
                form.querySelector('#selPlanNum').textContent = '3'
            } else if (planCost == 22) {
                form.querySelector('#selPlanNum').textContent = '2'
            } else {
                form.querySelector('#selPlanNum').textContent = '1'
            }
        } else {
            allRadio[i].parentNode.parentNode.style.backgroundColor = 'transparent'
            allRadio[i].parentNode.parentNode.style.borderColor = 'transparent'
        }
    }
}

count()


form.addEventListener('click', function (e) {
    let clickCount = e.target.className
    if (clickCount === 'plan' || 'number_select') {
        count()
    }
})
"use strict";