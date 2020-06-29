import React,{useState, useEffect} from 'react'
import {storage} from '../firebase/firebase'
import { uploadImgPath } from '../apiHandler/user'
import { readAndCompressImage } from 'browser-image-resizer';

const config = {
  quality: 0.5,
  maxWidth: 800,
  maxHeight: 600,
  autoRotate: true,
  debug: true
};

const allInputs = {imgUrl: ''}
const Demofirebase = () => {
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState({imgUrl: ''})

    const uploadPath = (path) => {
      console.log(path)
      uploadImgPath({imgPath:path}).then(data=>console.log(data))
    }

    // useEffect(()=>{
    //   console.log(imageAsUrl)
    //   // uploadPath(imageAsUrl)
    // },[imageAsUrl])

    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        readAndCompressImage(image,config)
          .then((resizedImage)=>setImageAsFile([image,resizedImage]))
     
        // let resizedImage = await BrowserImageResizer.readAndCompressImage(image, config);
    }


    const handleFireBaseUpload = e => {
        e.preventDefault()
      console.log('start of upload')
      // async magic goes here...
      if(imageAsFile[0] === '') {
        console.error(`not an image, the image file is a ${typeof(imageAsFile[0])}`)
      }
      const uploadTask = storage.ref(`/images/${imageAsFile[0].name}`).put(imageAsFile[1])
      //initiates the firebase side uploading 
      uploadTask.on('state_changed', 
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot)
      }, (err) => {
        //catches the errors
        console.log(err)
      }, async() => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage.ref('images').child(imageAsFile[0].name).getDownloadURL()
         .then(async fireBaseUrl => {
           setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
           console.log(typeof fireBaseUrl)
           console.log(fireBaseUrl.length)
          //  uploadImgPath({imgPath:fireBaseUrl}).then(data=>console.log(data))
           await uploadPath(fireBaseUrl)
         })
      })
      }
    return(
        <div>
            <form onSubmit={handleFireBaseUpload}>
            <input 
            type="file"
            onChange={handleImageAsFile}
            />
            <button>upload to firebase</button>
            </form>
        </div>
    )
}

export default Demofirebase