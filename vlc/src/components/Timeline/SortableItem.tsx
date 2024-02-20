import TimelineCard from "./TimelineCard";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type SortableItemProps = {
  id: string;
  props: Content;
};

export const SortableItem = (props: SortableItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    marginLeft: "10px",
    marginBottom: "8px",
  };
  const { props: timelineCardProps } = props;
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <TimelineCard {...timelineCardProps} />
    </div>
  );
};
