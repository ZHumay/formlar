import React, { Component } from "react";


class Form extends Component {
    state = {
        name: "",
        surname: "",
        fathername: "",
        unvan: "",
        number: "",
        isvalid: true
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        this.setState({
            isvalid:false})
    }

    submitChanges = (e) => {
        e.preventDefault();
        console.log(this.state);
   
        this.state.name === "" || this.state.surname === "" || this.state.fathername === "" || this.state.address === "" || this.state.number === "" ? 
            alert("Bütün bölmələri doldurun"): alert('Form müvəffəqiyyətlə göndərildi')
       
    }

    render() {
        return (
            <div className="main">
           
                    <label htmlFor="">Ad </label> 
                        
                 < input value={this.state.name} type="text" onChange={this.handleInput} name="name" placeholder="Adınızı daxil edin" /> 
                    
                 <label htmlFor="">Soyad </label> 
                        
                        < input value={this.state.surname} type="text" onChange={this.handleInput} name="surname" placeholder="Soyadınızı daxil edin" /> 
                           
                        <label htmlFor="">Ata adi </label> 
                        
                        < input value={this.state.fathername} type="text" onChange={this.handleInput} name="fathername" placeholder=" Ata adınızı daxil edin" /> 

                        <label htmlFor="">Adress</label> 
                        
                        < input value={this.state.unvan} type="text" onChange={this.handleInput} name="unvan" placeholder=" Addressinizi daxil edin" /> 

                       

                        <label htmlFor="">Telefon </label> 
                        
                        < input value={this.state.number} type="number" onChange={this.handleInput} name="number" placeholder="Telefon nomrenizi daxil edin" /> 
                                  
                    <button type="button" disabled={this.state.isvalid} onClick={this.submitChanges}>Göndər</button>
            
            </div>
        )
    }
}
export default Form