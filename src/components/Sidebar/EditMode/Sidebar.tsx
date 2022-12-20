import React, { useState, useEffect } from "react";
import { Select } from "@mantine/core";
import { NumberInput } from "@mantine/core";
import { Slider } from "@mantine/core";
import { TextInput } from "@mantine/core";
import { RxChevronDown as IconChevronDown } from "react-icons/rx";

import { useEditSidebarStyles } from "./Sidebar.styles";
import { useModeContext } from "../../../Context/FormContext";

const Sidebar = () => {
  const { classes } = useEditSidebarStyles();
  const {
    mode,
    setMode,
    editInput,
    setEditInput,
    editTemp,
    setEditTemp,
    editModel,
    setEditModel,
    editStopSeq,
    setEditStopSeq,
    editTopP,
    setEditTopP,
    editMode,
    setEditMode,
    editInstructions,
    setEditInstructions,
  } = useModeContext();

  useEffect(() => {
    setEditMode({
      mode: mode,
      input: editInput,
      instructions: editInstructions,
      model: editModel,
      tempreture: editTemp,
      stopSequence: editStopSeq,
      topP: editTopP,
    });
  }, [
    mode,
    editInput,
    editModel,
    editTemp,
    editStopSeq,
    editTopP,
    editInstructions,
    setEditMode,
  ]);

  return (
    <div className={classes.container}>
      {/* => Select Box */}
      <Select
        label="Model"
        value={editModel}
        onChange={setEditModel}
        rightSection={<IconChevronDown />}
        classNames={{
          root: classes.selectRoot,
          label: classes.selectLabel,
          input: classes.selectInputWrapper,
          item: classes.selectDropdownItem,
        }}
        data={[
          { value: "text-davinci-003", label: "text-davinci-003" },
          { value: "text-curie-001", label: "text-curie-001" },
          { value: "text-babbade-001", label: "text-babbade-001" },
          { value: "text-adda-001", label: "text-adda-001" },
        ]}
      />
      {/* => Temprature */}
      <div className={classes.tempratureWrapper}>
        <div className={classes.tempratureTopWrapper}>
          <p className={classes.tempratureLabel}>Temperature</p>
          {/* <NumberInput
            value={tempValue}
            min={0}
            step={0.01}
            defaultValue={tempValue}
            size="xs"
            hideControls={true}
            classNames={{
              input: classes.tempInput,
            }}
          /> */}
        </div>
        <Slider
          color="gray"
          size="xs"
          min={0}
          max={1}
          step={0.01}
          defaultValue={editTemp}
          showLabelOnHover={false}
          value={editTemp}
          onChange={setEditTemp}
          classNames={{
            root: classes.tempSliderRoot,
          }}
        />
      </div>
      {/* => Stop sequences */}
      <div className={classes.enterSequenceWrapper}>
        <TextInput
          placeholder="Enter a sequence"
          label="Stop Sequences"
          value={editStopSeq}
          onChange={(event) => setEditStopSeq(event.currentTarget.value)}
          classNames={{
            input: classes.stopSeqInput,
            label: classes.stopSeqLabel,
          }}
        />
      </div>
      {/* => Top P*/}
      <div className={classes.maxLengthWrapper}>
        <div className={classes.maxLengthTopWrapper}>
          <p className={classes.maxLengthLabel}>Top P </p>
          {/* <NumberInput
            value={maxLength}
            min={0}
            step={0.01}
            defaultValue={maxLength}
            size="xs"
            hideControls={true}
            classNames={{
              input: classes.maxLengthInput,
            }}
          /> */}
        </div>
        <Slider
          color="gray"
          size="xs"
          min={0}
          max={1}
          step={0.01}
          defaultValue={editTopP}
          showLabelOnHover={false}
          value={editTopP}
          onChange={setEditTopP}
          classNames={{
            root: classes.maxLengthSliderRoot,
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
