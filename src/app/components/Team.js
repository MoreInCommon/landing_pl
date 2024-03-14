"use client";
import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";

const Item = ({ expanded, onClick, person }) => {
  return (
    <motion.div
      layout
      initial="initial"
      whileHover="hover"
      onClick={() => onClick(expanded ? null : person.name)}
      className="flex justify-center mb-4 p-4 max-w-[400px] border-t-4 border-brand-blue"
      style={expanded ? { gridColumn: "1 / 2", gridRow: "1 / 3" } : { gridColumn: "2 / 3" }}
    >
      <div className="flex gap-4 flex-col">
        <Image src={person.image} alt={person.name} width={365} height={365} />
        <div className="mt-4">
          <p className="text-sm">{person.position}</p>
          <h3 className="text-xl font-bold">{person.name}</h3>
          <p className="text-black flex align-center justify-end cursor-pointer">Więcej</p>
          <AnimatePresence>{expanded && <motion.div>{person.text}</motion.div>}</AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const Team = ({ team }) => {
  const [expanded, setExpanded] = useState(null);
  const peopleToRender = team.map((p) => {
    if (p.name === expanded) {
      return { ...p, order: -1 };
    }
    return p;
  });

  return (
    <div className="text-black mt-20">
      <LayoutGroup>
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateRows: "auto",
            gridTemplateColumns: "50% 1fr",
            gridAutoFlow: "dense",
            gap: 10,
          }}
        >
          {peopleToRender.map((person) => (
            <Item
              key={person.name}
              expanded={expanded === person.name}
              onClick={setExpanded}
              person={person}
            />
          ))}
        </motion.div>
      </LayoutGroup>
    </div>
  );
};

export default Team;
