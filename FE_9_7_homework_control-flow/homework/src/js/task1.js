function chekTheUser(){
    let user = prompt('Enter login');
    let dayStart = 6;
    let dayEnd = 20;
    let date = new Date();
    
    if(user === 'User'){
        let pass = prompt('Enter password')
            if(pass === 'SuperUser'){
                if(date.getHours() < dayEnd && date.getHours() > dayStart){
                    alert('Good day !');
                }else{
                    alert('Good evening !');
                }
            }else if(pass === null || pass.length === 0){
                alert('Canceled');
            }else{
                alert('Wrong password !')
            }
    }else if(user === null || user.length === 0){
        alert('Canceled')
    }else if(user.length < 4){
        alert('I dont know any users having name length less than 4 symbols')
    }else{
        alert('I dont know you !')
    }
}

chekTheUser();

