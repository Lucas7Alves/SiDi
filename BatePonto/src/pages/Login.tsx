import {useState} from 'react'

function   FormsLogin() {

    const [dataForm, setDataform] = useState({
        cpf: '',
        password: '',
    }) 

    const handleChangeValue = (event: any) => {
        setDataform((dataForm) => ({
           ...dataForm, 
           [event.target.name]: event.target.value,
        }))
    }    

    return(
        <>
        <p id="cpfBarra">CPF</p>
        <input type="text" name="cpf" id="cpf" placeholder="000.000.000-00" onChange={handleChangeValue}/>

        <p id='senhaBarra'>Senha</p>
        <input type="text" name="password" id="password" placeholder="Insira sua senha" onChange={handleChangeValue}/>
        </>
    )
}

export default FormsLogin

