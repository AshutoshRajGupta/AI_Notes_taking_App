import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import EditorExtension from "./EditorExtension";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Heading from "@tiptap/extension-heading";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import TextAlign from "@tiptap/extension-text-align";

const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: "Start Taking your notes here....",
      }),
      Highlight.configure({
        multicolor: true, // Enable multicolor highlighting
      }),
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Text,
      Heading,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],

    editorProps: {
      attributes: {
        class: "focus:outline-none h-screen p-5",
      },
    },
  });
  return (
    <div>
      <EditorExtension editor={editor} />
      <div>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TextEditor;
