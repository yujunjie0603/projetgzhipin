import React, {Component} from 'react'
import {
    NavBar, 
    WingBlank, 
    List, 
    InputItem,
    WhiteSpace,
    Button
} from 'antd-mobile'
import Logo from '../../components/logo/logo'

export default class Login extends Component {
    state = {
        username : '',
        password : '',
    }
    login = () => {
        console.log(this.state)
    }
    render(){
        const {type} = this.state
        return (
            <div>
                <NavBar>
                    Axialys
                </NavBar>
                <Logo />
                <WingBlank>
                    <List>
                        <InputItem onChange={val => {this.handleChange('username', val)}}>Id User :</InputItem>
                        <WhiteSpace />
                        <InputItem type="password" onChange={val => {this.handleChange('password', val)}}>Pass word :</InputItem>
                        <WhiteSpace />
                        <Button onClick={this.login}> login </Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}