function monthlySavings(payments, living_cost){
    let check1, check2;
    let final_payments = [];
    check1 = Array.isArray(payments);
    check2 = Array.isArray(living_cost);

    if (check1 != true && check2 != false){
        console.log("invalid input")
    }
    else{
        const num = payments.filter(pd=>{
            if (pd >= 3000){
                let tmp = pd;
                pd = pd*0.20
                final_payments.push(tmp-pd);
            }
            else{
                final_payments.push(pd);
            }
        })
        let total_earnings = 0;
        for (let i = 0; i<final_payments.length; i++){
            total_earnings += final_payments[i];
        }
        let savings = total_earnings-=living_cost;

        if (savings < 0){
            console.log("earn more");
        }
        else{
            console.log(savings);
        }
    }
}

payment_arr = [1000, 2000, 3000]
living_cost = 5400

monthlySavings(payment_arr, living_cost);