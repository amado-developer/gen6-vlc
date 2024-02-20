import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import data from "../../data.json";

const hours = Array.from(
  { length: 24 },
  (_, index) => index.toString().padStart(2, "0") + ":00"
);

const Timeline = () => {
  const [programs, setPrograms] = useState(data);

  function handleDragEnd(event: { active: any; over: any }) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setPrograms((programing) => {
        const activeIndex = programing.findIndex(
          (program) => program.id.toString() === active.id.toString()
        );
        const overIndex = programing.findIndex(
          (program) => program.id.toString() === over.id.toString()
        );
        console.log(programing, active.id, over.id, activeIndex, overIndex);
        return arrayMove(programing, activeIndex, overIndex);
      });
    }
  }
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "10px", marginTop: "20px" }}>
        {hours.map((hour: string) => (
          <div key={uuidv4()}>{hour}</div>
        ))}
      </div>
      <div style={{ marginRight: "10px", marginTop: "20px" }}>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={programs}
            strategy={verticalListSortingStrategy}
          >
            {programs.map((program) => (
              <SortableItem
                key={uuidv4()}
                id={program.id.toString()}
                props={program}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default Timeline;
