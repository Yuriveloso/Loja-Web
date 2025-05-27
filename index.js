const logindiv = document.getElementById('login');

const firebaseConfig = {
    apiKey: "AIzaSyAIIFuZlv7i3Mt5Ba1QJtF7mRlH8l6iook",
    authDomain: "loja-web1.firebaseapp.com",
    projectId: "loja-web1",
    storageBucket: "loja-web1.firebasestorage.app",
    messagingSenderId: "551680108820",
    appId: "1:551680108820:web:4aac220a8de1e025b07a01"
};
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
    console.log(user)
    if (user) {
        logindiv.innerHTML = `
            <button onclick="logout()">logout</button>
        `;
    } else {
        logindiv.innerHTML = `
            <a href="login.html"><button>Login</button></a>
        `;
    }
});

function logout() {
    firebase.auth().signOut().then(() => {
        console.log("Logout feito com sucesso");
        window.location.href = "login.html";
    }).catch((error) => {
        console.log(error)
    });
}