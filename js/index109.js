/*
Define a validateUser function that accepts the following parameters: username and password
This function returns true or false if username and password match any of the following values:
username: nacho, password: Nerd1979
username: pedro, password: Batman0217
username: marta, password: Mother2312
Show the following output if username and password belong to a user: Welcome %username%, nice to see you again
Show the following output if username and password don't belong to a user: Please input valid credentials
Try calling the validateUser with valid credentials and also with invalid ones
*/

function validateUser(username, password){
    if (username == 'nacho' && password == 'Nerd1979'){
        console.log('Welcome %s, nice to see you again', username)
    } else if (username == 'pedro' && password == 'Batman0217'){
        console.log('Welcome %s, nice to see you again', username)
    } else if (username == 'marta' && password == 'Mother2312'){
        console.log('Welcome %s, nice to see you again', username)
    } else {
        console.log('Please input valid credentials')
    }
}

validateUser('nacho', 'Nerd1979');
validateUser('pedro', 'Batman0217');
validateUser('marta', 'Mother2312');
validateUser('Carlos', 'Password');
validateUser(123, 12344);