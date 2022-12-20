import React, { createContext, ReactNode, useContext, useState } from "react";
import { ContextType } from "../types/contextTypes";

export const ModeContext = createContext<ContextType | null>(null);

type Props = {
  children: ReactNode;
};

export function ModeContextProvider({ children }: Props) {
  // Mode state
  const [mode, setMode] = useState<string | null>("complete");
  //   Complete mode Data states
  const [compInput, setCompInput] = useState("");
  const [compModel, setCompModel] = useState<string | null>("text-davinci-003");
  const [compTemp, setCompTemp] = useState(1);
  const [compMaxLength, setCompMaxLength] = useState(256);
  const [compStopSeq, setCompStopSeq] = useState("");
  const [compTopP, setCompTopP] = useState(1);
  const [compFreqPenalty, setCompFreqPenalty] = useState(2);
  const [compPresencePenalty, setCompPresencePenalty] = useState(2);
  const [compBestOf, setCompBestOf] = useState(20);
  const [startText, setStartText] = useState("");
  const [restartText, setRestartText] = useState("");
  const [probabilities, setProbabilities] = useState<string | null>("off");

  const [compMode, setCompMode] = useState({
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

  //Insert Mode states
  const [insertInput, setInsertInput] = useState("");
  const [insertModel, setInsertModel] = useState<string | null>(
    "text-davinci-003"
  );
  const [insertTemp, setInsertTemp] = useState(1);
  const [insertMaxLength, setInsertMaxLength] = useState(256);
  const [insertStopSeq, setInsertStopSeq] = useState("");
  const [insertTopP, setInsertTopP] = useState(1);
  const [insertFreqPenalty, setInsertFreqPenalty] = useState(2);
  const [insertPresencePenalty, setInsertPresencePenalty] = useState(2);
  const [insertBestOf, setInsertBestOf] = useState(20);

  const [insertMode, setInsertMode] = useState({
    mode: mode,
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

  //edit mode states
  const [editInput, setEditInput] = useState("");
  const [editInstructions, setEditInstructions] = useState("");
  const [editModel, setEditModel] = useState<string | null>("text-davinci-003");
  const [editTemp, setEditTemp] = useState(1);
  const [editStopSeq, setEditStopSeq] = useState("");
  const [editTopP, setEditTopP] = useState(1);

  const [editMode, setEditMode] = useState({
    mode: mode,
    input: insertInput,
    instructions: editInstructions,
    model: insertModel,
    tempreture: insertTemp,
    stopSequence: insertStopSeq,
    topP: insertTopP,
  });

  //   Values to pass

  const compValues = {
    compInput,
    setCompInput,
    compTemp,
    setCompTemp,
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
  };

  const insertValues = {
    insertInput,
    setInsertInput,
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
  };

  const editValues = {
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
    editInstructions,
    setEditInstructions,
  };

  const valuesToPass = {
    mode,
    setMode,
    compMode,
    setCompMode,
    insertMode,
    setInsertMode,
    editMode,
    setEditMode,
    ...compValues,
    ...insertValues,
    ...editValues,
  };

  return (
    <ModeContext.Provider value={valuesToPass}>{children}</ModeContext.Provider>
  );
}

export const useModeContext = () => useContext(ModeContext) as ContextType;
