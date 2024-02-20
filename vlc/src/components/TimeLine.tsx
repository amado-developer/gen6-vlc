import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import { useState } from "react";
import Data from "../data.json";

console.log(Data);
const hours = Array.from(
  { length: 24 },
  (_, index) => index.toString().padStart(2, "0") + ":00"
);

const Timeline: React.FC = () => {
  const [languages, setLanguages] = useState([
    "Content 1",
    "Content 2",
    "Content 3",
  ]);

  function handleDragEnd(event: { active: any; over: any }) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setLanguages((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  }
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "10px", marginTop: "20px" }}>
        {hours.map((hour, index) => (
          <div key={`hour-${index}`}>{hour}</div>
        ))}
      </div>
      <div style={{ marginRight: "10px", marginTop: "20px" }}>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={languages}
            strategy={verticalListSortingStrategy}
          >
            {languages.map((language) => (
              <SortableItem key={language} id={language} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default Timeline;
