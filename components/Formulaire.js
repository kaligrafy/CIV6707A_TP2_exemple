import React from 'react';
import QuestionCourriel from './QuestionCourriel';
import QuestionNom from './QuestionNom';
import QuestionCommentaire from './QuestionCommentaire';
import QuestionQuestions from './QuestionQuestions';
import QuestionSexe from './QuestionSexe';
import QuestionStatut from './QuestionStatut';
import QuestionBixi from './QuestionBixi';
import QuestionTypeActivite from './QuestionTypeActivite';
import QuestionSatisfaction from './QuestionSatisfaction';
import QuestionFreq from './QuestionFreq';
import QuestionPermisConduire from './QuestionPermisConduire'
import QuestionTypeTransport from './QuestionTypeTransport';


class Formulaire extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      email: "bob@test.test",
      section: "premiere",
      interview: {}
    };
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
  }

  componentDidMount() {
    const url = 'http://localhost:3001/interviews';
    fetch(url).then(function(reponse) {
      return reponse.json();
    }).then(function(jsonData){
      const interviews = jsonData;
      this.setState((state) => ({interview: interviews[state.email]}));
    }.bind(this)).catch(function(error) {
      console.log('erreur lors du téléchargement du fichier json du serveur', error);
    });
  }
  
  handleQuestionChange(attribute, value)
  {
    this.setState(function(state) {
      const interview = state.interview;
      interview[attribute] = value;
      return {
        interview: interview
      };
    });
    
  }
  
  render()
  {
    return (
      <form>
          
          <QuestionBixi 
            handleQuestionChange = {this.handleQuestionChange}
            age                  = {this.state.interview.age}
            abonnementBixi       = {this.state.interview.abonnementBixi}
          />
        
      </form>
    );
    /*
    <QuestionCourriel></QuestionCourriel>
          <QuestionNom></QuestionNom>
          <br/>
          <QuestionCommentaire></QuestionCommentaire>
          <br/>
          <QuestionQuestions></QuestionQuestions>
          <br/>
          <QuestionSexe></QuestionSexe>
          <br/>
          <QuestionStatut></QuestionStatut>
          <br/>
          <QuestionBixi></QuestionBixi>
          <br/>
          <QuestionTypeTransport></QuestionTypeTransport>
          <br/>
          <QuestionTypeActivite></QuestionTypeActivite>
          <br/>
          <QuestionSatisfaction></QuestionSatisfaction>
          <br/>
          <QuestionFreq></QuestionFreq>
          <br/>
          <QuestionPermisConduire></QuestionPermisConduire>
          */
  }

  }

export default Formulaire ;





 