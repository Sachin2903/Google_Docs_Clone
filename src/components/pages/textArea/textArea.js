import { Fragment,useRef,useEffect } from "react";
import styles from "./textArea.module.css";
import { useDispatch } from "react-redux";
import {textAreaSliceRef} from "../../../slice/textAreaSlice"

export function TextArea() {
    const textRef=useRef("");
    const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(textAreaSliceRef.actions.addRef("asd"))
  },[])

  
   

    return (
        <Fragment>
            <div className={styles.textAreaDiv}>

                <div contentEditable={true} ref={textRef} className={styles.textArea}>

                </div>

           
           

            </div>

        </Fragment>
    )
}