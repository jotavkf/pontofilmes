import Card from "../Components/Card";
import Cart from "../Components/Cart";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar.js";
import axios from "axios";

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [render, setRender] = useState(true);
  const [filmesCarrinho, setFilmesCarrinho] = useState([]);
  const [isVisibleCart, setIsVisibleCart] = useState(false);

  useEffect(() => {
    async function fetchFilmes() {
      try {
        const result = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=fa812ced39c01ea176a7307b834faa7d&language=en-US&page=1`
        );
        setFilmes(result.data.results);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFilmes();
    setRender(false);
  }, [render]);

  const handleAddCarrinho = (filme) => {
    setFilmesCarrinho((prev) => {
      const findFilmeInCart = prev.find((item) => item.id === filme.id);

      if (findFilmeInCart) {
        return prev.map((item) =>
          item.id === filme.id
            ? { ...item, amount: item.amount + 1, price: 79 } // Integrando um valor aleatório ao adicionar no carrinho dado que a API não entrega um preço
            : item
        );
      }

      return [...prev, { ...filme, amount: 1, price: 79 }];
    });
  };

  const handleRemoveCarrinho = (id) => {
    setFilmesCarrinho((prev) => {
      return prev.reduce((cal, item) => {
        if (item.id === id) {
          if (item.amount === 1) return cal;

          return [...cal, { ...item, amount: item.amount - 1 }];
        }

        return [...cal, { ...item }];
      }, []);
    });
  };

  return (
    <div>
      <Navbar
        filmesCarrinho={filmesCarrinho}
        setIsVisibleCart={setIsVisibleCart}
      />
      <div className='relative h-full bg-slate-300'>
        <div className='flex flex-wrap justify-center'>
          {filmes.map((filme) => {
            return (
              <Card
                key={filme.id}
                filme={filme}
                handleAddCarrinho={handleAddCarrinho}
              />
            );
          })}
          {isVisibleCart && (
            <Cart
              setIsVisibleCart={setIsVisibleCart}
              setFilmesCarrinho={setFilmesCarrinho}
              filmesCarrinho={filmesCarrinho}
              handleAddCarrinho={handleAddCarrinho}
              handleRemoveCarrinho={handleRemoveCarrinho}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
