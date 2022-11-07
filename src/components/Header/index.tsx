import * as S from './styles';
import { useState } from 'react';
import { AiOutlineUser, AiOutlineUserAdd,AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
    const[openSideBar , setOpenSideBar] = useState(false);
    return(
        <header>
            <S.HeaderContainer>
                <div className='S.Message'>
                    <h1>
                        Seja Bem-Vindo a sua Carteira!
                    </h1>
                </div>
            </S.HeaderContainer>
    </header>
    )
    
}
//Testando// 