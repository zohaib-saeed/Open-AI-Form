import React, { useState } from "react";
import { Textarea, Button } from "@mantine/core";
import { useInsertModeStyles } from "./InsertMode.styles";
import { useModeContext } from "../../Context/FormContext";

const Insert = () => {
  const { classes } = useInsertModeStyles();
  const { insertMode, insertInput, setInsertInput } = useModeContext();
  const [submit, setSubmit] = useState(false);
  const clickHandler = () => {
    setSubmit(true);
    console.log(JSON.stringify(insertMode));
  };
  return (
    <div className={classes.container}>
      {/* Input Field + Output Box */}
      <div className={classes.dataBoxWrapper}>
        {/* => Input  */}
        <Textarea
          placeholder="Insert text here"
          value={insertInput}
          onChange={(event) => setInsertInput(event.currentTarget.value)}
          classNames={{
            root: classes.textAreaRoot,
            wrapper: classes.textAreaWrapper,
            input: classes.textAreaInput,
          }}
        />

        {/* =>Output Box */}
        {submit ? (
          <Textarea
            value={JSON.stringify(insertMode)}
            classNames={{
              root: classes.textAreaRoot,
              wrapper: classes.textAreaWrapper,
              input: classes.textAreaInput,
            }}
          />
        ) : (
          <Textarea
            disabled
            classNames={{
              root: classes.textAreaRoot,
              wrapper: classes.textAreaWrapper,
              input: classes.textAreaInput,
            }}
          />
        )}
      </div>

      {/* =>Submit Btn */}
      <div className={classes.btnWrapper}>
        {/* <button className={classes.submitBtn} onClick={clickHandler}>
          Submit
        </button> */}
        <Button onClick={clickHandler} classNames={{ root: classes.btnRoot }}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Insert;
