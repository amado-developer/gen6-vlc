import { DndContext, closestCenter } from "@dnd-kit/core";
import { Text } from "@chakra-ui/react";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { assignStartAndEndTime } from "../../utils";

const hours = Array.from(
  { length: 24 },
  (_, index) => index.toString().padStart(2, "0") + ":00"
);

type TimelineProps = {
  data: Content[];
};

const Timeline = ({ data }: TimelineProps) => {
  const [programs, setPrograms] = useState(data);
  const [parsedPrograms, setParsedPrograms] = useState<Content[]>(data);

  useEffect(() => {
    setPrograms(data);
  }, [data]);

  useEffect(() => {
    if (programs.length > 0) {
      const newPrograms = assignStartAndEndTime(programs);
      setParsedPrograms(newPrograms);
    }
  }, [programs]);

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

        return arrayMove(programing, activeIndex, overIndex);
      });
    }
  }
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "5%", marginTop: "20px" }}>
        {hours.map((hour: string) => (
          <div key={uuidv4()} style={{ color: "white", marginBottom: "160px" }}>
            <Text>{hour}</Text>
          </div>
        ))}
      </div>
      <div style={{ marginRight: "10px", marginTop: "20px", width: "100%" }}>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={Object.values(programs).map((program) =>
              program.id.toString()
            )}
            strategy={verticalListSortingStrategy}
          >
            {parsedPrograms.map((program) => (
              <SortableItem
                key={uuidv4()}
                id={program.id.toString()}
                props={{ ...program, id: program.id.toString() }}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default Timeline;
