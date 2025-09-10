import React from "react";
import { v4 as uuidv4 } from "uuid";

interface FieldPaletteProps {
  formSchema: any;
  setFormSchema: (schema: any) => void;
}

const fieldTypes = [
  { type: "text", label: "Text" },
  { type: "email", label: "Email" },
  { type: "date", label: "Date" },
  { type: "time", label: "Time" },
  { type: "file", label: "File" },
  { type: "select", label: "Select" },
  { type: "checkbox", label: "Checkbox" },
  { type: "radio", label: "Radio" },
  { type: "acceptance", label: "Acceptance" },
];

const FieldPalette: React.FC<FieldPaletteProps> = ({ formSchema, setFormSchema }) => {
  const handleAddField = (type: string) => {
    const newField = {
      id: uuidv4(),
      type,
      label: type.charAt(0).toUpperCase() + type.slice(1),
      name: type + "_" + Math.floor(Math.random() * 1000),
      placeholder: `Enter ${type}`,
      required: false,
      columnWidth: "100%",
      options: type === "select" || type === "radio" || type === "checkbox"
        ? ["Option 1=option1", "Option 2=option2"]
        : undefined,
    };

    setFormSchema({ ...formSchema, fields: [...formSchema.fields, newField] });
  };

  return (
    <div className="p-4 space-y-3">
      <h2 className="text-lg font-semibold mb-2">Field Palette</h2>
      {fieldTypes.map((field) => (
        <button
          key={field.type}
          onClick={() => handleAddField(field.type)}
          className="w-full bg-white border rounded-lg px-3 py-2 text-left hover:bg-gray-100"
        >
          {field.label}
        </button>
      ))}
    </div>
  );
};

export default FieldPalette;
