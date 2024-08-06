"use client";
import useHouses from "@/hooks/useHouses";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import React from "react";

const HomePage = () => {
  const router = useRouter();
  const { houses, isLoading, isError } = useHouses();

  const handleButtonClick = (uri: string) => {
    const houseId = uri.split("/").pop();
    console.log(houseId);
    router.push(`/${houseId}`);
  };

  return (
    <>
      <Header title="Houses" description="List of Houses" />

      <div className="grid grid-cols-3 gap-5 mt-3">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error loading houses</p>}
        {houses &&
          houses.map((house) => (
            <Card
              key={house.url}
              className=" w-full shadow shadow-gray-500/50 flex flex-col justify-evenly"
            >
              <CardHeader>
                <CardTitle>{house.name}</CardTitle>
                <CardDescription>{house.region}</CardDescription>
              </CardHeader>

              <CardFooter className="flex flex-col justify-end align-bottom">
                <Button
                  onClick={() => handleButtonClick(house.url)}
                  className="w-full"
                  disabled={house.swornMembers.length === 0}
                >
                  {house.swornMembers.length > 0
                    ? `show sworn members`
                    : "This house has no sworn members"}
                </Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </>
  );
};

export default HomePage;
