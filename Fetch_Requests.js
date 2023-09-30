const [Email, setEmail] = useState('');
const [password, setPassword] = useState('');



const login = () => {
    data = {Email,password}
    console.log(data)
    fetch('/login', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((res) => 
        res.json().then((returned) => {
            console.log(returned)
        })
    )

};