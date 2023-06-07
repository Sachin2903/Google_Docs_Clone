import { Fragment } from "react";
import styles from "./modifyicons.module.css";
import { BiCommentAdd, BiUndo, BiRedo, BiPaintRoll, BiBold, BiItalic } from "react-icons/bi";
import { RiPencilFill } from "react-icons/ri"

import { AiOutlinePrinter } from "react-icons/ai";
import { MdOutlineImage, MdOutlineSpellcheck } from "react-icons/md";
import { IoMdLink } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import { LuHighlighter } from "react-icons/lu"
import { HiMinus, HiPlusSm } from "react-icons/hi";
import { ImUnderline } from "react-icons/im";
import { MdOutlineFormatColorText, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { CiTextAlignLeft, CiTextAlignCenter, CiTextAlignRight, CiTextAlignJustify } from "react-icons/ci";



export function ModifyIcons() {
 function undofun(){
    document.execCommand("undo");

 }
 function boldfun(){
    document.execCommand("bold")
    console.log("hasdxas");
 }


    return (
        <Fragment>
            <div className={styles.iconsDivmain}>
            <div className={styles.iconsDiv}>
                <div className={styles.percentDiv}>

                    <BiUndo onClick={undofun} className={styles.editIcons} />
                    <BiRedo onClick={()=> document.execCommand("redo")} className={styles.editIcons} />
                    <AiOutlinePrinter className={styles.editIcons} />
                    <MdOutlineSpellcheck className={styles.editIcons} />
                    <BiPaintRoll className={styles.editIcons} />
                </div>

                <div className={styles.percentDiv}><input className={styles.percentDivInput}  /><TiArrowSortedDown /></div>
                <div className={styles.percentDivNormal}> Normal Text <TiArrowSortedDown /></div>
                <div className={styles.percentDivNormal}> Arial <TiArrowSortedDown /></div>
                <div className={styles.percentDivNormal}><HiMinus /><input className={styles.plusMinusInput} /> <HiPlusSm /></div>
                <div className={styles.percentDivNormal4}><button onClick={boldfun}><BiBold  className={styles.editIcons} /></button><BiItalic onClick={()=>{document.execCommand("italic")}} className={styles.editIcons} /><ImUnderline className={styles.editIcons} /><MdOutlineFormatColorText className={styles.editIcons} /><LuHighlighter className={styles.editIcons} /></div>
                <div className={styles.percentDivNormal5}><IoMdLink className={styles.editIcons} /><BiCommentAdd className={styles.editIcons} /><MdOutlineImage className={styles.editIcons} /></div>
                <div className={styles.percentDivNormal6}><CiTextAlignLeft className={styles.editIcons} /><CiTextAlignCenter className={styles.editIcons} /><CiTextAlignRight className={styles.editIcons} /><CiTextAlignJustify className={styles.editIcons} /></div>
                <div className={styles.percentDiv}>
                    <RiPencilFill className={styles.editIcons} />
                    <MdOutlineKeyboardArrowUp className={styles.editIcons} />

                </div>



            </div>
            </div>

          



        </Fragment>
    )
}