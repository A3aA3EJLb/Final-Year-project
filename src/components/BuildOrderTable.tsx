import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Sample build order data - in a real app this would come from the replay analysis
const buildOrder = [
  { time: "00:15", supply: "13/15", building: "Supply Depot", notes: "Wall-off at ramp" },
  { time: "00:40", supply: "15/15", building: "Barracks", notes: "Proxied in hidden location" },
  { time: "01:20", supply: "15/15", building: "Refinery", notes: "" },
  { time: "01:35", supply: "16/23", building: "Command Center (Expansion)", notes: "" },
  { time: "02:10", supply: "18/23", building: "Factory", notes: "" },
  { time: "02:30", supply: "22/23", building: "Supply Depot", notes: "Continue wall" },
  { time: "02:55", supply: "23/31", building: "Starport", notes: "" },
  { time: "03:15", supply: "26/31", building: "Tech Lab (Barracks)", notes: "" },
  { time: "03:45", supply: "28/31", building: "Engineering Bay", notes: "" },
];

const BuildOrderTable = () => {
  return (
    <Card className="sc2-card">
      <CardHeader>
        <CardTitle className="text-md">Build Order</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-24">Time</TableHead>
              <TableHead className="w-28">Supply</TableHead>
              <TableHead>Building/Unit</TableHead>
              <TableHead className="hidden md:table-cell">Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {buildOrder.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.time}</TableCell>
                <TableCell>{item.supply}</TableCell>
                <TableCell>{item.building}</TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground">{item.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default BuildOrderTable;