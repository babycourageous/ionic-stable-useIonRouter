import * as React from 'react'
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer'
import './Home.css'

const Home: React.FC = () => {
  const [isEnabled, setIsEnabled] = React.useState(false)
  const router = useIonRouter()

  React.useEffect(() => {
    console.log('useeffect')
    if (isEnabled) {
      router.push('/about')
    }
  }, [isEnabled, router])

  function handleClick() {
    setIsEnabled(true)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={handleClick}>Redirect</IonButton>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  )
}

export default Home
