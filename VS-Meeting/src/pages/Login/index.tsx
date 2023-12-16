import "./style.css"

export default function Login(){
    
    return(

        <>
        <section className="back">
          <div className="form-container login-form">
            <form>
              <h2>Login</h2>
              <input type="text" placeholder="Email" required/>
              <input type="password" placeholder="Senha" required/>
              <button type="submit">Entrar</button>
            </form>
          </div>
        </section>
        <form></form>
      </>
      

    );
}