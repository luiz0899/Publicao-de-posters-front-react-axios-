import React from 'react';
import blogFetch from '../axios/config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./NewPost.css";

const NewPost = () => {

  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');

  const createPost = async (e) => { // metodo post 
    e.preventDefault();

    const post = JSON.parse(JSON.stringify({ titulo, conteudo, userId: 1 }));
    await blogFetch.post("/save", post,

    );

    navigate("/");


  };

  return (
    <div className="newPost">
      <h2> Inserir novo Post: </h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className='formControl'>
          <label htmlFor="titulo"> Título </label>
          <input type="text" name='titulo' id='titulo' placeholder='Digite o título:' onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div className='formControl'>
          <label htmlFor="conteudo"> Conteúdo: </label>
          <textarea name="conteudo" id="conteudo" placeholder='Digite o conteúdo:' onChange={(e) => setConteudo(e.target.value)} ></textarea>
        </div>
        <input type="submit" value="Criar Post " className='btnPost' />
      </form>
    </div>
  )
}

export default NewPost

