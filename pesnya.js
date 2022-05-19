function generateSingleStanza(number) {
    let buttleName = "бутылок";
        if (number.toString().substr(-1) == 1 && number !== 11) {
            return buttleName = "бутылка";
        } else if ( number >= 5 && number <=20) {
            return buttleName = "бутылок"
        } else if (number.toString().substr(-1) == 2 || number.toString().substr(-1) == 3 || number.toString().substr(-1) == 4) {
            return buttleName = "бутылки";
        } 
            return buttleName = "бутылок"
        
}

function generateSongText (string) {
    let buttleText = '';
    for (let i = 99; i >= 1; i--) {
        if (i >= 2) {
        console.log( buttleText =`${i} ${generateSingleStanza(i)} пива на стене, ${i} ${generateSingleStanza(i)} пива! \n Возьми одну, пусти по кругу, ${i-1} ${generateSingleStanza(i-1)} пива на стене!`);
        } else {
            console.log( buttleText =`${i} ${generateSingleStanza(i)} пива на стене, ${i} ${generateSingleStanza(i)} пива! \n Возьми одну, пусти по кругу, нет бутылок пива на стене!`)
        }
    } 
}
generateSongText(100)