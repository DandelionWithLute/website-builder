"use client";
import { EditorBtns } from "@/lib/constants";
import React from "react";

export type DeviceTypes = "Desktop" | "Mobile" | "Tablet";

export type EditorElement = {
  id: string;
  styles: React.CSSProperties;
  name: string;
  type: EditorBtns;
  content:
    | EditorElement[]
    | { href?: string; innerText?: string; src?: string };
};

export type Editor = {
  liveMode: boolean;
  elements: EditorElement[];
  selectedElement: EditorElement;
  device: DeviceTypes;
  previewMode: boolean;
  funnelPageId: string;
};

export type HistoryState = {
  history: Editor[];
  currentIndex: number;
};

export type EditorState = {
  editor: Editor;
  history: HistoryState;
};

const initialEditorState: EditorState['editor'] = {
    elements:[
        {
            content:[],
            id:"__body",
            name:"Body",
            styles:{},
            type:"__body"
        }
    ],
    selectedElement:{
        id:"",
        content:[],
        name:"",
        styles:{},
        type:null
    },
    device:"Desktop",
    previewMode:false,
    liveMode:false,
    funnelPageId:""
}

const EditorProvider = (props: EditorBtns) => {
  return <div>EditorProvider</div>;
};

export default EditorProvider;
