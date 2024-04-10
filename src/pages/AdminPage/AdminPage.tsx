import './adminpage.css';
import { auth, db } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useLayoutEffect, useState } from 'react';
import { Container } from '../../components/Container';
import { DocumentData, collection, getCountFromServer, getDocs, limit, orderBy, query, startAfter } from 'firebase/firestore';
import { AdminNav } from '../../shared/AdminNav';
import { AdminUnreaded } from '../../shared/AdminUnreaded';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { addUnreadedPerson, removeUnreadedPersons } from '../../store/unreadedPersonsSlice';

export type TAdminBlocks = 'unreaded' | 'content' | "allRequests";

const ITEMS_FROM_SERVER = 6;

export function AdminPage() {
  const [countUnreaded, setCountUnreaded] = useState(0);
  const [countGetted, setCountGetted] = useState(0);
  const [lastUnreadedPerson, setLastUnreadedPerson] = useState<DocumentData | null>(null);
  const [activePage, setActivePage] = useState<TAdminBlocks>('unreaded');
  const dispatch = useAppDispatch();
  const coll = collection(db, "unreadedPersons");
  const windowWidth = window.innerWidth
  

  const getMorePersons = async () => {
    const first = query(coll, orderBy("published"), startAfter(lastUnreadedPerson), limit(ITEMS_FROM_SERVER));
    const documentSnapshots = await getDocs(first);
    documentSnapshots.forEach(e => {
        dispatch(addUnreadedPerson(e.data()))        
      });
      setCountGetted(countGetted+documentSnapshots.size);
      setLastUnreadedPerson(documentSnapshots.docs[documentSnapshots.docs.length-1]);
      console.log(countUnreaded, countGetted)
  }

  useLayoutEffect(() => {
    onAuthStateChanged(auth, (user) => {

      const getFirstPersons = async () => {
        const first = query(coll, orderBy("published"), limit(ITEMS_FROM_SERVER));
        const documentSnapshots = await getDocs(first);
        dispatch(removeUnreadedPersons())
        setCountGetted(ITEMS_FROM_SERVER);
        console.log('first')
        setLastUnreadedPerson(documentSnapshots.docs[documentSnapshots.docs.length-1]);
        documentSnapshots.forEach(e => {
          const res = {...e.data(), id: e.id}
          dispatch(addUnreadedPerson(res))
        })
      }

      if (!user) {
        window.location.href = '/auth'
      } else {
        const getCount = async () => {
          const snapshot = await getCountFromServer(coll);
          setCountUnreaded(snapshot.data().count);

        }
        getCount();
      }
      getFirstPersons();
    });
  }, [])

  return (
    <>
      <Container>
        <div className="adminPage">
          <AdminNav active={activePage} setActive={setActivePage} countUnreaded={countUnreaded} />
          {activePage === 'content' && <div>qwe</div>}
          {activePage === 'unreaded' && <AdminUnreaded countGetted={countGetted} getMorePersons={getMorePersons} count={countUnreaded} />}
          {activePage === 'allRequests' && <div>
            все заявки
          </div>}
          {/* <Text size={40} font='Lora' weight={400}>Добро пожаловать, администратор!</Text> */}
        </div>
      </Container>
    </>
  );
}
