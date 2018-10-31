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
import QuestionMap from './QuestionMap';


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
    const url = `http://localhost:3001/${this.state.email}`;
    fetch(url).then(function(reponse) {
      return reponse.json();
    }).then(function(jsonData){
      const interview = jsonData;
      this.setState((state) => ({interview: interview}));
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
    }, function() {
      const url = `http://localhost:3001/${this.state.email}`;
      fetch(url, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(this.state.interview)
      }).then(function(reponse) {
        return reponse.json();
      }).then(function(jsonData){
        console.log(jsonData);
      }.bind(this)).catch(function(error) {
        console.log("erreur lors de l'envoi du fichier json du serveur", error);
      });
      // callback (fetch with method POST to send new interview content to json-server)
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
          <QuestionMap
            handleQuestionChange = {this.handleQuestionChange}
            value                = {this.state.interview.geography}
          />

      </form>
    );
  }

  }

export default Formulaire ;





 