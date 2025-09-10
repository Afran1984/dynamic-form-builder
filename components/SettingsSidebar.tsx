import React, { useState, useEffect } from "react";

interface SettingsSidebarProps {
  selectedField: any;
  setSelectedField: (field: any) => void;
  formSchema: any;
  setFormSchema: (schema: any) => void;
}

const SettingsSidebar: React.FC<SettingsSidebarProps> = ({
  selectedField,
  setSelectedField,
  formSchema,
  setFormSchema,
}) => {
  const [fieldData, setFieldData] = useState(selectedField);

  useEffect(() => {
    setFieldData(selectedField);
  }, [selectedField]);

  if (!fieldData) return null;

  const handleChange = (key: string, value: any) => {
    setFieldData({ ...fieldData, [key]: value });
  };

  const handleSave = () => {
    const updatedFields = formSchema.fields.map((f: any) =>
      f.id === fieldData.id ? fieldData : f
    );
    setFormSchema({ ...formSchema, fields: updatedFields });
    setSelectedField(fieldData);
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-semibold">Field Settings</h2>

      <div className="flex flex-col space-y-2">
        <label className="font-medium">Label</label>
        <input
          type="text"
          value={fieldData.label}
          onChange={(e) => handleChange("label", e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-medium">Name</label>
        <input
          type="text"
          value={fieldData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-medium">Placeholder</label>
        <input
          type="text"
          value={fieldData.placeholder || ""}
          onChange={(e) => handleChange("placeholder", e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={fieldData.required || false}
          onChange={(e) => handleChange("required", e.target.checked)}
        />
        <span>Required</span>
      </div>

      {(fieldData.type === "select" ||
        fieldData.type === "radio" ||
        fieldData.type === "checkbox") && (
        <div className="flex flex-col space-y-2">
          <label className="font-medium">Options (key=value per line)</label>
          <textarea
            value={fieldData.options?.join("\n") || ""}
            onChange={(e) =>
              handleChange("options", e.target.value.split("\n"))
            }
            className="border p-2 rounded h-24"
          />
        </div>
      )}

      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Save
      </button>
    </div>
  );
};

export default SettingsSidebar;
