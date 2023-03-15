import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonAvatar, IonItem, IonLabel } from "@ionic/react";
import { useEffect } from "react";
import { useParams } from "react-router"
import { getComments } from "../redux/commentSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Detail=()=>{
    const {comments} = useAppSelector(state=>state.comments)
    const {id} = useParams<{ id: string; }>()
  const dispatch = useAppDispatch()



    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((json) => dispatch(getComments(json)));
      },[id,dispatch])

    return <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Detail View</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <IonGrid>
        <IonRow>
          <IonCol size='12'>
            {comments.map((item)=>{
              return (
                <IonCard key={item.id}>
                <IonCardHeader>
                  <IonCardTitle>
                    <IonItem>
                      <IonAvatar slot="start" >
                        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                      </IonAvatar>
                      <IonLabel>{item.name}</IonLabel>
                    </IonItem>
                  </IonCardTitle>
                  <IonCardSubtitle>{item.email}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                {item.body}
                </IonCardContent>
              </IonCard>
              )
            })}
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
}

export default Detail
