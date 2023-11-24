import { LoginForm } from "../../components/forms/loginForm/LoginForm";
import { MyContainer } from "../../components/my-container/MyContainer";


export function Home() {
    return (
      <MyContainer>        
        <LoginForm />
      </MyContainer>
    );
  }