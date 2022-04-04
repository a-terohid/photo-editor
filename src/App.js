import React , { useState } from 'react';

//ICON
import icon from "./icon.png"

//STYLE
import styles from "./app.module.scss"

//FILE-SAVER
import { saveAs } from 'file-saver' 

//TUAST
import { notify } from "./tuast";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

//STATES
  const [ img , setimg ] = useState({ profileImg: icon })   
  const [ data , setData ] = useState({
    blur: 0,
    britness: 100,
    saturate: 100,
    contrast: 100, 
    grayscale: 0,
  })
  
  const defultData = {
    blur: 0,
    britness: 100,
    saturate: 100,
    contrast: 100, 
    grayscale: 0,
  }

//RESET DATA
  const resetHandler = () => {
      setData({
        blur: 0,
        britness: 100,
        saturate: 100,
        contrast: 100, 
        grayscale: 0,
      })
  }
  
//DESTRUCTURING
    const { blur , britness , saturate , contrast , grayscale } = data
    const { profileImg } = img

//UPLOAD IMG
   const imageHandler = (e) => {
        resetHandler()
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                setimg({profileImg: reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
  }

//DOWNLOAD IMG 
  const downloadHandler = () =>{
      if ( profileImg !== icon && data !== defultData  ){
        notify( true , "download sucsses!" );
      } else {
          notify( false , "plese upload your image or make some changes" )
      }
  }


  return (
    <div className={ styles.App } >
        <div className={styles.Editor} >
        <div className={ styles.range_bar } >
            <div className={ styles.ranges } >
                <h3 className={ styles.range_name } >britness:</h3>
                <input
                    className={ styles.range_input }
                    type="range"
                    min="0" 
                    max="500" 
                    value={ britness } 
                    onChange={ event => setData({ ...data ,  britness : event.target.value }) } />
                <p className={ styles.range_show } >{britness / 100}  </p >
            </div>
            <div className={ styles.ranges } >
                <h3 className={ styles.range_name } >saturate:</h3>
                <input
                    className={ styles.range_input }
                    type="range"
                    min="0" 
                    max="500" 
                    value={ saturate } 
                    onChange={ event => setData({ ...data ,  saturate : event.target.value }) } />
                <p className={ styles.range_show } >{saturate / 100}</p >
            </div>
            <div className={ styles.ranges } >
                <h3 className={ styles.range_name } >contrast:</h3>
                <input 
                    className={ styles.range_input }
                    type="range" 
                    min="0" 
                    max="500" 
                    value={ contrast } 
                    onChange={ event => setData({ ...data , contrast : event.target.value }) } />
                <p className={ styles.range_show } >{contrast / 100}</p >
            </div>
            <div className={ styles.ranges } >
                <h3 className={ styles.range_name } >grayscale:</h3>
                <input
                    className={ styles.range_bar }
                    type="range"
                    min="0" 
                    max="100" 
                    value={ grayscale } 
                    onChange={ event => setData({ ...data ,  grayscale : event.target.value }) } />
                <p className={ styles.range_show } >{grayscale / 100}</p >
            </div>
            <div className={ styles.ranges } >
                <h3 className={ styles.range_name } >blur:</h3>
                <input
                    className={ styles.range_input }
                    type="range"
                    min="0" 
                    max="10" 
                    step="0.01"
                    value={ blur } 
                    onChange={ event => setData({ ...data ,  blur : event.target.value }) } />
                <p className={ styles.range_show } >{blur} px</p >
            </div>
            <label for="myfile" className={ styles.button } >Select a file</label>
            <input type="file" id="myfile" name="myfile" onChange={ imageHandler } className={ styles.inputfile } />
            <button onClick={ resetHandler } className={ styles.button } >reset</button>
            <button onClick={ downloadHandler } className={ styles.button } >download</button>
      </div>
      <div className={ styles.img_bar } >
      <img 
            className={ styles.img }
          src={ profileImg } 
          alt="d" 
          style={{filter: `
              saturate(${saturate}%) 
              blur(${blur}px) 
              brightness(${britness}%) 
              contrast(${contrast}%) 
              grayscale(${grayscale}%)`  
             }}
           />
      </div>
        </div> 
        <ToastContainer />
    </div> 
  );
};

export default App;