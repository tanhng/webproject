import React, { Component } from 'react';
class HomePage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            pass: "",
        }
    };

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });
        console.log(this.state.email);
    }

    handlePasswordChange = (event) => {
        this.setState({
            pass: event.target.value
        });
        console.log(this.state.pass);
    }



    handleLogin = async (event) => {

        event.preventDefault();

        try {
            const data = await fetch("http://localhost:5000/user/signup", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.pass
                }),
            }).then((res) => { return res.json(); });
            console.log('data frontend login', data);
            this.setState({
                email: '',
                pass: '',
            })
            if (!data.success) {
                this.setState({
                    errMessage: data.message,
                });
            } else {
                //save data to localStorage
                console.log("thanh cong");
            }
        } catch (err) {
            this.setState({
                errMessage: err.message
            });
        } finally {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        return (
            <form action="/action_page.php" onSubmit={this.handleLogin}>
            <label htmlFor="fname">Email:</label><br />
            <input type="text" id="fname" name="email" value={this.state.email} onChange={this.handleEmailChange} /><br />
            <label htmlFor="lname">Password:</label><br />
            <input type="text" id="lname" name="password" value={this.state.pass} onChange={this.handlePasswordChange} /><br /><br />
            <input type="submit" defaultValue="Submit" />
          </form>
        );
    }
}



export default HomePage;