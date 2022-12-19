// export { default } from "@walmart-web/identity-next-login-page";
import { request } from "graphql-request";
import { useState } from 'react';

const fetchTodos = async () => {
  const query = `
    query GetTodos {
      todos {
        id,
        text
      }
    }`;

  let result

  try {
    // result = await request("/", query);
    const results = await fetch("/todos");
    result = await results.json();
  }catch(err) {
    console.log('error', err)
  }

  return result;
};

export default function Home() {
  const [data, setData] = useState()

  const fetchData = async () => {
    setData(await fetchTodos())
  }

  if (!data) {
    return (<div>
      <h1>Loading...</h1>
      <button onClick={fetchData}>fetch</button>
    </div>);
  }


  return (
    <div className="container">
      <h1>Success</h1>
      <div className="grid">
        {JSON.stringify(data)}
      </div>
    </div>
  );
}
