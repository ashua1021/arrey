let array = []

const makeArray = () => {
    console.log('makeArray startet')
        let input = document.getElementById('input');
        array.push(input.value);
        
        const outputList = document.getElementById('outputList');
        outputList.innerHTML += '<li>' + input.value + '</li>';
        input.value = '';


        console.log('Array oppdatert')
        array.forEach((navn) =>{
            console.log(navn)
        })
    
        // console.log('Array oppdatert') 
        // array.forEach(doc => {
        //     console.log(doc)
            
        // });
}

const changecolor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    console.log(r)
    console.log(g)
    console.log(b)

    // document.body.style.backgroundColor = `rgb(${r},${g},${b}})`
    document.body.style.backgroundColor = `rgb(${r},${g},${b} )`
}

const changeALLcolor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const skjema = document.getElementById('skjema').style.background;
    const bodyR = Math.floor(Math.random() * 255);
    const bodyG = Math.floor(Math.random() * 255);
    const bodyB = Math.floor(Math.random() * 255);
}

