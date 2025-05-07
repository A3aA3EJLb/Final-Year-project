import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const UploadSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files?.length) {
      const droppedFile = files[0];
      if (droppedFile.name.endsWith('.SC2Replay')) {
        setFile(droppedFile);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.length) {
      setFile(files[0]);
    }
  };

  return (
    <Card className="sc2-card">
      <CardContent className="p-6">
        <div 
          className={`border-2 border-dashed rounded-lg p-10 text-center transition-all ${
            isDragging 
              ? 'border-sc2-purple bg-sc2-purple bg-opacity-5' 
              : 'border-border hover:border-sc2-purple hover:bg-sc2-purple hover:bg-opacity-5'
          }`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-sc2-purple"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-medium text-lg">Upload your SC2 Replay</h3>
              <p className="text-sm text-muted-foreground">
                Drag and drop your .SC2Replay file here, or click to browse
              </p>
            </div>
            
            <label className="cursor-pointer">
              <input 
                type="file" 
                accept=".SC2Replay" 
                className="hidden" 
                onChange={handleFileChange} 
              />
              <Button 
                variant="outline" 
                className="border-sc2-purple text-sc2-purple hover:bg-sc2-purple hover:bg-opacity-10"
              >
                Browse file
              </Button>
            </label>
            
            {file && (
              <div className="text-sm bg-muted p-2 rounded w-full max-w-xs truncate">
                Selected: {file.name}
              </div>
            )}

            <p className="text-xs text-muted-foreground">
              Supported file: .SC2Replay
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UploadSection;