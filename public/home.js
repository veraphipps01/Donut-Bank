function Home(){
  return (
    <Card
    class="card-body"
      txtcolor="black"
      header="Donut Bank Home"
      title="Welcome to the bank"
      text="Press on a DONUT to create a new account."
      body={(<a type="submit" className="nav-link" href="#/CreateAccount/"> <img src="donut.png" className="img-fluid" alt="Responsive image"/> </a>)}
    
    />
    
  );  
}

