function crypt(msg, hash) {

    const a = 8999724854491226;

    const f = "💕😁🤦‍♀️😍😉💋🎉🎉🤷‍♀️💖👀🎂🎉🤞😁😊😂🤣😒🤷‍♂️💖🤳(*/ω＼*)(┬┬﹏┬┬)ᓚᘏᗢᓚᘏᗢ(┬┬﹏┬┬)(*/ω＼*)(^///^)(^///^)ಥ_ಥಥ_ಥ(┬┬﹏┬┬)ᓚᘏᗢᓚᘏᗢ(╯°□°）╯︵ ┻━┻(╯°□°）╯︵ ┻━┻ಥ_ಥ:-D";

    let phrase = msg.split("");

    for (let i = 0; i < phrase.length; i++) {
 
        phrase[i] = (phrase[i].charCodeAt(0) * a + f + a + a + f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a+ f + a + a);

        phrase[i] += hash;
    }

    phrase.push(a);

    let output = "";
    
    for (let i = 0; i < phrase.length; i++) {
        output += phrase[i];
    }

    return output;
}


function decrypt(cypher, hash) {

    let s = String(hash)

    const msg = cypher.split(s);

    const a = msg.pop();

    for (let i = 0; i < msg.length; i++) {
        msg[i] = String.fromCharCode(parseInt(msg[i]) / a);
    }

    let output = "";


    for (let i = 0; i < msg.length; i++) {
    output += msg[i];
    }


    return output;
}

const phrase = "Se um dia a vida te der limões, faça um suco de uva.";

let pass = crypt(phrase, "119654872604127511087750540146566572205855");

console.log(pass);


let solve = decrypt(pass, "119654872604127511087750540146566572205855")

console.log(solve);