import React, { useEffect } from "react";
import { Select } from "@mantine/core";
import { Slider } from "@mantine/core";
import { TextInput } from "@mantine/core";
import { RxChevronDown as IconChevronDown } from "react-icons/rx";
import { FaCheckSquare as CheckBoxIcon } from "react-icons/fa";

import { useCompleteSidebarStyles } from "./Sidebar.styles";
import { useModeContext } from "../../../Context/FormContext";

const Sidebar = () => {

  const { classes } = useCompleteSidebarStyles();
  //  using the context 
  const {
    mode,
    compInput,
    compTemp,
    setCompTemp,
    setCompMode,
    compModel,
    setCompModel,
    compMaxLength,
    setCompMaxLength,
    compStopSeq,
    setCompStopSeq,
    compTopP,
    setCompTopP,
    compFreqPenalty,
    setCompFreqPenalty,
    compPresencePenalty,
    setCompPresencePenalty,
    compBestOf,
    setCompBestOf,
    startText,
    setStartText,
    restartText,
    setRestartText,
    probabilities,
    setProbabilities,
  } = useModeContext();

  useEffect(() => {
    setCompMode({
      mode: mode,
      input: compInput,
      model: compModel,
      tempreture: compTemp,
      maxLength: compMaxLength,
      stopSequence: compStopSeq,
      topP: compTopP,
      frequencyPenalty: compFreqPenalty,
      presencePenalty: compPresencePenalty,
      bestOf: compBestOf,
      insertStartText: startText,
      insertRestartText: restartText,
      probabilities: probabilities,
    });
  }, [
    mode,
    compInput,
    compModel,
    compTemp,
    compMaxLength,
    compStopSeq,
    compTopP,
    compFreqPenalty,
    compPresencePenalty,
    compBestOf,
    startText,
    restartText,
    probabilities,
    setCompMode,
  ]);

  return (
    <div className={classes.container}>
      {/* => Select Box */}
      <Select
        label="Model"
        value={compModel}
        onChange={setCompModel}
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
          // showLabelOnHover={false}
          value={compTemp}
          onChange={setCompTemp}
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
          defaultValue={compMaxLength}
          // showLabelOnHover={false}
          value={compMaxLength}
          onChange={setCompMaxLength}
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
          value={compStopSeq}
          onChange={(event) => setCompStopSeq(event.currentTarget.value)}
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
          // showLabelOnHover={false}
          value={compTopP}
          defaultValue={compTopP}
          onChange={setCompTopP}
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
          defaultValue={compFreqPenalty}
          showLabelOnHover={false}
          value={compFreqPenalty}
          onChange={setCompFreqPenalty}
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
          defaultValue={compPresencePenalty}
          // showLabelOnHover={false}
          value={compPresencePenalty}
          onChange={setCompPresencePenalty}
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
          defaultValue={compBestOf}
          // showLabelOnHover={false}
          value={compBestOf}
          onChange={setCompBestOf}
          classNames={{
            root: classes.maxLengthSliderRoot,
          }}
        />
      </div>
      {/* inject start text */}
      <TextInput
        label="Inject Start Text"
        placeholder=""
        value={startText}
        onChange={(event) => setStartText(event.currentTarget.value)}
        icon={<CheckBoxIcon />}
        classNames={{
          root: classes.withIconInputRoot,
          input: classes.withIconInput,
          label: classes.withIconInputLabel,
        }}
      />
      {/* inject restart text */}
      <TextInput
        label="Inject Restart Text"
        placeholder=""
        value={restartText}
        onChange={(event) => setRestartText(event.currentTarget.value)}
        icon={<CheckBoxIcon />}
        classNames={{
          root: classes.withIconInputRoot,
          input: classes.withIconInput,
          label: classes.withIconInputLabel,
        }}
      />
      {/* => Select Box for probabilities*/}
      <Select
        label="Show probabilities"
        value={probabilities}
        onChange={setProbabilities}
        rightSection={<IconChevronDown />}
        classNames={{
          root: classes.selectRoot,
          label: classes.selectLabel,
          input: classes.selectInputWrapper,
          item: classes.selectDropdownItem,
        }}
        data={[
          { value: "off", label: "Off" },
          { value: "most-likely", label: "Most Likely" },
          { value: "least-likely", label: "Least Likely" },
          { value: "full-spectrum", label: "Full Spectrum" },
        ]}
      />
    </div>
  );
};

export default Sidebar;
