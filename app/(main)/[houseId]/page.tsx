"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import useGetHouse from "@/hooks/useGetHouse";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import useSwornMembers from "@/hooks/useSwornMembers";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const HousePage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { house } = useGetHouse(pathname);
  const { swornMembers, isError, isLoading } = useSwornMembers(
    house?.swornMembers,
  );
  console.log(swornMembers);
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error loading house</p>}
      {house && (
        <>
          <Header title={house.name} description={house.region} />
          <Button variant="outline" onClick={() => router.back()}>
            Back
          </Button>
          <div className="grid grid-cols-3 gap-5 mt-3">
            {swornMembers &&
              swornMembers.map((member) => (
                <Card
                  key={house.url}
                  className=" w-full shadow shadow-gray-500/50 flex flex-col justify-evenly"
                >
                  <CardHeader>
                    <CardTitle className="flex justify-center align-middle">
                      {member.name}
                    </CardTitle>

                    {member.died !== "" ? (
                      <CardDescription className="flex justify-center align-middle">
                        Died: {member.died}
                      </CardDescription>
                    ) : (
                      <CardDescription className="flex justify-center align-middle">
                        Alive
                      </CardDescription>
                    )}
                  </CardHeader>
                </Card>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HousePage;
