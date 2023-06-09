import { Fragment } from "react";
import styles from "./textArea.module.css";

export function TextArea() {

    return (
        <Fragment>
            <div className={styles.textAreaDiv}>

                <div contentEditable={true} className={styles.textArea}>

                </div>

           
           

            </div>

        </Fragment>
    )
}