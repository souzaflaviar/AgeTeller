function check()
{
    var YearValue = window.document.getElementById('yearbox')
    var output = window.document.querySelector('div#divRes') //same line 1
    var today = new Date()
    var thisYear = today.getFullYear()
    
    if(YearValue.value.lenght == 0 || Number(YearValue.value) > thisYear)
    {
        window.alert('[EROR] Check input and try again')
    } 
    else
    {
        var fgender = document.getElementsByName('gender')
        var age = thisYear - Number(YearValue.value)
        var showGender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'pic')
        if(fgender[0].checked)
        {
            showGender = 'man' 
            if (age<14)
            {
                //child
                img.setAttribute('src', 'img/mchild.jpg')
            }else if (age>=14 && age <=24)
            {
                //young
                img.setAttribute('src', 'img/myoung.jpg')
            }
            else if(age>24 && age<=50)
            {
                //adult
                img.setAttribute('src', 'img/madult.jpg')
            }else
            {
                //elder
                img.setAttribute('src', 'img/melder.jpg')
            }
        }
        else if (fgender[1].checked)
        {
            showGender = 'female'
            if (age<14)
            {
                //child
                img.setAttribute('src', 'img/fchild.jpg')
            }else if (age>=14 && age <=24)
            {
                //young
                img.setAttribute('src', 'img/fyoung.jpg')
            }
            else if(age>24 && age<=50)
            {
                //adult
                img.setAttribute('src', 'img/fadult.jpg')
            }else
            {
                //elder
                img.setAttribute('src', 'img/felder.jpg')
            }
            
        }
        divRes.style.textAlign = 'center'
        divRes.innerHTML = `You identify yourself as a ${age} years old ${showGender} `
        divRes.appendChild(img)
        img.style.borderRadius = '100%'
        img.style.height = '400px'
        
       

    }
    
}
    