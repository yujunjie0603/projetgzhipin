import React, {Component} from 'react'
import {
    NavBar, 
    WingBlank, 
    List, 
    InputItem,
    WhiteSpace,
    Radio,
    Button
} from 'antd-mobile'
import {connect} from 'react-redux'
import {register} from '../../redux/actions'
import Logo from '../../components/logo/logo'

const ListItem = List.Item

class Register extends Component {

    state = {
        username : '',
        password1 : '',
        password2 : '',
        type : 2
    }
    registrer = () => {
        console.log(this.state)
    }
    handleChange = (name, val) => {
        this.setState({
            [name] : val
        })
    }
    toLogin = () => {
        this.props.history.replace('/login')
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
                        <InputItem type="password" onChange={val => {this.handleChange('password1', val)}}>Pass word :</InputItem>
                        <WhiteSpace />
                        <InputItem type="password" onChange={val => {this.handleChange('password2', val)}}>confirm pass word :</InputItem>
                        <ListItem>
                            <span> use type : </span>
                            <Radio checked={type===1} onChange={() => {this.handleChange('username', 1)}}>developpeur</Radio>
                            <Radio checked={type===2} onChange={() => {this.handleChange('username', 2)}}>boss</Radio>
                        </ListItem>
                        <WhiteSpace />
                        <Button type="primary" onClick={this.registrer}> registrer</Button>
                        <Button onClick={this.toLogin}> login </Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default  connect(
    state => ({}),
    {register}
)(Register)