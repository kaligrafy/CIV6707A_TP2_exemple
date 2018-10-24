import React from 'react';



class Formulaire extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Un courriel est soumis: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
       <p> 
       
           
         
         <label>
            Addresse courriel:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Valider" />
</p>
<h3>Domicile </h3>
<p>
 <label>
            Question:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Valider" />
          </p>
        <p>
        <label>
                   Question:
                   <input type="text" value={this.state.value} onChange={this.handleChange} />
                 </label>
                 <input type="submit" value="Valider" />
               
               </p>

               <p>
 <label>
           Question:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Valider" />
          </p>
        <p>
        <label>
                   Question:
                   <input type="text" value={this.state.value} onChange={this.handleChange} />
                 </label>
                 <input type="submit" value="Valider" />
               
               </p>

               <p>
 <label>
            Question:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Valider" />
          </p>
        <p>
        <label>
                   Question:
                   <input type="text" value={this.state.value} onChange={this.handleChange} />
                 </label>
                 <input type="submit" value="Valider" />
               
               </p>
               <h3>Profil de la personne </h3>
               <p>
 <label>
            Question:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Valider" />
          </p>
        <p>
        <label>
                   Question:
                   <input type="text" value={this.state.value} onChange={this.handleChange} />
                 </label>
                 <input type="submit" value="Valider" />
               
               </p>

               <p>
 <label>
           Question:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Valider" />
          </p>
        <p>
        <label>
                   Question:
                   <input type="text" value={this.state.value} onChange={this.handleChange} />
                 </label>
                 <input type="submit" value="Valider" />
               
               </p>

               <p>
 <label>
            Question:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Valider" />
          </p>
        <p>
        <label>
                   Question:
                   <input type="text" value={this.state.value} onChange={this.handleChange} />
                 </label>
                 <input type="submit" value="Valider" />
               
               </p>

      <h3>Mobilité </h3>
<p>
 <label>
            Question:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Valider" />
          </p>
        <p>
        <label>
                   Question:
                   <input type="text" value={this.state.value} onChange={this.handleChange} />
                 </label>
                 <input type="submit" value="Valider" />
               
               </p>

               <p>
 <label>
           Question:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Valider" />
          </p>
        <p>
        <label>
                   Question:
                   <input type="text" value={this.state.value} onChange={this.handleChange} />
                 </label>
                 <input type="submit" value="Valider" />
               
               </p>

               <p>
 <label>
            Question:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Valider" />
          </p>
        <p>
        <label>
                   Question:
                   <input type="text" value={this.state.value} onChange={this.handleChange} />
                 </label>
                 <input type="submit" value="Valider" />
               
               </p>

               <p>Merci pour votre temps et votre engagement!
            </p>
        </form>
        
      );
    }
  }

export default Formulaire ; // permet d'exporter Survey