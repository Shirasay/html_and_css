document.addEventListener('DOMContentLoaded', () => {
    
    const product_quantity = document.querySelector('.product_quantity')
    const order_quantity = document.querySelector('.order_quantity')
    const package_list_value = document.querySelector('.package_list_value')
    const package_list = document.querySelector('.package_list')
    const basic = document.querySelector('.basic')
    const professional = document.querySelector('.professional')
    const premium = document.querySelector('.premium')
    const terminal_payment = document.querySelector('.terminal_payment')
    const accounting = document.querySelector('.accounting')
    const product_amount = document.querySelector('.product_amount')
    const product_price = document.querySelector('.product_price')
    const order_amount = document.querySelector('.order_amount')
    const order_price = document.querySelector('.order_price')
    const package_type = document.querySelector('.package_type')
    const package_price = document.querySelector('.package_price')
    const accounting_price = document.querySelector('.accounting_price')
    const terminal_price = document.querySelector('.terminal_price')
    const total_price = document.querySelector('.total_price')

    let product_value = 0
    let order_value = 0
    let package_value = 0
    let accounting_value = 0
    let terminal_value = 0
    let total_value = 0
        
    product_quantity.addEventListener('keyup', () => {
        product_amount.innerText = product_quantity.value
        
        product_amount.textContent === '' ? product_amount.innerText='0': 
        product_amount.innerText = product_quantity.value,
        product_price.innerText = `$${product_quantity.value*.5}`

        product_value = product_quantity.value*.5
        total_value = product_value+order_value+package_value+accounting_value+terminal_value
        total_price.innerText = `$${total_value}`
    })
    order_quantity.addEventListener('keyup', () => {
        order_amount.innerText=order_quantity.value

        order_amount.textContent === '' ? order_amount.innerText='0': 
        order_amount.innerText = order_quantity.value,
        order_price.innerText = `$${order_quantity.value*0.25}`

        order_value = order_quantity.value*0.25
        total_value = product_value+order_value+package_value+accounting_value+terminal_value
        total_price.innerText = `$${total_value}`
    })
    package_list_value.addEventListener('click', () => {
        package_list.classList.toggle('open')
    })
    basic.addEventListener('click', () => {
        package_type.innerText = basic.innerText
        package_value = 0
        package_list_value.innerText = "Basic"
        package_list.classList.add('open')
        total_value = product_value+order_value+package_value+accounting_value+terminal_value
        total_price.innerText = `$${total_value}`
    })
    professional.addEventListener('click', () => {
        package_type.innerText = professional.innerText
        package_price.innerText = '$25'
        package_value = 25
        package_list_value.innerText = "Professional"
        package_list.classList.add('open')
        total_value = product_value+order_value+package_value+accounting_value+terminal_value
        total_price.innerText = `$${total_value}`
    })
    premium.addEventListener('click', () => {
        package_type.innerText = premium.innerText
        package_price.innerText = '$60'
        package_value = 60
        package_list_value.innerText = "Premium"
        package_list.classList.add('open')
        total_value = product_value+order_value+package_value+accounting_value+terminal_value
        total_price.innerText = `$${total_value}`
    })
    accounting.addEventListener('click', () => {
        if(accounting.checked){
        accounting_price.innerText = '$35'
        accounting_value = 35
        }else{
        accounting_price.innerText = '$0'
        accounting_value = 0
        }
        total_value = product_value+order_value+package_value+accounting_value+terminal_value
        total_price.innerText = `$${total_value}`
    })
    terminal_payment.addEventListener('click', () => {
        if(terminal_payment.checked){
        terminal_price.innerText = '$5'
        terminal_value = 5
        }else{
        terminal_price.innerText = '$0'
        terminal_value = 0
        }
        total_value = product_value+order_value+package_value+accounting_value+terminal_value
        total_price.innerText = `$${total_value}`
    })
})