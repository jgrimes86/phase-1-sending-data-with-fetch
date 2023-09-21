// Add your code here
function submitData (userName, userEmail) {
    const userInfo ={
        name: userName,
        email: userEmail,
    };

    const postObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(userInfo),
    }

    const body = document.querySelector('body');
    
    return fetch('http://localhost:3000/users', postObject)
    .then((response) => response.json())
    .then((object) => {
        const userId = document.createElement('div');
        userId.innerText = object.id;
        body.append(userId)
    })
    .catch(error => {
        const errorMessage = document.createElement('div');
        errorMessage.innerText - error.message;
        body.append(errorMessage)
    })
}
// submitData("John Doe", "email@email.com")
