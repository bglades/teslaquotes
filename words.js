
$('#click-me').click(function(){
    let num = 1
    num = Math.floor(Math.random()*10) +1
   
    switch(num){
        case 1:
            console.log('If you want to find the secrets of the universe, think in terms of energy, frequency, and vibration.')
            $("#message").html('If you want to find the secrets of the universe, think in terms of energy, frequency, and vibration.')
            break;
        case 2:
            console.log('Of all things, I liked books best.')
            $("#message").html('Of all things, I liked books best.')
            break;
        case 3:
            console.log('I do not care that they stole my idea... I care that they do not have any of their own.')
            $("#message").html('I do not care that they stole my idea... I care that they do not have any of their own.')
            break;
        case 4:
            console.log('The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane.')
            $("#message").html('The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane.')
            break;
        case 5:
            console.log('Be alone, that is the secret of invention; be alone, that is when ideas are born.')
            $("#message").html('Be alone, that is the secret of invention; be alone, that is when ideas are born.')
            break;
        case 6:
            console.log('My brain is a receiver, in the Universe there is a core from which we obtain knowledge, strength and inspiration. I have not penetrated into the secrets of this core, but I know that it exists.')
            $("#message").html('My brain is a receiver, in the Universe there is a core from which we obtain knowledge, strength and inspiration. I have not penetrated into the secrets of this core, but I know that it exists.')
            break;
        case 7:
            console.log('The present is theirs; the future, for which I really worked, is mine.')
            $("#message").html('The present is theirs; the future, for which I really worked, is mine.')
            break;
        case 8:
            console.log('If your hate could be turned into electricity, it would light up the whole world.')
            $("#message").html('If your hate could be turned into electricity, it would light up the whole world.')
            break;
        case 9:
            console.log('One must be sane to think clearly, but one can think deeply and be quite insane.')
            $("#message").html('One must be sane to think clearly, but one can think deeply and be quite insane.')
            break;
        default:
            console.log('What one man calls God, another calls the laws of physics.')
            $("#message").html('What one man calls God, another calls the laws of physics.')
            break;
    }

})



