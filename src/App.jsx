import './App.css'
import { MyPageLayout } from './components/pageLayout/MyPageLayout.jsx'
import { MyCard } from './components/card/MyCard.jsx' 
import { MyList } from './components/list/MyList.jsx'

const people = [
  {
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'matemática',
  }, 
  {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'químico',
  }, 
  {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'físico',
  }, 
  {
    name: 'Percy Lavon Julian',
    profession: 'químico',  
  }, 
  {
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrofísico',
  }
];

function App() {   

  return (       
      <MyPageLayout>
        <MyCard title= "Lin Lanying" > Hola </MyCard>  
        <MyList elements={people}/>
      </MyPageLayout> 
  )
}

export default App
