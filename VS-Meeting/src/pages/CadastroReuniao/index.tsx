import "./style.css"

export default function CadastroReunioes(){
    
    return(
<>
        <section className="back">
        <div className="form-container login-form">
          <form>
            <h2>Cadastro</h2>
            <input type="#" placeholder="Titulo" required/>
            <input type="#" placeholder="Tipo" required/>
            <input type="#" placeholder="Responsavel" required/>
            {/* 
          <input class="hit" type="#" placeholder="Descricao" required>
          <input class="hit" type="#" placeholder="Data" required> */}
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </section>
      </>

    );
}