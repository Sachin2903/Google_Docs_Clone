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
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (event) => {
            const imageSrc = event.target.result;
            const imageElement = document.createElement('img');
            imageElement.src = imageSrc;
            imageElement.style.width = '150px'; // Set the desired width
            imageElement.style.height = '200px'; // Maintain aspect ratio
    
            const range = window.getSelection().getRangeAt(0);
            range.insertNode(imageElement);
        };
    
        reader.readAsDataURL(file);
    };



    function undofun() {
        document.execCommand("undo");

    }
    function boldfun() {
        document.execCommand("bold")
        console.log("hasdxas");
    }


    return (
        <Fragment>
            <div className={styles.iconsDivmain}>
                <div className={styles.iconsDiv}>
                    <div className={styles.percentDiv}>
                        <button onClick={undofun} className={styles.editIcons} ><BiUndo /></button>
                        <button className={styles.editIcons} onClick={() => document.execCommand("redo")}><BiRedo /></button>
                        <button className={styles.editIcons} ><AiOutlinePrinter /></button>
                        <button className={styles.editIcons}><MdOutlineSpellcheck /></button>
                        <button className={styles.editIcons}><BiPaintRoll /></button>
                    </div>

                    <div className={styles.percentDiv}><input className={styles.percentDivInput} /><TiArrowSortedDown /></div>
                    <div className={styles.percentDivNormal}> Normal Text <TiArrowSortedDown /></div>
                    <div className={styles.percentDivNormal}> Arial <TiArrowSortedDown /></div>
                    <div className={styles.percentDivNormal}><HiMinus /><input className={styles.plusMinusInput} /> <HiPlusSm /></div>
                    <div className={styles.percentDivNormal4}><button onClick={boldfun}><BiBold className={styles.editIcons} /></button><BiItalic onClick={() => { document.execCommand("italic") }} className={styles.editIcons} /><ImUnderline className={styles.editIcons} /><MdOutlineFormatColorText className={styles.editIcons} /><LuHighlighter className={styles.editIcons} /></div>
                    
                    <div className={styles.percentDivNormal5}>
                        <IoMdLink className={styles.editIcons} />
                        <BiCommentAdd className={styles.editIcons} />
                        <input type="file" onChange={handleImageUpload} />
                        <MdOutlineImage className={styles.editIcons} />
                    </div>

                    <div className={styles.percentDivNormal6}>
                        <button className={styles.editIcons} onClick={() => document.execCommand('justifyLeft', false, null)}><CiTextAlignLeft /></button>
                        <button className={styles.editIcons} onClick={() => document.execCommand('justifyCenter', false, null)}><CiTextAlignCenter /></button>
                        <button className={styles.editIcons} onClick={() => document.execCommand('justifyRight', false, null)}><CiTextAlignRight /></button>
                        <button className={styles.editIcons} onClick={() => document.execCommand('justifyFull', false, null)}><CiTextAlignJustify /></button>
                    </div>

                    <div className={styles.percentDiv}>
                        <RiPencilFill className={styles.editIcons} />
                        <MdOutlineKeyboardArrowUp className={styles.editIcons} />

                    </div>



                </div>
            </div>





        </Fragment>
    )
}