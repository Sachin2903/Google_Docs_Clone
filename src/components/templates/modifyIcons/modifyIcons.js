import { Fragment, useRef, useState } from "react";
import styles from "./modifyicons.module.css";
import { BiCommentAdd, BiUndo, BiRedo, BiPaintRoll, BiBold, BiItalic } from "react-icons/bi";
import { RiPencilFill } from "react-icons/ri";
import { AiOutlinePrinter, AiOutlineStrikethrough, AiOutlineHighlight } from "react-icons/ai";
import { MdOutlineImage, MdOutlineSpellcheck } from "react-icons/md";
import { IoMdLink } from "react-icons/io";
import { ImUnderline } from "react-icons/im";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { CiTextAlignLeft, CiTextAlignCenter, CiTextAlignRight, CiTextAlignJustify } from "react-icons/ci";



export function ModifyIcons() {
    const referOfEditBox = useRef(); //reference of text area or div
    const [zoomEle, setZoomEle] = useState("100%"); //to upadte the first option in zoom feature
    const [fontSize, setFontSize] = useState("text");  //to upadte the first option in fontsize feature
    const inputImageTrigger = useRef(null); //reference of image input


    
    // zoom function
    const zoom = ["150%", "100%", "75%", "50%", "25%"];
    function handleZoom(e) {
        setZoomEle(e.target.value);
        if (e.target.value === "100%") {
            referOfEditBox.current.style.transform = "scale(1)";
        } else if (e.target.value === "150%") {
            referOfEditBox.current.style.transform = "scale(1.5,1)";
        } else if (e.target.value === "50%") {
            referOfEditBox.current.style.transform = "scale(0.50,1)";
        } else if (e.target.value === "25%") {
            referOfEditBox.current.style.transform = "scale(0.25,1)";
        } else if (e.target.value === "75%") {
            referOfEditBox.current.style.transform = "scale(0.75,1)";
        }
    }
    //font Style
    const ListFontFam = ["Lucida Sans", "fantasy", "sans-serif", "monospace", "cursive", "Times New Roman", "system-ui", "ui-serif", "Impact", "ui-monospace", "serif", "ui-rounded", "fangsong", "Georgia", "ui-sans-serif"];
    function handleFontStyles(e) {
        document.execCommand("fontName",false,e.target.value);
    }
    //font size data
    const fontSizes = [
        {
            fontSize: 8,
            action: "1",
        },
        {
            fontSize: 9,
            action: "2",
        },
        {
            fontSize: 10,
            action: "3",
        },
        {
            fontSize: 11,
            action: "4",
        },
        {
            fontSize: 12,
            action: "5",
        },
        {
            fontSize: 14,
            action: "6",
        },
        {
            fontSize: 18,
            action: "7",
        },
    ];

    //font size
    function handleFontSize(e) {
        setFontSize(e.target.value);
        document.execCommand("fontSize", "", e.target.value);
    }

    // text heilighter
    function handleHighlightColor(e) {
        document.execCommand("backColor", false, e.target.value);
    }




    //   for image adding
    const handleImageUpload = (event) => {
        if (event.target.files[0]) {
            let imgUrl = URL.createObjectURL(event.target.files[0]);
            let img = document.createElement("img");
            
            img.style.maxWidth = "35%";
            img.style.maxHeight = "35%";

            img.src = imgUrl;
            document.execCommand("insertHTML", false, img.outerHTML);
        }
    };


    //   undu function 
    function undofun() {
        document.execCommand("undo");
    }

    //  redu function
    function boldfun() {
        document.execCommand("bold")
    }

    //print function
    function printerMyDoc() {
        let printContents = referOfEditBox.current.innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }



    return (
        <Fragment>
            <div className={styles.iconsDivmain}>
                <div className={styles.iconsDiv}>
                    <div className={styles.percentDiv}>
                        {/* undo button */}
                        <button onClick={undofun} className={styles.editIcons} ><BiUndo /></button>

                        {/* redu button */}
                        <button className={styles.editIcons} onClick={() => document.execCommand("redo")}><BiRedo /></button>

                        {/* Print Button */}
                        <button className={styles.editIcons} onClick={printerMyDoc} ><AiOutlinePrinter /></button>

                        {/* dummy button */}
                        <button className={styles.editIcons}><MdOutlineSpellcheck /></button>
                        <button className={styles.editIcons}><BiPaintRoll /></button>


                    </div>
                    {/* zoom feature */}
                    <div className={styles.percentDiv}>
                        <select className={styles.percentDivInput} onChange={handleZoom}>
                            <option>{zoomEle}</option>
                            {zoom.map((x) => <option key={x}>{x}</option>)}
                        </select>
                    </div>
                    {/* font Style */}
                    <div className={styles.percentDivNormal}>
                        <select className={styles.fontFamily} onChange={handleFontStyles}>
                            <option>sans-serif</option>
                            {ListFontFam.map((x) => (
                                <option key={x}>{x}</option>
                            ))}
                        </select>
                    </div>

                    {/* font size */}

                    <div className={styles.percentDivNormal}>
                        <select
                            className={styles.fontSize}

                            onChange={handleFontSize}
                        >
                            <option className={styles.fontSize}>
                                {fontSize}
                            </option>
                            {fontSizes.map((x) => (
                                <option
                                    className={styles.fontSize}
                                    key={x.action}
                                >
                                    {x.action}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* bold underline italic  */}
                    <div className={styles.percentDivNormal4}>
                        <button className={styles.editIcons} onClick={boldfun}><BiBold /></button>
                        <button className={styles.editIcons} onClick={() => document.execCommand("italic")}  ><BiItalic /></button>
                        <button className={styles.editIcons} onClick={() => document.execCommand("underline")}><ImUnderline /></button>
                        <button className={styles.editIcons} onClick={() => document.execCommand("strikethrough")}><AiOutlineStrikethrough /></button>
                    </div>

                    {/* image and color */}
                    <div className={styles.percentDivNormal5}>
                        <IoMdLink className={styles.editIcons} />
                        <BiCommentAdd className={styles.editIcons} />


                        <button>
                            <label>
                                <AiOutlineHighlight />
                            </label>
                            <input
                                type="color"
                                onChange={handleHighlightColor}
                            />
                        </button>
                       
                        <input ref={inputImageTrigger} type="file" hidden onChange={handleImageUpload} />
                        <button onClick={() => { inputImageTrigger.current.click() }} className={styles.editIcons}><MdOutlineImage/></button>
                    </div>


                    {/* text align type */}
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


            {/* textBox or area */}
            <div className={styles.textAreaDiv}>
                <div contentEditable={true} spellCheck="false" ref={referOfEditBox} className={styles.textArea}>
                </div>
            </div>


        </Fragment>
    )
}