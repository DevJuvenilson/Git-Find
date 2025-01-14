import { Header } from "../../components/Header";
import background from '../../assets/github-original.svg';
import './styles.css';

function App() {
    return (
        <div className="App">
            <Header />
            <div className='conteudo'>
                <img src={background} className="background" alt='Github logo' />

                <div className="info">
                    <div>
                        <input name="usuario" placeholder="@username" />
                        <button>Buscar</button>
                    </div>
                    <div className="perfil">
                        <img src="https://avatars.githubusercontent.com/u/109773063?v=4" className="profile" alt="" />
                        <div>
                            <h3>Juvenilson Daniel</h3>
                            <span>@DevJuvenilson</span>
                            <p>Descrição</p>
                        </div>
                    </div>

                    <hr></hr>
                </div>

            </div>
        </div>
    );
}

export default App;
