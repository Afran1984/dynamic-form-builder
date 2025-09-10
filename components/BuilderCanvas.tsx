import React from "react";
import { useDrag, useDrop } from "react-dnd";
import FieldRenderer from "./FieldRenderer";

interface BuilderCanvasProps {
  formSchema: any;
  setFormSchema: (schema: any) => void;
  selectedField: any;
  setSelectedField: (field: any) => void;
  previewMode: boolean;
}

const BuilderCanvas: React.FC<BuilderCanvasProps> = ({
  formSchema,
  setFormSchema,
  selectedField,
  setSelectedField,
  previewMode,
}) => {
  // ফিল্ড ডিলিট
  const handleDeleteField = (id: string) => {
    const updatedFields = formSchema.fields.filter((f: any) => f.id !== id);
    setFormSchema({ ...formSchema, fields: updatedFields });
    if (selectedField?.id === id) setSelectedField(null);
  };

  // ফিল্ড ডুপ্লিকেট
  const handleDuplicateField = (field: any) => {
    const newField = { ...field, id: Math.random().toString(36).substr(2, 9) };
    const index = formSchema.fields.findIndex((f: any) => f.id === field.id);
    const updatedFields = [
      ...formSchema.fields.slice(0, index + 1),
      newField,
      ...formSchema.fields.slice(index + 1),
    ];
    setFormSchema({ ...formSchema, fields: updatedFields });
  };

  return (
    <div className="space-y-4">
      {formSchema.fields.map((field: any) => (
        <div
          key={field.id}
          className={`relative p-2 border rounded-lg ${
            selectedField?.id === field.id ? "border-blue-500" : "border-gray-300"
          }`}
          onClick={() => !previewMode && setSelectedField(field)}
        >
          {/* Hover Actions */}
          {!previewMode && (
            <div className="absolute top-2 right-2 flex space-x-1 opacity-0 hover:opacity-100 transition-opacity">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedField(field);
                }}
                className="bg-yellow-400 px-2 py-1 rounded text-xs"
              >
                Settings
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteField(field.id);
                }}
                className="bg-red-500 px-2 py-1 rounded text-xs text-white"
              >
                Delete
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDuplicateField(field);
                }}
                className="bg-green-500 px-2 py-1 rounded text-xs text-white"
              >
                Duplicate
              </button>
            </div>
          )}

          {/* Field Renderer */}
          <FieldRenderer field={field} previewMode={previewMode} />
        </div>
      ))}
    </div>
  );
};

export default BuilderCanvas;
