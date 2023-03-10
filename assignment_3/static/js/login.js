const signInForm = document.getElementById("login");
const base_url = 'http://127.0.0.1:5000';



const login = async () => {
    const requestData = {
        method: "POST",
        mode: 'cors',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: signInForm.username.value,
            password: signInForm.password.value,
        })
    }

    const response = await fetch(base_url + '/log_in', requestData);
    const data = await response.json();
    if (response.status !== 200) {
        alert(data.message);
        // console.log(data )
        signInForm.reset();
        return null;
    }
    return data;
}

signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    login().then(x => {
        if (x) {
            console.log(x);
            localStorage.setItem('access_token', x.token);
            // localStorage.setItem('refresh_token', x.refresh_token);
            window.open('retail.html', '_parent');
        }
    });
});
