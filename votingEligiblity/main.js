const votingCheck = () => {
    console.log(age.value);
    
    if(age.value){
        if(age.value>=18){
            result.innerHTML = `<p class="text-green-500">Eligible for Voting</>`
        }else{
            result.innerHTML = `<p class="text-red-500">Not Eligible for Voting</>`
        }
        
    }else{
        result.innerHTML = `<p class="text-yellow-500">Enter some values</>`
    }
}