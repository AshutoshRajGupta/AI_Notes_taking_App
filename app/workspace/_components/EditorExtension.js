import TaskList from "@tiptap/extension-task-list";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  CheckSquareIcon,
  CodeIcon,
  Highlighter,
  Italic,
  LinkIcon,
  ListIcon,
  Strikethrough,
  UnderlineIcon,
} from "lucide-react";

import React from "react";

const EditorExtension = ({ editor }) => {
  const highlightColors = [
    { color: "#ffc078", label: "Y" },
    { color: "#ff6b6b", label: "R" },
  ];
  return (
    editor && (
      <div className="p-5 ">
        <div className="control-group">
          <div className="button-group flex gap-3">
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={
                editor.isActive("heading", { level: 1 }) ? "is-active" : ""
              }
            >
              H1
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={
                editor.isActive("heading", { level: 2 }) ? "is-active" : ""
              }
            >
              H2
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
              className={
                editor.isActive("heading", { level: 3 }) ? "is-active" : ""
              }
            >
              H3
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor?.isActive("bold") ? "text-blue-500" : ""}
            >
              <Bold />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor?.isActive("italic") ? "text-blue-500" : ""}
            >
              <Italic />
            </button>
            {highlightColors.map(({ color, label }) => (
              <button
                key={color}
                onClick={() =>
                  editor.chain().focus().toggleHighlight({ color }).run()
                }
                className={
                  editor.isActive("highlight", { color }) ? "is-active" : ""
                }
                style={{
                  backgroundColor: color,
                  color: "#fff",
                  margin: "0 5px",
                }}
              >
                {label}
              </button>
            ))}

            <button
              onClick={() => editor.chain().focus().toggleCode().run()}
              className={editor.isActive("code") ? "is-active" : ""}
            >
              <CodeIcon />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={editor.isActive("strike") ? "text-blue-500" : ""}
            >
              <Strikethrough />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={editor.isActive("underline") ? "is-active" : ""}
            >
              <UnderlineIcon />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={editor.isActive("bulletList") ? "is-active" : ""}
            >
              <ListIcon />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleTaskList().run()}
              className={editor.isActive("taskList") ? "is-active" : ""}
            >
              <CheckSquareIcon />
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign("left").run()}
              className={
                editor.isActive({ textAlign: "left" }) ? "is-active" : ""
              }
            >
              <AlignLeft />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().setTextAlign("center").run()
              }
              className={
                editor.isActive({ textAlign: "center" }) ? "is-active" : ""
              }
            >
              <AlignCenter />
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign("right").run()}
              className={
                editor.isActive({ textAlign: "right" }) ? "is-active" : ""
              }
            >
              <AlignRight />
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default EditorExtension;
