import { useLocation } from "react-router-dom";
import { useState } from "react";
import Form from "../Components/Form";
import CarrinhoFinal from "../Components/CarrinhoFinal";
import { Toaster } from "react-hot-toast";

function Checkout() {
  const { state } = useLocation();
  const [carrinho, setCarrinho] = useState(state);

  const handleRemoveCarrinho = (id) => {
    setCarrinho((prev) => {
      return prev.reduce((cal, item) => {
        if (item.id === id) {
          if (item.amount === 1) return cal;

          return [...cal, { ...item, amount: item.amount - 1 }];
        }

        return [...cal, { ...item }];
      }, []);
    });
  };

  console.log(carrinho);

  return (
    <div>
      <Toaster />
      <div className='h-screen w-screen bg-slate-200'>
        <div className='py-10 px-20'>
          <div className='container bg-gray-100 p-10 rounded-md shadow-md w-full'>
            <h1 className='object-contain text-regular md:text-2xl lg:text-3xl font-semibold font-poppins text-left'>
              Checkout
            </h1>
            <div className='flex flex-col md:flex-row justify-between items-center'>
              <Form carrinho={carrinho} setCarrinho={setCarrinho} />
              <div className='container bg-gray-200 m-10 p-10 rounded-md shadow-md'>
                <h1 className='text-xl font-poppins font-semibold text-sky-600 text-left'>
                  Carrinho
                </h1>
                <CarrinhoFinal
                  carrinho={carrinho}
                  handleRemoveCarrinho={handleRemoveCarrinho}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
