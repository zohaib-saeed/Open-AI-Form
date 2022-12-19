import React from "react";
import { useCompleteModeStyles } from "./Complete.styles";

const Complete = () => {
  const { classes } = useCompleteModeStyles();

  return (
    <div className={classes.container}>
      {/* Input Field + Output Box */}
      <div className={classes.dataBoxWrapper}>
        {/* => Input  */}
        <textarea
          placeholder="Insert your message..."
          className={classes.inputBox}
        />
        {/* =>Output Box */}
        <div className={classes.outputBoxSolid}></div>
      </div>
      {/* =>Submit Btn */}
      <div className={classes.btnWrapper}>
        <button className={classes.submitBtn}>Submit</button>
      </div>
    </div>
  );
};

export default Complete;
