"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useHouses from "@/hooks/useHouses";
import { House } from "@/types/houses";
import { Badge } from "@/components/ui/badge";

const PlayGroundPage = () => {
  const { houses, isLoading, isError } = useHouses();
  const [showHouses, setShowHouses] = useState(false);
  console.log(houses);
  const handleButtonClick = () => {
    setShowHouses(true);
  };

  return (
    <div className="p-6 gap-4 m-5 flex flex-col">
      <h1> this is a play ground page</h1>
      <div className="gap-5 gap">
        <Badge variant="alive">Alive</Badge>
        <Badge variant="destructive">Dead</Badge>
        <Badge variant="default">?????</Badge>
      </div>

      <Button variant="default" onClick={handleButtonClick}>
        Get Houses
      </Button>
      {showHouses && (
        <div className="grid grid-cols-3 gap-5 mt-3">
          {isLoading && <p>Loading...</p>}
          {isError && <p>Error loading houses</p>}
          {houses &&
            houses.map((house: House) => (
              <Card
                key={house.url}
                className=" w-full shadow shadow-gray-500/50"
              >
                <CardHeader>
                  <CardTitle>{house.name}</CardTitle>
                  <CardDescription>{house.region}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h2 className="text-xl my-3 font-medium">Titles:</h2>
                  <p className="text-muted-foreground">
                    {house.titles.join(", ")}
                  </p>
                  <h2 className="text-xl my-3 font-medium">Words:</h2>
                  {house.words === "" ? (
                    "This [houseId] has no words"
                  ) : (
                    <p className="text-muted-foreground">{house.words}</p>
                  )}
                </CardContent>
                <CardFooter className="bg-red-50 flex flex-col justify-end align-bottom">
                  <Button className="w-full">More</Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      )}
    </div>
  );
};

export default PlayGroundPage;
