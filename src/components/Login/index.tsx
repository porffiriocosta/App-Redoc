import { AuthContext } from 'AuthContext';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { getTokenData } from 'util/auth';
import { requestBackendLogin } from 'util/requests';
import { saveAuthData } from 'util/storage';
import './styles.css';

type CredentialDTO = {
    username: string;
    password: string;
};

type LocationState = {
    from: string;
}

const Login = () => {

    const location = useLocation<LocationState>();

    const { from } = location.state || { from: { pathname: '/home'} };

    const { setAuthContextData } = useContext(AuthContext);

    const [hasError, setHasError] = useState(false);

    const { register, handleSubmit, formState: {errors}} = useForm<CredentialDTO>();

    const history = useHistory();

    const onSubmit = (formData: CredentialDTO) => {
        requestBackendLogin(formData)
        .then((response) => {
          saveAuthData(response.data);
          setHasError(false);
          setAuthContextData({
            authenticated: true,
            tokenData: getTokenData(),
          })
          history.replace(from);
        })
        .catch((error) => {
          setHasError(true);
          console.log('ERRO', error);
        });
    };


    return (
        <div className="container">       
        <div className="content">      
          <div id="login">
            {hasError && (<div className="alert alert-danger">Erro no login, Usuário ou senha incorretos.</div>)}
            <form onSubmit={handleSubmit(onSubmit)}> 
              <h1>Login</h1> 
              <p> 
                <label>Usuario</label>
                <input {...register('username', { required: 'Campo obrigatório', pattern:{
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido'
                }
                })} 
                type="text"
                className={`form-control base-input ${errors.username ? 'is-invalid' : ''}`}
                placeholder='Email'
                name='username'
                />
                <div className='invalid-feedback d-block'>{errors.username?.message}</div>
              </p>             
              <p> 
                <label>Senha</label>
                <input {...register('password', {required: 'Campo obrigatório'})}
                type="password"
                className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
                placeholder="Password"
                name='password'
                /> 
                <div className='invalid-feedback d-block'>{errors.password?.message}</div>
              </p>
              <p> 
                <input type="submit" value="Logar" /> 
              </p>
            </form>
          </div>
        </div>
      </div> 
    );
  };
  
  export default Login;