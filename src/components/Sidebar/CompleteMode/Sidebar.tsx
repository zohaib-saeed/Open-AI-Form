import React, { useState } from "react";
import { Select } from "@mantine/core";
import { NumberInput } from "@mantine/core";
import { Slider } from "@mantine/core";
import { TextInput } from "@mantine/core";
import { RxChevronDown as IconChevronDown } from "react-icons/rx";
import { FaCheckSquare as CheckBoxIcon } from "react-icons/fa";

import { useCompleteSidebarStyles } from "./Sidebar.styles";

const Sidebar = () => {
  const { classes } = useCompleteSidebarStyles();
  const [value, setValue] = useState<string | null>("react");
  const [tempValue, setTempValue] = useState(0.7);
  const [maxLength, setMaxLength] = useState(4000);
  return (
    <div className={classes.container}>
      {/* => Select Box */}
      <Select
        label="Model"
        value={value}
        onChange={setValue}
        rightSection={<IconChevronDown />}
        classNames={{
          root: classes.selectRoot,
          label: classes.selectLabel,
          input: classes.selectInputWrapper,
          item: classes.selectDropdownItem,
        }}
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
      />
      {/* => Temprature */}
      <div className={classes.tempratureWrapper}>
        <div className={classes.tempratureTopWrapper}>
          <p className={classes.tempratureLabel}>Temperature</p>
          <NumberInput
            value={tempValue}
            min={0}
            step={0.01}
            defaultValue={tempValue}
            size="xs"
            hideControls={true}
            classNames={{
              input: classes.tempInput,
            }}
          />
        </div>
        <Slider
          color="gray"
          size="xs"
          min={0}
          max={1}
          step={0.01}
          defaultValue={tempValue}
          showLabelOnHover={false}
          value={tempValue}
          onChange={setTempValue}
          classNames={{
            root: classes.tempSliderRoot,
          }}
        />
      </div>
      {/* => Maximum Length */}
      <div className={classes.maxLengthWrapper}>
        <div className={classes.maxLengthTopWrapper}>
          <p className={classes.maxLengthLabel}>Maximum Length</p>
          <NumberInput
            value={maxLength}
            min={0}
            step={0.01}
            defaultValue={maxLength}
            size="xs"
            hideControls={true}
            classNames={{
              input: classes.maxLengthInput,
            }}
          />
        </div>
        <Slider
          color="gray"
          size="xs"
          min={0}
          max={1}
          step={0.01}
          defaultValue={maxLength}
          showLabelOnHover={false}
          value={tempValue}
          onChange={setMaxLength}
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
          <NumberInput
            value={maxLength}
            min={0}
            step={0.01}
            defaultValue={maxLength}
            size="xs"
            hideControls={true}
            classNames={{
              input: classes.maxLengthInput,
            }}
          />
        </div>
        <Slider
          color="gray"
          size="xs"
          min={0}
          max={1}
          step={0.01}
          defaultValue={maxLength}
          showLabelOnHover={false}
          value={tempValue}
          onChange={setMaxLength}
          classNames={{
            root: classes.maxLengthSliderRoot,
          }}
        />
      </div>
      {/* =>Frequency penalty*/}
      <div className={classes.maxLengthWrapper}>
        <div className={classes.maxLengthTopWrapper}>
          <p className={classes.maxLengthLabel}>Frequency Penalty</p>
          <NumberInput
            value={maxLength}
            min={0}
            step={0.01}
            defaultValue={maxLength}
            size="xs"
            hideControls={true}
            classNames={{
              input: classes.maxLengthInput,
            }}
          />
        </div>
        <Slider
          color="gray"
          size="xs"
          min={0}
          max={1}
          step={0.01}
          defaultValue={maxLength}
          showLabelOnHover={false}
          value={tempValue}
          onChange={setMaxLength}
          classNames={{
            root: classes.maxLengthSliderRoot,
          }}
        />
      </div>
      {/* =>Presence penalty*/}
      <div className={classes.maxLengthWrapper}>
        <div className={classes.maxLengthTopWrapper}>
          <p className={classes.maxLengthLabel}>Presence penalty</p>
          <NumberInput
            value={maxLength}
            min={0}
            step={0.01}
            defaultValue={maxLength}
            size="xs"
            hideControls={true}
            classNames={{
              input: classes.maxLengthInput,
            }}
          />
        </div>
        <Slider
          color="gray"
          size="xs"
          min={0}
          max={1}
          step={0.01}
          defaultValue={maxLength}
          showLabelOnHover={false}
          value={tempValue}
          onChange={setMaxLength}
          classNames={{
            root: classes.maxLengthSliderRoot,
          }}
        />
      </div>
      {/* =>Best of*/}
      <div className={classes.maxLengthWrapper}>
        <div className={classes.maxLengthTopWrapper}>
          <p className={classes.maxLengthLabel}>Best of</p>
          <NumberInput
            value={maxLength}
            min={0}
            step={0.01}
            defaultValue={maxLength}
            size="xs"
            hideControls={true}
            classNames={{
              input: classes.maxLengthInput,
            }}
          />
        </div>
        <Slider
          color="gray"
          size="xs"
          min={0}
          max={1}
          step={0.01}
          defaultValue={maxLength}
          showLabelOnHover={false}
          value={tempValue}
          onChange={setMaxLength}
          classNames={{
            root: classes.maxLengthSliderRoot,
          }}
        />
      </div>
      {/* inject start text */}
      <TextInput
        label="Inject Start Text"
        placeholder=""
        icon={<CheckBoxIcon />}
        classNames={{
          input: classes.withIconInput,
          label: classes.withIconInputLabel,
        }}
      />
      {/* inject restart text */}
      <TextInput
        label="Inject Restart Text"
        placeholder=""
        icon={<CheckBoxIcon />}
        classNames={{
          input: classes.withIconInput,
          label: classes.withIconInputLabel,
        }}
      />
      {/* => Select Box */}
      <Select
        label="Show probabilities"
        value={value}
        onChange={setValue}
        rightSection={<IconChevronDown />}
        classNames={{
          root: classes.selectRoot,
          label: classes.selectLabel,
          input: classes.selectInputWrapper,
          item: classes.selectDropdownItem,
        }}
        data={[
          { value: "react", label: "React" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
        ]}
      />
    </div>
  );
};

export default Sidebar;
