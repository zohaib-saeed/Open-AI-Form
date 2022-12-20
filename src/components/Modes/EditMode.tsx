import React, { useState } from "react";
import { Textarea, Button } from "@mantine/core";
import { useEditModeStyles } from "./EditMode.styles";
import { useModeContext } from "../../Context/FormContext";

const Edit = () => {
  const { classes } = useEditModeStyles();
  const {
    editMode,
    editInput,
    editInstructions,
    setEditInstructions,
    setEditInput,
  } = useModeContext();
  const [submit, setSubmit] = useState(false);
  const clickHandler = () => {
    setSubmit(true);
    console.log(JSON.stringify(editMode));
  };
  return (
    <div className={classes.container}>
      {/* Input Field + Output Box */}
      <div className={classes.dataBoxWrapper}>
        {/* => Input desktop */}
        <div className={classes.leftInputBox}>
          <Textarea
            placeholder="Insert text here"
            value={editInput}
            onChange={(event) => setEditInput(event.currentTarget.value)}
            classNames={{
              root: classes.textAreaRoot,
              wrapper: classes.textAreaWrapper,
              input: classes.textAreaInput,
            }}
          />
          <div className={classes.grammerBox}>
            <Textarea
              label="Instruction"
              placeholder="Fix the grammer"
              value={editInstructions}
              onChange={(event) =>
                setEditInstructions(event.currentTarget.value)
              }
              classNames={{
                root: classes.grammerTextAreaRoot,
                // wrapper: classes.textAreaWrapper,
                input: classes.textAreaInput,
              }}
            />
          </div>
        </div>
        {/* input mobile */}
        <div className={classes.inputMobile}>
          <Textarea
            placeholder="Insert text here"
            value={editInput}
            onChange={(event) => setEditInput(event.currentTarget.value)}
            classNames={{
              root: classes.textAreaRoot,
              wrapper: classes.textAreaWrapper,
              input: classes.textAreaInput,
            }}
          />
          <Textarea
            label="Instruction"
            placeholder="Fix the grammer"
            value={editInstructions}
            onChange={(event) => setEditInstructions(event.currentTarget.value)}
            classNames={{
              root: classes.grammerTextAreaRoot,
              // wrapper: classes.textAreaWrapper,
              input: classes.textAreaInput,
            }}
          />
        </div>

        {/* =>Output Box */}
        {submit ? (
          <Textarea
            value={JSON.stringify(editMode)}
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
        <Button onClick={clickHandler} classNames={{ root: classes.btnRoot }}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Edit;
