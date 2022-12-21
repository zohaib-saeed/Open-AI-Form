import React, { useEffect } from "react";
import { Select } from "@mantine/core";
import { Slider } from "@mantine/core";
import { TextInput } from "@mantine/core";
import { RxChevronDown as IconChevronDown } from "react-icons/rx";

import { useInsertSidebarStyles } from "./Sidebar.styles";
import { useModeContext } from "../../../Context/FormContext";

const Sidebar = () => {
  const { classes } = useInsertSidebarStyles();
  //  using the context

  const {
    mode,
    insertInput,
    insertTemp,
    setInsertTemp,
    insertModel,
    setInsertModel,
    insertMaxLength,
    setInsertMaxLength,
    insertStopSeq,
    setInsertStopSeq,
    insertTopP,
    setInsertTopP,
    insertFreqPenalty,
    setInsertFreqPenalty,
    insertPresencePenalty,
    setInsertPresencePenalty,
    insertBestOf,
    setInsertBestOf,
    setInsertMode,
  } = useModeContext();

  useEffect(() => {
    setInsertMode({
      mode,
      input: insertInput,
      model: insertModel,
      tempreture: insertTemp,
      maxLength: insertMaxLength,
      stopSequence: insertStopSeq,
      topP: insertTopP,
      frequencyPenalty: insertFreqPenalty,
      presencePenalty: insertPresencePenalty,
      bestOf: insertBestOf,
    });
  }, [
    mode,
    insertInput,
    insertModel,
    insertTemp,
    insertMaxLength,
    insertStopSeq,
    insertTopP,
    insertFreqPenalty,
    insertPresencePenalty,
    insertBestOf,
    setInsertMode,
  ]);

  return (
    <div className={classes.container}>
      {/* => Select Box */}
      <Select
        label="Model"
        value={insertModel}
        onChange={setInsertModel}
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
        </div>
        <Slider
          color="gray"
          size="xs"
          min={0}
          max={1}
          step={0.01}
          defaultValue={insertTemp}
          value={insertTemp}
          onChange={setInsertTemp}
          classNames={{
            root: classes.tempSliderRoot,
          }}
        />
      </div>
      {/* => Maximum Length */}
      <div className={classes.maxLengthWrapper}>
        <div className={classes.maxLengthTopWrapper}>
          <p className={classes.maxLengthLabel}>Maximum Length</p>
        </div>
        <Slider
          color="gray"
          size="xs"
          min={0}
          max={256}
          step={1}
          defaultValue={insertMaxLength}
          showLabelOnHover={false}
          value={insertMaxLength}
          onChange={setInsertMaxLength}
          classNames={{
            root: classes.maxLengthSliderRoot,
          }}
        />
      </div>
      {/* => Stop sequences */}
      <div className={classes.enterSequenceWrapper}>
        <TextInput
          placeholder="Enter a sequence"
          label="Stop Sequences"
          value={insertStopSeq}
          onChange={(event) => setInsertStopSeq(event.currentTarget.value)}
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
        </div>
        <Slider
          color="gray"
          size="xs"
          min={0}
          max={1}
          step={0.01}
          defaultValue={insertTopP}
          showLabelOnHover={false}
          value={insertTopP}
          onChange={setInsertTopP}
          classNames={{
            root: classes.maxLengthSliderRoot,
          }}
        />
      </div>
      {/* =>Frequency penalty*/}
      <div className={classes.maxLengthWrapper}>
        <div className={classes.maxLengthTopWrapper}>
          <p className={classes.maxLengthLabel}>Frequency Penalty</p>
        </div>
        <Slider
          color="gray"
          size="xs"
          min={0}
          max={2}
          step={0.01}
          defaultValue={insertFreqPenalty}
          showLabelOnHover={false}
          value={insertFreqPenalty}
          onChange={setInsertFreqPenalty}
          classNames={{
            root: classes.maxLengthSliderRoot,
          }}
        />
      </div>
      {/* =>Presence penalty*/}
      <div className={classes.maxLengthWrapper}>
        <div className={classes.maxLengthTopWrapper}>
          <p className={classes.maxLengthLabel}>Presence penalty</p>
        </div>
        <Slider
          color="gray"
          size="xs"
          min={0}
          max={2}
          step={0.01}
          defaultValue={insertPresencePenalty}
          showLabelOnHover={false}
          value={insertPresencePenalty}
          onChange={setInsertPresencePenalty}
          classNames={{
            root: classes.maxLengthSliderRoot,
          }}
        />
      </div>
      {/* =>Best of*/}
      <div className={classes.maxLengthWrapper}>
        <div className={classes.maxLengthTopWrapper}>
          <p className={classes.maxLengthLabel}>Best of</p>
        </div>
        <Slider
          color="gray"
          size="xs"
          min={0}
          max={20}
          step={0.01}
          defaultValue={insertBestOf}
          showLabelOnHover={false}
          value={insertBestOf}
          onChange={setInsertBestOf}
          classNames={{
            root: classes.maxLengthSliderRoot,
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
