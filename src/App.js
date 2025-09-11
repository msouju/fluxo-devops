import React, {Component} from "react";
import "./App.css";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      titulo: "Login",
      email: "",
      senha: "",
      mensagem: ""
    }
  }

  login = () => {
    const {email, senha} = this.state;
    if(email === "aluno.ads@pucpr.br" && senha === "2025201") {
      this.setState({ mensagem: "Acessado com sucesso!" });
    } else {
      this.setState({ mensagem: "Usuário ou senha incorretos!" });
    }
  }

  render(){
    return(
      <div className="login-container">
        <h2>{this.state.titulo}</h2>
        <input type="text" size="20" name="email" placeholder="E-mail" onChange={(e) => this.setState({email: e.target.value})} /> <br/>
        <input type="password" size="20" name="senha" placeholder="Senha" onChange={(e) => this.setState({senha: e.target.value})} /> <br/>
        <button onClick={this.login}>Acessar</button> <br/>
        <label>{this.state.mensagem}</label>
      </div>
    )
  }
}

export default App;