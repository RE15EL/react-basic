import './App.css'
import { MyGallery } from './components/gallery/MyGallery'
import { MyPageLayout } from './components/pageLayout/MyPageLayout.jsx'
// import { MyCard } from './components/card/MyCard.jsx' 
// import { MyList } from './components/list/MyList.jsx'



function App() {   

  return (       
      <MyPageLayout>
        {/* <MyCard title= "Lin Lanying" > Hola </MyCard>  
        <MyList elements={people}/> */}

        <MyGallery />
      </MyPageLayout> 
  )
}

export default App
