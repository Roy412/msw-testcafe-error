export default function Home() {
  const handleClick = async () => {
    window.location.assign('/account2');
  }

  return (<div>
    <h1>Screen1</h1>
    <button onClick={handleClick}>navigate</button>
  </div>);
}
