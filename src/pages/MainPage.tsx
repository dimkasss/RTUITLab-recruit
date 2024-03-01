import Button from "../components/Button";

const MainPage = () => {
  const toggleTheme = () => {
    document.body.classList.contains("dark")
      ? document.body.classList.remove("dark")
      : document.body.classList.add("dark");
  };

  return (
    <>
      <h1>Main Page</h1>
      <div>Where do I go from here?</div>
      <Button onClick={toggleTheme}>toggle theme</Button>
    </>
  );
};

export default MainPage;
