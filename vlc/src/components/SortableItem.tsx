import { useSortable } from "@dnd-kit/sortable";
import { Card } from "@chakra-ui/react";
import { CSS } from "@dnd-kit/utilities";

export function SortableItem(props: any) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: "100px",
    height: "100px",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card>{props.id}</Card>
    </div>
  );
}
