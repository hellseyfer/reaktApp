import { useState } from 'react';

// Los custom hooks permiten abstraer la logica del componente html
// y poder reutilizarla en otros componentes

const useCounter = (initial, stock) => {
  const [count, setCount] = useState(initial);

  const handleSum = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleSub = () => {
    if (count > 0) setCount(count - 1);
  };

  return { count, handleSum, handleSub };
};

export default useCounter;
