import React, { useState } from "react";
import { DialogTitle } from "@mui/material";
import {Dialog} from "@mui/material";
import { height } from "@mui/system";
import EducationForm from "../HomePAge/Education";
 function DialogueBox(props){
    const [openBox,handleDisplay]=useState(false);

    const handleClose=()=>{
        handleDisplay(false);
    }
    const openDialgoueBox = ()=>{
        handleDisplay(true);
    }
    return(
        <><p>leorm</p><button onClick={openDialgoueBox}>Open</button>
        <Dialog onClose = {handleClose} open = {openBox}>
            <DialogTitle> Update Education </DialogTitle>
            <h3>
               <EducationForm/>
            </h3>
         </Dialog>
         </>
    );
 }
 export default DialogueBox;
