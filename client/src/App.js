import React,{useEffect,useState} from 'react';
import { getUsers, uploadImgPath, getAllImages } from './apiHandler/user';
import Demofirebase from './components/Upload'

const imgStyle = {
  height: '100px',
  width: '100px'
}

const App = () => {

  const [users,setUsers] = useState([])
  const [imgpath,setImgPath] = useState([])

  const loadData = () => {
    getUsers().then(data=>{
      if(data){
        console.log(data.data)
        setUsers(data.data)
      }
    })
  }

  const loadImgs = () => {
    getAllImages().then(data=>{
      console.log(data)
      setImgPath(data.data)
    })
  }

  useEffect(()=>{
    loadData()
    loadImgs()
  },[])

  return (
    <div>
      <h1>Users123</h1>
      {
        users.map((user,index)=>(
          <h3 key={index}>
            {user.name}
          </h3>
        ))
      }
      <Demofirebase />

      {
        imgpath.map((img,index)=>{
          {/* console.log(img.path) */}
         return <img key={index} src={img.path} style={imgStyle} alt=""/>
          
        })
      }
    </div>
  )
}

export default App