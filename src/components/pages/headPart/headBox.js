import styles from "./headBox.module.css";
import logo from "../../../image/Google_Docs_Logo.png"
import { Fragment } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsCloudCheck } from "react-icons/bs";
import {MdOutlineMessage,MdOutlineVideoCall,MdOutlineDriveFileMove} from "react-icons/md";
import { RxCounterClockwiseClock } from "react-icons/rx";
import {BiLockAlt} from "react-icons/bi";
import user from "../../../image/user.png"
export function HeadBox() {
    return (
        <Fragment>

            <div className={styles.topBox}>

                <img className={styles.headLogo} alt="loading" src={logo} />
                <div className={styles.topRightBoxes}>
                    <div className={styles.rightInside}>
                        <input className={styles.rightTopInput} placeholder="Untitled document" />
                        <AiOutlineStar className={styles.logoIcons}/>
                        <MdOutlineDriveFileMove className={styles.logoIcons}/>
                        <BsCloudCheck className={styles.logoIcons}/>
                    </div>
                    <div className={styles.rightInside}>
                        <p className={styles.rightDowntext}>File</p>
                        <p className={styles.rightDowntext}>Edit</p>
                        <p className={styles.rightDowntext}>View</p>
                        <p className={styles.rightDowntext}>Insert</p>
                        <p className={styles.rightDowntext}>Format</p>
                        <p className={styles.rightDowntext}>Tools</p>
                        <p className={styles.rightDowntext}>Extensions</p>
                        <p className={styles.rightDowntext}>Help</p>
                    </div>
                    <div className={styles.aaaa}>
                        <img className={styles.user} alt="loading" src={user}/>
                    <button className={styles.logosidebtn}><BiLockAlt /> Share</button>
                        <MdOutlineVideoCall className={styles.logoIcons}/>
                         <MdOutlineMessage className={styles.logoIcons}/>
                        <RxCounterClockwiseClock className={styles.logoIcons} />
                       
                    </div>



                </div>

            </div>

        </Fragment>
    )
}