import { Fragment,useRef,useEffect, useState } from "react";
import styles from "./textArea.module.css";
import { useDispatch } from "react-redux";
import {textAreaSliceRef} from "../../../slice/textAreaSlice"

export function TextArea() {
    const [a ,setA] =useState("https://www.google.com/url?sa=i&url=https%3A%2F%2Fhtml.com%2Fattributes%2Fimg-src%2F&psig=AOvVaw0BcKSIaCS0Y6zrMh_lSjLA&ust=1685973673031000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCND4_MHjqf8CFQAAAAAdAAAAABAE")

    const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(textAreaSliceRef.actions.addRef('ASDAD'))
  },[])

  
   

    return (
        <Fragment>
            <div className={styles.textAreaDiv}>

                <div contentEditable={true} value={a} className={styles.textArea}>

                </div>

           
           

            </div>

        </Fragment>
    )
}