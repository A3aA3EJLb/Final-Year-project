import React from 'react';
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 border-b border-border bg-sc2-dark-blue">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 flex items-center justify-center rounded-md bg-sc2-purple bg-opacity-20 glow-effect">
          <span className="font-bold text-xl text-sc2-purple">R</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Replay<span className="text-sc2-purple">Whisperer</span>
        </h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative hidden md:flex items-center">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="text"
            placeholder="Search replays..."
            className="bg-muted pl-10 pr-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-sc2-purple transition"
          />
        </div>
        <Button variant="outline" className="border-sc2-purple text-sc2-purple hover:bg-sc2-purple hover:bg-opacity-10">
          Documentation
        </Button>
      </div>
    </header>
  );
};

export default Header;