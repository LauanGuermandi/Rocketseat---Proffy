import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/26447929?s=400&u=1b143a2359955f7671f17387f64da5e8d4b8454c&v=4" alt="Lauan guermandi"/>
                <div>
                    <strong>Lauan Guermandi</strong>
                    
                    <span>ReactJS</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /><br />
                Nullam dapibus nec nunc ac tincidunt.
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Entrar em contato"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;

