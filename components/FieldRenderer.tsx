import React from "react";

interface FieldRendererProps {
  field: any;
  previewMode: boolean;
}

const FieldRenderer: React.FC<FieldRendererProps> = ({ field, previewMode }) => {
  const commonProps = {
    name: field.name,
    placeholder: field.placeholder || "",
    required: field.required || false,
    className: "w-full p-2 border rounded",
    disabled: previewMode,
  };

  switch (field.type) {
    case "text":
    case "email":
    case "date":
    case "time":
      return <input type={field.type} {...commonProps} />;

    case "file":
      return <input type="file" {...commonProps} />;

    case "select":
      return (
        <select {...commonProps}>
          <option value="">{field.placeholder || "Select"}</option>
          {field.options?.map((opt: string) => {
            const [label, value] = opt.split("=");
            return (
              <option key={value} value={value}>
                {label}
              </option>
            );
          })}
        </select>
      );

    case "checkbox":
      return (
        <div className="space-y-1">
          {field.options?.map((opt: string) => {
            const [label, value] = opt.split("=");
            return (
              <label key={value} className="flex items-center space-x-2">
                <input type="checkbox" name={field.name} value={value} disabled={previewMode} />
                <span>{label}</span>
              </label>
            );
          })}
        </div>
      );

    case "radio":
      return (
        <div className="space-y-1">
          {field.options?.map((opt: string) => {
            const [label, value] = opt.split("=");
            return (
              <label key={value} className="flex items-center space-x-2">
                <input type="radio" name={field.name} value={value} disabled={previewMode} />
                <span>{label}</span>
              </label>
            );
          })}
        </div>
      );

    case "acceptance":
      return (
        <div className="flex items-center space-x-2">
          <input type="checkbox" name={field.name} required={field.required} disabled={previewMode} />
          <div dangerouslySetInnerHTML={{ __html: field.content }} />
        </div>
      );

    default:
      return <input type="text" {...commonProps} />;
  }
};

export default FieldRenderer;
