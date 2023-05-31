
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";
import blogFetch from "../axios/config";

const Home = () => {

  const [posts, setTodos] = useState([]); //funciona como metodos get e set

  const getTodos = async () => { // resgata os dados da api 

    try {

      const response = await blogFetch.get("postcontroller/todos");

      const data = response.data;

      setTodos(data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => { //  aqui é onde eu chamo meus metodos 

    getTodos();

  }, []);

  return (// aqui me retorna os conteudos da api "id" ,"title" , "body" 
    <div className="home">
      <h1> Ultimos Posters </h1>
      {posts.length === 0 ? <p> Não a poster no momento  </p> : (
        posts.map((post) => (
          <div className="post" key = {post.id}>

            <h2>
              {post.titulo} 
            </h2>
            <p>{post.conteudo} </p>
            <Link to = {`/posts/${post.id}`} className="btnLerMais">
               Ler mais... 
            </Link> 

          </div>
        ))
      ) }

    </div>
  );

};

export default Home;