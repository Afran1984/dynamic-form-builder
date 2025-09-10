import { useState } from "react";
import Topbar from "../components/Topbar";
import FieldPalette from "../components/FieldPalette";
import BuilderCanvas from "../components/BuilderCanvas";
import SettingsSidebar from "../components/SettingsSidebar";
import schemaData from "../utils/schema"; 

export default function Home() {
  // ফর্মের state
  const [formSchema, setFormSchema] = useState(schemaData);
  const [selectedField, setSelectedField] = useState<any>(null);
  const [previewMode, setPreviewMode] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      {/* Topbar */}
      <Topbar previewMode={previewMode} setPreviewMode={setPreviewMode} />

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar: Field Palette */}
        {!previewMode && (
          <div className="w-1/5 bg-gray-100 border-r overflow-y-auto">
            <FieldPalette formSchema={formSchema} setFormSchema={setFormSchema} />
          </div>
        )}

        {/* Middle: Builder Canvas */}
        <div className="flex-1 overflow-y-auto p-6">
          <BuilderCanvas
            formSchema={formSchema}
            setFormSchema={setFormSchema}
            selectedField={selectedField}
            setSelectedField={setSelectedField}
            previewMode={previewMode}
          />
        </div>

        {/* Right Sidebar: Settings */}
        {!previewMode && selectedField && (
          <div className="w-1/4 bg-white border-l shadow-md">
            <SettingsSidebar
              selectedField={selectedField}
              setSelectedField={setSelectedField}
              formSchema={formSchema}
              setFormSchema={setFormSchema}
            />
          </div>
        )}
      </div>
    </div>
  );
}
