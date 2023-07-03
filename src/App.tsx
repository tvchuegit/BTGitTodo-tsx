import { useState, useEffect } from 'react'
import './App.css'
import Form from './component/Form'
import List from './component/List'

interface arrayProps {
  id: number
  name: string
}[]

function App() {
  const [count, setCount] = useState<arrayProps | any>([]) // ([]) de xuat du lieu dang Array.
  function onShow(name: string) {
    // console.log(name);
    const addArray: any = [...count, {name: name, id: Math.random()}]
    onSave(addArray) // Toan tu 3 cham. Co ban chi can: [...count, name]. Phan con lai anh Tu chi them de co ID xoa du lieu.
  }
  // Cg: Luu data khi refresh page:
  function onSave(count: arrayProps) {
    setCount(count);
    const jsonName = JSON.stringify(count)
    localStorage.setItem('access_name', jsonName);
  }

  function onDelete(id: number) {
    // console.log(id);
    // Delete list, lien quan voi button ben <li /> component List:
    const removeList = count.filter((item: arrayProps) => item.id !== id);
    setCount(removeList);
  }
  // function onEdit(id: number, name: string) {
  //   const updateItem = onData?.map((item: arrayProps) => { item.id === id ? name : item; });
    
    // console.log('updateItem', updateItem);
  }
  function onChangeEdit(id: number, name: string) {
  }
  // Cg: Luu data khi refresh page. Xem lai phan localStorage, Hooks:
  useEffect(() => {
    const tokenlist = JSON.parse(localStorage.getItem('access_name'));
    // Tu lan thu 2 load page ko gap loi. Ban dau data rong nen se loi, nen phai dung if de check data:
    if (tokenlist) {
      setCount(tokenlist)
    }
  }, [])

  return (
    <>
      <Form onSubmit={onShow} />
      <List onData={count}
        handleEdit={onEdit}
        handleDelete={onDelete}
        onChangeEdit={onChangeEdit}
      />
    </>
  )
}
export default App