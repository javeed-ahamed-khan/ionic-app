import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getPosts, } from '../redux/postSlice';
import { Virtuoso } from 'react-virtuoso'

const Dashboard: React.FC = () => {
  const { posts } = useAppSelector(state => state.posts)
  const history = useHistory()
  const dispatch = useAppDispatch()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => dispatch(getPosts(json)))
  }, [dispatch])

  const handleClick = (id: number) => {
    history.push(`/page/detail/${id}`)
  }
  console.log("re-render")
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
          <Virtuoso
            style={{ height: '100%' }}
            totalCount={posts.length}
            data={posts}
            itemContent={(index, post) => (
              <IonCard key={post.id} onClick={() => handleClick(post.id)}>
                <IonCardHeader>
                  <IonCardTitle>{post.title}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  {post.body}
                </IonCardContent>
              </IonCard>)}
          />
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
