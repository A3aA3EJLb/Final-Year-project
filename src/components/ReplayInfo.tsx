import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Sample replay data - in a real app this would come from the replay analysis
const replayInfo = {
  map: "2000 Atmospheres",
  duration: "14:25",
  date: "2025-05-07",
  gameVersion: "5.0.10",
  gameType: "1v1",
  players: [
    {
      name: "MarineKing",
      race: "Terran",
      apm: 245,
      result: "Victory"
    },
    {
      name: "DarkTemplar",
      race: "Protoss",
      apm: 196,
      result: "Defeat"
    }
  ]
};

const ReplayInfo = () => {
  return (
    <Card className="sc2-card">
      <CardHeader>
        <CardTitle className="text-md flex items-center justify-between">
          <span>Replay Information</span>
          <Badge variant="outline" className="text-xs">
            {replayInfo.gameType}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Map</p>
              <p className="font-medium">{replayInfo.map}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Duration</p>
              <p className="font-medium">{replayInfo.duration}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Date</p>
              <p className="font-medium">{replayInfo.date}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Version</p>
              <p className="font-medium">{replayInfo.gameVersion}</p>
            </div>
          </div>

          <hr className="border-border" />
          
          <div className="space-y-4">
            <p className="text-sm font-medium">Players</p>
            
            {replayInfo.players.map((player, index) => (
              <div key={index} className="flex items-center justify-between bg-muted bg-opacity-30 p-3 rounded-md">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-8 rounded-sm ${
                    player.race === "Terran" ? "bg-sc2-terran" : 
                    player.race === "Protoss" ? "bg-sc2-protoss" : 
                    "bg-sc2-zerg"
                  }`} />
                  <div>
                    <p className="font-medium">{player.name}</p>
                    <p className="text-xs text-muted-foreground">{player.race} • {player.apm} APM</p>
                  </div>
                </div>
                <Badge variant={player.result === "Victory" ? "default" : "outline"}>
                  {player.result}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReplayInfo;