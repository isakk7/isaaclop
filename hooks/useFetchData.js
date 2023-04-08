import { useState, useEffect } from "react";

const useFetchData = fetchFunction => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchFunction()
      .then(result => setData(result))
      .catch(err => console.log(err));
  }, []);

  const removeElementById = id => {
    const newData = data.filter(element => element._id !== id);

    setData(newData);
  };

  const addData = element => {
    const newData = [element, ...data];

    setData(newData);
  };

  const updateData = (id, element) => {
    const newData = data.filter(element => element._id !== id);

    setData([...newData, element]);
  };

  return { data, setData, removeElementById, addData, updateData };
};

export default useFetchData;
