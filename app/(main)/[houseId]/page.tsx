"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import useHouses from "@/hooks/useHouses";
import useGetHouse from "@/hooks/useGetHouse";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import useSwornMembers from "@/hooks/useSwornMembers";
import { Badge } from "@/components/ui/badge";

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
                <div
                  key={member.url}
                  className="bg-gray-100 p-5 rounded-md border-slate-200 border flex flex-row justify-between"
                >
                  <h1>{member.name}</h1>
                  <Badge variant={member.died !== "" ? "default" : "alive"}>
                    {member.died !== "" ? "dead" : "alive"}
                  </Badge>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HousePage;
