import React from "react";

interface TopbarProps {
  previewMode: boolean;
  setPreviewMode: (value: boolean) => void;
}

const Topbar: React.FC<TopbarProps> = ({ previewMode, setPreviewMode }) => {
  return (
    <div className="w-full bg-gray-800 text-white flex justify-between items-center px-6 py-3 shadow-md">
      <h1 className="text-lg font-bold">Dynamic Form Builder</h1>
      <button
        onClick={() => setPreviewMode(!previewMode)}
        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-medium"
      >
        {previewMode ? "Back to Edit" : "Preview Form"}
      </button>
    </div>
  );
};

export default Topbar;
