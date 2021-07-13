import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/ogw/ADea4I7xr4pEKfZL2aEGEs13JKh4eDdenktjjFonUgF4mg=s83-c-mo" 
          nome="Lucas" 
          descricao="Oi, eu sou o Lucas. Sou um dos alunos da Labenu. Adoro praticar exercícios de javascript mesmo sem entender muito sobre. Atualmente aprendendo a mexer com React."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://image.flaticon.com/icons/png/512/747/747314.png"
          item="E-mail:"
          conteudo="bananinha-amassadinha@gmail.com"
        />

        <CardPequeno
          imagem="https://img-premium.flaticon.com/png/512/1287/premium/1287899.png?token=exp=1626198482~hmac=f15dfe7c7e9b86d788f5734d68a36e5c"
          item="Endereço:"
          conteudo="Av. Logo Ali, 21"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Me formando como um desenvolvedor web." 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Astronauta freelancer." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
